import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bot,
  Building2,
  Calculator,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Download,
  FileSpreadsheet,
  FileText,
  Home,
  Landmark,
  Mail,
  MessageSquareText,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap
} from "lucide-react";
import "./styles.css";

const today = new Intl.DateTimeFormat("it-IT", {
  day: "2-digit",
  month: "long",
  year: "numeric"
}).format(new Date());

const tools = [
  {
    id: "imu",
    name: "IMU",
    icon: Building2,
    color: "bg-butter text-ink",
    headline: "Stima dell'imposta comunale con base catastale rivalutata.",
    inputs: [
      ["rendita", "Rendita catastale", 620, "euro"],
      ["aliquota", "Aliquota comune", 1.06, "%"],
      ["quota", "Quota possesso", 100, "%"],
      ["mesi", "Mesi possesso", 12, "mesi"]
    ],
    breakdown: (v) => {
      const base = Number(v.rendita) * 1.05 * 160;
      const quota = Number(v.quota) / 100;
      const mesi = Number(v.mesi) / 12;
      return [
        ["Base imponibile", base],
        ["Quota e periodo", quota * mesi],
        ["Aliquota applicata", Number(v.aliquota)]
      ];
    },
    calculate: (v) => {
      const base = Number(v.rendita) * 1.05 * 160;
      return base * (Number(v.aliquota) / 100) * (Number(v.quota) / 100) * (Number(v.mesi) / 12);
    },
    note: "Per immobili, pertinenze e quote di possesso. Aliquote e detrazioni vanno confermate sul regolamento comunale."
  },
  {
    id: "inps",
    name: "INPS",
    icon: Landmark,
    color: "bg-basil text-white",
    headline: "Pianificazione contributiva per professionisti e attivita autonome.",
    inputs: [
      ["reddito", "Reddito imponibile", 32000, "euro"],
      ["aliquota", "Aliquota contributiva", 26.07, "%"],
      ["acconti", "Acconti gia versati", 1800, "euro"]
    ],
    breakdown: (v) => [
      ["Contributi lordi", Number(v.reddito) * (Number(v.aliquota) / 100)],
      ["Acconti inseriti", Number(v.acconti)],
      ["Aliquota applicata", Number(v.aliquota)]
    ],
    calculate: (v) => Number(v.reddito) * (Number(v.aliquota) / 100) - Number(v.acconti),
    note: "Scenario contributivo indicativo per cassa e acconti. Minimali, massimali e gestione vanno verificati per il caso specifico."
  },
  {
    id: "f24",
    name: "F24",
    icon: FileSpreadsheet,
    color: "bg-pool text-white",
    headline: "Riepilogo netto di imposte, contributi, crediti e interessi.",
    inputs: [
      ["tributi", "Tributi", 1430, "euro"],
      ["contributi", "Contributi", 920, "euro"],
      ["crediti", "Crediti compensabili", 350, "euro"],
      ["sanzioni", "Sanzioni e interessi", 0, "euro"]
    ],
    breakdown: (v) => [
      ["Debiti complessivi", Number(v.tributi) + Number(v.contributi) + Number(v.sanzioni)],
      ["Crediti compensati", Number(v.crediti)],
      ["Saldo delega", Number(v.tributi) + Number(v.contributi) + Number(v.sanzioni) - Number(v.crediti)]
    ],
    calculate: (v) => Number(v.tributi) + Number(v.contributi) + Number(v.sanzioni) - Number(v.crediti),
    note: "Utile per controllare liquidita e compensazioni prima della compilazione della delega ufficiale."
  },
  {
    id: "payroll",
    name: "Busta paga",
    icon: WalletCards,
    color: "bg-tomato text-white",
    headline: "Simulazione del netto mensile a partire dalla RAL.",
    inputs: [
      ["ral", "RAL annua", 34000, "euro"],
      ["mensilita", "Mensilita", 13, "rate"],
      ["inps", "Contributi dipendente", 9.19, "%"],
      ["irpef", "Aliquota media IRPEF", 24, "%"]
    ],
    breakdown: (v) => {
      const lordo = Number(v.ral) / Number(v.mensilita);
      return [
        ["Lordo mensile", lordo],
        ["Contributi stimati", lordo * (Number(v.inps) / 100)],
        ["IRPEF stimata", lordo * (Number(v.irpef) / 100)]
      ];
    },
    calculate: (v) => {
      const lordo = Number(v.ral) / Number(v.mensilita);
      return lordo - lordo * (Number(v.inps) / 100) - lordo * (Number(v.irpef) / 100);
    },
    note: "Il netto effettivo dipende da detrazioni, addizionali, welfare, benefit, conguagli e contratto applicato."
  },
  {
    id: "flat",
    name: "Forfettario",
    icon: CircleDollarSign,
    color: "bg-ink text-white",
    headline: "Calcolo rapido dell'imposta sostitutiva su ricavi e coefficiente.",
    inputs: [
      ["ricavi", "Ricavi annui", 52000, "euro"],
      ["coefficiente", "Coefficiente redditivita", 78, "%"],
      ["imposta", "Imposta sostitutiva", 15, "%"],
      ["contributi", "Contributi deducibili", 4800, "euro"]
    ],
    breakdown: (v) => {
      const reddito = Number(v.ricavi) * (Number(v.coefficiente) / 100);
      return [
        ["Reddito lordo forfettario", reddito],
        ["Contributi deducibili", Number(v.contributi)],
        ["Imponibile fiscale", reddito - Number(v.contributi)]
      ];
    },
    calculate: (v) => {
      const imponibile = Number(v.ricavi) * (Number(v.coefficiente) / 100) - Number(v.contributi);
      return imponibile * (Number(v.imposta) / 100);
    },
    note: "Perfetto per stimare imposta, margine e acconti. Verifica sempre limiti di accesso e cause ostative."
  },
  {
    id: "cedolare",
    name: "Cedolare secca",
    icon: Scale,
    color: "bg-white text-ink",
    headline: "Stima della cedolare su canone annuo, aliquota e acconti.",
    inputs: [
      ["canone", "Canone annuo", 9600, "euro"],
      ["aliquota", "Aliquota cedolare", 21, "%"],
      ["acconto", "Acconto versato", 0, "euro"]
    ],
    breakdown: (v) => [
      ["Imposta lorda", Number(v.canone) * (Number(v.aliquota) / 100)],
      ["Acconto inserito", Number(v.acconto)],
      ["Aliquota applicata", Number(v.aliquota)]
    ],
    calculate: (v) => Number(v.canone) * (Number(v.aliquota) / 100) - Number(v.acconto),
    note: "Adatto a contratti ordinari e agevolati modificando l'aliquota. Controlla tipologia contrattuale e comune."
  }
];

const updates = [
  ["IMU", "Regole comunali e base catastale", "Controllo aliquote"],
  ["INPS", "Contributi, minimali e massimali", "Verifica gestione"],
  ["Busta paga", "Scaglioni, detrazioni e netto", "Scenario paghe"],
  ["Cedolare", "Locazioni ordinarie e agevolate", "Alert aliquote"]
];

const professionalItems = [
  ["Report immediato", "Riepilogo scaricabile con dati inseriti, risultato, dettaglio del calcolo e nota operativa."],
  ["Scenari a confronto", "Salva simulazioni nella sessione per valutare alternative, acconti e impatto sulla liquidita."],
  ["Controlli normativi", "Schede organizzate per modulo con aree da verificare prima di usare il dato per adempimenti reali."]
];

