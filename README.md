# BuroCalcolo

BuroCalcolo e una web app React + Tailwind per calcoli fiscali italiani, pensata per consulenti, freelance, piccoli imprenditori, CAF e studi professionali.

## Cosa include

- Calcolatori per IMU, INPS, F24, busta paga, regime forfettario e cedolare secca.
- Risultato live con dettaglio del calcolo.
- Report fiscale PDF scaricabile per ogni simulazione, con riepilogo e grafico del dettaglio.
- Scenari salvabili durante la sessione.
- Assistente AI contestuale al modulo attivo, con fallback locale se il servizio esterno non risponde.
- Centro normativo con controlli organizzati per area fiscale e fonti ufficiali da monitorare.
- Interfaccia responsive pronta per pubblicazione.
- Scorrimento automatico al calcolatore quando l'utente sceglie un modulo, utile soprattutto da telefono.

## Avvio locale

```bash
npm install --cache ./work/npm-cache
npm run dev
```

## Build pubblicabile

```bash
npm run build
```

La cartella `dist/` puo essere pubblicata su Vercel, Netlify, Cloudflare Pages o hosting statico.

## Evoluzione consigliata

Per una versione commerciale avanzata, collega la UI a un backend che gestisca:

- utenti e account professionali;
- archivio dei report;
- fonti normative ufficiali;
- versionamento di aliquote e regole;
- audit degli aggiornamenti fiscali;
- pagamenti o piani di abbonamento.
- invio del modulo contatti senza esporre l'indirizzo email nel codice frontend.

## Pagine pubblicabili

Sono incluse queste route:

- `/`
- `/chi-siamo`
- `/privacy-policy`
- `/cookie-policy`
- `/termini-e-condizioni`
- `/disclaimer`
- `/contatti`

Le pagine legali sono testi di base adatti a una prima pubblicazione, ma devono essere riviste in base a dominio, forma giuridica, servizi terzi realmente installati, cookie/CMP e configurazione pubblicitaria.

## AI e norme fiscali

La chat usa una chiamata gratuita lato browser con risposta di riserva locale. Per un servizio pubblico stabile e professionale e consigliato spostare l'AI su un backend, cosi eventuali chiavi, limiti e controlli restano protetti.

Il controllo automatico delle norme fiscali richiede un backend con scheduler, fonti ufficiali, versionamento e revisione. Una web app statica non deve modificare in autonomia aliquote o regole fiscali senza verifiche, perche il rischio di errore operativo e alto.

## Nota fiscale

I risultati generati sono simulazioni informative. Prima di inviare dichiarazioni, deleghe o pagamenti reali, e necessario verificare aliquote, norme applicabili e posizione personale.
