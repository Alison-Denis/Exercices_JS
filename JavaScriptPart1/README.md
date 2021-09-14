# JavaScriptPart1

**Aide :**

- https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide
- https://javascript.info/



### Exo 1
Dans une page HTML, vous allez ouvrir une balise de script directement dans votre body. Il faut qu'à l'ouverture de la page dans le navigateur, une *modal* avec le message "Hello World !!!" apparaisse en premier à l'écran.

Pour ce faire, nous allons d'abord déclarer la variable **maVariable** avec *var*. Puis nous allons lui assigner la valeur : "Hello World !!!". Enfin, il faudra appeler la *modal* en lui passant **maVariable** en paramètre.


### Exo 2
Dans une page HTML, vous allez ouvrir une balise de script directement dans votre body. Vous prendrez soin de préciser le *type* de cette balise.

Vous allez déclarer 3 variables avec *let*, qui auront le contenu suivant :

- lastName => Nom : Doe
- firstName => Prénom : John
- city => Ville : New-York

Enfin, vous allez appeler une *modal* en lui passant en paramètre les 3 variables. Attention : il faudra que le contenu des variables s'affiche dans la *modal* avec un retour à la ligne entre chaque variable.

**Indice :** Satanées *quotes*...


### Exo 3
Dans une page HTML, vous allez ouvrir une balise de script directement dans votre body. Vous prendrez soin de préciser le *type* de cette balise.

Vous allez déclarer une variable *constante* : **prenom**.

Cette variable n'a pas de valeur prédéfinie. Elle stockera celle que l'utilisateur lui indiquera. Elle devra donc demander à l'utilisateur d'entrer son prénom.

**Indice :** https://javascript.info/alert-prompt-confirm

Puis, dans une *modal*, vous afficherez : "Bojour, *prenom*"


### Exo 4
Parce que ce n'est pas propre, à partir de maintenant, fini d'écrire du JS dans le HTML. 

Créez une page HTML dont le body est vide et reliez votre fichier JS, sur lequel vous allez travailler.

Le JS doit déclarer 3 variables *constantes* et recueillir successivement les entrées utilisateur :

- firstName => Entrez votre prénom : ...
- lastName => Entrez votre nom : ...
- city => Entrez votre ville : ...

Enfin, affichez le texte suivant dans une *modal* :

" Bonjour *firstName* !

*lastName*, quel drôle de nom...

Est-ce qu'il fait beau à *city* ? "


### Exo 5
Dans une page HTML, vous allez déclarer un formulaire avec les entrées suivantes :

- Nom
- Prénom
- Ville

Chaque entrée doit avoir son label. On n'oublie pas les bonnes pratiques. Les *input* doivent avoir des *name/id* en anglais. 

A la fin du formulaire, il doit y avoir un bouton qui, au *click*, doit déclencher une fonction **form1()**, que nous allons définir dans notre fichier js.

Créez la page **exo5.js** et n'oubliez pas de la relier à votre page HTML.

Dans le js, vous devez d'abord déclarer la fonction **form1()**.

En 1er lieu, il va falloir demander à votre JS d'aller récupérer les valeurs rentrées par l'utilisateur (sans quoi vous ne pourrez pas vous en servir).

Pour ce faire, nous allons déclarer 3 variables :

- lastName
- firstName
- city

Et leur dire d'aller *prendre l'élément par l'ID* correspondant et de récupérer sa valeur.

Ensuite, nous pouvons déclarer une *modal* avec le texte suivant :

" Bonjour *firstName* !

*lastName*, quel drôle de nom...

Est-ce qu'il fait beau à *city* ? "


### Exo 6
Même exercice que le précédent, mais cette fois, nous allons ajouter une couche de gestion d'erreur.

Pour ce faire, dans notre fonction JS **form1()**, nous allons déclarer une variable supplémentaire : **regexText**. Cette regex peut prendre toutes les lettres et tous les accents. Elle ne doit donc pas prendre les chiffres ou les caractères spéciaux.

**Aide :** https://regex101.com/

Ensuite, nous allons créer une série de conditions avant de déclencher notre *modal*. 

Dans nos conditions, nous allons tester **s'il est faux que** le *test* de notre regex, appliqué à notre variable, passe. 

**Si** la 1ère condition est vraie, alors affichez le texte suivant dans une *modal* : "Vous vous êtes trompés dans le nom."

**Sinon si** la 2ème condition est vraie, alors affichez le texte suivant dans une *modal* : "Vous vous êtes trompés dans le prénom."

**Sinon si** la 3ème condition est vraie, alors affichez le texte suivant dans une *modal* : "Vous vous êtes trompés dans la ville."

**Sinon**, tout est ok alors affichez la *modal* avec le texte de l'exercice précédent.


### Exo 7
Dans une page HTML, vous allez déclarer un formulaire qui posera les questions suivantes :

- Quelle est votre pointure ?
- Quelle est votre année de naissance ?

Les inputs récupérant les valeurs doivent être de type *text*.
A la fin du formulaire, il doit y avoir un bouton qui, au *click*, doit déclencher une fonction **form1()**, que nous allons définir dans notre fichier js.

Créez la page **exo7.js** et n'oubliez pas de la relier à votre page HTML.

Dans la fonction **form1()**, on va d'abord récupérer les valeurs entrées par l'utilisateur dans le form.
Puis nous allons créer une nouvelle variable *result*, qui aura pour but, s'il n'y a pas d'erreur dans le form, d'afficher le résultat dans une alerte. Le calcul à effectuer sera la suivant :

( ( ( (*pointure* x 2) + 5) x 50) - *année*) + 1771

=> Cette formule devrait donner un résultat où les 2 premiers chiffres représentent votre pointure, et les 2 derniers votre âge.

Dans nos conditions, nous allons tester :

- **Si** *pointure* ET *année* ne sont pas des nombres, alors afficher une alerte pour en informer l'utilisateur.
- **Sinon si** *pointure* n'est pas un nombre, idem.
- **Sinon si** *année* n'est pas un nombre, idem.
- **Sinon** affichez le résultat dans une alerte.


### Exo 8
Dans une page HTML, relier un fichier de script *exo8.js*.

Dans un fichier JavaScript, demander à l'utilisateur quel est son âge.

Les conditions doivent prendre en compte 5 cas possibles et afficher un message en conséquence dans une alerte :

- La minorité
- La majorité
- Le 3ème âge
- Le club très fermé des centenaires
- Tout ce qui ne peut pas être un âge


### Exo 9
Dans une page HTML, afficher les 5 images du dossier **images**. Au passage de la souris sur les images, elles doivent toutes se transformer en **image2.jpg**. 

Dans un script.js, déclarez une fonction qui permettra de remplacer le contenu des **src** du HTML au passage de la souris en utilisant la concaténation. 

Indice : this


