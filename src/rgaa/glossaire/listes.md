---
title: Listes
---

Suite d’éléments pouvant être regroupés sous la forme d’une liste structurée ordonnée, non ordonnée ou de définition. Par exemple la suite des liens d’un menu de navigation est une liste de liens non ordonnée, les différentes étapes d’une procédure sont une liste d’éléments ordonnés, le couple terme/description d’un glossaire est une liste de description. En HTML, les listes utilisent les balises suivantes :

- Liste ordonnée : balises `<ol>` et `<li>` (chaque élément de la liste est affecté d’un marqueur indexé) ;
- Liste non ordonnée : balises `<ul>` et `<li>` (chaque élément de la liste est affecté d’un marqueur non-indexé ;
- Liste de description : balises `<dl>`, `<dt>` (terme à décrire) et `<dd>` (description).

Note 1 : En HTML5, la balise `<dl>` ne représente plus seulement une liste de définition, mais de manière générique toute liste de description qui peut comprendre comme groupe de termes-descriptions des noms et des définitions, des questions et réponses, des catégories et des sujets, etc.

Note 2 : Il est également possible de structurer les listes à l’aide des attributs WAI-ARIA `role="list"` et `role="listitem"` pour les listes ordonnées et non ordonnées.

Note 3 : la notion de « regroupés visuellement sous forme de liste » se caractérise par :

- La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste non ordonnée par exemple `-`, `•`, `\*`, etc. ;
- La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste ordonnée par exemple un chiffre, une lettre grecque, etc. ;
- La présence d’une série d’éléments se suivant visuellement les uns les autres, avec une forme visuelle, une nature et un fonctionnement identique, mais sans avoir directement de marqueur visuel de liste (non ordonnée ou ordonnée), par exemple un menu de navigation.

Attention cependant toutes les listes ne nécessitent pas obligatoirement une structure de liste, par exemple une série de termes séparés par une virgule.
