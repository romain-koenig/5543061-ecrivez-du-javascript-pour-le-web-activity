## Code de projet de cours Open Classrooms ##
Clonez ce repository et ajoutez-y webpack comme expliqué dans l'activité.

-----------------------------------

# Commandes utilisées

npm init

> Initialisation du projet - Création de package.json

npm install webpack --save-dev  
npm install webpack-cli --save-dev

> Installation de Webpack

mkdir Dist  
mv *.html ./Dist  
mv images ./Dist  
mkdir Src  
mv *.js ./Src  

> Création du répertoire de destination - Déplacement des éléments statiques dans ce dossier - Création d'un répertoire source avec les javascript qui seront transpilés / minifiés / bundlés

Création d'un fichier de conf webpack

`const path = require('path');

module.exports = {
    //mode: "production",
    mode: "development",
    entry: {
        fcn: './Src/functions.js',
        blog: './Src/blog.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'Dist')
    }
};`

npm install webpack-dev-server --save-dev

> Installation du serveur de développement

------------------------------------------


Pour valider cette activité, les éléments suivants devront être réalisés : 

- Transpiler et minifier du code JavaScript ;
- Copier tous les fichiers JavaScript générés, ainsi que tous les assets (HTML, CSS, images...) dans un dossier nommé Dist ;
- Mettre en place un serveur de développement Webpack qui regénère automatiquement les sources lorsqu’on modifie un fichier ;
- Faire en sorte que le navigateur s'actualise quand les fichiers changent.

Le projet devra :

- Exécuter npm start et voir que le site fonctionne correctement ;
- Exécuter npm run build et ouvrir les fichiers index.html et blog.html du dossier Dist, et voir que le site fonctionne correctement.