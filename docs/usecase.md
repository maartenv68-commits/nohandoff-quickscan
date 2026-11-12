# Use case · No Handoff Quickscan

Van probleem tot werkend ecosysteem, volgens het handboek *Herkennen → Inrichten → Bewijzen → Verankeren*.
Dit document is de rode draad. Elke iteratie voeg je onderaan toe onder **Iteraties**.

---

## 1. Het probleem in één alinea
Design leads en bureau-eigenaren die AI al gebruiken, weten niet waar hun team staat en of No Handoff ze verder helpt.
Op nohandoff.nl is de enige stap nu "plan een gesprek". Dat is voor een eerste kennismaking te groot.
**De feature:** een quickscan van 8 vragen die in 3 minuten laat zien op welk van de vier niveaus een team staat,
wat de zwakste kant is en wat een logische volgende stap is.

Waarom deze use case (B-001): hij is echt, levert leads op, en heeft genoeg gedrag (rekenregels, states, foutafhandeling)
om de hele keten te laten zien: intentie, spec, Figma, acceptatiecriteria, tests en review.

## 2. Het ecosysteem in één beeld

```
           MENS beslist                       AI-AGENT voert uit                     OPSLAG (bron van waarheid)
 ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Fase 0  Context vastleggen      →  merk en tokens structureren (P-)      →  context/ · design-system/ · AGENTS.md
 ◇1  1   Ontdekken               →  notities ordenen (P0)                  →  discovery/
 ◇1  2   Definiëren (HMW kiezen) →  ─                                      →  product/hmw.md · beslislog
 ◇2  3   Intentie                →  vragen stellen (P1)                    →  product/FEAT-001/intentie.md
 ◇2  4   Vorm (Figma)            →  schermen per state (P3), check (P2,P4) →  Figma · figma.md
 ◇2  5   Spec + AC               →  ─                                      →  product/FEAT-001/spec.md
 ◇2  6   Bouwen                  →  code + test per AC (P5)                →  app/ · tests/ · pull request
 ◇2  7   Controle                →  review in frisse sessie (P6) + CI      →  reviews/
 ◇2  8   Test met bezoekers + live
 Fase 9  Wijzigen = spec wijzigen → diff naar code (P5)                    →  spec v1.1 · beslislog
```

Vaste regel: **elke fase eindigt met een mens die keurt, in een pull request.** Overleg mag in de chat; een besluit telt pas in `decisions/beslislog.md`.

| Waar | Wat | Waarom daar |
|---|---|---|
| GitHub (deze repo) | Alles wat tekst is: context, specs, besluiten, prompts, tokens, code, tests | Versiegeschiedenis, pull requests als keurmoment, agents lezen het |
| Figma | Hoe het eruitziet | Designers werken visueel; gekoppeld via Feature-ID en (later) Code Connect |
| Claude Code | De agent | Leest de repo, werkt op een branch, mergt nooit |
| Netlify | De live site + formulier-inzendingen | Bestaande hosting van nohandoff.nl |

## 3. Waar je staat in het handboek

| Handboekstap | Wat het betekent voor dit project | Status | Bestanden |
|---|---|---|---|
| **0 · Basis** | Repo, AGENTS.md, context, tokens, prompts | ✅ staat | `AGENTS.md`, `context/`, `design-system/`, `prompts/` |
| **1 · Herkennen** | Waar lekt je eigen keten? Hier: wat mist een bezoeker? | 🟡 deskresearch + aannames | `discovery/inzichten.md` |
| **2 · Inrichten S1** · intentie | Intentiebrief met VRAAG-punten | 🟡 concept | `product/FEAT-001-quickscan/intentie.md` |
| **2 · Inrichten S2** · Figma | Bibliotheek en frames | ⏸ wacht op bewerkplaats (B-002) | `figma.md` |
| **2 · Inrichten S3** · spec | Spec in 11 delen met AC1–AC7 | 🟡 concept | `spec.md` |
| **2 · Inrichten S4** · review | Review tegen spec | 🟡 eerste verslag | `reviews/FEAT-001-controle.md` |
| **3 · Bewijzen** | Pilot: nulmeting, bouwen, testen met 5 mensen, opnieuw meten | 🔲 nog te doen | `discovery/onderzoeksplan.md` |
| **4 · Verankeren** | Eigenaren, ritme, onderhoud | 🔲 nog te doen | (dit document, §6) |

