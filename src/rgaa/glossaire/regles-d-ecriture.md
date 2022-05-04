---
title: Règles d’écriture
---

Le code source doit respecter les règles suivantes en accord avec la
déclaration de type de document utilisée dans la page :

- Pas de balise ouvrante ou fermante sans `<` ou `>` (exemple d’erreur : `li>vélo`) ;
- pas de balise fermante avec `/` manquant (exemple d’erreur : `<li>vélo<li>`) ;
- pas de valeur d’attribut avec des `“` ou `‘` manquant (exemple d’erreur : `alt="vélo`) ;
- pas de valeurs multiples d’attribut séparées par un espace sans `“` ou `‘` (exemple d’erreur : `alt=mon beau vélo`) ;
- pas d’espace manquant entre les attributs (exemple : `alt=”vélo”title=”vélo”`) ;
- pas de balise fermante manquante pour les éléments qui en exigent une (exemple d’erreur : `<object>` sans `</object>`).
