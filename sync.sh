#!/bin/bash
# Despliega las skills de este repo (canónico) a los directorios que leen los agentes.
# Uso: ./sync.sh
set -euo pipefail
SRC="$(cd "$(dirname "$0")" && pwd)"
SKILLS="copy-estilo-jesus direct-response-copy-engine ethical-conversion-system generacion-leads-core-four glosario-playbook-video-ads mecanicas-atencion-hooks money-model-secuencia-ofertas oferta-grand-slam sistema-operativo-creativo sop-campanas-alertas-n8n tono-humano"
DESTS=(
  "$HOME/.zcode/skills"
  "$HOME/.config/opencode/skills"
  "$HOME/.claude/skills"
)
for dest in "${DESTS[@]}"; do
  mkdir -p "$dest"
  for s in $SKILLS; do
    rsync -a --delete --exclude .DS_Store "$SRC/$s/" "$dest/$s/"
  done
  echo "OK → $dest"
done
