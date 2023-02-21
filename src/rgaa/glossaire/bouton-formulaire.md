---
title: Bouton (formulaire)
---

Élément d’un formulaire qui permet d’effectuer une action prédéfinie. Par exemple, le bouton de soumission d’un formulaire permet l’envoi au serveur des informations collectées pour leur traitement. L’intitulé d’un bouton doit décrire l’action qui résulte de son activation (par exemple : « Lancer votre recherche », « Envoyer votre message »).

En HTML, il y a trois types de boutons de formulaire :

- Balise `<input>` de type `submit`, `reset` ou `button` ;
- Balise `<input>` de type `image` ;
- Balise `<button>`.

Il est également possible de restituer un bouton à l’aide du rôle WAI-ARIA `button`.

L’intitulé du bouton peut être de six types :

- Le contenu du passage de texte associé au bouton via l’attribut WAI-ARIA `aria-labelledby` lorsqu’il est présent ;
- Le contenu de l’attribut `aria-label` lorsqu’il est présent ;
- Le contenu de l’attribut `alt` d’un bouton de type `image` ;
- Le contenu de l’attribut `value` des boutons de type `submit`, `reset` ou `button` ;
- Le contenu de la balise `<button>` ;
- Le contenu de l’attribut `title` lorsqu’il est présent.

Note importante : lorsque plusieurs de ces techniques sont présentes sur un même bouton, le calcul du « nom accessible », c’est-à-dire ce qui sera restitué, obéit à un ordre strict :

- `aria-labelledby` ;
- Sinon `aria-label` ;
- Sinon `alt` pour le cas des input `image` ;
- Sinon `value` pour le cas des input `submit`, `reset` ou `button` ;
- Sinon contenu de la balise `<button>` ;
- Sinon `title`.

Cet ordre doit être utilisé pour l’évaluation de la pertinence du « nom accessible » du bouton. Par exemple, même dans le cas de la présence d’un `title` et d’un passage de texte référencé par `aria-labelledby` sur le même bouton, c’est le passage de texte référencé par `aria-labelledby` qui doit être évalué.

Référence : [Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation).

Par ailleurs, un « nom accessible » sera considéré comme non-pertinent s’il ne reprend pas le texte visible du bouton. Par exemple : `<button aria-label="confirmer la saisie">valider la saisie</button>` sera considéré comme non conforme au {% crit 11.9 %}.
