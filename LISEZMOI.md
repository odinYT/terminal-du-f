# Terminal du F · LLS PRO

Appli web installable pour les membres du F : crypto en direct, marchés, corrélations, annonces, news et journal LLS PRO.

## Contenu
- `index.html` : l'appli (tout est dedans)
- `market.json` : le briefing marché (mis à jour par Claude)
- `manifest.webmanifest`, `sw.js`, `icons/` : ce qui la rend installable et utilisable hors connexion

## Mise en ligne gratuite (GitHub Pages, 10 minutes, depuis un PC)
1. Crée un compte sur github.com.
2. Bouton **New repository** → nom : `terminal-du-f` → **Public** → **Create repository**.
3. **uploading an existing file** → glisse **tous** les fichiers du dossier (y compris le dossier `icons`) → **Commit changes**.
4. **Settings → Pages** → Source : **Deploy from a branch** → branche `main`, dossier `/ (root)` → **Save**.
5. Au bout d'1 à 2 minutes, l'appli est en ligne sur `https://TON-PSEUDO.github.io/terminal-du-f/`.

## Installer l'appli
- **Android (Chrome)** : ouvre le lien → menu ⋮ → **Installer l'application**.
- **iPhone (Safari)** : ouvre le lien → bouton Partager → **Sur l'écran d'accueil**.
- **PC (Chrome / Edge)** : icône d'installation à droite de la barre d'adresse.

## Code d'accès
Code actuel : **LEF2026** (majuscules et espaces ignorés). C'est un filtre simple, pas une vraie sécurité : quelqu'un de motivé peut contourner un code vérifié dans le navigateur. Pour le changer, demande à Claude.

## Mises à jour du briefing
Le briefing (`market.json`) se met à jour automatiquement si le dépôt GitHub est relié à Claude ; sinon remplace ce fichier sur GitHub.
Les prix BTC, ETH, XRP et SUI sont en direct (données publiques Binance, variation sur 24 h).

## Journal
Chaque membre a son journal sur son propre appareil. Rien n'est envoyé sur Internet.
