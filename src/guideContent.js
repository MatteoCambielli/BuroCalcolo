export const guideUpdatedAt = "03 giugno 2026";

export const officialSourceLinks = [
  {
    name: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/"
  },
  {
    name: "INPS",
    url: "https://www.inps.it/"
  },
  {
    name: "Ministero dell'Economia e delle Finanze",
    url: "https://www.mef.gov.it/"
  },
  {
    name: "Gazzetta Ufficiale",
    url: "https://www.gazzettaufficiale.it/"
  }
];

const guideConfigs = [
  {
    slug: "regime-forfettario-2026",
    title: "Come funziona il regime forfettario 2026",
    h1: "Come funziona il regime forfettario 2026",
    metaTitle: "Regime forfettario 2026: come funziona, tasse e INPS",
    metaDescription: "Guida completa al regime forfettario 2026: requisiti, imposta sostitutiva, contributi INPS, esempi, errori comuni, FAQ e calcolatore online.",
    keywords: "regime forfettario 2026, come funziona regime forfettario, partita iva forfettaria, tasse forfettario, inps forfettario",
    category: "Regime forfettario",
    calculatorIds: ["flat", "inps"],
    relatedSlugs: ["regime-forfettario-tasse-da-pagare", "regime-forfettario-inps", "detrazioni-fiscali-principali-2026", "come-compilare-f24", "inps-gestione-separata-2026"],
    focus: "capire se il regime agevolato è davvero sostenibile per una partita IVA nel 2026",
    what: "Il regime forfettario è un regime fiscale agevolato pensato per persone fisiche che esercitano attività d'impresa, arti o professioni entro specifici limiti e senza cause ostative. Il reddito imponibile non nasce dalla differenza analitica tra ricavi e costi, ma dall'applicazione di un coefficiente di redditività ai ricavi o compensi incassati.",
    how: "Il calcolo parte dai ricavi, applica il coefficiente previsto per il codice ATECO, sottrae i contributi previdenziali deducibili e applica l'imposta sostitutiva. La valutazione corretta richiede anche il controllo dei requisiti di accesso, dei rapporti con ex datori di lavoro, delle soglie, delle attività svolte e della posizione previdenziale.",
    who: "La guida è utile a freelance, professionisti, consulenti, artigiani, commercianti e lavoratori che stanno aprendo partita IVA o vogliono verificare se il regime rimane adatto alla propria attività.",
    example: "Una consulente con 42.000 euro di compensi e coefficiente di redditività 78% ottiene un reddito lordo forfettario di 32.760 euro. Se ha versato contributi deducibili per 5.000 euro, la base fiscale stimata scende a 27.760 euro; su questa base si applica l'imposta sostitutiva pertinente.",
    errors: ["Confondere ricavi incassati e fatture emesse", "Usare il coefficiente di redditività sbagliato", "Dimenticare le cause ostative", "Considerare l'imposta sostitutiva come unico costo", "Non stimare correttamente i contributi INPS"],
    faqs: [
      ["Il regime forfettario 2026 è sempre conveniente?", "Non sempre. È conveniente quando la struttura dei costi reali, il coefficiente di redditività, i contributi e l'imposta sostitutiva producono un carico sostenibile rispetto al regime ordinario."],
      ["Quali dati servono per una prima stima?", "Servono ricavi o compensi, codice ATECO, coefficiente di redditività, aliquota dell'imposta sostitutiva, contributi deducibili e gestione previdenziale."],
      ["Il forfettario consente di scaricare i costi?", "In linea generale i costi non vengono dedotti analiticamente, perché la deduzione è rappresentata dal coefficiente di redditività."],
      ["I contributi INPS sono separati dalle tasse?", "Sì, l'imposta sostitutiva e i contributi previdenziali sono grandezze diverse e vanno stimati insieme."],
      ["Quando serve il calcolatore?", "Serve prima di aprire partita IVA, prima degli acconti e ogni volta che vuoi capire l'impatto di un nuovo livello di ricavi."],
      ["Il risultato è ufficiale?", "No. È una simulazione orientativa e deve essere verificata con fonti ufficiali o professionisti abilitati."],
      ["La soglia di accesso va controllata ogni anno?", "Sì. Soglie e cause ostative possono cambiare e devono essere verificate sull'anno di riferimento."],
      ["Dove verificare le regole?", "Le fonti principali sono Agenzia delle Entrate, normativa pubblicata in Gazzetta Ufficiale e documentazione INPS per la parte contributiva."]
    ]
  },
  {
    slug: "regime-forfettario-tasse-da-pagare",
    title: "Regime forfettario: tasse da pagare",
    h1: "Regime forfettario: tasse da pagare",
    metaTitle: "Tasse regime forfettario: imposta, contributi e F24",
    metaDescription: "Quali tasse paga una partita IVA in regime forfettario: imposta sostitutiva, contributi INPS, acconti, saldo, F24 ed esempi pratici.",
    keywords: "tasse regime forfettario, imposta sostitutiva forfettario, acconti forfettario, f24 forfettario, contributi partita iva",
    category: "Regime forfettario",
    calculatorIds: ["flat", "f24"],
    relatedSlugs: ["regime-forfettario-2026", "regime-forfettario-inps", "come-compilare-f24", "ravvedimento-operoso-f24", "inps-gestione-separata-2026"],
    focus: "distinguere imposta sostitutiva, contributi e versamenti F24 senza confondere saldo e acconti",
    what: "Nel regime forfettario le principali somme da pianificare sono l'imposta sostitutiva e i contributi previdenziali. L'imposta sostitutiva sostituisce IRPEF, addizionali e IRAP nei limiti del regime, mentre i contributi dipendono dalla gestione previdenziale applicabile.",
    how: "Il reddito fiscale si determina applicando il coefficiente di redditività ai ricavi e sottraendo i contributi previdenziali deducibili. Da lì si calcola l'imposta sostitutiva. Separatamente si stimano i contributi, eventuali acconti e il saldo da versare tramite F24.",
    who: "È utile per partite IVA che vogliono sapere quanto mettere da parte, per chi apre attività e per chi deve arrivare alle scadenze con una previsione realistica di liquidità.",
    example: "Un professionista incassa 50.000 euro, ha coefficiente 78% e contributi deducibili per 6.000 euro. Il reddito forfettario lordo è 39.000 euro, la base fiscale stimata è 33.000 euro e l'imposta dipende dall'aliquota applicabile.",
    errors: ["Mettere da parte solo l'imposta e non i contributi", "Confondere saldo e acconto", "Ignorare le scadenze", "Non separare cassa personale e cassa fiscale", "Usare dati di fatturato non incassato"],
    faqs: [
      ["Quali tasse paga un forfettario?", "Di norma paga imposta sostitutiva e contributi previdenziali. La composizione effettiva dipende dall'attività e dalla gestione previdenziale."],
      ["I contributi riducono l'imposta?", "I contributi previdenziali deducibili possono ridurre la base su cui calcolare l'imposta sostitutiva."],
      ["Come si versano le tasse?", "In genere tramite modello F24, rispettando codici tributo, scadenze, saldo e acconti applicabili."],
      ["Quanto devo mettere da parte?", "Conviene simulare imposta, contributi e acconti, poi creare una riserva prudenziale perché i casi personali possono cambiare."],
      ["Il 15% si applica sui ricavi?", "No, in genere si applica sulla base imponibile dopo coefficiente e contributi deducibili, non direttamente sul totale dei ricavi."],
      ["Il 5% è automatico?", "No. L'aliquota ridotta richiede requisiti specifici e va verificata."],
      ["Il calcolatore sostituisce la dichiarazione?", "No. Aiuta a stimare, ma dichiarazione e versamenti reali vanno verificati."],
      ["Quando aggiornare la stima?", "Ogni volta che cambiano ricavi, contributi, attività, aliquota o posizione previdenziale."]
    ]
  },
  {
    slug: "regime-forfettario-inps",
    title: "Regime forfettario e INPS",
    h1: "Regime forfettario e INPS",
    metaTitle: "Regime forfettario e INPS: contributi, gestione e calcolo",
    metaDescription: "Guida ai contributi INPS nel regime forfettario: gestione separata, artigiani, commercianti, riduzioni, esempi e calcolatori collegati.",
    keywords: "regime forfettario inps, contributi inps forfettario, gestione separata forfettario, artigiani commercianti forfettario",
    category: "INPS",
    calculatorIds: ["flat", "inps"],
    relatedSlugs: ["regime-forfettario-2026", "regime-forfettario-tasse-da-pagare", "inps-gestione-separata-2026", "inps-artigiani-2026", "inps-commercianti-2026"],
    focus: "capire quale gestione previdenziale incide sulla partita IVA forfettaria e come stimare il carico contributivo",
    what: "Il regime forfettario riguarda la tassazione, mentre l'INPS riguarda la previdenza. Le due dimensioni si incontrano perché i contributi possono essere deducibili e perché il carico totale della partita IVA dipende spesso più dai contributi che dall'imposta sostitutiva.",
    how: "La gestione previdenziale dipende dall'attività: professionisti senza cassa possono ricadere nella Gestione Separata, mentre artigiani e commercianti seguono regole con contributi fissi e percentuali. La stima richiede reddito, aliquota, minimali, eventuali riduzioni e acconti.",
    who: "È utile a chi apre partita IVA, cambia codice ATECO, passa al forfettario o vuole capire perché il solo calcolo dell'imposta sostitutiva non basta per pianificare la liquidità.",
    example: "Un consulente in Gestione Separata può stimare i contributi applicando l'aliquota al reddito imponibile previdenziale. Un commerciante, invece, deve considerare anche contributi fissi sul minimale e contributi eccedenti se il reddito supera determinate soglie.",
    errors: ["Pensare che il forfettario elimini i contributi", "Applicare l'aliquota della Gestione Separata a chi è artigiano o commerciante", "Dimenticare minimali e massimali", "Non considerare acconti già versati", "Non controllare eventuali riduzioni"],
    faqs: [
      ["Il forfettario paga INPS?", "Sì, il regime fiscale agevolato non elimina gli obblighi previdenziali."],
      ["Quale gestione INPS devo usare?", "Dipende dall'attività svolta, dalla presenza di una cassa professionale e dall'inquadramento come professionista, artigiano o commerciante."],
      ["I contributi sono deducibili?", "I contributi previdenziali versati possono incidere sulla base fiscale secondo le regole applicabili."],
      ["Esiste una riduzione contributiva?", "Per alcune posizioni possono esistere riduzioni o regole specifiche, da verificare presso INPS o consulente."],
      ["Gestione Separata e commercianti sono uguali?", "No. Hanno logiche, aliquote e basi di calcolo diverse."],
      ["Il calcolatore INPS è sufficiente?", "È utile per una stima, ma non sostituisce la verifica della posizione previdenziale."],
      ["Quando stimare i contributi?", "Prima degli acconti, quando cambiano ricavi e quando si valuta la sostenibilità dell'attività."],
      ["Quali fonti controllare?", "INPS per aliquote e gestione, Agenzia delle Entrate per trattamento fiscale e Gazzetta Ufficiale per norme."]
    ]
  },
  {
    slug: "calcolo-imu-seconda-casa-2026",
    title: "Calcolo IMU seconda casa 2026",
    h1: "Calcolo IMU seconda casa 2026",
    metaTitle: "Calcolo IMU seconda casa 2026: formula, aliquote ed esempio",
    metaDescription: "Guida completa al calcolo IMU seconda casa 2026: rendita catastale, rivalutazione, moltiplicatore, aliquota comunale, esempi e FAQ.",
    keywords: "calcolo imu seconda casa 2026, imu seconda casa, aliquota imu, rendita catastale, acconto saldo imu",
    category: "IMU",
    calculatorIds: ["imu", "f24"],
    relatedSlugs: ["calcolo-imu-prima-casa", "scadenze-imu-2026", "cedolare-secca-21", "cedolare-secca-o-regime-ordinario", "come-compilare-f24"],
    focus: "stimare l'IMU su immobili diversi dall'abitazione principale usando rendita, quota, mesi e aliquota comunale",
    what: "L'IMU sulla seconda casa è un'imposta patrimoniale comunale dovuta, salvo specifiche esenzioni o agevolazioni, sugli immobili diversi dall'abitazione principale non di lusso. La base di partenza è la rendita catastale, che va rivalutata e moltiplicata secondo la categoria catastale.",
    how: "Il calcolo ordinario parte dalla rendita catastale rivalutata del 5%, applica il moltiplicatore della categoria, poi l'aliquota deliberata dal comune. Il risultato va proporzionato a quota e mesi di possesso. Regole locali, agevolazioni e immobili particolari richiedono sempre controllo specifico.",
    who: "È utile a proprietari di seconde case, immobili locati, case ereditate, quote di comproprietà e immobili tenuti a disposizione.",
    example: "Con rendita catastale 700 euro, rivalutazione del 5%, moltiplicatore 160 e aliquota 1,06%, la base imponibile stimata è 117.600 euro e l'imposta annua lorda stimata è 1.246,56 euro, da riproporzionare se quota o mesi non sono pieni.",
    errors: ["Usare la rendita non rivalutata", "Applicare un'aliquota di un anno precedente", "Dimenticare quota e mesi", "Confondere acconto e saldo", "Non verificare delibere comunali"],
    faqs: [
      ["La seconda casa paga sempre IMU?", "In molti casi sì, ma esistono situazioni particolari, agevolazioni o esenzioni da verificare."],
      ["Dove trovo l'aliquota?", "Va controllata nelle delibere comunali e negli strumenti ufficiali del MEF o del comune."],
      ["La rendita catastale va rivalutata?", "Sì, nel calcolo ordinario viene rivalutata prima di applicare il moltiplicatore."],
      ["Conta il mese di possesso?", "Sì, l'imposta va proporzionata ai mesi e alla quota di possesso."],
      ["Il calcolatore genera F24?", "No. Aiuta a stimare l'importo; la delega F24 va compilata correttamente con codici e dati ufficiali."],
      ["IMU e cedolare secca sono collegate?", "Sono imposte diverse, ma per immobili locati conviene stimarle entrambe."],
      ["Il report PDF è ufficiale?", "No. È un riepilogo informativo."],
      ["Cosa verificare prima di pagare?", "Rendita, categoria, quota, mesi, aliquota comunale, detrazioni, agevolazioni e codici tributo."]
    ]
  },
  {
    slug: "calcolo-imu-prima-casa",
    title: "Calcolo IMU prima casa",
    h1: "Calcolo IMU prima casa",
    metaTitle: "Calcolo IMU prima casa: quando si paga e come stimarla",
    metaDescription: "IMU prima casa: quando è dovuta, abitazione principale, immobili di lusso, pertinenze, formula di calcolo, errori comuni e FAQ.",
    keywords: "calcolo imu prima casa, imu abitazione principale, imu casa di lusso, pertinenze imu, esenzione imu",
    category: "IMU",
    calculatorIds: ["imu", "f24"],
    relatedSlugs: ["calcolo-imu-seconda-casa-2026", "scadenze-imu-2026", "cedolare-secca-21", "come-compilare-f24", "detrazioni-fiscali-principali-2026"],
    focus: "capire quando l'abitazione principale è esclusa dall'IMU e quando invece occorre simulare il versamento",
    what: "Per abitazione principale si intende, in termini generali, l'immobile in cui il possessore dimora abitualmente e risiede anagraficamente. Molte abitazioni principali non di lusso non pagano IMU, ma le categorie catastali di pregio e alcune situazioni particolari possono cambiare il risultato.",
    how: "Quando l'IMU è dovuta, il calcolo segue la logica di rendita rivalutata, moltiplicatore, aliquota e detrazioni eventualmente previste. La verifica più importante riguarda categoria catastale, pertinenze ammesse, residenza, dimora e regolamento comunale.",
    who: "È utile a proprietari, comproprietari, eredi e famiglie che vogliono capire se l'immobile principale rientra in un'esclusione o se deve essere trattato come imponibile.",
    example: "Una casa classificata in categoria ordinaria e usata come abitazione principale può essere esclusa. Se invece l'immobile rientra in categorie di lusso, il contribuente deve verificare aliquota, detrazioni e regole comunali prima di stimare l'imposta.",
    errors: ["Pensare che ogni prima casa sia sempre esente", "Ignorare categoria catastale e pertinenze", "Confondere residenza e dimora", "Non aggiornare i dati dopo un trasferimento", "Usare aliquote non comunali"],
    faqs: [
      ["La prima casa paga IMU?", "Di norma l'abitazione principale non di lusso è esclusa, ma ci sono eccezioni e casi specifici."],
      ["Le case di lusso pagano IMU?", "Le categorie catastali di pregio possono essere soggette a IMU secondo regole e aliquote applicabili."],
      ["Le pertinenze sono incluse?", "Solo alcune pertinenze e nei limiti previsti. Occorre verificare categoria e numero."],
      ["Residenza e dimora contano?", "Sì, sono elementi centrali per qualificare l'abitazione principale."],
      ["Se cambio casa durante l'anno cosa succede?", "I mesi di possesso e uso possono incidere; serve una verifica puntuale."],
      ["Il calcolatore IMU va usato anche per prima casa?", "Sì, quando l'IMU è potenzialmente dovuta o per stimare scenari particolari."],
      ["Dove verificare l'esenzione?", "Su fonti comunali, MEF e normativa vigente."],
      ["Il risultato è definitivo?", "No. È una stima orientativa."]
    ]
  },
  {
    slug: "scadenze-imu-2026",
    title: "Scadenze IMU 2026",
    h1: "Scadenze IMU 2026",
    metaTitle: "Scadenze IMU 2026: acconto, saldo, F24 e controlli",
    metaDescription: "Guida alle scadenze IMU 2026: acconto, saldo, delibere comunali, F24, ravvedimento, calcolo e controlli prima del pagamento.",
    keywords: "scadenze imu 2026, acconto imu, saldo imu, pagamento imu f24, ravvedimento imu",
    category: "IMU",
    calculatorIds: ["imu", "f24"],
    relatedSlugs: ["calcolo-imu-seconda-casa-2026", "calcolo-imu-prima-casa", "come-compilare-f24", "ravvedimento-operoso-f24", "cedolare-secca-21"],
    focus: "organizzare acconto e saldo IMU evitando ritardi, aliquote errate e dati catastali non aggiornati",
    what: "Le scadenze IMU sono i momenti in cui il contribuente deve versare acconto e saldo dell'imposta dovuta per l'anno. La gestione corretta richiede dati dell'immobile, aliquote comunali, quota, mesi e verifica delle delibere.",
    how: "Prima della scadenza conviene stimare l'imposta, controllare se ci sono variazioni di possesso, aggiornare aliquote e verificare eventuali agevolazioni. Il pagamento avviene normalmente con F24 o canali ammessi, usando codici tributo e dati corretti.",
    who: "È utile a proprietari di immobili, comproprietari, locatori, eredi e chi gestisce più immobili in comuni diversi.",
    example: "Un contribuente con due immobili in comuni diversi deve evitare di applicare la stessa aliquota a entrambi. Per ciascun immobile va controllata la delibera comunale e poi vanno calcolati acconto e saldo in modo separato.",
    errors: ["Saltare il controllo delle aliquote", "Pagare tutto con un codice errato", "Dimenticare immobili ereditati", "Non considerare variazioni in corso d'anno", "Accorgersi del ritardo senza ravvedimento"],
    faqs: [
      ["Quando si paga l'IMU?", "Il calendario va verificato per l'anno di riferimento; di norma sono previsti acconto e saldo."],
      ["Acconto e saldo sono uguali?", "Non necessariamente. Il saldo può risentire di aliquote definitive e variazioni."],
      ["Cosa succede se pago in ritardo?", "Può essere necessario valutare ravvedimento, sanzioni e interessi."],
      ["Serve controllare ogni comune?", "Sì, perché l'aliquota è comunale e può variare."],
      ["Posso usare F24?", "Sì, con codici e dati corretti."],
      ["Il calcolatore aiuta sulle scadenze?", "Aiuta a stimare importi, ma non sostituisce calendario e regole ufficiali."],
      ["Cosa controllare prima di pagare?", "Rendita, categoria, quota, mesi, aliquota, agevolazioni e codici tributo."],
      ["Dove verificare le date?", "Su fonti ufficiali del MEF, Agenzia delle Entrate, comune e normativa vigente."]
    ]
  },
  {
    slug: "come-si-calcola-il-tfr",
    title: "Come si calcola il TFR",
    h1: "Come si calcola il TFR",
    metaTitle: "Come si calcola il TFR: formula, esempio e controlli",
    metaDescription: "Guida completa al calcolo del TFR: retribuzione utile, quota annua, rivalutazione, esempio pratico, errori comuni e FAQ.",
    keywords: "come si calcola il tfr, calcolo tfr, trattamento fine rapporto, rivalutazione tfr, busta paga",
    category: "Lavoro",
    calculatorIds: ["payroll", "inps"],
    relatedSlugs: ["calcolo-tfr-online", "calcolo-stipendio-netto", "calcolo-busta-paga-netto", "come-leggere-una-busta-paga", "detrazioni-fiscali-principali-2026"],
    focus: "capire la logica del trattamento di fine rapporto e distinguere quota maturata, rivalutazione e tassazione",
    what: "Il TFR, trattamento di fine rapporto, è una somma che matura durante il rapporto di lavoro dipendente e viene liquidata alla cessazione o in specifiche ipotesi di anticipazione. Non coincide con lo stipendio netto e non si legge come una semplice mensilità aggiuntiva.",
    how: "La quota annua si determina partendo dalla retribuzione utile e applicando il criterio previsto dalla disciplina del TFR. Le quote accantonate vengono rivalutate nel tempo. Per arrivare all'importo netto occorre considerare anche la tassazione separata e la storia retributiva.",
    who: "È utile a dipendenti che stanno cambiando lavoro, aziende che vogliono spiegare il cedolino, consulenti e chi vuole controllare se il maturato indicato in busta paga è coerente.",
    example: "Se la retribuzione utile annua è 27.000 euro, la quota teorica di TFR dell'anno si ottiene dividendo per 13,5, salvo elementi esclusi o inclusi dal contratto. Il maturato complessivo dipende poi dalle quote accumulate e rivalutate.",
    errors: ["Confondere TFR lordo e netto", "Usare solo lo stipendio mensile", "Dimenticare rivalutazione", "Ignorare anticipazioni già ricevute", "Non leggere il maturato in busta paga"],
    faqs: [
      ["Il TFR è una mensilità?", "No. È un accantonamento che matura nel tempo secondo regole specifiche."],
      ["Come si calcola la quota annua?", "In modo semplificato si guarda alla retribuzione utile annua e alla formula prevista per il TFR."],
      ["Il TFR è tassato?", "Sì, normalmente con regole di tassazione separata."],
      ["Dove vedo il TFR maturato?", "Spesso nel cedolino, in sezioni dedicate a maturato, accantonato o fondo."],
      ["Il TFR in azienda e nel fondo pensione sono uguali?", "La destinazione può cambiare gestione, rendimenti e modalità di liquidazione."],
      ["Posso chiedere anticipo?", "In alcuni casi sì, ma servono requisiti e limiti."],
      ["Il calcolatore busta paga calcola il TFR?", "Aiuta a ragionare sul rapporto lordo-netto; per il TFR servono dati specifici."],
      ["A chi chiedere verifica?", "A consulente del lavoro, datore di lavoro o professionista qualificato."]
    ]
  },
  {
    slug: "calcolo-tfr-online",
    title: "Calcolo TFR online",
    h1: "Calcolo TFR online",
    metaTitle: "Calcolo TFR online: stima del trattamento di fine rapporto",
    metaDescription: "Come stimare il TFR online: dati necessari, retribuzione utile, anni di lavoro, rivalutazione, esempio, FAQ e collegamento al calcolo busta paga.",
    keywords: "calcolo tfr online, simulatore tfr, tfr netto, tfr lordo, trattamento fine rapporto online",
    category: "Lavoro",
    calculatorIds: ["payroll", "inps"],
    relatedSlugs: ["come-si-calcola-il-tfr", "calcolo-stipendio-netto", "calcolo-busta-paga-netto", "come-leggere-una-busta-paga", "detrazioni-fiscali-principali-2026"],
    focus: "preparare una stima online del TFR con dati coerenti e senza confonderlo con il netto mensile",
    what: "Un calcolo TFR online serve a ottenere una stima del trattamento maturato o maturabile in base a retribuzione utile, durata del rapporto, eventuali anticipazioni e rivalutazioni. È uno strumento di orientamento, non una certificazione.",
    how: "Si raccolgono retribuzione utile annua, periodo di lavoro, quote già maturate, eventuali destinazioni a fondo pensione e anticipazioni. La stima va poi confrontata con cedolini, CU, prospetti aziendali e documenti ufficiali.",
    who: "È utile a chi sta lasciando un lavoro, valuta un'offerta, controlla il cedolino o vuole capire se il TFR maturato riportato dall'azienda è plausibile.",
    example: "Un dipendente con tre anni di rapporto e retribuzione utile media di 30.000 euro può stimare una quota annua lorda intorno a 2.222 euro prima di rivalutazioni e tassazione, poi confrontarla con il maturato esposto nei cedolini.",
    errors: ["Inserire il netto invece del lordo utile", "Dimenticare periodi parziali", "Non sottrarre anticipazioni", "Ignorare fondo pensione", "Confondere stima lorda e importo liquidato"],
    faqs: [
      ["Che dati servono?", "Retribuzione utile, durata del rapporto, maturato precedente, eventuali anticipazioni e destinazione del TFR."],
      ["Il TFR online è preciso?", "Può essere una buona stima, ma il dato ufficiale richiede documentazione aziendale."],
      ["Devo usare lordo o netto?", "Per ragionare sul TFR si parte dalla retribuzione utile lorda."],
      ["Il TFR cambia con il contratto?", "Sì, elementi retributivi inclusi o esclusi possono dipendere dal contratto."],
      ["La rivalutazione è automatica?", "Le quote accantonate vengono rivalutate secondo regole specifiche."],
      ["Il TFR è nella busta paga?", "Spesso viene indicato come maturato o accantonato."],
      ["Posso calcolare il netto?", "Serve considerare la tassazione separata, quindi la stima richiede cautela."],
      ["Quale calcolatore usare?", "Usa il calcolatore busta paga per il lordo-netto e questa guida per orientarti sul TFR."]
    ]
  },
  {
    slug: "inps-artigiani-2026",
    title: "INPS artigiani 2026",
    h1: "INPS artigiani 2026",
    metaTitle: "INPS artigiani 2026: contributi, minimale, saldo e acconti",
    metaDescription: "Guida ai contributi INPS artigiani 2026: contributi fissi, minimale, reddito eccedente, F24, esempi, errori comuni e FAQ.",
    keywords: "inps artigiani 2026, contributi artigiani, minimale inps artigiani, gestione artigiani, calcolo inps artigiani",
    category: "INPS",
    calculatorIds: ["inps", "f24"],
    relatedSlugs: ["inps-commercianti-2026", "inps-gestione-separata-2026", "regime-forfettario-inps", "come-compilare-f24", "ravvedimento-operoso-f24"],
    focus: "stimare contributi fissi e percentuali della gestione artigiani senza trascurare minimale e versamenti periodici",
    what: "La gestione INPS artigiani riguarda soggetti che svolgono attività artigiana con obbligo previdenziale specifico. La logica contributiva può includere importi fissi sul minimale e contributi ulteriori sul reddito eccedente.",
    how: "Per stimare il carico contributivo occorre conoscere reddito, minimale, aliquote applicabili, rate fisse, eventuali agevolazioni e acconti. Il calcolo cambia se il reddito supera le soglie e va sempre verificato sui dati INPS dell'anno.",
    who: "È utile ad artigiani, imprese individuali, partite IVA artigiane e consulenti che vogliono pianificare cassa e scadenze contributive.",
    example: "Un artigiano con reddito superiore al minimale deve considerare sia i contributi fissi dovuti sul minimale, sia la quota percentuale sul reddito eccedente, oltre agli acconti e ai versamenti tramite F24.",
    errors: ["Applicare la Gestione Separata a un artigiano", "Dimenticare i contributi fissi", "Non considerare reddito eccedente", "Saltare una rata", "Usare aliquote dell'anno precedente"],
    faqs: [
      ["Gli artigiani pagano contributi fissi?", "In molti casi sì, secondo regole della gestione artigiani e minimali annuali."],
      ["Cosa succede sopra il minimale?", "Può essere dovuta una contribuzione percentuale sul reddito eccedente."],
      ["Il forfettario cambia l'INPS?", "Il regime fiscale non elimina l'obbligo previdenziale, ma possono esistere regole o riduzioni da verificare."],
      ["Come si paga?", "Di norma tramite F24 e secondo scadenze previste."],
      ["Il calcolatore INPS considera tutto?", "È uno strumento orientativo: minimali, aliquote e casi personali vanno verificati."],
      ["Dove trovo gli importi 2026?", "Nelle circolari e comunicazioni INPS dell'anno di riferimento."],
      ["Conviene stimare anche F24?", "Sì, per pianificare il saldo complessivo."],
      ["Il risultato è ufficiale?", "No, è una simulazione."]
    ]
  },
  {
    slug: "inps-commercianti-2026",
    title: "INPS commercianti 2026",
    h1: "INPS commercianti 2026",
    metaTitle: "INPS commercianti 2026: contributi, minimale e calcolo",
    metaDescription: "Contributi INPS commercianti 2026: minimale, contributi fissi, quota eccedente, F24, esempi, errori frequenti e FAQ.",
    keywords: "inps commercianti 2026, contributi commercianti, minimale inps commercianti, gestione commercianti, calcolo inps commercianti",
    category: "INPS",
    calculatorIds: ["inps", "f24"],
    relatedSlugs: ["inps-artigiani-2026", "inps-gestione-separata-2026", "regime-forfettario-inps", "come-compilare-f24", "regime-forfettario-tasse-da-pagare"],
    focus: "leggere correttamente contributi fissi e variabili per commercianti e attività assimilate",
    what: "La gestione commercianti riguarda molte attività commerciali e prevede una contribuzione previdenziale da distinguere dalla tassazione. Il carico può includere contributi fissi su minimale e contributi sul reddito che supera determinate soglie.",
    how: "La stima richiede reddito d'impresa, minimale, aliquote, eventuali agevolazioni, acconti e rate. La posizione va controllata con attenzione perché l'inquadramento previdenziale incide sul totale da versare.",
    who: "È utile a negozianti, e-commerce, agenti, attività commerciali, partite IVA e piccoli imprenditori che vogliono pianificare contributi e liquidità.",
    example: "Un commerciante in regime forfettario può calcolare l'imposta sostitutiva con il coefficiente, ma deve aggiungere la stima INPS commercianti per capire il carico complessivo dell'anno.",
    errors: ["Pensare che l'imposta sostitutiva includa INPS", "Dimenticare rate fisse", "Confondere gestione commercianti e artigiani", "Non aggiornare aliquote", "Non stimare acconti"],
    faqs: [
      ["Chi rientra nella gestione commercianti?", "Dipende dall'attività svolta e dall'inquadramento. Va verificato caso per caso."],
      ["Ci sono contributi fissi?", "Spesso la gestione prevede contributi su minimale, da verificare annualmente."],
      ["Il reddito eccedente incide?", "Sì, se supera determinate soglie può generare contribuzione aggiuntiva."],
      ["Come pago i contributi?", "Normalmente con F24 e secondo scadenze stabilite."],
      ["Il forfettario riduce automaticamente INPS?", "No. Eventuali riduzioni richiedono requisiti e verifiche."],
      ["Dove verificare le aliquote?", "Sulle comunicazioni INPS ufficiali."],
      ["Posso usare il calcolatore INPS?", "Sì, per una stima orientativa inserendo reddito, aliquota e acconti."],
      ["Il risultato basta per pagare?", "No. Prima del pagamento servono codici, importi e posizione ufficiale."]
    ]
  },
  {
    slug: "inps-gestione-separata-2026",
    title: "INPS gestione separata 2026",
    h1: "INPS gestione separata 2026",
    metaTitle: "INPS Gestione Separata 2026: aliquote, calcolo e F24",
    metaDescription: "Guida alla Gestione Separata INPS 2026: chi deve usarla, aliquote, calcolo dei contributi, esempi, errori comuni e FAQ.",
    keywords: "inps gestione separata 2026, calcolo gestione separata, contributi professionisti, aliquota gestione separata, partita iva inps",
    category: "INPS",
    calculatorIds: ["inps", "flat"],
    relatedSlugs: ["regime-forfettario-inps", "inps-artigiani-2026", "inps-commercianti-2026", "regime-forfettario-2026", "come-compilare-f24"],
    focus: "stimare i contributi dei professionisti senza cassa e distinguere reddito fiscale e previdenziale",
    what: "La Gestione Separata INPS riguarda, tra gli altri, molti professionisti senza cassa previdenziale propria e collaboratori. È una gestione contributiva distinta da artigiani e commercianti e richiede il controllo dell'aliquota applicabile.",
    how: "Il calcolo parte dal reddito imponibile previdenziale e applica l'aliquota prevista. Vanno poi considerati acconti, eventuali massimali, posizione soggettiva e regole annuali comunicate dall'INPS.",
    who: "È utile a freelance, consulenti, lavoratori autonomi senza cassa e partite IVA che vogliono stimare contributi e saldo prima degli adempimenti.",
    example: "Un professionista con reddito imponibile di 30.000 euro e aliquota contributiva ipotetica del 26,07% stima contributi lordi per 7.821 euro, da confrontare con acconti versati e regole ufficiali.",
    errors: ["Usare aliquote non aggiornate", "Confondere cassa professionale e Gestione Separata", "Dimenticare massimali", "Non inserire acconti", "Stimare solo l'imposta sostitutiva"],
    faqs: [
      ["Chi deve iscriversi alla Gestione Separata?", "La risposta dipende dall'attività e dall'assenza di una cassa professionale specifica."],
      ["Come si calcolano i contributi?", "Applicando l'aliquota al reddito imponibile previdenziale, con attenzione a massimali e regole annuali."],
      ["Il forfettario usa la Gestione Separata?", "Molti professionisti forfettari senza cassa sì, ma non tutti."],
      ["L'aliquota è uguale per tutti?", "No. Può cambiare in base alla posizione soggettiva."],
      ["Si paga con F24?", "In molti casi sì, con modalità e scadenze applicabili."],
      ["Il calcolatore è ufficiale?", "No, è una stima."],
      ["Dove verificare aliquote 2026?", "Sulle comunicazioni INPS ufficiali dell'anno."],
      ["Quando ricalcolare?", "Quando cambiano reddito, aliquota, acconti o posizione previdenziale."]
    ]
  },
  {
    slug: "calcolo-stipendio-netto",
    title: "Calcolo stipendio netto",
    h1: "Calcolo stipendio netto",
    metaTitle: "Calcolo stipendio netto: da lordo a netto mensile",
    metaDescription: "Guida al calcolo dello stipendio netto: RAL, mensilità, contributi, IRPEF, detrazioni, addizionali, esempio e FAQ.",
    keywords: "calcolo stipendio netto, stipendio netto da lordo, ral netto, netto mensile, irpef busta paga",
    category: "Lavoro",
    calculatorIds: ["payroll", "inps"],
    relatedSlugs: ["calcolo-busta-paga-netto", "come-leggere-una-busta-paga", "come-si-calcola-il-tfr", "calcolo-tfr-online", "detrazioni-fiscali-principali-2026"],
    focus: "trasformare una RAL o un lordo mensile in una stima del netto senza ignorare contributi e detrazioni",
    what: "Il calcolo dello stipendio netto serve a capire quanto resta effettivamente al lavoratore dopo contributi previdenziali, imposte, addizionali, detrazioni e conguagli. Non basta dividere la RAL per dodici o tredici mensilità.",
    how: "Si parte dalla retribuzione lorda, si applicano contributi a carico del dipendente, si determina una base fiscale e si stimano imposte e detrazioni. Il risultato cambia con contratto, mensilità, comune, regione, familiari e benefit.",
    who: "È utile a chi valuta un'offerta di lavoro, cambia contratto, confronta RAL diverse o vuole capire perché il netto in busta paga non coincide con una percentuale fissa del lordo.",
    example: "Una RAL di 34.000 euro su 13 mensilità genera un lordo mensile di circa 2.615 euro. Da lì vanno sottratti contributi, IRPEF stimata e addizionali, considerando detrazioni e conguagli.",
    errors: ["Dividere la RAL per 12 e chiamarla netto", "Ignorare mensilità aggiuntive", "Dimenticare addizionali", "Non considerare benefit e trattenute", "Confrontare offerte con basi diverse"],
    faqs: [
      ["Come si calcola lo stipendio netto?", "Partendo dal lordo e sottraendo contributi, imposte e altre trattenute, tenendo conto delle detrazioni."],
      ["La RAL è il netto?", "No. La RAL è lorda."],
      ["Le mensilità cambiano il netto?", "Cambiano la distribuzione mensile del lordo e possono influire sulla percezione del netto."],
      ["Le detrazioni sono automatiche?", "Dipendono da reddito e situazione personale."],
      ["Il comune incide?", "Sì, tramite addizionali regionali e comunali."],
      ["Il calcolatore è preciso al centesimo?", "No, è una stima orientativa."],
      ["Serve la busta paga?", "Per una verifica puntuale sì."],
      ["Posso confrontare offerte?", "Sì, usando gli stessi criteri di stima."]
    ]
  },
  {
    slug: "calcolo-busta-paga-netto",
    title: "Calcolo busta paga netto",
    h1: "Calcolo busta paga netto",
    metaTitle: "Calcolo busta paga netto online: RAL, IRPEF e contributi",
    metaDescription: "Calcola il netto in busta paga: RAL, mensilità, contributi dipendente, IRPEF, detrazioni, esempio pratico, errori e FAQ.",
    keywords: "calcolo busta paga netto, busta paga netto online, ral netto, contributi dipendente, irpef netto",
    category: "Lavoro",
    calculatorIds: ["payroll", "inps"],
    relatedSlugs: ["calcolo-stipendio-netto", "come-leggere-una-busta-paga", "come-si-calcola-il-tfr", "calcolo-tfr-online", "detrazioni-fiscali-principali-2026"],
    focus: "leggere il netto mensile come risultato di più voci e non come semplice percentuale del lordo",
    what: "La busta paga è il documento che riepiloga retribuzione, trattenute, contributi, imposte, competenze e netto da pagare. Il calcolo del netto richiede di leggere insieme lordo, contributi, IRPEF, detrazioni, addizionali e trattenute specifiche.",
    how: "Un simulatore parte dalla RAL o dal lordo mensile, divide per le mensilità e sottrae percentuali contributive e fiscali stimate. La busta paga reale può includere straordinari, ferie, permessi, premi, benefit, conguagli e trattenute particolari.",
    who: "È utile a dipendenti, candidati, HR e piccoli datori di lavoro che vogliono spiegare o stimare il passaggio da lordo a netto.",
    example: "Con RAL 28.000 euro e 13 mensilità, il lordo mensile teorico è circa 2.154 euro. Il netto dipende da contributi a carico del dipendente, imposta netta, detrazioni e addizionali.",
    errors: ["Non distinguere competenze e trattenute", "Ignorare conguagli di fine anno", "Non considerare welfare o benefit", "Confrontare netti di mesi con eventi diversi", "Dimenticare addizionali"],
    faqs: [
      ["Cosa significa netto in busta paga?", "È l'importo effettivamente pagato dopo trattenute e competenze."],
      ["Perché il netto cambia ogni mese?", "Per straordinari, assenze, conguagli, premi, addizionali o altre voci."],
      ["La RAL basta per sapere il netto?", "Serve per una stima, ma non basta per il dato esatto."],
      ["Il TFR è nel netto?", "No, il TFR è una voce distinta."],
      ["Il calcolatore considera il contratto?", "Usa dati inseriti dall'utente; il contratto reale può modificare le voci."],
      ["Posso usare il PDF come cedolino?", "No, è un report informativo."],
      ["Cosa verificare nel cedolino?", "Lordo, contributi, imponibile, IRPEF, detrazioni, addizionali e netto."],
      ["A chi chiedere correzioni?", "A datore di lavoro, ufficio paghe o consulente del lavoro."]
    ]
  },
  {
    slug: "come-leggere-una-busta-paga",
    title: "Come leggere una busta paga",
    h1: "Come leggere una busta paga",
    metaTitle: "Come leggere una busta paga: voci, trattenute e netto",
    metaDescription: "Guida per leggere una busta paga: dati azienda, lavoratore, competenze, trattenute, contributi, IRPEF, TFR, ferie, errori e FAQ.",
    keywords: "come leggere una busta paga, voci busta paga, cedolino stipendio, trattenute busta paga, tfr in busta paga",
    category: "Lavoro",
    calculatorIds: ["payroll", "inps"],
    relatedSlugs: ["calcolo-busta-paga-netto", "calcolo-stipendio-netto", "come-si-calcola-il-tfr", "calcolo-tfr-online", "detrazioni-fiscali-principali-2026"],
    focus: "trasformare il cedolino in un documento comprensibile voce per voce",
    what: "La busta paga contiene dati anagrafici, periodo retributivo, livello, ore, competenze, trattenute, imponibili, contributi, imposte, detrazioni, ferie, permessi e TFR. È un documento tecnico, ma leggibile se lo si divide in blocchi.",
    how: "La lettura parte dall'intestazione, passa alle competenze lorde, controlla imponibili e trattenute, poi arriva al netto. Le voci accessorie vanno confrontate con contratto, presenze e accordi aziendali.",
    who: "È utile a dipendenti che vogliono controllare il cedolino, neoassunti, lavoratori che cambiano contratto e chi deve confrontare mesi diversi.",
    example: "Se il netto è più basso del solito, prima di pensare a un errore conviene controllare trattenute, addizionali, assenze, conguagli o anticipi. Spesso la spiegazione è in una voce specifica del cedolino.",
    errors: ["Guardare solo il netto", "Ignorare ferie e permessi", "Non controllare livello e ore", "Confondere imponibile previdenziale e fiscale", "Non verificare conguagli"],
    faqs: [
      ["Qual è la prima voce da controllare?", "Intestazione, periodo, livello, ore e dati contrattuali."],
      ["Cosa sono le competenze?", "Sono le somme lorde riconosciute al lavoratore."],
      ["Cosa sono le trattenute?", "Sono importi sottratti, come contributi, imposte o altre voci."],
      ["Perché ci sono più imponibili?", "Perché base previdenziale e fiscale possono differire."],
      ["Dove trovo il TFR?", "In una sezione dedicata al maturato o accantonato."],
      ["Il netto deve essere sempre uguale?", "No, può cambiare per molte ragioni."],
      ["Come verificare un errore?", "Confronta cedolino, contratto, presenze e chiedi all'ufficio paghe."],
      ["Il calcolatore aiuta?", "Sì, per una stima del netto e per capire l'ordine di grandezza."]
    ]
  },
  {
    slug: "cedolare-secca-21",
    title: "Cedolare secca 21%",
    h1: "Cedolare secca 21%",
    metaTitle: "Cedolare secca 21%: calcolo, quando si applica ed esempio",
    metaDescription: "Guida alla cedolare secca 21%: canone libero, calcolo dell'imposta, acconti, F24, esempio pratico, errori comuni e FAQ.",
    keywords: "cedolare secca 21, calcolo cedolare secca 21%, affitto cedolare 21, locazione canone libero, imposta affitto",
    category: "Locazioni",
    calculatorIds: ["cedolare", "f24"],
    relatedSlugs: ["cedolare-secca-10", "cedolare-secca-o-regime-ordinario", "calcolo-imu-seconda-casa-2026", "come-compilare-f24", "scadenze-imu-2026"],
    focus: "stimare l'imposta sostitutiva sui canoni di locazione ordinari con aliquota 21%",
    what: "La cedolare secca al 21% è un regime opzionale per tassare determinati redditi da locazione abitativa con imposta sostitutiva, in alternativa alla tassazione ordinaria. L'aliquota si applica al canone annuo secondo le condizioni previste.",
    how: "Il calcolo è lineare: canone annuo per aliquota, con attenzione ad acconti, saldo, durata del contratto e requisiti del regime. La scelta va confrontata con IRPEF ordinaria, addizionali e deduzioni non applicabili.",
    who: "È utile a proprietari che affittano immobili abitativi, locatori che devono scegliere il regime fiscale e contribuenti che vogliono stimare l'imposta prima della dichiarazione.",
    example: "Con canone annuo di 9.600 euro, la cedolare al 21% produce un'imposta lorda stimata di 2.016 euro, da coordinare con acconti e dichiarazione.",
    errors: ["Applicare il 21% a contratti non compatibili", "Dimenticare gli acconti", "Non confrontare con regime ordinario", "Ignorare IMU sull'immobile", "Confondere canone annuo e mensile"],
    faqs: [
      ["Quando si usa il 21%?", "Di norma per contratti abitativi a canone libero compatibili con il regime."],
      ["Si applica al canone mensile?", "Il calcolo si ragiona sul canone annuo."],
      ["Sostituisce l'IRPEF?", "Può sostituire IRPEF e addizionali sul reddito da locazione, nei limiti previsti."],
      ["Devo pagare anche IMU?", "La cedolare non elimina l'IMU, che va valutata separatamente."],
      ["Come si versa?", "Attraverso le modalità fiscali previste, spesso tramite F24 in saldo e acconti."],
      ["È sempre conveniente?", "Non sempre. Dipende dall'aliquota marginale e dalla situazione personale."],
      ["Il calcolatore è ufficiale?", "No, è orientativo."],
      ["Quali fonti verificare?", "Agenzia delle Entrate, normativa e documenti ufficiali."]
    ]
  },
  {
    slug: "cedolare-secca-10",
    title: "Cedolare secca 10%",
    h1: "Cedolare secca 10%",
    metaTitle: "Cedolare secca 10%: canone concordato, requisiti e calcolo",
    metaDescription: "Guida alla cedolare secca 10%: quando può applicarsi, canone concordato, requisiti, calcolo, esempio, errori e FAQ.",
    keywords: "cedolare secca 10, cedolare secca canone concordato, calcolo cedolare 10%, affitto agevolato, locazioni agevolate",
    category: "Locazioni",
    calculatorIds: ["cedolare", "imu"],
    relatedSlugs: ["cedolare-secca-21", "cedolare-secca-o-regime-ordinario", "calcolo-imu-seconda-casa-2026", "calcolo-imu-prima-casa", "come-compilare-f24"],
    focus: "capire quando l'aliquota agevolata può applicarsi e quali controlli fare sul contratto",
    what: "La cedolare secca al 10% è un'aliquota agevolata collegata a specifiche tipologie contrattuali, spesso legate al canone concordato e a requisiti territoriali o normativi. Non va applicata automaticamente a qualunque locazione.",
    how: "La stima parte dal canone annuo, ma prima bisogna verificare contratto, comune, accordi territoriali, requisiti e documentazione. Solo dopo ha senso applicare l'aliquota agevolata e confrontarla con il 21% o con il regime ordinario.",
    who: "È utile a locatori, inquilini, proprietari di immobili in comuni con accordi territoriali e contribuenti che valutano contratti agevolati.",
    example: "Con canone annuo di 7.200 euro, l'applicazione dell'aliquota 10% produrrebbe un'imposta lorda di 720 euro, ma solo se il contratto possiede i requisiti per l'agevolazione.",
    errors: ["Applicare il 10% senza requisiti", "Non verificare accordi territoriali", "Dimenticare attestazioni o documenti richiesti", "Confondere canone concordato e canone libero", "Non considerare IMU"],
    faqs: [
      ["Il 10% vale per tutti?", "No, richiede condizioni specifiche."],
      ["Serve canone concordato?", "Spesso è collegata a contratti a canone concordato, da verificare."],
      ["Come calcolo l'imposta?", "Canone annuo per aliquota, dopo aver verificato i requisiti."],
      ["È meglio del 21%?", "Fiscalmente può essere più bassa, ma dipende dalla compatibilità del contratto."],
      ["Devo verificare il comune?", "Sì, il territorio può essere rilevante."],
      ["La cedolare elimina IMU?", "No, IMU resta separata."],
      ["Il report è ufficiale?", "No, è informativo."],
      ["Dove verificare?", "Agenzia delle Entrate, accordi territoriali, comune e professionisti."]
    ]
  },
  {
    slug: "cedolare-secca-o-regime-ordinario",
    title: "Cedolare secca o regime ordinario",
    h1: "Cedolare secca o regime ordinario",
    metaTitle: "Cedolare secca o regime ordinario: quale conviene?",
    metaDescription: "Confronto tra cedolare secca e regime ordinario: imposte, aliquote, addizionali, deduzioni, esempi, errori comuni e FAQ.",
    keywords: "cedolare secca o regime ordinario, confronto cedolare irpef, convenienza cedolare secca, affitto regime ordinario",
    category: "Locazioni",
    calculatorIds: ["cedolare", "imu"],
    relatedSlugs: ["cedolare-secca-21", "cedolare-secca-10", "calcolo-imu-seconda-casa-2026", "detrazioni-fiscali-principali-2026", "come-compilare-f24"],
    focus: "confrontare tassazione sostitutiva e tassazione ordinaria sui redditi da locazione",
    what: "La scelta tra cedolare secca e regime ordinario incide su come viene tassato il reddito da locazione. La cedolare applica un'imposta sostitutiva; il regime ordinario porta il reddito nel calcolo IRPEF complessivo, con addizionali e regole ordinarie.",
    how: "Il confronto richiede canone annuo, aliquota cedolare, redditi complessivi, aliquota marginale, addizionali e possibilità di deduzioni o effetti collaterali. Non basta confrontare 21% e prima aliquota IRPEF in modo isolato.",
    who: "È utile a proprietari che devono scegliere il regime in fase di contratto o dichiarazione e a chi vuole capire l'impatto fiscale reale di un affitto.",
    example: "Un locatore con reddito complessivo elevato potrebbe trovare conveniente la cedolare al 21%, mentre in altri casi il regime ordinario può avere effetti da valutare con attenzione su reddito complessivo e detrazioni.",
    errors: ["Guardare solo l'aliquota", "Ignorare addizionali", "Non valutare reddito complessivo", "Dimenticare IMU", "Non considerare requisiti della cedolare"],
    faqs: [
      ["La cedolare è sempre migliore?", "No, dipende dal reddito complessivo e dal contratto."],
      ["Il regime ordinario include IRPEF?", "Sì, il reddito da locazione entra nella tassazione ordinaria."],
      ["La cedolare ha addizionali?", "È sostitutiva per il reddito da locazione nei limiti previsti."],
      ["Devo scegliere nel contratto?", "La scelta segue regole e modalità da verificare."],
      ["Posso cambiare regime?", "In alcuni casi è possibile, rispettando regole e comunicazioni."],
      ["IMU cambia con la scelta?", "IMU è separata, ma va considerata nella convenienza complessiva."],
      ["Come faccio un confronto?", "Stima cedolare, regime ordinario e impatto su reddito complessivo."],
      ["Serve un professionista?", "Per decisioni operative è consigliato."]
    ]
  },
  {
    slug: "come-compilare-f24",
    title: "Come compilare un F24",
    h1: "Come compilare un F24",
    metaTitle: "Come compilare un F24: sezioni, codici tributo ed errori",
    metaDescription: "Guida pratica alla compilazione del modello F24: sezioni, codici tributo, importi, compensazioni, saldo, errori comuni e FAQ.",
    keywords: "come compilare f24, modello f24, codici tributo, compilazione f24, saldo f24, compensazione f24",
    category: "F24",
    calculatorIds: ["f24", "imu"],
    relatedSlugs: ["ravvedimento-operoso-f24", "scadenze-imu-2026", "regime-forfettario-tasse-da-pagare", "cedolare-secca-21", "inps-gestione-separata-2026"],
    focus: "preparare una delega F24 controllando sezioni, codici, importi a debito e crediti",
    what: "Il modello F24 è lo strumento usato per molti versamenti fiscali e contributivi. Contiene sezioni diverse, codici tributo, anno di riferimento, importi a debito, crediti compensati e saldo finale.",
    how: "La compilazione richiede di individuare la sezione corretta, il codice tributo, l'anno, eventuali rateazioni, importi a debito e crediti. Prima dell'invio conviene confrontare importi e scadenze con il calcolo effettuato e con fonti ufficiali.",
    who: "È utile a contribuenti, partite IVA, proprietari immobiliari e chi deve versare imposte, contributi, IMU, saldo o acconti.",
    example: "Per un versamento IMU occorre usare la sezione dedicata, indicare comune, codice tributo, anno e importo. Se ci sono più immobili o più comuni, gli importi vanno organizzati con attenzione.",
    errors: ["Usare codice tributo sbagliato", "Inserire anno errato", "Compensare crediti non disponibili", "Confondere sezione Erario e IMU", "Non controllare saldo finale"],
    faqs: [
      ["Cos'è il modello F24?", "È una delega usata per versare imposte, contributi e altri importi."],
      ["Dove trovo i codici tributo?", "Sulle fonti ufficiali dell'Agenzia delle Entrate e istruzioni applicabili."],
      ["Posso compensare crediti?", "Sì, se disponibili e nel rispetto delle regole."],
      ["Cosa significa saldo zero?", "Che debiti e crediti si compensano, ma possono esserci obblighi di presentazione."],
      ["Il calcolatore genera il modello?", "No, riepiloga il saldo orientativo."],
      ["Come evito errori?", "Controlla sezione, codice, anno, importo, scadenza e crediti."],
      ["Serve conservare la ricevuta?", "Sì, la ricevuta è importante per provare l'invio o pagamento."],
      ["Cosa fare se sbaglio?", "Valuta correzioni o ravvedimento con professionista o fonti ufficiali."]
    ]
  },
  {
    slug: "ravvedimento-operoso-f24",
    title: "Ravvedimento operoso F24",
    h1: "Ravvedimento operoso F24",
    metaTitle: "Ravvedimento operoso F24: ritardi, sanzioni e interessi",
    metaDescription: "Guida al ravvedimento operoso con F24: quando serve, sanzioni, interessi, codici, esempio pratico, errori comuni e FAQ.",
    keywords: "ravvedimento operoso f24, f24 in ritardo, sanzioni interessi f24, pagamento tardivo, ravvedimento imu",
    category: "F24",
    calculatorIds: ["f24", "imu"],
    relatedSlugs: ["come-compilare-f24", "scadenze-imu-2026", "regime-forfettario-tasse-da-pagare", "inps-artigiani-2026", "cedolare-secca-21"],
    focus: "capire come affrontare un versamento tardivo senza improvvisare importi, codici e interessi",
    what: "Il ravvedimento operoso è un istituto che consente di regolarizzare spontaneamente alcuni errori o ritardi versando imposta, sanzioni ridotte e interessi, quando ne ricorrono i presupposti.",
    how: "La regolarizzazione richiede di individuare il tributo, calcolare imposta non versata, giorni di ritardo, interessi, sanzione ridotta e codici corretti. Le regole cambiano in base al tipo di violazione e al tempo trascorso.",
    who: "È utile a contribuenti che hanno dimenticato un versamento, partite IVA, proprietari immobiliari e chi deve correggere un F24 tardivo o insufficiente.",
    example: "Se un contribuente paga in ritardo un acconto IMU, deve stimare l'imposta dovuta, aggiungere interessi e sanzione ridotta secondo il ritardo, poi compilare correttamente l'F24.",
    errors: ["Pagare solo l'imposta senza sanzioni e interessi", "Usare codici sbagliati", "Calcolare male i giorni", "Ignorare limiti del ravvedimento", "Non conservare ricevute"],
    faqs: [
      ["Quando si usa il ravvedimento?", "Quando è possibile regolarizzare spontaneamente un errore o ritardo secondo la normativa."],
      ["Cosa devo pagare?", "Imposta, eventuale sanzione ridotta e interessi."],
      ["Il ravvedimento vale sempre?", "No, dipende da tipo di violazione e condizioni."],
      ["Come calcolo gli interessi?", "Serve il tasso applicabile e i giorni di ritardo."],
      ["Quale F24 usare?", "Il modello e i codici dipendono dal tributo."],
      ["Il calcolatore F24 basta?", "Aiuta a riepilogare importi, ma il ravvedimento richiede verifica specifica."],
      ["Cosa succede se sbaglio ancora?", "Potrebbero servire ulteriori correzioni o assistenza professionale."],
      ["Dove verificare?", "Agenzia delle Entrate, normativa e consulente."]
    ]
  },
  {
    slug: "detrazioni-fiscali-principali-2026",
    title: "Detrazioni fiscali principali 2026",
    h1: "Detrazioni fiscali principali 2026",
    metaTitle: "Detrazioni fiscali 2026: principali spese, controlli e FAQ",
    metaDescription: "Guida alle principali detrazioni fiscali 2026: spese, documenti, dichiarazione, errori comuni, esempi, fonti ufficiali e FAQ.",
    keywords: "detrazioni fiscali 2026, spese detraibili, dichiarazione redditi, detrazioni irpef, documenti fiscali",
    category: "Dichiarazione",
    calculatorIds: ["payroll", "f24"],
    relatedSlugs: ["calcolo-stipendio-netto", "calcolo-busta-paga-netto", "regime-forfettario-2026", "cedolare-secca-o-regime-ordinario", "come-compilare-f24"],
    focus: "organizzare le principali spese detraibili e la documentazione prima della dichiarazione",
    what: "Le detrazioni fiscali riducono l'imposta lorda secondo regole, percentuali, limiti e condizioni previste dalla normativa. Possono riguardare spese sanitarie, istruzione, interessi, ristrutturazioni, assicurazioni e altre categorie.",
    how: "La gestione corretta richiede documenti tracciabili, fatture, ricevute, bonifici parlanti quando previsti, limiti di spesa, percentuali e corretta intestazione. Il beneficio effettivo dipende dall'imposta dovuta e dalla capienza fiscale.",
    who: "È utile a lavoratori dipendenti, pensionati, famiglie, proprietari immobiliari, contribuenti con spese sanitarie o interventi edilizi e chi prepara la dichiarazione.",
    example: "Una famiglia con spese sanitarie, interessi mutuo e spese scolastiche deve raccogliere documentazione, verificare limiti e controllare se le spese sono già presenti nella dichiarazione precompilata.",
    errors: ["Confondere detrazione e deduzione", "Perdere ricevute", "Usare pagamenti non tracciabili quando richiesto", "Ignorare limiti", "Credere che ogni spesa riduca l'imposta al 100%"],
    faqs: [
      ["Cos'è una detrazione?", "È un importo che riduce l'imposta lorda, nei limiti previsti."],
      ["Cos'è una deduzione?", "Riduce la base imponibile, non direttamente l'imposta."],
      ["Serve pagamento tracciabile?", "Per molte spese può essere richiesto, quindi va verificato."],
      ["La detrazione è sempre utilizzabile?", "Serve capienza fiscale e rispetto dei requisiti."],
      ["Dove trovo le spese precompilate?", "Nei servizi ufficiali dell'Agenzia delle Entrate."],
      ["Quali documenti conservare?", "Fatture, ricevute, quietanze, bonifici e documenti richiesti."],
      ["Il forfettario usa detrazioni IRPEF?", "Il regime forfettario ha regole particolari, quindi va valutato separatamente."],
      ["Quando controllare le regole 2026?", "Prima della dichiarazione e ogni volta che una spesa rilevante viene sostenuta."]
    ]
  }
];

