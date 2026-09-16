# Runbook — Self-hosted n8n on the DayByDay VPS

This runbook stands up **n8n + Caddy + Cloudflare Tunnel** on a fresh Ubuntu/Debian VPS so that `https://n8n.daybydayconsulting.com` resolves to n8n with valid TLS.

The end state:
- n8n listening on `127.0.0.1:5678` (NOT public)
- Caddy terminating TLS, serving n8n on `127.0.0.1:443`
- Cloudflare Tunnel (`cloudflared`) connecting `n8n.daybydayconsulting.com` to localhost
- No public ports open on the VPS except SSH (22)

This is what fixes the **Error 525 SSL handshake failed** that Cloudflare is showing today.

---

## Pre-flight: confirm the starting state

```bash
# 1. You're on a clean Ubuntu 22.04+ or Debian 12+ VPS, with sudo.
whoami    # should NOT be root (we'll use sudo)
cat /etc/os-release | head -3
sudo -n true && echo "sudo OK" || echo "sudo NOT passwordless"

# 2. Confirm n8n is NOT running yet.
ss -tlnp 2>/dev/null | grep -E ':(5678|443|80)\s' || echo "no services on 5678/443/80"
```

If anything on 80/443 is already running, stop it before continuing (we want Caddy to own 443).

---

## Step 1 — System packages

```bash
sudo apt update
sudo apt install -y curl wget gnupg ca-certificates apt-transport-https debian-keyring
```

---

## Step 2 — Node.js 20 (n8n requires Node 18+)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version   # should print v20.x.x
npm --version
```

---

## Step 3 — n8n (global install, NOT Docker)

We use SQLite (default), so no DB server needed.

```bash
sudo npm install -g n8n --unsafe-perm
n8n --version    # should print a version
```

Create a dedicated system user and dirs:

```bash
sudo useradd -r -m -d /var/lib/n8n -s /bin/bash n8n
sudo mkdir -p /etc/n8n /var/log/n8n
sudo chown -R n8n:n8n /var/lib/n8n /var/log/n8n
sudo chmod 750 /var/lib/n8n
```

---

## Step 4 — n8n environment

Write `/etc/n8n/n8n.env`:

```bash
sudo tee /etc/n8n/n8n.env > /dev/null <<'EOF'
# Core
N8N_HOST=n8n.daybydayconsulting.com
N8N_PORT=5678
N8N_PROTOCOL=https
N8N_SECURE_COOKIE=true
WEBHOOK_URL=https://n8n.daybydayconsulting.com/

# Bind to localhost only (Caddy + cloudflared handle external traffic)
N8N_LISTEN_ADDRESS=127.0.0.1

# Data dir
N8N_USER_FOLDER=/var/lib/n8n

# Logging
N8N_LOG_LEVEL=info
N8N_LOG_FILE_LOCATION=/var/log/n8n/n8n.log

# Timezone
GENERIC_TIMEZONE=Europe/Madrid
TZ=Europe/Madrid

# Encryption key (used to encrypt credentials in the SQLite DB)
# Generate once, store in your password manager. NEVER lose this.
N8N_ENCRYPTION_KEY=__REPLACE_ME_WITH_30_CHARS_OF_RANDOM__
EOF
```

Generate the encryption key:

```bash
openssl rand -hex 24   # paste the output into N8N_ENCRYPTION_KEY above
sudo chmod 640 /etc/n8n/n8n.env
sudo chown root:n8n /etc/n8n/n8n.env
```

---

## Step 5 — systemd unit for n8n

```bash
sudo tee /etc/systemd/system/n8n.service > /dev/null <<'EOF'
[Unit]
Description=n8n workflow automation
After=network.target

[Service]
Type=simple
User=n8n
Group=n8n
EnvironmentFile=/etc/n8n/n8n.env
ExecStart=/usr/bin/n8n start
Restart=on-failure
RestartSec=5
StandardOutput=append:/var/log/n8n/n8n.log
StandardError=append:/var/log/n8n/n8n.log

