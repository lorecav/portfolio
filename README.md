# Portfolio - guida rapida

Sito statico (HTML/CSS/JS), nessuna installazione o build. Tutti i contenuti stanno in **`content/data.js`**.

## Pagine
`index.html` = Home, `work.html` = elenco case study, `about.html` = chi sono ed esperienza, `project.html?p=slug` = singolo case study.

## Pubblicare su GitHub Pages
1. Carica **il contenuto** della cartella `portfolio` nella root del tuo repo (`index.html` deve stare in root).
2. Repo > **Settings > Pages** > Source: *Deploy from a branch* > Branch: `main` / `(root)` > Save.
3. Dopo 1-2 minuti il sito è su `https://lorecav.github.io/portfolio/`.

## Modificare i testi personali
Apri `content/data.js` (puoi farlo direttamente da GitHub con l'icona matita) e sostituisci tutto ciò che è tra `[parentesi quadre]`. Sul sito i placeholder sono evidenziati in giallo: quando non ne vedi più, hai finito.

## Aggiungere un progetto
1. In `data.js`, copia un blocco dentro `projects: [...]` e incollalo dopo l'ultimo (ricorda la virgola).
2. Cambia `slug` (unico, minuscolo, senza spazi), `title`, `summary` ecc.
3. `featured: true` lo mostra in homepage (max 4), `visible: false` lo nasconde, `order` ne decide la posizione.
4. Il case study sarà su `project.html?p=IL-TUO-SLUG`.

## Caricare screenshot
1. Crea `assets/projects/nome-progetto/` e carica le immagini (consigliato: `.webp` o `.jpg`, larghezza max 2000px, sotto 300 KB).
2. Nel progetto: `cover: "assets/projects/nome-progetto/cover.webp"`.
3. Nelle `sections`, aggiungi `images: [{ src, alt, caption, annotations: ["...", "..."] }]`. L'ordine dell'array è l'ordine sul sito. `alt` è obbligatorio per l'accessibilità.

## Aggiornare il CV
Sostituisci `assets/cv.pdf` con il tuo file (stesso nome) oppure cambia `site.cv`.

## Altre cose
- Sezioni del case study: aggiungi, togli o riordina gli oggetti in `sections`. Usa solo quelle supportate dal progetto reale.
- Immagine di anteprima social: `assets/og-image.jpg` (1200x630).
- Titoli/description SEO: `site.seoTitle`, `site.seoDescription` e i tag `<meta>` in `index.html`.
- Colori e font: variabili all'inizio di `css/style.css`.
- Nota: i tag Open Graph per i singoli progetti non cambiano nelle anteprime social (sito statico); quelle usano i valori di `project.html`.

- Il sito è solo in inglese. La traduzione italiana è salvata a parte (`portfolio-extras/data.it.js`) e si può riattivare in futuro.
- `404.html` usa `<base href="/portfolio/">`: se un giorno usi un dominio proprio alla radice, rimuovi quella riga.