const defaultArticleBlocks = {
  intro: "Questa guida di BuroCalcolo nasce per trasformare una ricerca fiscale in un percorso pratico: prima capisci il concetto, poi raccogli i dati, poi usi il calcolatore collegato e infine verifichi il risultato sulle fonti ufficiali. L'obiettivo è aiutarti a orientarti senza venderti certezze artificiali. Nel fisco italiano contano anno di riferimento, condizioni personali, documenti, scadenze e interpretazioni amministrative; per questo ogni simulazione va letta come una base di lavoro.",
  method: "Il metodo consigliato è semplice: annota il periodo d'imposta, raccogli i dati numerici, controlla se esistono eccezioni, applica la formula, salva un riepilogo e verifica prima di pagare o dichiarare. Questo riduce gli errori più frequenti: usare dati vecchi, confondere lordo e netto, dimenticare acconti, non considerare contributi o applicare una regola generale a un caso particolare.",
  official: "Le fonti ufficiali restano decisive. Agenzia delle Entrate, INPS, Ministero dell'Economia e delle Finanze e Gazzetta Ufficiale pubblicano istruzioni, provvedimenti, circolari, servizi e testi normativi. BuroCalcolo organizza le informazioni in modo leggibile, ma non sostituisce CAF, commercialisti, consulenti del lavoro, avvocati o enti pubblici."
};

