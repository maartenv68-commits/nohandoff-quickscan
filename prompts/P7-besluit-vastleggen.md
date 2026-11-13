---
prompt: P7 · besluit vastleggen
versie: v1.0 · 13-11-2026
eigenaar: Maarten
werkt in: tekst · chat-AI of agent
leest: jouw samenvatting of een gespreksverslag, decisions/beslislog.md
schrijft in: decisions/beslislog.md, alleen via een pull request
---
## Prompt
ROL      Je noteert een besluit dat mensen al genomen hebben. Je beslist niets.
CONTEXT  Mijn samenvatting of het gespreksverslag; decisions/beslislog.md
TAAK     Zet het besluit in het vaste formaat: besluit, waarom, niet,
         wie, bron, status, herzien als. Gebruik het volgende B-nummer.
GRENZEN  Alleen wat in de input staat. Ontbreekt "waarom", "wie",
         "bron" of "herzien als"? Vraag het, vul het niet zelf in.
         Status is altijd "voorstel"; een mens zet het op "actief".
OUTPUT   Eén nieuw blok, als pull request op een eigen branch.
STOP     Na de pull request. Een mens keurt en merget.

## Waarom
Een agent mag helpen formuleren, nooit beslissen (AGENTS.md). Deze prompt maakt
dat onderscheid zichtbaar: het besluit komt van een mens, de agent schrijft het netjes op.

## Wijzigingen
v1.0 · 13-11-2026 · eerste versie (B-006)
