---
title: Légende
---

HTML propose un dispositif permettant de titrer les groupes de champs de même nature par l’intermédiaire des éléments `<fieldset>` et `<legend>`.

Il est également possible de créer des regroupements avec le rôle WAI-ARIA `group` et un passage de texte, faisant office de légende, lié par l’attribut WAI-ARIA `aria-labelledby` ou fourni par un attribut WAI-ARIA `aria-label`.

Note 1 : Les regroupements de champs peuvent utiliser d’autres méthodes qui associent l’information du regroupement directement dans l’étiquette du champ.
Par exemple, par l’intermédiaire d’un attribut `title`, d’un attribut WAI-ARIA `aria-label`, d’une liaison `aria-labelledby` faisant office d’étiquette ou encore par l’attribut WAI-ARIA `aria-describedby` associant un texte complémentaire. Dans ce cas, le regroupement de champs devient inutile puisque les labels sont suffisamment pertinents.

Note 2 : Lorsque le formulaire est constitué d’un seul bloc d’informations de même nature (l’identité et l’adresse de l’utilisateur, par exemple) ou d’un champ unique (un moteur de recherche, par exemple), le regroupement des champs n’est pas obligatoire.