export const guides = guideConfigs.map((guide, index) => ({
  ...guide,
  path: `/guide/${guide.slug}`,
  author: "Matteo Cambielli",
  updatedAt: guideUpdatedAt,
  readingTime: "8-11 min",
  excerpt: guide.metaDescription,
  introParagraphs: [
    defaultArticleBlocks.intro,
    `Il tema di questa pagina è ${guide.focus}. La guida è costruita per essere utile a chi deve prendere una decisione concreta: aprire una partita IVA, stimare un versamento, leggere una busta paga, preparare un F24, valutare una locazione o controllare un documento. Troverai spiegazioni operative, esempio reale, errori comuni, FAQ e collegamenti ai calcolatori più pertinenti.`,
    defaultArticleBlocks.official
  ],
  sections: [
    {
      title: "Cos'è",
      paragraphs: [
        guide.what,
        `In pratica, il punto non è memorizzare una formula isolata, ma capire quali dati servono e perché. Un calcolo fiscale utile deve distinguere importi lordi, basi imponibili, aliquote, deduzioni, detrazioni, acconti, saldi, quote e periodi. Quando uno di questi elementi viene trascurato, il risultato può sembrare preciso ma diventare poco affidabile.`,
        `Per questo BuroCalcolo presenta ogni guida con un approccio orientato all'utente: definizione chiara, passaggi di calcolo, controlli da fare prima di usare il risultato, collegamento al simulatore e avvertenze sui limiti della stima. È il modo migliore per ottenere risposte veloci senza perdere il contatto con la complessità reale delle norme.`
      ]
    },
    {
      title: "Come funziona",
      paragraphs: [
        guide.how,
        defaultArticleBlocks.method,
        `Quando usi il calcolatore collegato, inserisci dati coerenti con l'anno e con la tua situazione. Se stai stimando un versamento, conserva sempre una traccia dei dati usati: importi, aliquote, date, quote, mesi, acconti e fonti consultate. Questa abitudine rende più facile confrontare il risultato con un professionista o con i servizi ufficiali.`,
        `La parte più delicata è spesso la scelta del dato iniziale. Nel lavoro dipendente può essere la RAL, nella locazione il canone annuo, nell'IMU la rendita catastale, nella previdenza il reddito imponibile, nel forfettario il coefficiente di redditività. Un valore sbagliato all'inizio produce un risultato sbagliato anche se la formula è corretta.`
      ]
    },
    {
      title: "Chi deve usarlo",
      paragraphs: [
        guide.who,
        `Questa pagina è pensata anche per chi non ha competenze tecniche ma vuole arrivare preparato a una conversazione con CAF, commercialista, consulente del lavoro, amministratore o ente pubblico. Un buon uso della guida non è sostituire il professionista, ma arrivare con domande più precise e documenti già ordinati.`,
        `È utile inoltre a chi confronta scenari: prima e dopo una variazione di reddito, prima di firmare un contratto, prima di un acconto, prima di una scadenza o quando il risultato di un documento sembra incoerente. In questi casi un calcolo orientativo aiuta a capire dove guardare e quali numeri verificare.`
      ]
    },
    {
      title: "Esempio reale",
      paragraphs: [
        guide.example,
        `L'esempio non deve essere copiato nel tuo caso senza adattamenti. Serve a mostrare il percorso logico: dati iniziali, applicazione della regola, risultato stimato e controllo finale. Se anche un solo elemento cambia, come aliquota, comune, gestione previdenziale, mensilità, acconti o requisiti, il risultato può cambiare in modo significativo.`,
        `Per rendere l'esempio più utile, prova a replicarlo con i tuoi dati nel calcolatore collegato. Poi modifica un valore alla volta: in questo modo capisci quali variabili pesano di più e puoi costruire una piccola mappa della tua situazione. È un approccio semplice, ma molto efficace per non subire i numeri.`
      ]
    },
    {
      title: "Errori comuni",
      paragraphs: [
        `Gli errori più frequenti su questo tema sono: ${guide.errors.join("; ")}. Sembrano dettagli, ma spesso sono proprio questi dettagli a generare differenze importanti tra una stima e un importo effettivo.`,
        `Un altro errore ricorrente è cercare una risposta unica valida per tutti. Nel fisco italiano molte regole dipendono da condizioni personali, territoriali o temporali. Per questo la guida insiste su fonti ufficiali, documenti aggiornati e verifica dei dati prima di inviare dichiarazioni, pagamenti o comunicazioni.`,
        `La soluzione pratica è costruire una checklist: dati personali, anno di riferimento, importi lordi, importi già versati, eventuali agevolazioni, scadenze, documenti e fonte usata. Se la checklist è incompleta, il risultato va considerato provvisorio.`
      ]
    },
    {
      title: "Checklist operativa",
      paragraphs: [
        `Prima di usare questa guida per una decisione concreta, prepara una piccola scheda con quattro blocchi: dati anagrafici o contrattuali, importi economici, anno di riferimento e documenti disponibili. Nel caso di ${guide.category.toLowerCase()}, questa scheda evita di saltare passaggi essenziali e rende più semplice capire se il calcolo ha senso. Se stai lavorando su un immobile, controlla rendita, comune, quota e mesi. Se stai lavorando su redditi o contributi, controlla imponibile, aliquote, acconti e gestione. Se stai leggendo una busta paga, separa lordo, trattenute, imponibili, detrazioni e netto.`,
        `Il secondo passaggio è distinguere i dati certi dai dati ipotetici. Un dato certo è, per esempio, un importo presente in un documento ufficiale, una rendita catastale verificata, una RAL indicata in una lettera di assunzione o un canone scritto in un contratto. Un dato ipotetico è invece una previsione di ricavi, un'aliquota non ancora controllata, un acconto stimato o una spesa futura. BuroCalcolo funziona meglio quando questi due livelli non vengono mescolati: puoi fare scenari, ma devi sapere quali numeri sono solidi e quali sono ancora da confermare.`,
        `Il terzo passaggio è salvare il percorso del calcolo. Non limitarti al risultato finale: annota da dove sei partito, quale criterio hai applicato e quali verifiche restano aperte. Questa abitudine è particolarmente utile quando devi parlare con un professionista, perché consente di individuare subito il punto debole della stima. Spesso il problema non è la formula, ma un presupposto non controllato: una categoria catastale, una scadenza, una riduzione, una causa ostativa, una voce di busta paga o una regola previdenziale.`
      ]
    },
    {
      title: "Come usare il calcolatore collegato",
      paragraphs: [
        `Il calcolatore collegato alla guida serve a trasformare la spiegazione in un numero leggibile. Inserisci prima i dati più affidabili, genera una stima e poi modifica un valore alla volta. Questo metodo ti permette di vedere quali variabili incidono davvero sul risultato: aliquota, reddito, canone, RAL, contributi, acconti, quota di possesso o mesi. Se cambi tutto insieme, il risultato cambia ma non sai perché; se cambi un dato alla volta, inizi a capire la logica economica del calcolo.`,
        `Dopo la simulazione, scarica o conserva il report solo come promemoria operativo. Il report non è un documento ufficiale e non deve essere presentato come certificazione, ma è utile per ricostruire i passaggi. Una pagina ordinata con dati inseriti, risultato, nota e disclaimer riduce la probabilità di perdere pezzi quando torni sulla pratica dopo giorni o settimane. Questo è importante soprattutto per scadenze fiscali, acconti, saldi, contratti e decisioni che hanno impatto sulla liquidità.`,
        `Infine, usa le fonti ufficiali nel momento giusto. Prima puoi usare BuroCalcolo per capire il problema e stimare l'ordine di grandezza; poi devi verificare con Agenzia delle Entrate, INPS, MEF, Gazzetta Ufficiale, comune, contratto o documenti personali. Se il calcolo produce un importo inatteso, non correggerlo a intuito: controlla i dati di partenza, verifica se manca una regola e solo dopo valuta se chiedere conferma a un professionista. Questo approccio è più lento di una risposta secca, ma molto più utile quando il risultato deve orientare scelte reali.`
      ]
    },
    {
      title: "Controllo finale prima di decidere",
      paragraphs: [
        `Prima di prendere una decisione, fai un ultimo controllo in tre passaggi: verifica che l'anno indicato sia quello corretto, confronta il risultato con almeno una fonte ufficiale e chiediti se nella tua situazione esiste un elemento speciale che la guida non può conoscere. Può essere un contratto particolare, una variazione durante l'anno, una posizione previdenziale non standard, un'agevolazione locale, un reddito aggiuntivo o un documento non ancora aggiornato. Se uno di questi elementi esiste, considera la simulazione come punto di partenza e non come conclusione definitiva.`
      ]
    }
  ]
}));

export function getGuideByPath(path) {
  return guides.find((guide) => guide.path === path);
}

export function getRelatedGuides(guide) {
  return guide.relatedSlugs.map((slug) => guides.find((item) => item.slug === slug)).filter(Boolean);
}
