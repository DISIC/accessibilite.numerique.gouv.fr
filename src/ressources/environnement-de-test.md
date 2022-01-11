---
title: Environnement de test
layout: layouts/base.njk
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 2
---

Quelques critères RGAA, notamment ceux de la thématique JavaScript, incluent des tests de restitution à effectuer sur des technologies d’assistance associées à des navigateurs et des systèmes d’exploitation.

Les tests effectués selon ces combinaisons (technologie d’assistance, système d’exploitation, navigateur) permettent de déclarer qu’un dispositif HTML / WAI-ARIA est “compatible avec l’accessibilité” tel que défini par WCAG.

Les combinaisons ont été établies à partir de la liste des technologies d’assistance dont l’usage est suffisamment répandu, ou, dans certains cas lorsqu’elle est fournie de manière native et constitue le moyen privilégié d’accès à l’information et aux fonctionnalités.

## Environnement de test Ordinateur (desktop)

Les systèmes d’exploitation retenus sont Windows et Mac OS X et les navigateurs, Internet Explorer, Firefox et Safari. Il appartient à l’auditeur de définir, en concertation avec les responsables du site audité, les versions de système d’exploitation et de navigateur en adéquation avec le contexte d’usage du site et l’environnement de test utilisé lors du développement du site. Les versions des technologies d’assistance à utiliser seront soit la dernière disponible en langue française sur le système d’exploitation retenu soit la version précédente

Lorsque le site ou l’application est destiné à un public dont l’équipement est maîtrisé, les tests devront se faire sur un environnement de test adapté au contexte de l’environnement maîtrisé.

Pour qu’un dispositif HTML / WAI-ARIA ou son alternative soit considéré comme compatible avec l’accessibilité, il faut qu’il soit pleinement fonctionnel, en termes de restitution et de fonctionnalités, sur au moins une des combinaisons suivantes.



<div class="fr-table fr-table--bordered">
    <table>
        <caption>Environnement de test Ordinateur (desktop) - Combinaison 1</caption>
        <thead>
        <tr>
            <th scope="col">Technologie d’assistance</th>
            <th scope="col">Navigateur</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>NVDA (dernière version)</td>
            <td>Firefox</td>
        </tr>
        <tr>
            <td>JAWS (version précédente)</td>
            <td>Firefox ou Internet Explorer</td>
        </tr>
        <tr>
            <td>VoiceOver (dernière version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Environnement de test Ordinateur (desktop) - Combinaison 2</caption>
        <thead>
        <tr>
            <th scope="col">Technologie d’assistance</th>
            <th scope="col">Navigateur</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>JAWS (version précédente)</td>
            <td>Firefox</td>
        </tr>
        <tr>
            <td>NVDA (dernière version)</td>
            <td>Firefox ou Internet Explorer</td>
        </tr>
        <tr>
            <td>VoiceOver (dernière version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>
	


## Environnement de test Terminal mobile
Les systèmes d’exploitation retenus sont Android et iOS et les navigateurs Chrome et Safari. Il appartient à l’auditeur de définir, en concertation avec les responsables du site audité, les versions de système d’exploitation et de navigateur en adéquation avec le contexte d’usage du site et l’environnement de test utilisé lors du développement du site. Les versions des technologies d’assistance à utiliser seront soit la dernière disponible en langue française sur le système d’exploitation retenu, soit la version précédente. Pour tester un site web sur un terminal mobile, l’environnement de test devra comporter une des deux combinaisons complémentaires suivantes :



<div class="fr-table fr-table--bordered">
    <table>
        <caption>Environnement de test Terminal mobile - Combinaison 1</caption>
        <thead>
        <tr>
            <th scope="col">Système d’exploitation</th>
            <th scope="col">Technologie d’assistance</th>
            <th scope="col">Navigateur</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Androïd natif</td>
            <td>TalkBack (dernière version)</td>
            <td>Chrome</td>
        </tr>
        </tbody>
    </table>
</div>

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Environnement de test Terminal mobile - Combinaison 2</caption>
        <thead>
        <tr>
            <th scope="col">Système d’exploitation</th>
            <th scope="col">Technologie d’assistance</th>
            <th scope="col">Navigateur</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>iOS</td>
            <td>VoiceOver (dernière version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>

À noter que dans le cas d’un site web mobile grand public, il est fortement conseillé de tester dans les deux environnements.

### Autres environnements
Enfin, en fonction du contexte du site audité, d’autres technologies d’assistance complémentaires peuvent être utiles telles que :
* ZoomText sur Windows ou Mac OSX.
* Dragon Naturally Speaking sur Windows ou Mac OSX.

### Environnement maîtrisé

Lorsque le site web est destiné à être diffusé et utilisé dans un environnement maîtrisé, l’environnement de test (base de référence) doit être constitué des configurations (technologie d’assistance, système d’exploitation, navigateur) effectivement utilisées dans l’environnement maîtrisé.

Par exemple, lorsque le site web est exclusivement diffusé dans un environnement GNU/Linux, les tests devront être réalisés uniquement sur les navigateurs et les technologies d’assistance utilisés par les agents sur cette plateforme. Cet environnement de test (base de référence) se substitue à l’environnement de test (base de référence) utilisé en environnement non maîtrisé.
