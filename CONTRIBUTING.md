# Contribuer au Référentiel général d’amélioration de l’accessibilité et à son site dédié

Vos contributions sont les bienvenues !

## Organisation du dépôt

### Critères et tests

Les critères du RGAA sont organisés de la façon suivante :

- Dans le dossier `src/rgaa/criteres/`, chaque critère est dans un dossier numéroté **x.y** où **x** est la thématique et **y** est le numéro du critère ;
- Chaque dossier critère contient :
  - un fichier index.md qui contient l’intitulé du critère ;
  - un fichier annexe.md qui contient les références à la norme WCAG, les techniques associées aux critères de succès WCAG ainsi que les éventuelles cas particuliers et notes techniques ;
  - un répertoire `tests` contenant un fichier par test. Chaque test est décrit dans un fichier **z.md** ou **z** est le numéro du test. La méthodologie de test y est décrite.

### Glossaire

Dans le dossier `src/rgaa/glossaire/`, chaque terme du glossaire est dans un fichier `terme-du-glossaire.md`.

### Les autres pages

Tous les autres contenus du site sont dans des fichiers markdown du type `répertoire/nom-de-la-page.md`.

### Assets

Ce site utilise le système de design de l’État dont les composants n’ont pas vocation à être modifiés (sauf dysfonctionnement).
