---
title: Uniquement à des fins de présentation
---

Uniquement à des fins de présentation : utilisation de balises HTML pour une finalité différente de celle prévue dans les spécifications (au regard du type de document déclaré). Exemples : utilisation des balises `h` à seule fin de créer un effet typographique ; utilisation de la balise `<blockquote>` à seule fin de mettre un paragraphe en retrait, etc.

Note 1 : l’utilisation d’éléments `<div>` ou `<span>` ou plusieurs `<br>` pour créer visuellement un paragraphe est considérée comme non conforme et invalide le critère.

Exemple : `<div>`, `paragraphes d’un bloc de texte simulés`, `<br>`, `à l’aide de plusieurs balises <br>`, `</div>`

Note 2 : WAI-ARIA propose un rôle `presentation` permettant de supprimer la sémantique d’un élément, par exemple `<h1 role="presentation">Titre</h1>`. Dans ce cas, le texte sera correctement restitué mais son rôle de titre ne le sera plus. L’utilisation du rôle `presentation` peut être requise lorsque l’on utilise un [motif de conception](#motif-de-conception) WAI-ARIA.

Le rôle WAI-ARIA `presentation` peut être également utilisé pour supprimer la sémantique d’un élément lorsque ce dernier est utilisé uniquement à des fins de présentation, par exemple `<blockquote role="presentation">` aura le même effet qu’une absence d’élément `<blockquote>`.

Même si cette utilisation est fortement déconseillée (dans le cas de technologie d’assistance qui n’implémenteraient pas WAI-ARIA par exemple) elle peut être considérée comme conforme à <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr>. En revanche l’utilisation d’un rôle WAI-ARIA `presentation` sur un élément dont la nature (par exemple la sémantique) est essentielle à la compréhension du contenu est une violation des règles <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> (particulièrement de l’échec [F92](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92)) et invalide le critère.
