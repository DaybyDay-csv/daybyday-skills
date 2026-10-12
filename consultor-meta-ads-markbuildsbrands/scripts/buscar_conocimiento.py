"""Busca en el knowledge base de vídeos de Hormozi (references/conocimiento-videos.md).

Puntúa cada ficha por solape de palabras clave con las consultas y devuelve las
más relevantes. Sin dependencias (solo stdlib).

Uso:
  python3 buscar_conocimiento.py "fijar precio de la oferta" "aumentar leads"
  python3 buscar_conocimiento.py -n 5 "escalar equipo"
"""

import re
import sys
import unicodedata
from pathlib import Path

KB = Path(__file__).resolve().parent.parent / "references" / "conocimiento-videos.md"

STOP = set("""como para una unos unas que con los las del por mis mi mas mas sobre esta este esto estos estas
cuando donde quien cual cuales hay tengo puedo puede debo debe necesito quiero hacer hago hace ser tener pero
sino entre hasta desde mejor algo negocio negocios gente cosa cosas manera forma tema caso casos""".split())


def norm(s):
    s = unicodedata.normalize("NFD", str(s or ""))
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return s.lower()


def fichas():
    texto = KB.read_text()
    partes = texto.split("\n## ")
    out = []
    for p in partes[1:]:
        titulo = p.split("\n", 1)[0].strip()
        out.append((titulo, norm(p), p))
    return out


def main():
    args = sys.argv[1:]
    n = 8
    if args and args[0] == "-n":
        n = int(args[1])
        args = args[2:]
    if not args:
        print(__doc__)
        sys.exit(1)
    consultas = [norm(a) for a in args]
    tokens = [t for c in consultas for t in re.split(r"[^a-z0-9]+", c) if len(t) >= 4 and t not in STOP]

    resultados = []
    for titulo, cuerpo_norm, cuerpo_original in fichas():
        score = sum(3 for t in set(tokens) if t in cuerpo_norm)
        for c in consultas:
            if len(c) >= 8 and c in cuerpo_norm:
                score += 6
        if score:
            resultados.append((score, titulo, cuerpo_original))
    resultados.sort(reverse=True)

    for score, titulo, cuerpo in resultados[:n]:
        lineas = cuerpo.split("\n")
        recorte = "\n".join(lineas[:14])
        print(f"=== (score {score}) {titulo}")
        print(recorte)
        print()
    print(f"[{len(resultados)} fichas con coincidencias; mostradas {min(n, len(resultados))}]")


if __name__ == "__main__":
    main()