const officialSources = [
  "Agenzia delle Entrate",
  "INPS",
  "MEF",
  "Gazzetta Ufficiale"
];

const siteUrl = "https://burocalcolo.it";

const calculatorSeo = {
  imu: {
    slug: "imu",
    title: "Calcolo IMU online | BuroCalcolo",
    description: "Calcola una stima IMU online con rendita catastale, aliquota, quota e mesi di possesso. Report PDF orientativo incluso.",
    keywords: "calcolo imu, simulatore imu, imu online, rendita catastale, aliquota imu"
  },
  inps: {
    slug: "inps",
    title: "Calcolo contributi INPS online | BuroCalcolo",
    description: "Simula i contributi INPS inserendo reddito imponibile, aliquota e acconti versati. Utile per pianificare cassa e versamenti.",
    keywords: "calcolo inps, contributi inps, simulatore contributi, gestione separata"
  },
  f24: {
    slug: "f24",
    title: "Calcolo F24 online | BuroCalcolo",
    description: "Riepiloga tributi, contributi, crediti compensabili, sanzioni e interessi per stimare il saldo di una delega F24.",
    keywords: "calcolo f24, simulatore f24, delega f24, crediti compensabili"
  },
  payroll: {
    slug: "busta-paga",
    title: "Calcolo busta paga e netto mensile | BuroCalcolo",
    description: "Stima il netto mensile partendo da RAL, mensilita, contributi e aliquota media IRPEF. Report PDF scaricabile.",
    keywords: "calcolo busta paga, netto mensile, calcolo stipendio netto, ral netto"
  },
  flat: {
    slug: "regime-forfettario",
    title: "Calcolo regime forfettario online | BuroCalcolo",
    description: "Calcola una stima dell'imposta sostitutiva nel regime forfettario con ricavi, coefficiente, contributi e aliquota.",
    keywords: "calcolo forfettario, regime forfettario, imposta sostitutiva, partita iva forfettaria"
  },
  cedolare: {
    slug: "cedolare-secca",
    title: "Calcolo cedolare secca online | BuroCalcolo",
    description: "Stima la cedolare secca su canone annuo, aliquota e acconti versati per contratti ordinari o agevolati.",
    keywords: "calcolo cedolare secca, cedolare secca online, affitto cedolare, locazioni"
  }
};

const calculatorRoutes = tools.map((tool) => ({
  ...tool,
  ...calculatorSeo[tool.id],
  path: `/calcolatori/${calculatorSeo[tool.id].slug}`
}));

const footerLinks = [
  ["/chi-siamo", "Chi siamo"],
  ["/privacy-policy", "Privacy Policy"],
  ["/cookie-policy", "Cookie Policy"],
  ["/termini-e-condizioni", "Termini e condizioni"],
  ["/disclaimer", "Disclaimer"],
  ["/contatti", "Contatti"]
];

