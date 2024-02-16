---
WCAG:
  - successCriterion: 1.4.11
    title: Non-text Contrast
    level: AA
Techniques:
  - G18
  - G195
  - G207
  - G174
  - G145
  - G183
	- G136
	- G209
  - F78
---

#### Cas particuliers

Les cas suivants sont non applicables pour ce critère :

- Composant d’interface inactif (par exemple, un bouton avec un attribut `disabled`) sur lequel aucune action n’est possible ;
- Composant d’interface pour lequel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
- Composant d’interface pour lequel la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
- [Élément graphique](#element-graphique) ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
- [Élément graphique](#element-graphique) ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société ;
- [Élément graphique](#element-graphique) ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs) ;
- [Élément graphique](#element-graphique) ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant.
