/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blog.js":
/*!*********************!*\
  !*** ./src/blog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const api = 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site';\nconst loadButton = document.getElementById('load-button');\n\nfunction getRequest(url) {\n  return new Promise((resolve, reject) => {\n    let request = new XMLHttpRequest();\n    request.open('GET', url);\n    request.onreadystatechange = () => {\n      if (request.readyState === 4) {\n        if (request.status !== 200) {\n          reject(JSON.parse(request.response));\n        }\n        resolve(JSON.parse(request.response));\n      }\n    };\n    request.send();\n  });\n}\n\nasync function getBlogPost() {\n  //Quick hack car le webservice de Lorem Ispum fourni ne fonctionne pas\n  //const titlePromise = getRequest(api + '/generate-title');\n  //const loremPromise = getRequest(api + '/generate-lorem');\n  try {\n    //let [titleResponse, loremResponse] = await Promise.all([titlePromise, loremPromise]);\n    //document.querySelector('main').appendChild(buildPostElement(titleResponse.title, loremResponse.lorem));\n    document.querySelector('main').appendChild(buildPostElement(\"LOREM IPSUM\", \"xxx yyy zzz ttt\"));\n  } catch (error) {\n    document.querySelector('main').appendChild(buildPostElement('Une erreur est survenue !', error));\n  }\n}\n\nloadButton.addEventListener('click', async function () {\n  getBlogPost();\n});\n\nfunction buildPostElement(title, content) {\n  let card = document.createElement('div');\n  let cardBody = document.createElement('div');\n  let cardTitle = document.createElement('h2');\n  let cardContent = document.createElement('p');\n\n  card.classList.add('card');\n  cardBody.classList.add('card-body');\n  cardTitle.classList.add('card-title');\n  cardContent.classList.add('card-text');\n\n  cardTitle.textContent = title;\n  cardContent.textContent = content;\n\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardContent);\n  card.appendChild(cardBody);\n\n  return card;\n}\n\n//# sourceURL=webpack:///./src/blog.js?");

/***/ })

/******/ });