const legalPages = {
  "/chi-siamo": {
    eyebrow: "Identita del servizio",
    title: "Chi siamo",
    intro: "BuroCalcolo è una piattaforma online dedicata ai principali calcoli fiscali e previdenziali italiani, progettata per aiutare cittadini, lavoratori autonomi e imprese a ottenere rapidamente simulazioni e stime orientative.",
    sections: [
      ["Cosa facciamo", "Mettiamo a disposizione strumenti di simulazione, report PDF e un assistente digitale per aiutare l'utente a orientarsi tra dati fiscali, stime e controlli da effettuare."],
      ["A chi e rivolto", "Il servizio e pensato per utenti privati, freelance, piccoli imprenditori, locatori, consulenti e chiunque voglia avere una prima stima ordinata prima di confrontarsi con fonti ufficiali o professionisti abilitati."],
      ["Come lavoriamo", "I calcoli sono presentati in modo trasparente, con dati modificabili e note operative. Quando una norma, una aliquota o un caso personale richiedono conferma, il sito invita sempre a verificare fonti ufficiali e posizione individuale."],
      ["La nostra missione", "BuroCalcolo nasce con l'obiettivo di rendere più accessibili informazioni e simulazioni che spesso richiedono ricerche complesse tra normative, regolamenti e documentazione tecnica. Crediamo che cittadini, lavoratori autonomi, proprietari immobiliari e piccoli imprenditori debbano poter ottenere rapidamente una prima stima affidabile prima di rivolgersi a professionisti o enti competenti. Per questo sviluppiamo strumenti semplici, chiari e aggiornabili, con particolare attenzione alla trasparenza dei dati utilizzati e alla comprensibilità dei risultati."],
      ["Trasparenza e affidabilità", "BuroCalcolo è un progetto indipendente gestito da Matteo Cambielli. L'obiettivo del sito è fornire strumenti informativi e simulazioni orientative. I risultati ottenuti non sostituiscono verifiche professionali o fonti ufficiali, che restano sempre il riferimento principale per ogni adempimento fiscale, previdenziale o amministrativo."]
    ]
  },
  "/privacy-policy": {
    eyebrow: "Protezione dati",
    title: "Privacy Policy",
    intro: "La presente Privacy Policy descrive le modalità con cui BuroCalcolo raccoglie, utilizza e protegge i dati personali degli utenti che visitano il sito e utilizzano i servizi offerti.",
    sections: [
      ["1. Titolare del trattamento", "Titolare del trattamento: Matteo Cambielli. Contatto privacy: privacy@burocalcolo.it. Per qualsiasi richiesta relativa alla protezione dei dati personali o all'esercizio dei diritti previsti dalla normativa applicabile, e possibile contattare il titolare all'indirizzo indicato."],
      ["2. Dati raccolti", "Durante la navigazione e l'utilizzo del sito possono essere raccolti dati di navigazione, come indirizzo IP, data e ora della richiesta, browser, sistema operativo, tipo di dispositivo, pagine visitate e informazioni diagnostiche e di sicurezza. Possono inoltre essere trattati dati forniti volontariamente tramite calcolatori, moduli di contatto, report, assistente AI ed eventuali funzionalita future."],
      ["3. Finalita del trattamento", "I dati personali possono essere trattati per fornire i servizi richiesti, eseguire simulazioni e calcoli, generare report e risultati personalizzati, rispondere alle richieste di assistenza, garantire il corretto funzionamento del sito, prevenire utilizzi fraudolenti o dannosi, migliorare qualita, prestazioni e sicurezza del servizio, e adempiere ad obblighi di legge."],
      ["4. Base giuridica del trattamento", "Il trattamento viene effettuato sulla base dell'esecuzione di una richiesta dell'utente, del consenso quando richiesto, del legittimo interesse del titolare alla sicurezza e al miglioramento del servizio, oppure dell'adempimento di obblighi legali."],
      ["5. Assistente AI", "BuroCalcolo puo utilizzare tecnologie di Intelligenza Artificiale fornite da soggetti terzi per elaborare richieste e generare risposte automatiche. I dati inseriti volontariamente nell'assistente AI possono essere trasmessi ai fornitori tecnologici strettamente necessari all'elaborazione. Gli utenti sono invitati a non inserire dati sanitari, informazioni particolarmente sensibili, dati bancari, credenziali di accesso o dati personali di terzi senza autorizzazione."],
      ["6. Cookie e tecnologie analoghe", "BuroCalcolo utilizza cookie tecnici necessari al funzionamento del sito. Qualora vengano utilizzati cookie statistici, pubblicitari o di profilazione, questi saranno attivati esclusivamente nel rispetto della normativa applicabile e, ove richiesto, previo consenso dell'utente. Le informazioni dettagliate sono disponibili nella Cookie Policy."],
      ["7. Servizi di terze parti", "Per il funzionamento del sito possono essere utilizzati fornitori esterni quali servizi di hosting, CDN, strumenti di analisi statistica, servizi pubblicitari, fornitori di Intelligenza Artificiale e strumenti di monitoraggio e sicurezza. Tali soggetti possono trattare dati personali in qualita di autonomi titolari o responsabili del trattamento secondo le rispettive informative privacy."],
      ["8. Google AdSense e pubblicita", "BuroCalcolo potra mostrare annunci pubblicitari forniti da Google AdSense o da altri circuiti pubblicitari. Tali servizi potrebbero utilizzare cookie, identificatori online e tecnologie simili per mostrare annunci personalizzati o misurare le prestazioni pubblicitarie. L'attivazione avverra nel rispetto della normativa vigente e delle preferenze espresse dall'utente tramite il banner di consenso."],
      ["9. Conservazione dei dati", "I dati personali vengono conservati esclusivamente per il tempo necessario al raggiungimento delle finalita per cui sono stati raccolti. I dati tecnici possono essere conservati per sicurezza e manutenzione; le richieste inviate tramite moduli di contatto possono essere conservate fino a 24 mesi; i dati inseriti nei calcolatori vengono normalmente elaborati per fornire il risultato richiesto e non vengono conservati oltre il necessario."],
      ["10. Trasferimento dei dati all'estero", "Alcuni fornitori utilizzati dal sito potrebbero trattare dati personali in Paesi situati al di fuori dello Spazio Economico Europeo. In tali casi il trasferimento avviene nel rispetto delle garanzie previste dal Regolamento UE 2016/679 e dalle ulteriori normative applicabili."],
      ["11. Sicurezza", "BuroCalcolo adotta misure tecniche e organizzative ragionevoli volte a proteggere i dati personali da accessi non autorizzati, perdita, divulgazione, alterazione o utilizzo improprio. Tuttavia nessun sistema informatico puo garantire una sicurezza assoluta."],
      ["12. Diritti dell'interessato", "L'utente puo esercitare i diritti previsti dagli articoli 15-22 del GDPR, tra cui accesso, rettifica, cancellazione, limitazione del trattamento, opposizione, portabilita dei dati e revoca del consenso prestato. Le richieste possono essere inviate a privacy@burocalcolo.it. L'utente ha inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali."],
      ["13. Disclaimer", "I risultati forniti dai calcolatori, simulatori e strumenti presenti su BuroCalcolo hanno finalita esclusivamente informative e orientative. Le informazioni generate non costituiscono consulenza fiscale, tributaria, contabile, previdenziale, finanziaria o legale. Per decisioni aventi effetti economici, fiscali o giuridici e sempre opportuno rivolgersi a professionisti qualificati. BuroCalcolo non garantisce la completezza, l'aggiornamento o l'assenza di errori nei risultati generati dai calcolatori e declina ogni responsabilità per eventuali decisioni prese sulla base delle informazioni fornite."],
      ["14. Modifiche alla presente informativa", "La presente Privacy Policy puo essere aggiornata in qualsiasi momento per adeguarsi a modifiche normative, tecniche o organizzative. La versione piu recente sara sempre disponibile su questa pagina."]
    ]
  },
  "/cookie-policy": {
    eyebrow: "Cookie e consenso",
    title: "Cookie Policy",
    intro: "La presente Cookie Policy descrive l'utilizzo di cookie e tecnologie simili da parte di BuroCalcolo.",
    sections: [
      ["Cosa sono i cookie", "I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente durante la navigazione di un sito web. I cookie consentono di migliorare l'esperienza di navigazione, garantire il corretto funzionamento del sito, raccogliere statistiche anonime e, ove previsto, mostrare contenuti e annunci personalizzati."],
      ["Cookie tecnici", "BuroCalcolo utilizza cookie tecnici strettamente necessari al funzionamento del sito. Questi cookie permettono la corretta navigazione delle pagine, la gestione della sicurezza, il mantenimento delle preferenze dell'utente e il corretto funzionamento dei servizi richiesti. Poiche necessari al funzionamento del sito, tali cookie non richiedono il consenso preventivo dell'utente."],
      ["Cookie statistici", "BuroCalcolo puo utilizzare strumenti di analisi statistica per comprendere come gli utenti utilizzano il sito e migliorarne le prestazioni. Qualora tali strumenti raccolgano dati personali o utilizzino cookie non anonimizzati, il loro utilizzo avverra esclusivamente previo consenso dell'utente, ove richiesto dalla normativa applicabile."],
      ["Cookie pubblicitari", "BuroCalcolo puo utilizzare servizi pubblicitari forniti da terze parti, inclusi Google AdSense e piattaforme equivalenti. Tali servizi possono utilizzare cookie, identificatori online e tecnologie analoghe per misurare l'efficacia degli annunci, prevenire attivita fraudolente, limitare la ripetizione degli annunci, personalizzare i contenuti pubblicitari e fornire statistiche aggregate agli inserzionisti. L'utilizzo di cookie pubblicitari e di profilazione avverra solo previo consenso dell'utente quando richiesto dalla normativa vigente."],
      ["Gestione del consenso", "Gli utenti residenti nello Spazio Economico Europeo, nel Regno Unito o in Svizzera possono esprimere, modificare o revocare le proprie preferenze relative ai cookie tramite il banner di consenso presente sul sito. Le preferenze espresse possono essere aggiornate in qualsiasi momento."],
      ["Gestione dei cookie tramite browser", "L'utente puo controllare, limitare o eliminare i cookie direttamente tramite le impostazioni del proprio browser. La disabilitazione di alcuni cookie potrebbe influire sul corretto funzionamento di determinate funzionalita del sito."],
      ["Modifiche alla Cookie Policy", "La presente Cookie Policy puo essere aggiornata in qualsiasi momento per adeguarsi a modifiche normative, tecniche o organizzative. La versione piu recente sara sempre disponibile su questa pagina."]
    ]
  },
  "/termini-e-condizioni": {
    eyebrow: "Regole d'uso",
    title: "Termini e condizioni",
    intro: "L'accesso e l'utilizzo del sito BuroCalcolo implicano l'accettazione integrale dei presenti Termini e Condizioni. Qualora l'utente non accetti una o piu disposizioni, e invitato a interrompere l'utilizzo del sito.",
    sections: [
      ["1. Natura del servizio", "BuroCalcolo mette a disposizione strumenti informativi, simulatori, calcolatori, report e contenuti destinati a fornire stime e indicazioni orientative in ambito fiscale, previdenziale, economico e amministrativo. I servizi offerti non costituiscono consulenza fiscale, tributaria, contabile, finanziaria o legale e non sostituiscono il parere di professionisti qualificati, enti pubblici, CAF, commercialisti, consulenti del lavoro, avvocati o altre figure abilitate. BuroCalcolo è gestito da Matteo Cambielli, che agisce in qualità di titolare del sito e dei servizi offerti."],
      ["2. Utilizzo del sito", "L'utente si impegna a utilizzare il sito in modo lecito, corretto e conforme alla normativa vigente. E vietato utilizzare il servizio per compromettere la sicurezza del sito, tentare accessi non autorizzati, introdurre malware o codice dannoso, interferire con il corretto funzionamento della piattaforma o utilizzare strumenti automatici per sovraccaricare il servizio."],
      ["3. Accuratezza dei risultati", "I risultati generati dai calcolatori e dai simulatori dipendono esclusivamente dai dati inseriti dall'utente e dalle regole implementate nel sistema. Sebbene venga prestata la massima attenzione all'aggiornamento delle formule e dei parametri utilizzati, BuroCalcolo non garantisce la completezza, l'accuratezza o l'aggiornamento costante dei risultati. Normative, aliquote, regolamenti locali e situazioni personali specifiche possono influire significativamente sui risultati effettivi."],
      ["4. Report e documenti generati", "I report e i documenti generati tramite il sito hanno esclusivamente finalita informative. Essi non costituiscono documentazione ufficiale ne possono essere utilizzati come certificazione, attestazione o prova nei confronti di enti pubblici o soggetti terzi."],
      ["5. Assistente AI", "BuroCalcolo puo utilizzare sistemi di Intelligenza Artificiale per fornire supporto agli utenti. Le risposte generate dall'assistente AI sono automatiche e possono contenere errori, omissioni, interpretazioni non corrette o informazioni non aggiornate. L'utente e tenuto a verificare autonomamente ogni informazione ottenuta tramite l'assistente prima di assumere decisioni economiche, fiscali, amministrative o legali."],
      ["6. Limitazione di responsabilita", "Nei limiti consentiti dalla legge, il titolare del sito non potra essere ritenuto responsabile per errori o omissioni nei contenuti, interruzioni del servizio, indisponibilita temporanea del sito, perdite economiche dirette o indirette, decisioni prese dall'utente sulla base delle informazioni fornite, o danni derivanti dall'utilizzo o dall'impossibilita di utilizzo del servizio. L'utilizzo del sito avviene sotto la responsabilita esclusiva dell'utente."],
      ["7. Proprieta intellettuale", "Salvo diversa indicazione, contenuti, testi, loghi, marchi, elementi grafici, codice e funzionalita presenti su BuroCalcolo sono protetti dalla normativa applicabile in materia di proprieta intellettuale. Non e consentita la copia, riproduzione, distribuzione o modifica dei contenuti senza preventiva autorizzazione del titolare."],
      ["8. Disponibilita del servizio", "BuroCalcolo si impegna a mantenere il servizio disponibile e aggiornato, ma non garantisce la continuita operativa ininterrotta. Il sito puo essere sospeso temporaneamente per manutenzione, aggiornamenti tecnici o cause indipendenti dalla volonta del titolare."],
      ["9. Modifiche ai Termini", "BuroCalcolo si riserva il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni. Le modifiche entreranno in vigore dalla data di pubblicazione sul sito."],
      ["10. Legge applicabile", "I presenti Termini e Condizioni sono regolati dalla legge italiana. Per quanto non espressamente previsto, si applicano le disposizioni della normativa italiana ed europea vigente."],
      ["11. Contatti", "Per qualsiasi informazione relativa ai presenti Termini e Condizioni e possibile contattare privacy@burocalcolo.it."],
      ["12. Requisiti di utilizzo", "L'utilizzo del sito è consentito esclusivamente a utenti che abbiano la capacità di agire secondo la normativa applicabile. I minori dovrebbero utilizzare il servizio sotto la supervisione di un genitore o di chi esercita la responsabilità genitoriale."]
    ]
  },
  "/disclaimer": {
    eyebrow: "Avvertenze importanti",
    title: "Disclaimer",
    intro: "BuroCalcolo e uno strumento informativo progettato per fornire simulazioni, stime, calcoli e contenuti orientativi in materia fiscale, previdenziale, economica e amministrativa. Prima di utilizzare risultati, report o risposte generate dal sito per adempimenti reali, e necessario verificare attentamente i dati inseriti, la normativa applicabile e le fonti ufficiali di riferimento.",
    sections: [
      ["Nessuna consulenza professionale", "I contenuti presenti su BuroCalcolo non costituiscono consulenza fiscale, tributaria, contabile, previdenziale, finanziaria, legale o del lavoro. L'utilizzo del sito non instaura alcun rapporto professionale tra l'utente e il titolare del servizio. Per decisioni operative, dichiarazioni fiscali, pratiche amministrative o scelte con conseguenze economiche e giuridiche e opportuno rivolgersi a professionisti qualificati o agli enti competenti."],
      ["Accuratezza delle informazioni", "BuroCalcolo si impegna a mantenere formule, parametri e contenuti il piu possibile aggiornati. Tuttavia non viene fornita alcuna garanzia circa completezza delle informazioni, assenza di errori, aggiornamento costante dei dati o applicabilita dei risultati a casi specifici. Normative, aliquote, regolamenti locali, interpretazioni amministrative e situazioni personali possono variare nel tempo e incidere sui risultati ottenuti."],
      ["Simulazioni e risultati", "I risultati generati dai calcolatori dipendono esclusivamente dai dati inseriti dall'utente e dalle regole implementate nel sistema. I valori restituiti devono essere considerati esclusivamente stime orientative e non rappresentano certificazioni, attestazioni o documenti ufficiali."],
      ["Assistente AI", "BuroCalcolo puo utilizzare sistemi di Intelligenza Artificiale per fornire supporto informativo agli utenti. Le risposte generate automaticamente possono contenere errori, omissioni, informazioni non aggiornate o interpretazioni non corrette. Le informazioni fornite dall'assistente AI devono essere sempre verificate mediante fonti ufficiali o professionisti qualificati prima di essere utilizzate per prendere decisioni fiscali, economiche, amministrative o legali."],
      ["Responsabilita dell'utente", "L'utente resta l'unico responsabile dei dati inseriti nel sito, della verifica delle informazioni ottenute, del controllo delle fonti ufficiali e delle decisioni assunte sulla base dei risultati forniti."],
      ["Limitazione di responsabilita", "Nei limiti consentiti dalla legge, il titolare di BuroCalcolo non potra essere ritenuto responsabile per danni diretti o indiretti, perdite economiche, errori di calcolo, ritardi, omissioni o decisioni adottate dall'utente sulla base delle informazioni, simulazioni o risposte generate dal sito."],
      ["Fonti ufficiali", "Per adempimenti fiscali, previdenziali e amministrativi fanno sempre fede le fonti ufficiali competenti, tra cui Agenzia delle Entrate, INPS, Ministero dell'Economia e delle Finanze, Gazzetta Ufficiale della Repubblica Italiana, regolamenti comunali applicabili e altra documentazione normativa ufficiale."]
    ]
  }
};

