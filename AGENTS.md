# Huisregels voor AI-agents · No Handoff Quickscan

Lees eerst, in deze volgorde:
1. `context/principes.md` en `context/merk.md`
2. `decisions/beslislog.md` (alleen besluiten met status *actief*)
3. De map van de feature waar je aan werkt: `product/FEAT-xxx/` (intentie, spec, figma)

## Altijd
- Werk op een branch (`spec/FEAT-xxx` of `feat/FEAT-xxx`). Nooit op `main`.
- Gebruik alleen tokens uit `design-system/tokens.json` (via `app/tokens.css`). Geen losse kleurcodes.
- Elk acceptatiecriterium (AC) uit de spec krijgt een test met het AC-nummer in de naam.
- Teksten voor bezoekers komen uit de copy-tabel in de spec (§8). Verzin geen eigen teksten.
- Onzeker of iets ontbreekt in de spec? Stop en schrijf `VRAAG:` in de pull request.
- Vul het PR-sjabloon volledig in, inclusief "Wat dit níet bewijst".

## Nooit
- Een besluit verzinnen of in `decisions/` schrijven. Dat doen mensen.
- Bestanden lezen in `decisions/archief/` of `discovery/notities/` (ruwe notities).
- Mergen. Een mens keurt en merget.
- Persoonsgegevens van bezoekers opslaan of loggen.

## Per feature
- `spec.md` §11 zegt wat je mag lezen, wat je mag wijzigen en wanneer je stopt. Dat gaat voor.

Houd dit bestand onder de 60 regels. Wijzigen = pull request met reden.
