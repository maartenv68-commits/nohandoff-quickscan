# FEAT-001 · Quickscan · spec v1.0 (concept)

Intentie: `intentie.md` · Besluiten: B-003, B-004, B-005 · Branches: `spec/FEAT-001`, `feat/FEAT-001`
Status: concept. Code in `app/` volgt deze versie; wordt definitief na review door Maarten.

## §1 Probleem en context
Zie intentie §1. Bezoekers weten niet waar hun team staat; een gesprek aanvragen is een te grote eerste stap.

## §2 Productdoel
De bezoeker ziet in < 3 minuten het niveau van het team, de zwakste dimensie en één volgende stap.

## §3 Ontwerpprincipe en regels
Principes 1–3 uit `context/principes.md`. Regels:

- R1 · Er zijn 8 vragen, 2 per dimensie: Strategie (V1–V2), Cultuur (V3–V4), Proces (V5–V6), Uitkomst (V7–V8).
- R2 · Elk antwoord heeft een waarde 1–4.
- R3 · Score per dimensie = gemiddelde van haar 2 antwoorden.
- R4 · Niveau = gemiddelde van alle 8 antwoorden, **naar beneden afgerond** (2,875 → 2).
- R5 · Zwakste dimensie = laagste dimensiescore. Bij gelijke stand: de eerste in de volgorde Strategie, Cultuur, Proces, Uitkomst.
- R6 · Alle 8 vragen beantwoorden is nodig voor de uitslag. Terug naar een vraag kan altijd; antwoorden blijven staan.
- R7 · E-mail is optioneel; verzenden kan alleen met een geldig adres én aangevinkte toestemming.

| Niveau | Naam |
|---|---|
| 1 | Los experimenteren |
| 2 | Gedeelde context |
| 3 | Gedeelde keten |
| 4 | AI-native waarde |

## §4 States
| State | Wanneer |
|---|---|
| intro | Eerste bezoek |
| vraag | Vraag n van 8 wordt getoond |
| onvolledig | Laatste vraag bereikt, maar niet alles beantwoord |
| uitslag | Alle 8 beantwoord, "Bekijk uitslag" gekozen |
| verzenden | E-mail wordt verstuurd |
| verzonden | Verzenden gelukt |
| fout | Verzenden mislukt |

## §5 Gebruikersflow
intro → vraag 1 … vraag 8 → (onvolledig ↔ vraag n) → uitslag → [optioneel] verzenden → verzonden | fout → opnieuw

## §6 Scope
Wel: de quickscan als losse pagina (`/quickscan`), uitslag op het scherm, optioneel per mail via Netlify Forms.
Niet: account, opslag van antwoorden in een database, vergelijking met andere teams, PDF-rapport.

## §7 Design system
Alleen tokens uit `design-system/tokens.json` en componenten uit `design-system/componenten.md`:
`Knop` (primair, secundair), `Antwoordkaart` (radio), `Voortgang`, `Kaart`, `Uitslagpaneel` (kleurverloop), `Melding`.

## §8 Copy
| Sleutel | Tekst |
|---|---|
| intro.titel | Waar staat jouw team met AI? |
| intro.tekst | 8 vragen, 3 minuten. Je ziet meteen op welk van de vier niveaus jullie staan en wat een logische volgende stap is. Geen e-mail nodig. |
| intro.knop | Start de quickscan |
| vraag.teller | Vraag {n} van 8 |
| knop.vorige | Vorige |
| knop.volgende | Volgende |
| knop.uitslag | Bekijk uitslag |
| onvolledig.melding | Je hebt {x} van 8 vragen beantwoord. Beantwoord de open vragen om je uitslag te zien. |
| uitslag.kop | Jullie staan op niveau {niveau}: {naam} |
| uitslag.zwakste | Jullie zwakste kant: {dimensie} |
| uitslag.disclaimer | Dit is een gespreksopener, geen meting. In een gesprek kijken we samen of het klopt. |
| mail.label | Stuur me de uitslag (optioneel) |
| mail.toestemming | Ik vind het goed dat No Handoff mijn e-mailadres gebruikt om de uitslag te sturen en één keer contact op te nemen. |
| mail.knop | Verstuur |
| mail.verzenden | Bezig met versturen… |
| mail.verzonden | Verstuurd. Je krijgt de uitslag binnen een paar minuten. |
| mail.fout | Versturen lukte niet. Je antwoorden staan er nog; probeer het opnieuw. |
| mail.ongeldig | Vul een geldig e-mailadres in en vink de toestemming aan. |
| uitslag.gesprek | Plan een gesprek → |

Vragen, antwoorden, niveau-uitleg en volgende stappen: zie `app/vragen.js`. Dat bestand is de copy-bron voor de vragenlijst; wijzigen = PR met akkoord van Maarten.

## §9 Toegankelijkheid
- Elke vraag is een `fieldset` met `legend`; antwoorden zijn radioknoppen.
- Alles bedienbaar met toetsenbord; zichtbare focus.
- Statuswijzigingen (verzenden, fout, verzonden) worden voorgelezen (`aria-live`).
- Contrast minimaal 4,5:1 voor tekst (WCAG 2.2 AA).

## §10 Acceptatiecriteria
- **AC1** · Gegeven 8 antwoorden met gemiddelde 2,875, als de uitslag wordt berekend, dan is het niveau 2 (R4).
- **AC2** · Gegeven antwoorden Strategie 2, Cultuur 1,5, Proces 1,5, Uitkomst 3, als de zwakste dimensie wordt bepaald, dan is dat Cultuur (R5, eerste bij gelijke stand).
- **AC3** · Gegeven 6 van 8 antwoorden, als de bezoeker de uitslag wil zien, dan krijgt hij de state *onvolledig* met de tekst "Je hebt 6 van 8 vragen beantwoord…" en geen uitslag (R6).
- **AC4** · Gegeven een uitslag, als die getoond wordt, dan staan niveau, naam, zwakste dimensie, één volgende stap en de disclaimer erop, zonder dat een e-mailadres nodig was (B-004).
- **AC5** · Gegeven een e-mailadres zonder toestemming (of een ongeldig adres), als de bezoeker op Verstuur klikt, dan wordt er niets verstuurd en ziet hij `mail.ongeldig` (R7).
- **AC6** · Gegeven dat verzenden mislukt, als de fout terugkomt, dan ziet de bezoeker `mail.fout`, blijft de uitslag staan en kan hij opnieuw versturen.
- **AC7** · Gegeven elk antwoord, als een antwoord een waarde buiten 1–4 heeft of een vraag ontbreekt, dan weigert de berekening (geen stille fout).

## §11 Agent-instructies
- **Lees:** AGENTS.md, deze spec, `intentie.md`, `figma.md`, `design-system/`.
- **Wijzig alleen:** `app/`, `tests/`, `reviews/FEAT-001-*.md`.
- **Stop als:** een tekst niet in §8 of `app/vragen.js` staat; een nieuw component nodig lijkt; een AC onduidelijk is.
- **Nooit:** wijzigen in `context/`, `decisions/`, `design-system/tokens.json` of deze spec.