function formatEuro(value) {
  const safe = Number.isFinite(value) ? Math.max(value, 0) : 0;
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(safe);
}

function formatValue(label, value) {
  if (label.toLowerCase().includes("aliquota") || label.toLowerCase().includes("coefficiente")) {
    return `${String(value).replace(".", ",")}%`;
  }
  if (label.toLowerCase().includes("mesi")) return `${value} mesi`;
  if (label.toLowerCase().includes("mensilita")) return `${value}`;
  return formatEuro(Number(value));
}

function buildAssistantPrompt(question, tool, result, valuesForTool) {
  return [
    "Sei l'assistente AI di BuroCalcolo, una web app italiana per calcoli fiscali.",
    "Rispondi in italiano, in modo chiaro, utile e breve.",
    "Se la domanda non riguarda il fisco, rispondi comunque in modo naturale e poi, se utile, offri aiuto sui calcoli fiscali.",
    "Non inventare leggi aggiornate in tempo reale. Per norme, aliquote locali e casi personali invita a verificare fonti ufficiali.",
    `Modulo attivo: ${tool.name}.`,
    `Risultato stimato attuale: ${formatEuro(result)}.`,
    `Dati del modulo: ${JSON.stringify(valuesForTool)}.`,
    `Domanda utente: ${question}`
  ].join("\n");
}