# Hardening
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/var/lib/n8n /var/log/n8n
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now n8n
sudo systemctl status n8n --no-pager   # should show "active (running)"
```

Smoke test from localhost:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:5678/healthz
# Expected: 200
```

If 200, n8n is alive.

---

## Step 6 — Caddy (TLS terminator in front of n8n)

Caddy listens on `:443` and reverse-proxies to n8n. **Cloudflare Tunnel** will hit Caddy, so Caddy needs to trust Cloudflare's origin cert OR use a self-signed fallback. Easiest path: have Caddy do TLS termination using a Cloudflare Origin Certificate (free, 15-year).

### 6.1 Generate Cloudflare Origin Certificate

In **Cloudflare dashboard** for `daybydayconsulting.com`:
- Go to **SSL/TLS → Origin Server → Create Certificate**
- Hostnames: `n8n.daybydayconsulting.com`, `*.daybydayconsulting.com`
- Save the **Origin Certificate** (PEM) and **Private Key** (PEM) somewhere safe.

### 6.2 Install Caddy

```bash
sudo apt install -y debian-keyring debian-archive-keyring
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/deb/debian/dists/any/Release' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy
```

### 6.3 Drop origin cert + key on the VPS

```bash
sudo mkdir -p /etc/caddy/origin-certs
sudo tee /etc/caddy/origin-certs/n8n.daybydayconsulting.com.crt > /dev/null <<'EOF'
-----BEGIN CERTIFICATE-----
__PASTE_ORIGIN_CERT_HERE__
-----END CERTIFICATE-----
EOF
sudo tee /etc/caddy/origin-certs/n8n.daybydayconsulting.com.key > /dev/null <<'EOF'
-----BEGIN PRIVATE KEY-----
__PASTE_ORIGIN_KEY_HERE__
-----END PRIVATE KEY-----
EOF
sudo chmod 600 /etc/caddy/origin-certs/n8n.daybydayconsulting.com.key
sudo chown -R root:root /etc/caddy/origin-certs
```

### 6.4 Caddyfile

```bash
sudo tee /etc/caddy/Caddyfile > /dev/null <<'EOF'
n8n.daybydayconsulting.com {
  tls /etc/caddy/origin-certs/n8n.daybydayconsulting.com.crt /etc/caddy/origin-certs/n8n.daybydayconsulting.com.key
  reverse_proxy 127.0.0.1:5678 {
    transport http {
      dial_timeout 10s
      response_header_timeout 30s
    }
  }
  encode zstd gzip
}
EOF

sudo systemctl enable --now caddy
sudo systemctl status caddy --no-pager
```

Caddy listens on `:443`. Test from VPS:

```bash
curl -k -sS -o /dev/null -w "%{http_code}\n" https://127.0.0.1/
# Expected: 200 or 302 (n8n redirects / to /signin)
```

---

## Step 7 — Cloudflare Tunnel (`cloudflared`)

This is what fixes the 525. Cloudflare Tunnel dials **out** from the VPS to Cloudflare's edge — no inbound firewall rules needed.

### 7.1 Create the tunnel in Cloudflare dashboard

- **Zero Trust → Networks → Tunnels → Create a tunnel**
- Name: `daybyday-n8n`
- Copy the **Tunnel Token** (long string starting with `eyJh...`)

### 7.2 Install cloudflared

```bash
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloudflare-main.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update
sudo apt install -y cloudflared
```

### 7.3 Configure the tunnel

```bash
sudo mkdir -p /etc/cloudflared
sudo tee /etc/cloudflared/config.yml > /dev/null <<EOF
tunnel: daybyday-n8n
credentials-file: /etc/cloudflared/.credentials.json

ingress:
  - hostname: n8n.daybydayconsulting.com
    service: https://127.0.0.1:443
    originRequest:
      noTLSVerify: true
  - service: http_status:404
EOF
```

The `noTLSVerify: true` is because Caddy uses a Cloudflare Origin Cert, not a public CA — cloudflared won't have it in its trust store.

