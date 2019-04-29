# Activité - cours OpenClassrooms Javacript pour le web

## Code de projet de cours Open Classrooms

Clonez ce repository et ajoutez-y webpack comme expliqué dans l'activité.

### A noter pour la correction : les fichiers functions.js et blog.js doivent se trouver dans un dossier Src

Pour valider cette activité, les éléments suivants devront être réalisés :

- Transpiler et minifier du code JavaScript ;

> Utilisation de Babel pour transpiler. Minification par webpack en mode production

- Copier tous les fichiers JavaScript générés, ainsi que tous les assets (HTML, CSS, images...) dans un dossier nommé Dist ;

> Fait

- Mettre en place un serveur de développement Webpack qui regénère automatiquement les sources lorsqu’on modifie un fichier ;

> La regénération automatique est le comportement par défaut. Pour le stopper, il faudrait paramétrer manuellement le LAZY MODE

- Faire en sorte que le navigateur s'actualise quand les fichiers changent.

> Ouverture auto du navigateur par l'option open: true ; actualisation par l'option watchContentBase: true

Le projet devra :

- Exécuter npm start et voir que le site fonctionne correctement ;

> Commande npm start qui lance le webpack-dev-server ; fonctionnement OK

- Exécuter npm run build et ouvrir les fichiers index.html et blog.html du dossier Dist, et voir que le site fonctionne correctement.

> Fonctionnement "statique" testé en fin de projet ; fonctionnement correct

----

## Commandes utilisées

Initialisation du projet - Création de package.json

`npm init`

Installation de Webpack

```npm install webpack --save-dev  
npm install webpack-cli --save-dev```

Création du répertoire de destination - Déplacement des éléments statiques dans ce dossier - Création d'un répertoire source avec les javascript qui seront transpilés / minifiés / bundlés

```mkdir Dist  
mv *.html ./Dist  
mv images ./Dist  
mkdir Src  
mv *.js ./Src```

Création d'un fichier de configurtion Webpack

```Javascript
const path = require('path');

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
};```

Installation du serveur de développement ; lancement par npm start

`npm install webpack-dev-server --save-dev`

Installation de Babel avec le babel-loader pour utilisation avec webpack

`npm install -D babel-loader @babel/core @babel/preset-env`

```Javascript
module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
```

----

## A noter - modification du webservice Lorem Ipsum

Le module proposé ne fontionnant pas, modification pour un autre webservice de Lorem Ipsum sur rapidapi