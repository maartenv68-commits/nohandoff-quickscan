// Copy-bron voor de vragenlijst (spec §8). Wijzigen = pull request met akkoord van Maarten.
export const DIMENSIES = ["Strategie", "Cultuur", "Proces", "Uitkomst"];

export const VRAGEN = [
  { id: "V1", dimensie: "Strategie", vraag: "Wie bepaalt hoe jullie team AI gebruikt?", antwoorden: [
    "Iedereen zelf", "De design lead heeft kaders opgesteld", "Het hoort bij onze propositie en planning", "Het zit in hoe we prijzen en verkopen"] },
  { id: "V2", dimensie: "Strategie", vraag: "Wat doen jullie met de tijdwinst van AI?", antwoorden: [
    "Daar denken we nog niet over na", "We merken het, maar prijs en planning blijven gelijk", "We plannen capaciteit er anders mee in", "We prijzen op uitkomst, niet op uren"] },
  { id: "V3", dimensie: "Cultuur", vraag: "Hoe delen jullie wat werkt met AI?", antwoorden: [
    "Niet, iedereen zoekt het zelf uit", "We delen prompts en lessen, maar los", "Er is een gedeelde promptbibliotheek met een eigenaar", "Prompts en context verbeteren is een vast onderdeel van het werk"] },
  { id: "V4", dimensie: "Cultuur", vraag: "Wie keurt wat AI maakt?", antwoorden: [
    "Wie het gebruikt, als die er tijd voor heeft", "We kijken ernaar, zonder vaste afspraken", "Vaste rollen: wie maakt en wie keurt", "Vaste stoppunten in de keten; een mens keurt altijd"] },
  { id: "V5", dimensie: "Proces", vraag: "Waar staat de context van een project: merk, besluiten, specs?", antwoorden: [
    "In hoofden, Slack en losse documenten", "Het design system staat, de rest is verspreid", "Op één plek, leesbaar voor mens en AI", "In één bron met versiegeschiedenis, die agents vanzelf lezen"] },
  { id: "V6", dimensie: "Proces", vraag: "Hoe gaat een ontwerp naar code?", antwoorden: [
    "Overdracht met schermen en uitleg", "Figma met componenten en tokens", "Via vaste stappen: intentie, spec, bouwen, controleren", "Agents bouwen tegen de spec, mensen keuren op stoppunten"] },
  { id: "V7", dimensie: "Uitkomst", vraag: "Wat levert AI jullie nu vooral op?", antwoorden: [
    "Het gaat sneller; of het beter is, weten we niet", "Consistenter werk, minder off-brand", "Minder uitlegrondes en sneller aanpassen", "Meer marge en een product dat makkelijk mee verandert"] },
  { id: "V8", dimensie: "Uitkomst", vraag: "Hoe weten jullie of het werkt?", antwoorden: [
    "Op gevoel", "Aan losse voorbeelden", "We meten een paar dingen voor en na", "Met vaste indicatoren die we elk kwartaal bekijken"] },
];

export const NIVEAUS = {
  1: { naam: "Los experimenteren", uitleg: "AI wordt gebruikt, maar ieder op z'n eigen manier. De snelheid is er, de grip nog niet.",
       stap: "Breng samen in kaart waar jullie ontwerpketen lekt. Begin met één workshop van 90 minuten op eigen werk." },
  2: { naam: "Gedeelde context", uitleg: "Er staan kaders en een design system. Maar besluiten en specs zijn nog verspreid, dus AI mist de helft.",
       stap: "Zet je context op één plek die mens en agent lezen: begin met een AGENTS.md en één intentiebrief." },
  3: { naam: "Gedeelde keten", uitleg: "Er is een vaste route van intentie tot controle. Nu is de vraag of het ook sneller én beter is.",
       stap: "Bewijs het met een pilot van tien dagen op één feature, met een nulmeting vooraf." },
  4: { naam: "AI-native waarde", uitleg: "AI zit in de keten, mensen keuren op vaste momenten, en de waarde komt terug in marge en product.",
       stap: "Veranker het: vaste eigenaren, een onderhoudsritme voor de context, en prijzen op uitkomst." },
};

export const ZWAKSTE_TIP = {
  Strategie: "Wie beslist over AI, en wat het jullie moet opleveren?",
  Cultuur: "Delen en keuren: wie verbetert de prompts, wie keurt de output?",
  Proces: "Waar staat de context, en hoe loopt een ontwerp naar code?",
  Uitkomst: "Wat levert het op, en hoe meten jullie dat?",
};
