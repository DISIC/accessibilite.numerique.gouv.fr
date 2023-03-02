---
title: Passage de texte lié par `aria-labelledby` ou `aria-describedby`
---

Il s’agit d’un ou de plusieurs passages de texte identifiés par des `id` dont la valeur est unique dans la page et associés à un élément (champ de formulaire, bouton, etc.) par les attributs WAI-ARIA `aria-labelledby` ou `aria-describedby` sur le modèle suivant : `aria-labelledby="ID1 ID2 ID3…"` où la valeur de l’attribut utilisé est égale à la liste des valeurs d’attributs `id` des passages de texte à associer présents dans la page.

Note 1 : pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un `tabindex="-1"` sur les passages de textes qui ne sont pas des éléments interactifs (bouton, liens, éléments de formulaires, etc.).

Note 2 : la valeur des attributs WAI-ARIA `aria-labelledby` ou `aria-describedby` ne doivent pas créer de référence récursive (A référence B qui référence A) ou traversante (A qui référence B qui référence C).
