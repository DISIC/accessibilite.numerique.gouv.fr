---
title: Motif de conception
---

Un motif de conception <span lang="en">(Design Pattern)</span> est un modèle défini dans le document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/)</span> qui décrit la structure, les rôles et propriétés et le comportement clavier que doit respecter un composant JavaScript (widget).

Il est recommandé que les composants développés en JavaScript utilisant des attributs WAI-ARIA correspondant à un motif de conception respectent celui-ci.
Attention cependant, les motifs de conception ne sont pas tous adaptés à un usage non applicatif, en particulier pour les sites proposant un affichage en contexte mobile.

Note 1 : compte tenu du manque de support de certaines propriétés et de certains rôles WAI-ARIA et de la grande variabilité des situations dans lesquelles un composant JavaScript peut être proposé, il est possible d’adapter des motifs de conception à des contextes ou des utilisations particulières. Dans ce cas, le motif de conception adapté doit :

- Respecter la structure générale : par exemple un ensemble de panneaux (rôle WAI-ARIA `tabpanel`) d’un système d’onglets est forcément lié à un ensemble d’onglets (rôle WAI-ARIA `tablist`) ;
- Utiliser en remplacement d’un rôle ou d’une propriété WAI-ARIA mal supporté, un rôle ou une propriété WAI-ARIA équivalent, offrant un comportement et une restitution similaire.

Note 2 : Le fait d’enrichir un motif de conception de rôles ou propriétés WAI-ARIA supplémentaires dont la compatibilité avec l’accessibilité est contrôlée par le test de restitution sur l’environnement de test (ou « base de référence ») ne constitue pas une adaptation d’un motif de conception. Par exemple l’ajout de l’attribut WAI-ARIA `aria-hidden` sur les panneaux (rôle WAI-ARIA `tabpanel`) d’un système d’onglets ne définit pas un motif de conception adapté.
