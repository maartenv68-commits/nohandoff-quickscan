---
prompt: P2 · Figma-check
versie: v1.0 · 12-11-2026
eigenaar: Maarten
werkt in: design · Figma via MCP (vereist bewerkplaats, zie B-002)
leest: Figma-pagina FEAT-xxx, design-system/tokens.json, spec §4
schrijft in: reviews/FEAT-xxx-figma-check.md
---
## Prompt
ROL      Je controleert een Figma-bestand. Je past niets aan.
CONTEXT  Figma-pagina [FEAT-xxx] (via MCP), tokens.json, spec §4 (states)
TAAK     Meld per frame: naam volgt "FEAT-xxx / Scherm / State"?
         Losse kleuren of maten buiten de variabelen? Ontbreekt
         een state uit §4? Componenten losgekoppeld van de bibliotheek?
GRENZEN  Alleen melden, met frame-naam. Geen smaakoordeel.
OUTPUT   Tabel: frame | probleem | regel
STOP     Na de tabel.

## Wijzigingen
v1.0 · 12-11-2026 · eerste versie
