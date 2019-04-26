## Code de projet de cours Open Classrooms ##
Clonez ce repository et ajoutez-y webpack comme expliqué dans l'activité.

# Rappel des consignes

Pour valider cette activité, les éléments suivants devront être réalisés : 

    Transpiler et minifier du code JavaScript ;
    Copier tous les fichiers JavaScript générés, ainsi que tous les assets (HTML, CSS, images...) dans un dossier nommé Dist ;
    Mettre en place un serveur de développement Webpack qui regénère automatiquement les sources lorsqu’on modifie un fichier ;
    Faire en sorte que le navigateur s'actualise quand les fichiers changent.

Le projet devra :

    Exécuter npm start et voir que le site fonctionne correctement ;
    Exécuter npm run build et ouvrir les fichiers index.html et blog.html du dossier Dist, et voir que le site fonctionne correctement.

# Travail réalisé

Pour valider cette activité, les éléments suivants devront être réalisés : 

    Transpiler et minifier du code JavaScript ;

    >> Minifier = automatique quand webpack est en mode 'production'
    >> Transpiler = TODO Babel

    Copier tous les fichiers JavaScript générés, ainsi que tous les assets (HTML, CSS, images...) dans un dossier nommé Dist ;

    >> Les .js de base ont été placés dans un répertoire ./src/ et leur version bundlée est placée avec les sources statiques (html, images...) dans ./dist/

    Mettre en place un serveur de développement Webpack qui regénère automatiquement les sources lorsqu’on modifie un fichier ;

    >> Comportement par défaut de webpack-dev-serveur, inutile d'ajouter la balise watch

    Faire en sorte que le navigateur s'actualise quand les fichiers changent.

    >> WIP

Le projet devra :

    Exécuter npm start et voir que le site fonctionne correctement ;
    
    >> npm start branché sur webpack-dev-server= OK
    
    Exécuter npm run build et ouvrir les fichiers index.html et blog.html du dossier Dist, et voir que le site fonctionne correctement.

    >> Inutile de lancer npm run build après le start, le start recompile déjà. Commande build néanmoins fonctionelle