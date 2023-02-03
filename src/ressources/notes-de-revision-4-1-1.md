---
title: Notes de révision du RGAA 4.1 vers 4.1.1
layout: layouts/base.njk
descirption: 
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 6
---

Cet erratum signale les corrections apportées aux sections critères et glossaire de la version 4 du RGAA. Ces corrections concernent les [critères](#criteres) (tests, cas particuliers et notes techniques) ainsi que le [glossaire](#glossaire).

Ces corrections ont été reportées directement aux fichiers criteres.json et glossaire.json disponibles sur le dépôt GitHub du RGAA.

Les différentes sources de cette mise à jour sont :
* Les issues GitHub du dépôt RGAA (https://github.com/DISIC/RGAA/issues) ; ces modifications sont signalées par la mention “issue” suivie du numéro de l’issue en question ;
* Des modifications actées sur la plateforme évolution RGAA qui n’ont pas été reportées lors de la consolidation du référentiel ; ces modifications sont signalées par la mention “évolution RGAA” ;
* Des retours internes concernant des modifications de forme comme de fond ; dans ce dernier cas, ce sont des remarques de fond ne faisant pas question qui ont été corrigées ; ces modifications sont signalées par la mention “retour interne”.


 
## Critères et tests

### 1.1.5

Ajout de la mention "Contenu de l'élément `<title>`"

### 1.6

Ajout  de la _note technique_ suivante :  
"attribut `longdesc` qui constitue une des conditions du test 1.6.1 (et dont la pertinence est vérifiée avec le test 1.7.1) est désormais considéré comme obsolète par la spécification HTML en cours. La vérification de cet attribut ne sera donc requise que pour les versions de la spécification HTML antérieure à HTML 5."


### 4.1.1

Cohérence critère / test (https://github.com/DISIC/RGAA/issues/115)

### 4.5.1 et 4.5.2

Ajout de la mention " accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre)."

### 5.8.1

Suppression de l’élément `colgroup` de la liste des éléments à vérifier (https://github.com/DISIC/RGAA/issues/111)

### 10.1.1

Les éléments de présentation sont listés par ordre alphabétique.

### 10.1.2

Suppression de l’attribut `basefont` de la liste des attributs de présentation.

### 10.7.1

Suppression des propriétés css :   
"(propriétés `outline`, `outline-width`, `outline-style`, `outline-color` ou toute autre propriété de mise en forme appropriée)"  
est remplacé par :  
"(en agissant sur le contour ou le fond ou les deux)"

### 10.11

* Ajout des techniques WCAG manquantes
* Ajouter de la mention suivante dans _Cas particuliers_ : « L’objectif de ce critère est d’imposer un défilement dans une **unique** direction pour une lecture facilitée selon le sens de l’écriture. »
* Modification de l’intitulé du critère :  
"Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou à un défilement horizontal pour une fenêtre ayant une largeur de 320px (hors cas particuliers) ?"  
est remplacé par :  
"Pour chaque page web, les contenus peuvent-ils être présentés sans perte d'information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320px (hors cas particuliers) ?"

### 11.2

Référence à un test inexistant :  
"Ce cas particulier s’applique également au test 11.9.3."  
est remplacé par :    
"Ce cas particulier s’applique également au test 11.9.2."

### 12.8

Correction de la correspondance aux WCAG :  
"C7"  
est remplacé par :  
"C27"  

### 13.3.1

Reformulation de la méthodologie de test


## Glossaire


### Alternative textuelle (image)

Précision et ajout de la balise title : "dans une balise `<title>` ou dans une balise `<text>` que cette dernière balise soit ou non visible"

### Contrôle de la consultation d’un média temporel

Ajout de la mention "Si l’objet multimédia a des sous-titres, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition des sous-titres" (https://github.com/DISIC/RGAA/issues/123)


### Liste des valeurs possibles pour l’attribut `autocomplete`

"Identité sexuelle" est remplacé par "identité de genre"
(https://github.com/DISIC/RGAA/issues/109)
