---
title: Correctement restitué (par les technologies d’assistance)
---

Lorsqu’un critère, un test ou une condition de test demande de vérifier la restitution d’un dispositif, il faut s’assurer que ladite restitution est compatible avec l’accessibilité.

Le test consiste à vérifier que la restitution est pertinente pour au moins une des combinaisons de l’environnement de test (ou « base de référence ») utilisé pour déclarer qu’un élément, un dispositif ou une alternative est « compatible avec l’accessibilité ».

Par exemple : le {% test '1.3.8' %} demande de vérifier que l’alternative d’une image bitmap (balise `<canvas>`) porteuse d’information est correctement restituée.

On procède alors à un test avec les outils de l’environnement de test défini pour le site.

Si on constate que l’alternative est correctement restituée, le test est validé.
