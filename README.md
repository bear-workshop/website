# Workshop Website

Un sito web responsive per il workshop della conferenza, costruito con Astro e TailwindCSS.

## Sviluppo Locale

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

## Deployment su GitHub Pages

1. Modifica `astro.config.mjs` e aggiorna:
   - `site`: con il tuo username GitHub (es: 'https://tuousername.github.io')
   - `base`: con il nome del tuo repository (es: '/bear-workshop')

2. Crea un repository su GitHub chiamato `bear-workshop`

3. Inizializza il repository locale e collegalo a GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuousername/bear-workshop.git
git push -u origin main
```

4. Esegui il deploy:
```bash
npm run build
npm run deploy
```

Il sito sarà disponibile all'indirizzo: https://tuousername.github.io/bear-workshop