## 4. Rondleiding: zo loop je er doorheen
Volg deze volgorde de eerste keer. Elke stap duurt 5–15 minuten.

1. **Lees `AGENTS.md`.** Dit is wat elke agent als eerste leest. Klopt dit met hoe jij wilt werken?
2. **Lees `decisions/beslislog.md`.** B-001 t/m B-005 zijn voorstellen. Zet ze op *actief* of pas ze aan: dat is jouw eerste pull request.
3. **Lees `discovery/inzichten.md`.** Zie het verschil tussen deskresearch (D) en aannames (A). Plan de 5 gesprekken uit `onderzoeksplan.md`.
4. **Draai P1 op de intentie.** Open Claude, start met `prompts/START.md`, en laat `prompts/P1-intentie-aanscherpen.md` vragen stellen over `intentie.md`. Beantwoord ze in de brief.
5. **Lees de spec, vooral §3 (regels), §8 (copy) en §10 (AC).** Vind je dat niveau naar beneden afgerond moet worden? Dat is een besluit (B-003).
6. **Open de quickscan lokaal** (`app/index.html` via `npx serve app`) en doorloop hem. Probeer bewust een vraag over te slaan: dat is AC3.
7. **Draai de tests:** `node --test tests/*.test.mjs`. Elke test heeft een AC-nummer. Breek eens een regel in `app/regels.js` en kijk welke test faalt.
8. **Lees `reviews/FEAT-001-controle.md`** en draai daarna zelf P6 in een frisse sessie. Vindt die iets anders?
9. **Doe je eerste iteratie** (zie §7): pas de spec aan, laat de agent de code aanpassen met P5, en review met P6.

## 5. Status: wat is echt, wat is aanname
| Echt | Aanname of nog niet gedaan |
|---|---|
| Werkende quickscan, lokaal getest in Chromium (desktop en mobiel) | Geen gesprekken of tests met echte bezoekers |
| 8 tests op AC1–AC7, allemaal groen | Vragen en niveau-indeling zijn eigen synthese, niet gevalideerd |
| Tokens overgenomen van de live site nohandoff.nl | Geen Figma-bibliotheek (kijkplaats, B-002) |
| Prompts P0–P6 uitgeschreven | Prompts nog niet in een echte sessie op dit project gedraaid |
| | Netlify-formulier nog niet live getest (formulierdetectie stond uit) |
| | Besluiten B-001 t/m B-005 nog niet door Maarten bevestigd |

## 6. Verankeren: eigenaren en ritme
| Wat | Eigenaar | Ritme |
|---|---|---|
| `context/` en `AGENTS.md` | Maarten (design lead) | elk kwartaal opruimen |
| Spec per feature | Maarten | bij elke wijziging een versie omhoog |
| Prompts | Maarten | maandelijks: welke prompt gaf herstelwerk? |
| Beslislog | Maarten | na elk besluit; vervallen besluiten naar `archief/` |
| Meting | Maarten | 3 maanden na livegang (intentie §5) |

## 7. Iteraties
Elke iteratie volgt dezelfde vorm: **aanleiding → spec-diff → besluit → agent bouwt (P5) → review (P6) → gemeten**.

### Iteratie 0 · 12-11-2026 · opzet
Aanleiding: project opgezet volgens het handboek. Resultaat: deze repo, concept-spec v1.0, werkende quickscan.

### Voorstellen voor iteratie 1 (kies er één)
- **Na de gesprekken:** pas vragen of antwoorden aan op wat design leads niet snappen. Raakt `app/vragen.js` en spec §8.
- **Andere rekenregel:** afronden naar dichtstbijzijnde in plaats van naar beneden. Raakt R4, AC1 en B-003. Klein, maar laat de hele keten zien.
- **Live zetten:** quickscan als `/quickscan` op nohandoff.nl, Netlify-formulierdetectie aan, nulmeting noteren.
- **Figma:** met een bewerkplaats de bibliotheek bouwen uit `tokens.json` en P2/P4 draaien.
