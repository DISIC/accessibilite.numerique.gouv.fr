---
WCAG: 
- successCriterion: 3.3.2
  title: Labels or Instructions
  level: A
Techniques:
- G162
---

#### Cas particuliers

Les tests 11.4.2 et 11.4.3 seront considérés comme non applicables :
* Dans le cas où l’[étiquette](#etiquette-de-champ-de-formulaire) mélange une portion de texte qui se lit de droite à gauche avec une portion de texte qui se lit de gauche à droite ;
* Dans le cas où un formulaire contient des labels de plusieurs langues qui se liraient de droite à gauche et inversement. Par exemple, un formulaire de commande en arabe qui propose une liste de cases à cocher de produit en langue française ou mixant des produits en langue arabe ou en langue française ;
* Dans le cas où les champs de type `radio` ou `checkbox` et les balises ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"` ne sont pas visuellement présentés sous forme de bouton radio ou de case à cocher ;
* Dans le cas où les champs seraient utilisés dans un contexte où il pourrait être légitime, du point de vue de l’expérience utilisateur, de placer les étiquettes de manière différente à celle requise dans les tests 11.4.2 et 11.4.3.