async function askFreeAi(prompt) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const url = `https://gen.pollinations.ai/text/${encodeURIComponent(prompt)}?model=openai`;
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error("AI unavailable");
    const text = await response.text();
    return text.trim().slice(0, 900);
  } finally {
    window.clearTimeout(timeout);
  }
}

function buildLocalAssistantReply(question, tool, result) {
  const normalized = question.toLowerCase().trim();

  if (/^(ciao|salve|buongiorno|buonasera|hey|hello)\b/.test(normalized)) {
    return "Ciao! Sono qui. Posso aiutarti sia con una domanda veloce sia con un calcolo fiscale: IMU, INPS, F24, busta paga, forfettario o cedolare secca.";
  }

  if (normalized.includes("grazie")) {
    return "Prego! Quando vuoi posso aiutarti a leggere un risultato, preparare un report o capire quali dati controllare prima di procedere.";
  }

  if (normalized.includes("legge") || normalized.includes("normativa") || normalized.includes("aggiorna")) {
    return "Per aggiornamenti normativi affidabili servono fonti ufficiali e una verifica periodica. Nell'app trovi il centro normativo per organizzare i controlli, ma aliquote locali e casi personali vanno sempre confermati prima dell'uso operativo.";
  }

  if (normalized.includes("report") || normalized.includes("scaric")) {
    return `Puoi scaricare subito il report del modulo ${tool.name}. Include dati inseriti, dettaglio calcolo, risultato stimato pari a ${formatEuro(result)} e nota operativa.`;
  }

  if (normalized.includes("imu") || normalized.includes("inps") || normalized.includes("f24") || normalized.includes("busta") || normalized.includes("forfettario") || normalized.includes("cedolare")) {
    return `Per questa domanda ti conviene partire dal modulo ${tool.name}: il risultato attuale e ${formatEuro(result)}. Se vuoi, modifica i campi del calcolatore e poi scarica il report per avere un riepilogo ordinato.`;
  }

  return `Ho capito. Posso aiutarti su questa richiesta e, se vuoi collegarla al calcolo attivo, il modulo selezionato e ${tool.name} con risultato stimato ${formatEuro(result)}.`;
}

function formatPdfDetail(label, value) {
  if (label.toLowerCase().includes("aliquota")) return `${String(value).replace(".", ",")}%`;
  return formatEuro(value);
}

function drawRoundedBar(doc, x, y, width, height, fillColor) {
  doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
  doc.roundedRect(x, y, width, height, 2, 2, "F");
}

function getCurrentPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function getToolFromPath(path) {
  return calculatorRoutes.find((tool) => path === tool.path);
}

function setMeta(name, content, attribute = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(path) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `${siteUrl}${path === "/" ? "" : path}`);
}

