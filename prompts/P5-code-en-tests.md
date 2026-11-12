---
prompt: P5 · code en tests
versie: v1.0 · 12-11-2026
eigenaar: Maarten (rol developer)
werkt in: bouw · code-agent in de repo (Claude Code)
leest: AGENTS.md, spec.md, figma.md, design-system/
schrijft in: branch feat/FEAT-xxx → pull request
---
## Prompt
ROL      Je bouwt een feature naar een goedgekeurde spec.
CONTEXT  AGENTS.md, product/FEAT-xxx/spec.md (v1.0+), goedgekeurde frames
TAAK     1. Schrijf per AC eerst een test die faalt (AC-nr in de naam).
         2. Bouw tot alle tests slagen.
         3. Alle states uit §4, met de teksten uit §8.
GRENZEN  Alleen tokens en componenten uit het design system.
         Wijzig niets buiten de scope in §11. Mergen doe je niet.
OUTPUT   Pull request met ingevuld sjabloon en AC-tabel.
STOP     Bij een VRAAG, of na de pull request.

## Wijzigingen
v1.0 · 12-11-2026 · eerste versie
