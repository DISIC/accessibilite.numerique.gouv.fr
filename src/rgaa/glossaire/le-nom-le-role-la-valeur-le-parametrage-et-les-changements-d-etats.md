---
title: Le nom, le rôle, la valeur, le paramétrage et les changements d’états
---

Un composant doit avoir un rôle et un nom appropriés. Ses valeurs, états et paramètres éventuels doivent également être accessibles et correctement transmis aux APIs d’accessibilité notamment.

Un composant peut s’appuyer sur un élément interactif HTML ou sur un élément non interactif surchargé par WAI-ARIA via un rôle ad hoc. Important : les boutons (balises `<button>` ou `<input type="button">`) lorsqu’ils sont contrôlés via JavaScript sont à évaluer avec le {% crit 7.1 %}.

Le nom peut être l’intitulé du composant (l’intitulé d’un bouton, par exemple).

La valeur est, par exemple, l’élément sélectionné d’une liste déroulante ou la valeur actuelle d’un curseur (`slider`).

Le rôle correspond au type d’élément défini par la spécification HTML ou WAI-ARIA (comme la balise `<button>` ou l’attribut WAI-ARIA `role="button"`).

Le paramétrage correspond aux informations particulières d’un composant, généralement mis à disposition par WAI-ARIA. Par exemple `aria-controls` est un paramètre qui transmet aux APIs l’information que le composant contrôle tel ou tel contenu (référencé par son identifiant -- attribut `id`).

Les changements d’état sont également mis à disposition par WAI-ARIA. Par exemple `aria-expanded` est un état permettant de signaler aux APIs que le composant est « ouvert » ou « fermé ». À noter qu’un état peut également être transmis via le nom, lorsque l’intitulé est changé dynamiquement pour correspondre à l’état de la zone contrôlée notamment.

Ces paramètres ne sont pas obligatoires mais peuvent être requis s’ils sont indispensables pour rendre le composant accessible. C’est à l’auditeur de considérer les cas où ces paramètres sont indispensables en fonction du contexte lié à l’utilisation du composant.

L’auditeur doit également vérifier que, lorsqu’ils sont présents, ces paramètres sont correctement utilisés.

Pour ce faire (s’il juge cela pertinent compte tenu du contexte d’implémentation des composants et des choix ergonomiques mis en œuvre) il peut s’appuyer sur les recommandations d’utilisation de WAI-ARIA pour les composants ayant des attributs WAI-ARIA correspondant à un motif de conception tel que décrit dans le document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/)</span>.

Note : les rôles, propriétés et états WAI-ARIA s’implémentent via des attributs, par exemple `role="banner"`, `aria-hidden="true"`.
