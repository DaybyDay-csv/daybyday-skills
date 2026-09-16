#!/bin/bash
# Despliega las skills de este repo (canónico) a los directorios que leen los agentes.
# Uso: ./sync.sh
set -euo pipefail
SRC="$(cd "$(dirname "$0")" && pwd)"
SKILLS="breakthrough-advertising copy-estilo-jesus direct-response-copy-engine ethical-conversion-system generacion-leads-core-four glosario-playbook-video-ads mecanicas-atencion-hooks money-model-secuencia-ofertas oferta-grand-slam sistema-operativo-creativo sop-campanas-alertas-n8n tono-humano"
DESTS=(
  "$HOME/.zcode/skills"
  "$HOME/.config/opencode/skills"
  "$HOME/.claude/skills"
)
# Guardia: ZCode descarta en silencio skills con description > 1024 chars.
command -v ruby >/dev/null && for s in $SKILLS; do
  n=$(ruby -ryaml -e 'puts YAML.safe_load(File.read(ARGV[0])[/\A---\n(.*?)\n---\n/m, 1].to_s)["description"].to_s.length' "$SRC/$s/SKILL.md" 2>/dev/null || echo 0)
  if [ "$n" -gt 1024 ]; then
    echo "ERROR: $s description = $n chars (límite ZCode 1024). Acórtala antes de desplegar." >&2
    exit 1
  fi
done
for dest in "${DESTS[@]}"; do
  mkdir -p "$dest"
  for s in $SKILLS; do
    rsync -a --delete --exclude .DS_Store "$SRC/$s/" "$dest/$s/"
  done
  echo "OK → $dest"
done