function setStructuredData(data) {
  const id = "burocalcolo-jsonld";
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function updateSeo(path, activeTool) {
  const routeTool = getToolFromPath(path);
  const legalPage = legalPages[path];
  const contactPage = path === "/contatti";
  const title = routeTool?.title || (legalPage ? `${legalPage.title} | BuroCalcolo` : contactPage ? "Contatti | BuroCalcolo" : "BuroCalcolo | Calcolo fiscale italiano con AI");
  const description = routeTool?.description || legalPage?.intro || (contactPage ? "Contatta BuroCalcolo per informazioni sui calcolatori fiscali, report PDF e pagine informative." : "Simulatori fiscali italiani per IMU, INPS, F24, busta paga, regime forfettario e cedolare secca con report PDF e assistente AI.");
  const keywords = routeTool?.keywords || "calcolo fiscale, imu, inps, f24, busta paga, forfettario, cedolare secca";
  const canonicalPath = routeTool?.path || path;

  document.title = title;
  setMeta("description", description);
  setMeta("keywords", keywords);
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`, "property");
  setMeta("twitter:card", "summary_large_image");
  setCanonical(canonicalPath);
  setStructuredData({
    "@context": "https://schema.org",
    "@type": routeTool ? "WebApplication" : "WebSite",
    name: routeTool ? `${routeTool.name} - BuroCalcolo` : "BuroCalcolo",
    url: `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`,
    description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    potentialAction: routeTool || activeTool ? {
      "@type": "UseAction",
      target: `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`
    } : undefined
  });
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const initialTool = getToolFromPath(currentPath);
  const [activeId, setActiveId] = useState(initialTool?.id || "imu");
  const [values, setValues] = useState(() =>
    Object.fromEntries(tools.map((tool) => [tool.id, Object.fromEntries(tool.inputs.map(([key, , value]) => [key, value]))]))
  );
  const [messages, setMessages] = useState([
    { role: "ai", text: "Ciao, sono l'assistente di BuroCalcolo. Posso aiutarti a leggere il risultato, creare una checklist o capire quali dati controllare prima di procedere." }
  ]);
  const [draft, setDraft] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [savedScenarios, setSavedScenarios] = useState([]);

  const activeTool = tools.find((tool) => tool.id === activeId);
  const currentValues = values[activeId];
  const result = useMemo(() => activeTool.calculate(currentValues), [activeTool, currentValues]);
  const breakdown = useMemo(() => activeTool.breakdown(currentValues), [activeTool, currentValues]);
  const reportCode = useMemo(() => `BC-${activeId.toUpperCase()}-${Math.abs(Math.round(result * 13)).toString().slice(0, 6)}`, [activeId, result]);

  useEffect(() => {
    const onPopState = () => setCurrentPath(getCurrentPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const routeTool = getToolFromPath(currentPath);
    if (routeTool && routeTool.id !== activeId) setActiveId(routeTool.id);
  }, [activeId, currentPath]);

  useEffect(() => {
    updateSeo(currentPath, activeTool);
  }, [activeTool, currentPath]);

  const handleInput = (key, value) => {
    setValues((current) => ({
      ...current,
      [activeId]: { ...current[activeId], [key]: value }
    }));
  };

  const downloadReport = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 16;
    const maxBar = 74;
    const chartValues = breakdown.map(([, value]) => Math.abs(Number(value)) || 0);
    const maxValue = Math.max(...chartValues, Math.abs(result), 1);

    doc.setFillColor(18, 20, 23);
    doc.roundedRect(margin, 12, pageWidth - margin * 2, 42, 5, 5, "F");
    doc.setTextColor(247, 216, 109);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("BuroCalcolo", margin + 8, 25);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text(`Report ${activeTool.name}`, margin + 8, 39);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${reportCode}  |  ${today}`, margin + 8, 48);

    doc.setTextColor(18, 20, 23);
    doc.setFillColor(247, 244, 236);
    doc.roundedRect(margin, 62, pageWidth - margin * 2, 34, 4, 4, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("RISULTATO STIMATO", margin + 7, 74);
    doc.setFontSize(24);
    doc.text(formatEuro(result), margin + 7, 88);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(doc.splitTextToSize(activeTool.headline, 78), pageWidth - margin - 82, 74);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Dati inseriti", margin, 111);
    let y = 120;
    activeTool.inputs.forEach(([key, label], index) => {
      const colX = index % 2 === 0 ? margin : 108;
      if (index % 2 === 0 && index > 0) y += 18;
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(colX, y - 6, 82, 13, 3, 3, "F");
      doc.setTextColor(95, 97, 100);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text(label, colX + 4, y - 1);
      doc.setTextColor(18, 20, 23);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(formatValue(label, currentValues[key]), colX + 4, y + 5);
    });

    y += 30;
    doc.setTextColor(18, 20, 23);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Dettaglio grafico", margin, y);
    y += 10;
    breakdown.forEach(([label, value], index) => {
      const numeric = Math.abs(Number(value)) || 0;
      const barWidth = Math.max(12, (numeric / maxValue) * maxBar);
      const colors = [[47, 125, 91], [27, 140, 168], [224, 86, 63]];
      doc.setTextColor(18, 20, 23);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(label, margin, y);
      doc.setFont("helvetica", "normal");
      doc.text(formatPdfDetail(label, value), pageWidth - margin - 44, y);
      doc.setFillColor(232, 228, 218);
      doc.roundedRect(margin, y + 4, maxBar, 5, 2, 2, "F");
      drawRoundedBar(doc, margin, y + 4, barWidth, 5, colors[index % colors.length]);
      y += 18;
    });

    y += 6;
    doc.setFillColor(18, 20, 23);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 33, 4, 4, "F");
    doc.setTextColor(247, 216, 109);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Nota operativa", margin + 7, y + 10);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(doc.splitTextToSize(activeTool.note, pageWidth - margin * 2 - 14), margin + 7, y + 19);

    doc.setTextColor(95, 97, 100);
    doc.setFontSize(8);
    doc.text(
      doc.splitTextToSize(
        "Simulazione informativa. Prima di inviare dichiarazioni, pagamenti o deleghe e necessario verificare norme, aliquote locali e posizione personale.",
        pageWidth - margin * 2
      ),
      margin,
      282
    );

    doc.save(`${reportCode.toLowerCase()}-${activeTool.id}.pdf`);
  };

  const selectTool = (toolId) => {
    const nextTool = calculatorRoutes.find((tool) => tool.id === toolId);
    setActiveId(toolId);
    if (nextTool && window.location.pathname !== nextTool.path) {
      window.history.pushState({}, "", nextTool.path);
      setCurrentPath(nextTool.path);
    }
    window.setTimeout(() => {
      document.getElementById("calcolatori")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const saveScenario = () => {
    const scenario = {
      id: `${reportCode}-${Date.now()}`,
      module: activeTool.name,
      result,
      date: today
    };
    setSavedScenarios((current) => [scenario, ...current].slice(0, 4));
  };

  const sendMessage = async () => {
    if (!draft.trim() || isThinking) return;
    const question = draft.trim();
    const userMessage = { role: "user", text: question };
    setMessages((current) => [
      ...current,
      userMessage
    ]);
    setDraft("");
    setIsThinking(true);

    try {
      const prompt = buildAssistantPrompt(question, activeTool, result, currentValues);
      const aiText = await askFreeAi(prompt);
      setMessages((current) => [...current, { role: "ai", text: aiText || buildLocalAssistantReply(question, activeTool, result) }]);
    } catch {
      setMessages((current) => [...current, { role: "ai", text: buildLocalAssistantReply(question, activeTool, result) }]);
    } finally {
      setIsThinking(false);
    }
  };

  if (currentPath === "/contatti") {
    return <ContactPage />;
  }

  if (currentPath !== "/" && legalPages[currentPath]) {
    return <InfoPage page={legalPages[currentPath]} />;
  }

  if (currentPath !== "/" && !getToolFromPath(currentPath)) {
    return <InfoPage page={{
      eyebrow: "Pagina non trovata",
      title: "Questa pagina non esiste",
      intro: "Il link che hai aperto non corrisponde a una sezione disponibile di BuroCalcolo.",
      sections: [["Torna alla home", "Puoi rientrare dalla pagina principale e continuare a usare i calcolatori fiscali."]]
    }} />;
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(247,216,109,.62),transparent_28%),linear-gradient(115deg,rgba(255,255,255,.92),rgba(47,125,91,.12)_48%,rgba(27,140,168,.17))]" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-8 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[1fr_.92fr] lg:px-8">
          <nav className="col-span-full flex items-center justify-between rounded-full border border-ink/10 bg-white/70 px-4 py-3 shadow-insetGlow backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-ink text-butter">
                <Calculator size={21} />
              </div>
              <span className="text-lg font-black tracking-normal">BuroCalcolo</span>
            </div>
            <div className="hidden items-center gap-4 text-sm font-semibold text-ink/70 lg:flex">
              <a href="/calcolatori/imu">Calcolatori</a>
              <a href="#report">Report</a>
              <a href="#ai">Assistente AI</a>
            </div>
          </nav>

          <div className="flex flex-col justify-center pb-4">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-2 text-sm font-bold shadow-insetGlow">
              <Sparkles size={16} className="text-tomato" />
              Calcoli fiscali chiari, report pronti e decisioni piu veloci
            </div>
            <h1 className="max-w-4xl text-[clamp(3.15rem,7vw,7.8rem)] font-black leading-[.87] tracking-normal">
              BuroCalcolo
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/72 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              La suite fiscale italiana per stimare imposte, contributi e scenari di cassa in pochi secondi. Inserisci i dati, confronta il risultato e scarica un report PDF ordinato da condividere o archiviare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#calcolatori" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white shadow-panel">
                Inizia il calcolo <ChevronRight size={18} />
              </a>
              <a href="#report" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 font-bold">
                Guarda il report <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-ink/10 bg-white/78 p-3 shadow-panel backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-2">
                {calculatorRoutes.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <a
                      href={tool.path}
                      key={tool.id}
                      onClick={(event) => {
                        event.preventDefault();
                        selectTool(tool.id);
                      }}
                      className={`group rounded-[1.35rem] border p-4 text-left transition hover:-translate-y-1 ${
                        activeId === tool.id ? "border-ink bg-ink text-white" : "border-ink/10 bg-paper/80"
                      }`}
                    >
                      <span className={`mb-5 grid size-11 place-items-center rounded-full sm:mb-7 ${activeId === tool.id ? "bg-white text-ink" : tool.color}`}>
                        <Icon size={20} />
                      </span>
                      <span className="block text-xl font-black">{tool.name}</span>
                      <span className={`mt-2 block text-sm ${activeId === tool.id ? "text-white/70" : "text-ink/60"}`}>
                        {tool.headline}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-span-full grid gap-3 pb-4 sm:grid-cols-3 sm:gap-4">
            <Metric icon={ClipboardCheck} label="Moduli fiscali" value="6" />
            <Metric icon={FileText} label="Report PDF" value="1 click" />
            <Metric icon={ShieldCheck} label="Esperienza clienti" value="Pro" />
          </div>
        </div>
      </section>

      <section id="calcolatori" className="mx-auto grid max-w-7xl gap-6 scroll-mt-3 px-4 py-8 sm:px-5 sm:py-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="rounded-[1.5rem] border border-ink/10 bg-white p-4 shadow-panel md:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[.16em] text-basil">Area calcolo</p>
              <h2 className="text-3xl font-black tracking-normal">Calcolatore {activeTool.name}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/62">{activeTool.headline}</p>
            </div>
            <button onClick={downloadReport} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-bold">
              <Download size={18} /> Scarica report
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {activeTool.inputs.map(([key, label, , suffix]) => (
              <label key={key} className="rounded-2xl border border-ink/10 bg-paper/75 p-4">
                <span className="flex items-center justify-between gap-3 text-sm font-bold text-ink/62">
                  {label}
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-ink/48">{suffix}</span>
                </span>
                <input
                  type="number"
                  value={values[activeId][key]}
                  onChange={(event) => handleInput(key, event.target.value)}
                  className="mt-2 w-full bg-transparent text-3xl font-black outline-none"
                />
              </label>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[1.35rem] bg-ink p-5 text-white md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-butter">Risultato stimato</p>
              <p className="mt-2 text-[clamp(2.5rem,8vw,5.6rem)] font-black leading-none tracking-normal">{formatEuro(result)}</p>
              <p className="mt-4 max-w-2xl text-white/68">{activeTool.note}</p>
            </div>
            <div className="grid content-end gap-2">
              <button onClick={downloadReport} className="rounded-full bg-butter px-5 py-3 font-black text-ink">Genera report</button>
              <button onClick={saveScenario} className="rounded-full border border-white/20 px-5 py-3 font-bold">Salva scenario</button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {breakdown.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-ink/10 bg-paper p-4">
                <p className="text-sm font-bold text-ink/55">{label}</p>
                <p className="mt-2 text-2xl font-black">
                  {label.toLowerCase().includes("aliquota") ? `${String(value).replace(".", ",")}%` : formatEuro(value)}
                </p>
              </div>
            ))}
          </div>

          <article className="mt-5 rounded-[1.25rem] border border-ink/10 bg-paper p-5">
            <h2 className="text-2xl font-black">Come usare il calcolatore {activeTool.name}</h2>
            <p className="mt-3 leading-7 text-ink/68">
              Inserisci i dati richiesti, controlla il risultato stimato e scarica il report PDF. Questo strumento e pensato per una prima valutazione orientativa: per pagamenti, dichiarazioni o pratiche ufficiali verifica sempre aliquote, scadenze e fonti istituzionali.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {calculatorRoutes.map((tool) => (
                <a key={tool.id} href={tool.path} className="rounded-full border border-ink/15 bg-white px-3 py-2 text-sm font-bold text-ink/65">
                  {tool.name}
                </a>
              ))}
            </div>
          </article>
        </div>

        <aside className="grid gap-4">
          <div id="report" className="rounded-[1.5rem] border border-ink/10 bg-white p-4 shadow-panel">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-ink text-butter">
                <FileText size={19} />
              </div>
              <div>
                <h3 className="font-black">Report fiscale</h3>
                <p className="text-sm text-ink/60">{reportCode}</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-paper p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-ink/58">Modulo</span>
                <b>{activeTool.name}</b>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-ink/58">Data</span>
                <b>{today}</b>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-ink/58">Totale stimato</span>
                <b>{formatEuro(result)}</b>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <button onClick={downloadReport} className="rounded-full bg-ink px-5 py-3 font-black text-white">Scarica PDF</button>
              <button onClick={saveScenario} className="rounded-full border border-ink/15 px-5 py-3 font-bold">Aggiungi agli scenari</button>
            </div>
          </div>

          <div id="ai" className="rounded-[1.5rem] border border-ink/10 bg-white p-4 shadow-panel">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-basil text-white">
                <RefreshCw size={19} />
              </div>
              <div>
                <h3 className="font-black">Centro normativo</h3>
                <p className="text-sm text-ink/60">Aree fiscali e fonti ufficiali da monitorare.</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {updates.map(([name, title, state]) => (
                <div key={name} className="rounded-2xl bg-paper p-3">
                  <div className="flex items-center justify-between gap-3">
                    <b>{name}</b>
                    <Zap size={16} className="text-tomato" />
                  </div>
                  <p className="mt-1 text-sm text-ink/65">{title}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-basil">{state}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-3">
              <p className="text-xs font-black uppercase tracking-[.14em] text-basil">Fonti ufficiali</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {officialSources.map((source) => (
                  <span key={source} className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-ink/65">{source}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 sm:px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:pb-12">
        <div className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-panel">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-full bg-butter text-ink">
              <ShieldCheck size={19} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-normal">Area professionale</h2>
              <p className="text-sm text-ink/60">Strumenti essenziali per lavorare su simulazioni fiscali in modo ordinato.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {professionalItems.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-paper p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-basil" />
                  <b>{title}</b>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink/66">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-ink p-4 text-white">
            <div className="flex items-center gap-2">
              <CalendarCheck size={18} className="text-butter" />
              <b>Scenario salvato</b>
            </div>
            {savedScenarios.length === 0 ? (
              <p className="mt-2 text-sm leading-6 text-white/62">Salva un calcolo per vederlo qui e confrontarlo con le prossime simulazioni.</p>
            ) : (
              <div className="mt-3 grid gap-2">
                {savedScenarios.map((scenario) => (
                  <div key={scenario.id} className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm">
                    <span>{scenario.module}</span>
                    <b>{formatEuro(scenario.result)}</b>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-ink p-4 text-white shadow-panel">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-butter text-ink">
                <MessageSquareText size={19} />
              </div>
              <div>
                <h2 className="font-black">Assistente AI</h2>
                <p className="text-sm text-white/58">Risposte guidate sul calcolo attivo e sui controlli da fare.</p>
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">Attivo</span>
          </div>
          <div className="h-80 overflow-auto rounded-[1.1rem] bg-white/7 p-3">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-butter text-ink" : "bg-white text-ink"}`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
              placeholder="Scrivi una domanda, anche solo ciao"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45"
            />
            <button disabled={isThinking} onClick={sendMessage} className="rounded-full bg-butter px-5 py-3 font-black text-ink disabled:cursor-wait disabled:opacity-70">
              {isThinking ? "..." : "Invia"}
            </button>
          </div>
        </div>
      </section>
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-[1.25rem] border border-ink/10 bg-white/65 p-4 shadow-insetGlow backdrop-blur">
      <div className="flex items-center gap-2 text-ink/58">
        <Icon size={17} />
        <p className="text-sm font-bold">{label}</p>
      </div>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-5 lg:grid-cols-[1fr_1.25fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-butter text-ink">
              <Calculator size={20} />
            </div>
            <b className="text-xl">BuroCalcolo</b>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/62">
            © 2026 BuroCalcolo<br />
            Strumenti informativi a scopo orientativo.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-butter">Calcolatori</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              {calculatorRoutes.map((tool) => (
                <a key={tool.id} href={tool.path}>{tool.name}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-butter">Pagine</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <a href="/">Home</a>
              <a href="/chi-siamo">Chi siamo</a>
              <a href="/contatti">Contatti</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-butter">Legale</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/termini-e-condizioni">Termini e condizioni</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-butter">Indicazioni</p>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Prima di attivare annunci, configura privacy, cookie banner/CMP e consenso per utenti europei secondo i servizi effettivamente installati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LegalShell({ children }) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-ink text-butter">
            <Calculator size={20} />
          </div>
          <b className="text-lg">BuroCalcolo</b>
        </a>
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold">
          <Home size={17} /> Home
        </a>
      </nav>
      {children}
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}

function CookieBanner() {
  const [choice, setChoice] = useState(() => {
    try {
      return window.localStorage.getItem("burocalcolo-cookie-consent") || "";
    } catch {
      return "";
    }
  });
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    try {
      const saved = window.localStorage.getItem("burocalcolo-cookie-consent");
      const parsed = saved ? JSON.parse(saved) : null;
      return {
        technical: true,
        statistics: Boolean(parsed?.statistics),
        marketing: Boolean(parsed?.marketing)
      };
    } catch {
      return { technical: true, statistics: false, marketing: false };
    }
  });

  useEffect(() => {
    const openPreferences = () => {
      setChoice("");
      setShowPreferences(true);
    };
    window.addEventListener("burocalcolo-open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("burocalcolo-open-cookie-preferences", openPreferences);
  }, []);

  const saveChoice = (nextPreferences) => {
    const payload = {
      technical: true,
      statistics: Boolean(nextPreferences.statistics),
      marketing: Boolean(nextPreferences.marketing),
      updatedAt: new Date().toISOString()
    };
    try {
      window.localStorage.setItem("burocalcolo-cookie-consent", JSON.stringify(payload));
    } catch {
      // La scelta resta valida per la sessione anche se il browser blocca lo storage.
    }
    setPreferences(payload);
    setChoice("saved");
    setShowPreferences(false);
  };

  const rejectAll = () => saveChoice({ statistics: false, marketing: false });
  const acceptAll = () => saveChoice({ statistics: true, marketing: true });
  const saveSelected = () => saveChoice(preferences);

  const updatePreference = (key, value) => {
    setPreferences((current) => ({ ...current, [key]: value }));
  };

  if (choice) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto grid max-w-5xl gap-4 rounded-[1.25rem] border border-ink/10 bg-white p-4 shadow-panel sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-black">Cookie e preferenze</p>
          <div className="mt-1 grid gap-2 text-sm leading-6 text-ink/65">
            <p>BuroCalcolo utilizza cookie tecnici necessari al funzionamento del sito.</p>
            <p>Con il tuo consenso potremmo utilizzare cookie statistici e pubblicitari per analizzare il traffico e mostrare annunci personalizzati.</p>
            <p>
              Puoi accettare, rifiutare o gestire le tue preferenze in qualsiasi momento.
              <a href="/cookie-policy" className="ml-1 font-bold text-basil">Leggi la Cookie Policy</a>.
            </p>
          </div>
          {showPreferences && (
            <div className="mt-4 grid gap-3 rounded-2xl bg-paper p-3">
              <CookieToggle
                checked
                disabled
                title="Cookie tecnici"
                text="Sempre attivi per sicurezza, navigazione e funzionamento dei servizi richiesti."
              />
              <CookieToggle
                checked={preferences.statistics}
                onChange={(value) => updatePreference("statistics", value)}
                title="Cookie statistici"
                text="Aiutano a capire come viene usato il sito e a migliorarne prestazioni e contenuti."
              />
              <CookieToggle
                checked={preferences.marketing}
                onChange={(value) => updatePreference("marketing", value)}
                title="Cookie pubblicitari"
                text="Possono essere usati per annunci personalizzati, misurazione e prevenzione frodi."
              />
            </div>
          )}
        </div>
        <div className="grid gap-2 sm:min-w-40">
          <button onClick={rejectAll} className="rounded-full border border-ink/15 px-4 py-3 text-sm font-black">
            Rifiuta
          </button>
          {showPreferences ? (
            <button onClick={saveSelected} className="rounded-full bg-basil px-4 py-3 text-sm font-black text-white">
              Salva preferenze
            </button>
          ) : (
            <button onClick={() => setShowPreferences(true)} className="rounded-full border border-ink/15 px-4 py-3 text-sm font-black">
              Preferenze
            </button>
          )}
          <button onClick={acceptAll} className="rounded-full bg-ink px-4 py-3 text-sm font-black text-white">
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieToggle({ checked, disabled = false, onChange, title, text }) {
  return (
    <label className={`flex items-start justify-between gap-4 rounded-xl bg-white p-3 ${disabled ? "opacity-75" : ""}`}>
      <span>
        <span className="block text-sm font-black">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-ink/58">{text}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 size-5 accent-basil"
      />
    </label>
  );
}

function InfoPage({ page }) {
  const isCookiePolicy = getCurrentPath() === "/cookie-policy";

  return (
    <LegalShell>
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-8 sm:px-5 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[.16em] text-basil">{page.eyebrow}</p>
        <h1 className="mt-3 text-[clamp(2.6rem,7vw,5rem)] font-black leading-none tracking-normal">{page.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/70">{page.intro}</p>
        <div className="mt-8 grid gap-4">
          {page.sections.map(([title, text]) => (
            <article key={title} className="rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-panel">
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-ink/68">{text}</p>
            </article>
          ))}
        </div>
        {isCookiePolicy && (
          <button
            onClick={() => window.dispatchEvent(new Event("burocalcolo-open-cookie-preferences"))}
            className="mt-6 rounded-full bg-ink px-5 py-3 font-black text-white"
          >
            Modifica preferenze cookie
          </button>
        )}
        <p className="mt-8 rounded-2xl bg-ink p-4 text-sm leading-6 text-white/70">
          Ultimo aggiornamento: {today}.
        </p>
      </section>
    </LegalShell>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const sendContact = (event) => {
    event.preventDefault();
    const target = ["matteo.cambie05", "gmail.com"].join("@");
    const subject = encodeURIComponent(form.subject || "Richiesta da BuroCalcolo");
    const body = encodeURIComponent([
      `Nome: ${form.name || "Non indicato"}`,
      `Email per risposta: ${form.email || "Non indicata"}`,
      "",
      form.message || "Messaggio non compilato"
    ].join("\n"));
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  return (
    <LegalShell>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 pt-8 sm:px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[.16em] text-basil">Supporto</p>
          <h1 className="mt-3 text-[clamp(2.6rem,7vw,5rem)] font-black leading-none tracking-normal">Contatti</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Hai una domanda su BuroCalcolo, sui report o su una pagina informativa? Compila il modulo: verra preparata una email senza mostrare l'indirizzo di destinazione nella pagina.
          </p>
          <div className="mt-6 rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-panel">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-butter text-ink">
                <Mail size={19} />
              </div>
              <div>
                <h2 className="font-black">Risposta via email</h2>
                <p className="text-sm text-ink/62">L'indirizzo non viene pubblicato in chiaro nella pagina.</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={sendContact} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-panel">
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-ink/62">Nome</span>
              <input value={form.name} onChange={(event) => updateField("name", event.target.value)} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-ink/62">La tua email</span>
              <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-ink/62">Oggetto</span>
              <input value={form.subject} onChange={(event) => updateField("subject", event.target.value)} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-ink/62">Messaggio</span>
              <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} rows="7" className="resize-none rounded-2xl border border-ink/10 bg-paper px-4 py-3 outline-none" />
            </label>
            <button className="rounded-full bg-ink px-5 py-3 font-black text-white">Prepara email</button>
          </div>
        </form>
      </section>
    </LegalShell>
  );
}

createRoot(document.getElementById("root")).render(<App />);
