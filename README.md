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