### 7.4 Drop the tunnel credentials file

Paste the JSON blob from step 7.1:

```bash
sudo tee /etc/cloudflared/.credentials.json > /dev/null <<'EOF'
__PASTE_TUNNEL_CREDENTIALS_JSON_HERE__
EOF
sudo chmod 600 /etc/cloudflared/.credentials.json
```

### 7.5 Run cloudflared as a service

```bash
sudo cloudflared service install
sudo systemctl enable --now cloudflared
sudo systemctl status cloudflared --no-pager
```

Check tunnel health:

```bash
sudo cloudflared tunnel info daybyday-n8n
```

### 7.6 Public DNS record

In Cloudflare dashboard → **DNS → Records**:
- Type: `CNAME`
- Name: `n8n`
- Target: `<tunnel-uuid>.cfargotunnel.com`
- Proxy: **Proxied** (orange cloud ON)

Cloudflare usually auto-creates this when you create the tunnel. Confirm it exists.

---

## Step 8 — End-to-end test

From your laptop:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://n8n.daybydayconsulting.com/healthz
# Expected: 200
```

If 200, visit `https://n8n.daybydayconsulting.com/` in a browser. You should see the n8n setup wizard.

---

## Step 9 — First-time n8n setup

In the browser:
1. Create the **owner account** (your email + strong password).
2. Skip the "get started" templates — we have our own workflows.
3. Go to **Settings → API** → **Create API Key**. Name it `opencode-builder`. Copy it (you'll paste it back to the orchestrating agent — never store it in the repo).
4. The URL `https://n8n.daybydayconsulting.com/` + that API key is what the building agent needs.

---

## Step 10 — Backups

n8n stores everything in `/var/lib/n8n`. Add a nightly cron:

```bash
sudo tee /etc/cron.daily/n8n-backup > /dev/null <<'EOF'
#!/bin/bash
set -e
TS=$(date -u +%Y%m%dT%H%M%SZ)
tar -czf /var/backups/n8n-${TS}.tar.gz /var/lib/n8n /etc/n8n /etc/caddy/origin-certs
# Keep last 30 backups
ls -1t /var/backups/n8n-*.tar.gz | tail -n +31 | xargs -r rm --
EOF
sudo chmod +x /etc/cron.daily/n8n-backup
sudo mkdir -p /var/backups
```

Optional: copy the tarballs off-site with `rclone` to a Cloudflare R2 bucket.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `525 SSL handshake failed` (Cloudflare) | Origin (your VPS) doesn't have TLS for that hostname | Steps 6 + 7 not done, or origin cert expired/incorrect |
| `502 Bad Gateway` from Cloudflare | cloudflared not running, or its `ingress` target wrong | `sudo systemctl status cloudflared`, check `/var/log/cloudflared.log` |
| n8n page loads but shows "Could not connect to server" | n8n not running, or listening on wrong interface | `sudo systemctl status n8n`, `ss -tlnp \| grep 5678` should show `127.0.0.1:5678` |
| n8n restart loops with `EBADENGINE` | Node version too old | Step 2, need Node 20+ |
| Tunnel shows `unhealthy` | credentials file wrong, or tunnel UUID mismatch | Re-download from dashboard, re-paste in step 7.4 |

---

## What to send back to the building agent

Once `https://n8n.daybydayconsulting.com/healthz` returns 200:

1. The URL: `https://n8n.daybydayconsulting.com/`
2. The API key from step 9.3 (you'll generate this in the n8n UI).

The building agent will then construct and deploy the 4 workflows:
- **research-reality-layer** — topic → tiered source allowlist → verified brief
- **write-with-doctrine** — brief → draft guided by `daybyday-skills` → gate check
- **publish-and-index** — committed post → IndexNow + GSC + sitemap + llms.txt
- **failure-alerts** — Telegram ping on any gate failure

That's the loop. Two posts/week, Tue + Thu at 22:00 CEST, fully hands-off after the brief is queued.