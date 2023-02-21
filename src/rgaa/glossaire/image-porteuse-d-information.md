---
title: Image porteuse d’information
---

Image qui véhicule une information nécessaire à la compréhension du contenu auquel elle est associée.

Note 1 : lorsque l’image est le seul contenu d’un lien, son alternative est l’intitulé du lien. Dans ce cas, l’alternative de l’image devrait être évaluée avec la thématique « Liens ».

Note 2 : lorsqu’un bouton de formulaire, inséré avec l’élément `<button>`, ne contient qu’une image (balise `<img>`, `<object>`, `<embed>`, `<canvas>` ou `<svg>`), l’alternative de l’image est l’intitulé du bouton. Deux cas peuvent se présenter :

- Le bouton est contrôlé par son type, par exemple, le type `submit` ou `reset`, et fait partie d’un formulaire. Dans ce cas, le bouton image doit être évalué avec la thématique « Formulaires » ;
- Le bouton est contrôlé par un dispositif JavaScript. Dans ce cas, le bouton image doit être évalué avec la thématique « Scripts ».
