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

eval("const api = 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site';\r\nconst loadButton = document.getElementById('load-button');\r\n\r\nfunction getRequest(url) {\r\n  return new Promise((resolve, reject) => {\r\n    let request = new XMLHttpRequest();\r\n    request.open('GET', url);\r\n    request.onreadystatechange = () => {\r\n      if (request.readyState === 4) {\r\n        if (request.status !== 200) {\r\n          reject(JSON.parse(request.response));\r\n        }\r\n        resolve(JSON.parse(request.response));\r\n      }\r\n    };\r\n    request.send();\r\n  });\r\n}\r\n\r\nasync function getBlogPost() {\r\n  //Quick hack car le webservice de Lorem Ispum fourni ne fonctionne pas\r\n  //const titlePromise = getRequest(api + '/generate-title');\r\n  //const loremPromise = getRequest(api + '/generate-lorem');\r\n  try {\r\n    //let [titleResponse, loremResponse] = await Promise.all([titlePromise, loremPromise]);\r\n    //document.querySelector('main').appendChild(buildPostElement(titleResponse.title, loremResponse.lorem));\r\n    document.querySelector('main').appendChild(buildPostElement(\"LOREM IPSUM\", \"xxx yyy zzz ttt\"));\r\n  } catch (error) {\r\n    document.querySelector('main').appendChild(buildPostElement('Une erreur est survenue !', error));\r\n  }\r\n}\r\n\r\nloadButton.addEventListener('click', async function () {\r\n  getBlogPost();\r\n});\r\n\r\nfunction buildPostElement(title, content) {\r\n  let card = document.createElement('div');\r\n  let cardBody = document.createElement('div');\r\n  let cardTitle = document.createElement('h2');\r\n  let cardContent = document.createElement('p');\r\n\r\n  card.classList.add('card');\r\n  cardBody.classList.add('card-body');\r\n  cardTitle.classList.add('card-title');\r\n  cardContent.classList.add('card-text');\r\n\r\n  cardTitle.textContent = title;\r\n  cardContent.textContent = content;\r\n\r\n  cardBody.appendChild(cardTitle);\r\n  cardBody.appendChild(cardContent);\r\n  card.appendChild(cardBody);\r\n\r\n  return card;\r\n}\n\n//# sourceURL=webpack:///./src/blog.js?");

/***/ })

/******/ });