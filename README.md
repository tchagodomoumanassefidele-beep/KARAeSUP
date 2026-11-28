# KARASUP

Boutique en ligne KARASUP — HTML, CSS et JavaScript.

## Lancer en local
1. Ouvrir le dossier dans VS Code.
2. Lancer `index.html` avec Live Server.

## Déploiement
Un workflow GitHub Actions est configuré dans `.github/workflows/pages.yml` pour déployer le site sur GitHub Pages à chaque mise à jour de la branche `main`.

Le site utilise les fichiers à la racine (`index.html`, `style.css`, `app.js`). Les fonctions nécessitant des services externes (Google Fonts, Three.js, géolocalisation) demandent une connexion Internet et doivent être testées.
