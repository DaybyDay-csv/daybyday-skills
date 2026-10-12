"""Perfiles, entrevistas y diagnósticos del Consultor Meta Ads en Grist.

Guarda el conocimiento de cada negocio/cuenta (perfil, entrevistas, diagnósticos
por bloque y planes) en el doc "consultor-meta-ads" del workspace DAYBYDAY.

Uso:
  python3 consultor_grist.py init
  python3 consultor_grist.py empresas
  python3 consultor_grist.py empresa "DaybyDay"
  python3 consultor_grist.py guardar-entrevista <<'JSON'
      {"empresa": "DaybyDay", "resumen": "...", "respuestas": {"que_vende": "..."}}
  JSON
  python3 consultor_grist.py guardar-diagnostico <<'JSON'
      {"empresa": "DaybyDay", "bloque_critico": 2, "bloque_nombre": "ESTRUCTURA",
       "senales": "...", "problemas": "...", "soluciones": "...",
       "plan": "...", "fuentes": "..."}
  JSON

Config por entorno:
  GRIST_KEY_FILE — ruta a la API key (por defecto la del proyecto daybyday)
  GRIST_DOC      — id del doc (por defecto: se busca/crea "consultor-meta-ads")
"""

import json
import os
import sys
import time
from pathlib import Path

import httpx

BASE = "https://grist.daybydayconsulting.com"
UA = "daybyday-motor"
DOC_NOMBRE = "consultor-meta-ads"
KEY_FILE_DEFECTO = Path.home() / ("Documents/opencode-projects/daybyday/negocio/markbuildsbrands-knowledge"
                                  "/.secrets/grist-api-key")

TABLAS = {
    "Empresas": [("empresa", "Text"), ("sector", "Text"), ("que_vende", "Text"),
                 ("a_quien", "Text"), ("ticket_medio", "Text"), ("presupuesto_diario_meta", "Text"),
                 ("tracking", "Text"), ("estructura_cuenta", "Text"), ("creatividades_semana", "Text"),
                 ("landing", "Text"), ("metricas", "Text"), ("equipo", "Int"),
                 ("dolor_principal", "Text"), ("notas", "Text"), ("creado", "Text")],
    "Entrevistas": [("empresa", "Text"), ("fecha", "Text"), ("respuestas", "Text"), ("resumen", "Text")],
    "Diagnosticos": [("empresa", "Text"), ("fecha", "Text"), ("bloque_critico", "Int"),
                     ("bloque_nombre", "Text"), ("senales", "Text"), ("problemas", "Text"),
                     ("soluciones", "Text"), ("plan", "Text"), ("fuentes", "Text")],
}


def api():
    ruta = Path(os.environ.get("GRIST_KEY_FILE", str(KEY_FILE_DEFECTO)))
    clave = ruta.read_text().strip()
    if "=" in clave:
        clave = clave.split("=", 1)[1].strip()
    return httpx.Client(base_url=BASE, headers={
        "Authorization": f"Bearer {clave}", "User-Agent": UA}, timeout=60)


def workspace_daybyday(c):
    for org in c.get("/api/orgs").json():
        for ws in c.get(f"/api/orgs/{org['id']}/workspaces").json():
            if ws.get("name", "").upper() == "DAYBYDAY":
                return ws["id"]
    raise SystemExit("workspace DAYBYDAY no encontrado")


def doc_consultor(c, ws_id, crear=False):
    if os.environ.get("GRIST_DOC"):
        return os.environ["GRIST_DOC"]
    docs = c.get(f"/api/workspaces/{ws_id}").json().get("docs", [])
    for d in docs:
        if d.get("name") == DOC_NOMBRE:
            return d["id"]
    if not crear:
        raise SystemExit(f'no existe el doc "{DOC_NOMBRE}" — crea primero con `init`')
    r = c.post(f"/api/workspaces/{ws_id}/docs", json={"name": DOC_NOMBRE})
    r.raise_for_status()
    body = r.json()
    did = body if isinstance(body, str) else body.get("id")
    time.sleep(2)
    return did


def crear_tablas(c, did):
    # Solo crea las que faltan: recrear una existente genera duplicados (X2, X3…).
    existentes = {t["id"] for t in c.get(f"/api/docs/{did}/tables").json().get("tables", [])}
    tablas = [{"id": t, "columns": [{"id": col, "fields": {"type": tipo}} for col, tipo in cols]}
              for t, cols in TABLAS.items() if t not in existentes]
    if not tablas:
        return
    r = c.post(f"/api/docs/{did}/tables", json={"tables": tablas})
    if r.status_code not in (200, 201):
        print(f"aviso tablas: {r.status_code} {r.text[:120]}", file=sys.stderr)


def filas(c, did, tabla, filtro=None):
    regs = c.get(f"/api/docs/{did}/tables/{tabla}/records").json().get("records", [])
    out = [r.get("fields", {}) for r in regs]
    if filtro:
        col, val = filtro
        out = [f for f in out if str(f.get(col, "")).strip().lower() == val.strip().lower()]
    return out


def anadir(c, did, tabla, campos):
    r = c.post(f"/api/docs/{did}/tables/{tabla}/records", json={"records": [{"fields": campos}]})
    r.raise_for_status()
    return r.json()


def hoy():
    from datetime import date
    return date.today().isoformat()


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    cmd = sys.argv[1]
    c = api()

    if cmd == "init":
        ws = workspace_daybyday(c)
        did = doc_consultor(c, ws, crear=True)
        crear_tablas(c, did)
        print(json.dumps({"doc_id": did, "tablas": list(TABLAS)}))
        return

    ws = workspace_daybyday(c)
    did = doc_consultor(c, ws, crear=(cmd.startswith("guardar")))

    if cmd == "empresas":
        print(json.dumps(filas(c, did, "Empresas"), ensure_ascii=False, indent=1))
    elif cmd == "empresa":
        nombre = sys.argv[2]
        print(json.dumps({
            "perfil": filas(c, did, "Empresas", ("empresa", nombre)),
            "entrevistas": filas(c, did, "Entrevistas", ("empresa", nombre)),
            "diagnosticos": filas(c, did, "Diagnosticos", ("empresa", nombre)),
        }, ensure_ascii=False, indent=1))
    elif cmd == "guardar-entrevista":
        datos = json.loads(sys.stdin.read())
        datos.setdefault("fecha", hoy())
        if isinstance(datos.get("respuestas"), dict):
            datos["respuestas"] = json.dumps(datos["respuestas"], ensure_ascii=False)
        # crea/actualiza el perfil si viene plano en el propio payload
        perfil = {k: v for k, v in datos.items()
                  if k in dict(TABLAS["Empresas"]) and k not in ("creado",)}
        anadir(c, did, "Entrevistas", {k: datos.get(k, "") for k in dict(TABLAS["Entrevistas"])})
        if perfil:
            existentes = filas(c, did, "Empresas", ("empresa", datos["empresa"]))
            if existentes:
                print(json.dumps({"nota": "empresa ya existe; entrevista añadida",
                                  "empresa": datos["empresa"]}))
            else:
                perfil["creado"] = hoy()
                anadir(c, did, "Empresas", perfil)
        print(json.dumps({"ok": True, "empresa": datos.get("empresa")}))
    elif cmd == "guardar-diagnostico":
        datos = json.loads(sys.stdin.read())
        datos.setdefault("fecha", hoy())
        anadir(c, did, "Diagnosticos", {k: datos.get(k, "") for k in dict(TABLAS["Diagnosticos"])})
        print(json.dumps({"ok": True, "empresa": datos.get("empresa"),
                          "bloque": datos.get("bloque_critico")}))
    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
