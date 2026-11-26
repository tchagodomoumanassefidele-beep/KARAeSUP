# KARASUP - Reconstruction HTML/CSS/JavaScript

Le projet original fourni a été organisé en fichiers distincts, sans réécrire sa logique métier.

## Structure
- `index.html`: structure de l'application
- `css/style.css`: styles et animations
- `js/app.js`: logique JavaScript
- `images/`: dossier pour les images produits

## Démarrage
1. Décompressez le dossier.
2. Ouvrez `index.html` dans votre navigateur (ou ouvrez le dossier dans VS Code).
3. Pour un développement plus confortable, utilisez l'extension VS Code Live Server.

## Configuration importante
Dans `js/app.js`, cherchez le bloc `CONFIG` au début du fichier:
- `whatsapp`: numéro WhatsApp de réception des commandes (format international sans `+`).
- `whatsappAffiche`: numéro affiché aux clients.
- `pinGestion`: code local de gestion (protection légère seulement).
- `boutique`: coordonnées de la boutique, à remplacer par les coordonnées réelles.
- `frais`: règles d'estimation des frais de livraison.

## Attention
Le mode local et un code PIN dans le navigateur ne constituent pas une sécurité de production. Les données et permissions doivent être sécurisées côté serveur avant une mise en ligne réelle. Le site contient des fonctions liées à l'environnement Artifact/Claude qui peuvent nécessiter un backend et/ou des tests lors d'un hébergement classique.

Ce paquet est une séparation des fichiers du code source fourni, pas une validation complète de toutes les fonctions ni un déploiement.
