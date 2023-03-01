---
title: Prise de focus
---

La prise de focus est l’état renvoyé par un élément qui reçoit l’attention suite à une action de l’utilisateur. Il y a trois moyens en HTML de donner le focus à un élément :

- En activant l’élément par un dispositif de pointage (exemple : souris) ;
- En atteignant l’élément par la touche tabulation ou majuscule + tabulation ;
- En activant l’élément par un raccourci clavier (`accesskey`).

Certains éléments reçoivent naturellement le focus, par exemple : `<a href>`, `<area href>`, `<button>`, `<input>`, `<object>`, `<select>`, `<label>`, `<legend>`, `<optgroup>`, `<option>` et `<textarea>`.
Le comportement de l’élément, lors de la prise de focus, dépend de sa nature ; un lien, par exemple, devra être activé après la prise de focus (sauf utilisation de script). En revanche, un élément de formulaire, comme `<textarea>`, devra autoriser la saisie suite à la prise de focus. Les éléments `<label>` et `<legend>` ne reçoivent la prise de focus que via le pointeur souris. Pour l’élément `<label>`, le comportement attendu est de transférer la prise de focus sur l’élément qui lui est associé.

Note 1 : la spécification WAI-ARIA étend le rôle attribué à l’attribut `tabindex` en définissant que tout élément HTML peut acquérir la possibilité de recevoir le focus en lui attribuant la valeur `tabindex="0"`. En revanche, aucun comportement n’est attribué via la seule présence de `tabindex`. De même, la valeur `tabindex="-1"` lorsqu’elle est utilisée sur un élément recevant naturellement le focus retire l’élément qui en est affecté du plan de tabulation en inhibant sa capacité à signaler la « prise de focus ». L’utilisation de `tabindex`, conformément à la spécification WAI-ARIA, peut valider certains tests relatifs à la gestion du focus de tabulation, notamment.

Note 2 : l’indication visuelle du focus du navigateur ne doit pas être supprimée ou dégradée sauf si un style du focus défini par l’auteur est visible et suffisamment contrasté au regard du {% crit 3.3 %}.
