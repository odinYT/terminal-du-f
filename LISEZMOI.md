# Terminal du F · LLS PRO

Appli web installable pour les membres du F : crypto en direct, marchés, corrélations, agenda, news et journal LLS PRO.
En ligne sur **https://odinyt.github.io/terminal-du-f/**

## Fichiers
- `index.html` : l'appli
- `market.json` : le briefing marché (mis à jour par Claude à 7h47, 13h47 et 19h47)
- `firebase-config.js` : la configuration du service de comptes
- `firestore.rules` : les règles de sécurité des comptes (à coller dans Firebase)
- `manifest.webmanifest`, `sw.js`, `icons/` : installation et mode hors connexion

## Comptes membres : configuration (une seule fois, 5 à 10 minutes, depuis un PC)
1. Va sur **console.firebase.google.com** → **Ajouter un projet** → nom `terminal-du-f` → désactive Google Analytics → **Créer**.
2. Menu **Créer → Authentication** → **Commencer** → **E-mail/Mot de passe** → active le premier interrupteur → **Enregistrer**.
3. **Authentication → Paramètres → Domaines autorisés** → **Ajouter un domaine** → `odinyt.github.io`.
4. Menu **Créer → Firestore Database** → **Créer une base de données** → emplacement **eur3 (Europe)** → **mode production** → **Créer**.
5. Dans Firestore, onglet **Règles** → efface tout, colle le contenu du fichier `firestore.rules` → **Publier**.
6. Roue dentée → **Paramètres du projet** → en bas, **Vos applications** → icône **</>** (Web) → surnom `Terminal` → **Enregistrer l'application**. Copie le bloc `firebaseConfig` affiché et envoie-le à Claude (ou colle les valeurs dans `firebase-config.js`).

## Te déclarer admin
1. Ouvre l'appli et **crée ton compte**. L'écran « En attente de validation » affiche ton **identifiant**.
2. Dans Firestore → **Données** → **Commencer une collection** → ID `admins` → ID du document = **ton identifiant** → ajoute un champ `role` (texte) = `admin` → **Enregistrer**.
3. Toujours dans Firestore, collection `users` → ton document → champ `approved` → passe-le à `true`.
4. Recharge l'appli : tu es dedans. Touche tes initiales en haut à droite → **Membres · administration** pour activer ou suspendre les inscrits.

## Pour les membres
1. Ouvrir **https://odinyt.github.io/terminal-du-f/**
2. **Créer un compte** (prénom, e-mail, mot de passe), puis attendre l'activation par Le F.
3. Installer l'appli : Android (Chrome) → menu ⋮ → **Installer l'application** ; iPhone (Safari) → Partager → **Sur l'écran d'accueil**.

Chaque membre a son propre journal, enregistré dans son compte et visible sur tous ses appareils. Personne d'autre ne le voit, pas même l'admin depuis l'appli.

## Données de marché
BTC, ETH, XRP, SUI : temps réel (données publiques Binance, variation sur 24 h). Autres marchés, agenda et news : briefing préparé par Claude.
Informations à but éducatif, pas un conseil en investissement.
