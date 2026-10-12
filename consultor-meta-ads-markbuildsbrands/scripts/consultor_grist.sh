#!/bin/bash
# Wrapper del gestor Grist del Consultor Meta Ads: resuelve el entorno (uv+httpx).
# Uso: bash scripts/consultor_grist.sh <comando> [args]  (ver consultor_grist.py --help)
cd "$(dirname "$0")" && exec uv run --with httpx python consultor_grist.py "$@"
