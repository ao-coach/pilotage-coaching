# AO Coach - Faciliter le job de coach

Un outil pour t'aider à développer et piloter ton activité de coach ! 
Ouvre `index.html` et laisse-toi guider ! ;)
Allan



# Suivi de pratique de coaching : mise en route

L'application tient en **un fichier HTML**, sans installation. Tes données restent sur ton ordinateur, dans **un seul fichier** `coaching-data.json`, chiffrable par mot de passe, qui contient saisies, réglages, logo et bandeau. Chaque jour, une copie datée de ce fichier est créée dans le sous-dossier `sauvegardes/`, et les 30 dernières sont conservées.

Navigateur requis : **Chrome ou Edge sur ordinateur**. Firefox, Safari et les mobiles ne savent pas écrire dans un dossier.

---

## Option 1 : en local, en 1 minute

1. Mets `index.html` où tu veux, par exemple dans le dossier de tes données.
2. Double-clique dessus pour l'ouvrir dans Chrome ou Edge.
3. À l'accueil :
   - si tu as déjà un `coaching-data.json`, clique « Ouvrir un dossier existant » et choisis son dossier ;
   - sinon, clique « Commencer » : un parcours de 5 minutes te guide (identité, entretiens, axes de progression, priorités, premières actions, premier entretien, sécurité).

Pour mettre à jour l'application, remplace `index.html`. Tes données ne bougent pas.

## Option 2 : en ligne sur GitHub Pages (recommandé), en 20 minutes une seule fois

L'application est alors disponible à une adresse fixe, installable comme une application (icône, fenêtre à part, fonctionne hors ligne), et se met à jour toute seule chez toi comme chez tes pairs. **Seul le code est en ligne, jamais tes données.**

### Mise en ligne

1. Crée un compte gratuit sur [github.com](https://github.com). Le pseudo apparaîtra dans l'adresse, par exemple `ao-coach`.
2. En haut à droite, clique sur **+**, puis **New repository**.
   - Nom : `suivi-coaching`
   - Licence : **No license** (on ajoute la nôtre juste après).
   - Visibilité : **Public**. C'est obligatoire pour Pages en version gratuite, et sans risque : le code ne contient aucune donnée.
   - Clique sur **Create repository**.
3. Sur la page du dépôt, clique sur le lien **uploading an existing file**. Glisse-y les 6 fichiers de l'application, puis clique sur **Commit changes**.
   - Les 6 fichiers : `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `LICENSE`.
   - **Ne dépose jamais `coaching-data.json` ni le dossier `sauvegardes`.**
4. Va dans **Settings**, puis **Pages** dans le menu de gauche. Dans « Build and deployment » :
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)**
   - Clique sur **Save**.
5. Attends 1 à 2 minutes. L'adresse s'affiche en haut de la page Pages, par exemple `https://ao-coach.github.io/suivi-coaching/`.

### Première ouverture

1. Ouvre l'adresse dans Chrome ou Edge.
2. Clique sur l'icône **Installer** à droite de la barre d'adresse. L'application apparaît dans ton menu Démarrer ou ton Dock.
3. Clique sur « Ouvrir un dossier existant » et choisis le dossier qui contient ton `coaching-data.json`.
4. Quand le navigateur demande l'accès au dossier, choisis **« Autoriser à chaque visite »** si l'option est proposée. Tu n'auras alors plus rien à faire aux lancements suivants.

### Mettre à jour l'application

Sur la page du dépôt, clique sur **Add file**, puis **Upload files**, et dépose le nouveau `index.html`. Il remplace l'ancien. Clique sur **Commit changes**. La mise à jour est en ligne en 1 à 2 minutes et arrive chez tout le monde au lancement suivant.

GitHub garde chaque version. Pour revenir en arrière, ouvre le fichier, puis **History**.

---

## Partager à un pair

- **Si tu as mis l'application en ligne :** envoie simplement l'adresse.
- **Sinon :** envoie `index.html`.

Dans les deux cas, ton pair est accueilli par le parcours de démarrage.

Pour lui transmettre aussi ta configuration (activités, couleurs, métriques) sans tes données, va dans **Paramètres**, puis **Exporter un modèle sans données**. Ton pair choisit ensuite « Importer une sauvegarde ou un modèle » sur l'écran d'accueil.

## Sécurité

Pour chiffrer ton fichier, va dans **Paramètres**, **Sécurité**, puis **Activer le chiffrement**.

Garde ta **clé de secours** hors de l'ordinateur, dans un gestionnaire de mots de passe ou imprimée. Sans le mot de passe ni la clé de secours, les données ne peuvent plus être rouvertes par personne.

## En cas de souci

- **Bandeau jaune « Reconnecter le dossier » :** clique dessus et autorise l'accès. Choisis « Autoriser à chaque visite » si l'option est proposée.
- **Revenir à une version antérieure de tes données :** va dans **Importer un JSON** (en bas de page) et choisis un fichier du dossier `sauvegardes/`.
- **Ouvrir un autre carnet ou en créer un nouveau :**
  - si l'application est ouverte, va dans **Paramètres**, puis **Stockage des données** ;
  - si elle est verrouillée, clique sur le lien en bas de l'écran de verrouillage.

  Un dossier qui contient déjà un carnet n'est jamais écrasé par un autre carnet.

---

## Licence et usage

L'outil est publié sous **licence PolyForm Shield 1.0.0** (fichier `LICENSE`).

- **Gratuit pour tous les coachs**, y compris pour leur activité professionnelle : tu peux l'utiliser, le copier, l'adapter et le partager.
- **Interdit sans accord** : le revendre, ou en tirer un produit ou un service concurrent (version payante, marque blanche…).
- En le partageant, transmets aussi le fichier `LICENSE`.

Pour un usage commercial (revente, intégration dans une offre payante, marque blanche), contacte Allan Oudomphong.

### Mettre la licence sur GitHub (une seule fois)

1. Lors de la création du dépôt, choisis **No license** dans le menu des licences.
2. Dépose le fichier `LICENSE` avec les autres fichiers de l'application (même glisser-déposer).
3. GitHub l'affiche alors sur la page du dépôt.
4. Facultatif, mais plus complet : ouvre `LICENSE` sur GitHub, clique sur le crayon (**Edit**), puis colle à la fin le texte officiel complet, copié depuis https://polyformproject.org/licenses/shield/1.0.0.txt.
