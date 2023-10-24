/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
  margin: 0px;
  padding: 0px;
  background-color: var(--background-color);
  font-family: Arial, Helvetica, sans-serif;
  
}

:root{
  --dark-gray: #33393D;
  --yellow: #FFCD24;
  --solid-blue: #2AABE4;
  --light-blue: #9DC8E4;
  --light-gray: #666B6E;
}

body{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 60px;
  background-color: var(--solid-blue);
  color: white;
}

/* Document header */
.header{
  font-size: 2rem;
  padding: 1em;
  color: white;
  box-shadow: 0px 1px 3px var(--light-gray);
}

.screen{
  display: grid;
  justify-items: center;
  align-items: center;
}

/* Input form screen */

.screen .form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--light-blue);
  padding: 3%;
  box-shadow: 0px 2px 10px var(--light-gray);
  color: var(--dark-gray);
  border-radius: 5px;
}

.form input{
  height: 1.5em;
  border-radius: 5px;
  padding-left: 1em;
  padding-right: 1em;
  background-color: white;
}

.form button{
  border-radius: 100%;
  background-color: var(--yellow);
  padding: 5px;
}

/* Post submission table screen styling */

.screen.table{
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: min(10%, 100px);
}

.table .mortgage-info{
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  color: var(--dark-gray);
  padding: .5em 1em;
  box-shadow: 0px 2px 10px var(--light-gray);
  border-radius: 1em;
}

.table .mortgage-info div{
  font-weight: bold;
}

.table-wrapper{
  overflow-y: scroll;
  height: min(350px, 30%);
  background-color: white;
  color: black;
  box-shadow: 0px 5px 15px var(--light-gray);
}

table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
}

tr:nth-child(even){
  background-color: var(--light-blue);
}

tr:hover{
  background-color: var(--yellow);
}

th, td{
  padding: 0px 1em 0px 1em;
}

.screen.table button{
  background-color: var(--yellow);
  color: black;
  border: none;
  box-shadow: 0px 2px 10px var(--light-gray);
  height: 2em;
  border-radius: 2em;
  padding: 5px .5em 5px .5em;
  font-size: 1.2rem;
  display: flex;
  gap: 20px;
  justify-items: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,yCAAyC;;AAE3C;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,SAAS;EACT,mCAAmC;EACnC,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mCAAmC;EACnC,WAAW;EACX,0CAA0C;EAC1C,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;AACd;;AAEA,yCAAyC;;AAEzC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,YAAY;EACZ,0CAA0C;EAC1C,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["*{\n  margin: 0px;\n  padding: 0px;\n  background-color: var(--background-color);\n  font-family: Arial, Helvetica, sans-serif;\n  \n}\n\n:root{\n  --dark-gray: #33393D;\n  --yellow: #FFCD24;\n  --solid-blue: #2AABE4;\n  --light-blue: #9DC8E4;\n  --light-gray: #666B6E;\n}\n\nbody{\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 60px;\n  background-color: var(--solid-blue);\n  color: white;\n}\n\n/* Document header */\n.header{\n  font-size: 2rem;\n  padding: 1em;\n  color: white;\n  box-shadow: 0px 1px 3px var(--light-gray);\n}\n\n.screen{\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n\n/* Input form screen */\n\n.screen .form{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  background-color: var(--light-blue);\n  padding: 3%;\n  box-shadow: 0px 2px 10px var(--light-gray);\n  color: var(--dark-gray);\n  border-radius: 5px;\n}\n\n.form input{\n  height: 1.5em;\n  border-radius: 5px;\n  padding-left: 1em;\n  padding-right: 1em;\n  background-color: white;\n}\n\n.form button{\n  border-radius: 100%;\n  background-color: var(--yellow);\n  padding: 5px;\n}\n\n/* Post submission table screen styling */\n\n.screen.table{\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  padding-bottom: min(10%, 100px);\n}\n\n.table .mortgage-info{\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background-color: white;\n  color: var(--dark-gray);\n  padding: .5em 1em;\n  box-shadow: 0px 2px 10px var(--light-gray);\n  border-radius: 1em;\n}\n\n.table .mortgage-info div{\n  font-weight: bold;\n}\n\n.table-wrapper{\n  overflow-y: scroll;\n  height: min(350px, 30%);\n  background-color: white;\n  color: black;\n  box-shadow: 0px 5px 15px var(--light-gray);\n}\n\ntable, th, td{\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\ntr:nth-child(even){\n  background-color: var(--light-blue);\n}\n\ntr:hover{\n  background-color: var(--yellow);\n}\n\nth, td{\n  padding: 0px 1em 0px 1em;\n}\n\n.screen.table button{\n  background-color: var(--yellow);\n  color: black;\n  border: none;\n  box-shadow: 0px 2px 10px var(--light-gray);\n  height: 2em;\n  border-radius: 2em;\n  padding: 5px .5em 5px .5em;\n  font-size: 1.2rem;\n  display: flex;\n  gap: 20px;\n  justify-items: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/mortgage.js":
/*!*************************!*\
  !*** ./src/mortgage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Mortgage{
  constructor(principle, numPayments, interestRate){
    this.$principle = principle;
    this.$numPayments = numPayments;
    this.$interestRate = interestRate;

    this.createMonthlyLists();
  }

  get principle(){
    return this.$principle;
  }
  get numPayments(){
    return this.$numPayments;
  }
  get interestRate(){
    return this.$interestRate;
  }
  get monthlyPayment(){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principle * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    return payment;
  }
  get principleValuesList(){
    return this.$principleValuesList;
  }
  get principlePaymentsList(){
    return this.$principlePaymentsList;
  }
  get interestPaymentsList(){
    return this.$interestPaymentsList;
  }
  get totalInterestList(){
    return this.$totalInterestList;
  }
  get totalPaidList(){
    return this.$totalPaidList;
  }

  set principleValuesList(values){
    this.$principleValuesList = values;
  }
  set principlePaymentsList(values){
    this.$principlePaymentsList = values;
  }
  set interestPaymentsList(values){
    this.$interestPaymentsList = values;
  }
  set totalInterestList(values){
    this.$totalInterestList = values;
  }
  set totalPaidList(values){
    this.$totalPaidList = values;
  }
  set principle(principle){
    this.$principle = principle;
  }
  set numPayments(num){
    this.$numPayments = num;
  }
  set interestRate(rate){
    this.$interestRate = rate;
  }
  set monthlyPayment(monthly){
    let onePlusRtoN = Math.pow(1 + this.interestRate, this.numPayments);
    let payment = this.principle * ((this.interestRate * onePlusRtoN) / (onePlusRtoN - 1));
    this.monthlyPayment = payment;
  }

  createMonthlyLists(){
    const principleValues = [this.principle];
    const principlePayments = [0];
    const interestPayments = [0];
    const totalInterest = [0];
    const totalPaid = [0];
    for(let i=1; i<=this.numPayments; i++){
      let interest = principleValues[i-1] * this.interestRate;
      let principlePayment = this.monthlyPayment - interest;

      principleValues.push(principleValues[i-1] - principlePayment);
      principlePayments.push(principlePayment);
      interestPayments.push(interest);
      totalInterest.push(totalInterest[i-1] + interest);
      totalPaid.push(i * this.monthlyPayment);
    }
    
    this.principleValuesList = principleValues;
    this.principlePaymentsList = principlePayments;
    this.interestPaymentsList = interestPayments;
    this.totalInterestList = totalInterest;
    this.totalPaidList = totalPaid;

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mortgage);

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mortgage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage */ "./src/mortgage.js");


class Page{
  constructor(){
    this.$screen = new InputScreen(this);
    this.$pageNode = document.body;

    const header = generateHTMLElement('div', ['header'], 'Mortgage Amoritization Schedule Calculator');
    this.pageNode.appendChild(header);
    this.pageNode.appendChild(this.screen.element);
  }

  get screen(){
    return this.$screen;
  }
  get pageNode(){
    return this.$pageNode;
  }

  set screen(screen){
    const oldScreen = this.screen;
    this.$screen = screen;
    this.updatePage(oldScreen);
  }
  set pageNode(pageNode){
    this.$pageNode = pageNode;
  }

  updatePage(oldScreen){
    this.pageNode.removeChild(oldScreen.element);
    this.pageNode.appendChild(this.screen.element);
  }
}

class InputScreen{
  constructor(page){
    this.$page = page;
    this.$element = generateHTMLElement('div', ['screen', 'form']);
    const form = generateHTMLElement('div', ['form']);
    this.element.appendChild(form);

    appendFormInputAndLabel('number', 'loanAmount', 'Enter loan amount ($)', form);
    appendFormInputAndLabel('number', 'loanLength', 'Enter loan length (Months)', form);
    appendFormInputAndLabel('number', 'interestRate', 'Enter loan interest rate (%)', form);

    const submitMortgageButton = document.createElement('button');
    submitMortgageButton.classList.add('button', 'done', 'material-symbols-outlined');
    submitMortgageButton.innerText = 'check';
    submitMortgageButton.addEventListener('click', e => {
      const principle = document.getElementById('loanAmount').value;
      const months = document.getElementById('loanLength').value;
      const rate = document.getElementById('interestRate').value;
      const newMortgage = new _mortgage__WEBPACK_IMPORTED_MODULE_0__["default"](principle, months, rate/100);
      const table = new TableScreen(this.page, newMortgage);
      this.page.screen = table;

    });
    form.appendChild(submitMortgageButton);

  }

  get element(){
    return this.$element;
  }
  get page(){
    return this.$page;
  }

  set element(element){
    this.$element = element;
  }
  set page(page){
    this.$page = page;
  }
}

class TableScreen{
  constructor(page, thisMortgage){
    this.mortgage = thisMortgage;
    this.$page = page;
    this.$element = generateHTMLElement('div', ['screen', 'table']);

    const mortgageInfoBar = generateHTMLElement('div', ['mortgage-info', 'bar']);
    mortgageInfoBar.appendChild(generateHTMLElement('div', ['info'], 'Original Principle: $' + this.mortgage.principle));
    mortgageInfoBar.appendChild(generateHTMLElement('div', ['info'], 'Loan Length: ' + this.mortgage.numPayments + ' Months'));
    mortgageInfoBar.appendChild(generateHTMLElement('div', ['info'], 'Interest Rate: ' + this.mortgage.interestRate * 100 + '%'));

    this.element.appendChild(mortgageInfoBar);

    const headers = ['Months', 'Principle Remaining', 'Total Paid', 'Principle Paid',
     'Interest Paid', 'Total Interest Accrued'];

     const monthsArray = Array.from(
      {length: (Number(this.mortgage.numPayments) + 1)},
      (_, index) => index
    );

    const columnData = [monthsArray, this.mortgage.principleValuesList, this.mortgage.totalPaidList,
      this.mortgage.principlePaymentsList, this.mortgage.interestPaymentsList,
      this.mortgage.totalInterestList];

    const table = tableMaker(headers, columnData);
    const tableWrapper = generateHTMLElement('div', ['table-wrapper']);
    tableWrapper.appendChild(table);
    this.element.appendChild(tableWrapper);

    const resetButton = document.createElement('button');
    resetButton.classList.add('button', 'reset');
    resetButton.innerText = 'New Mortgage';
    resetButton.appendChild(generateHTMLElement('div', ['material-symbols-outlined'], 'replay'));
    resetButton.addEventListener('click', e => {
      this.page.screen = new InputScreen(this.page);
    });
    this.element.appendChild(resetButton);
  }

  get element(){
    return this.$element;
  }
  get page(){
    return this.$page;
  }

  set element(element){
    this.$element = element;
  }
  set page(page){
    this.$page = page;
  }
}

function generateHTMLElement(type = 'text', classList = [], innerHTML = ''){
  const element = document.createElement(type);

  classList.forEach(htmlClass =>{
    element.classList.add(htmlClass);
  });

  element.innerHTML = innerHTML;

  return element;
}

function appendFormInputAndLabel(type, id, label, parent){
  const text = document.createElement('input');
  text.type = type;
  text.id = id;
  text.classList.add('input');

  parent.appendChild(generateFormLabel(label, id));
  parent.appendChild(text);
}

function generateFormLabel(label, forInput){
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', forInput);
  textLabel.innerText = label;
  return textLabel;
}

function tableMaker(headers = [], dataColumns = []){
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  for(let i=0; i<headers.length; i++){
    headerRow.appendChild(generateHTMLElement('th', [], headers[i]));
  }
  table.appendChild(headerRow);
  for(let i=0; i<dataColumns[0].length; i++){
    const row = document.createElement('tr');
    for(let j=0; j<dataColumns.length; j++){
      const data = generateHTMLElement('td', [], Math.round(dataColumns[j][i] * 100) / 100); // "naive" rounding apparently, works fine enough here bc this doesnt affect calculations on display.
      row.appendChild(data);
    }
    table.appendChild(row);
  }
  
  return table;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Page, TableScreen});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mortgage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mortgage */ "./src/mortgage.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.js");




const webpage = new _page__WEBPACK_IMPORTED_MODULE_2__["default"].Page();

//go straight to table for development
//webpage.screen = new page.TableScreen(webpage, new Mortgage(100, 100, .1));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZXOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQVE7QUFDdEM7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU8sZ0RBQWdEO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qyw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsQ0FBQyxrQkFBa0I7Ozs7OztVQ25MbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDUjs7QUFFMUIsb0JBQW9CLDZDQUFJOztBQUV4QjtBQUNBLDZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvbW9ydGdhZ2UuanMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2UvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV1ZGVzaWMtZXhlcmNpc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldWRlc2ljLWV4ZXJjaXNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXVkZXNpYy1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBcbn1cblxuOnJvb3R7XG4gIC0tZGFyay1ncmF5OiAjMzMzOTNEO1xuICAtLXllbGxvdzogI0ZGQ0QyNDtcbiAgLS1zb2xpZC1ibHVlOiAjMkFBQkU0O1xuICAtLWxpZ2h0LWJsdWU6ICM5REM4RTQ7XG4gIC0tbGlnaHQtZ3JheTogIzY2NkI2RTtcbn1cblxuYm9keXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNvbGlkLWJsdWUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIERvY3VtZW50IGhlYWRlciAqL1xuLmhlYWRlcntcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tbGlnaHQtZ3JheSk7XG59XG5cbi5zY3JlZW57XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogSW5wdXQgZm9ybSBzY3JlZW4gKi9cblxuLnNjcmVlbiAuZm9ybXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgcGFkZGluZzogMyU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCB2YXIoLS1saWdodC1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm0gaW5wdXR7XG4gIGhlaWdodDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtIGJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKiBQb3N0IHN1Ym1pc3Npb24gdGFibGUgc2NyZWVuIHN0eWxpbmcgKi9cblxuLnNjcmVlbi50YWJsZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogbWluKDEwJSwgMTAwcHgpO1xufVxuXG4udGFibGUgLm1vcnRnYWdlLWluZm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHZhcigtLWxpZ2h0LWdyYXkpO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi50YWJsZSAubW9ydGdhZ2UtaW5mbyBkaXZ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFibGUtd3JhcHBlcntcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IG1pbigzNTBweCwgMzAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG50YWJsZSwgdGgsIHRke1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbn1cblxudHI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG59XG5cbnRoLCB0ZHtcbiAgcGFkZGluZzogMHB4IDFlbSAwcHggMWVtO1xufVxuXG4uc2NyZWVuLnRhYmxlIGJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCB2YXIoLS1saWdodC1ncmF5KTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgcGFkZGluZzogNXB4IC41ZW0gNXB4IC41ZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6Qyx5Q0FBeUM7O0FBRTNDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQSx5Q0FBeUM7O0FBRXpDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIFxcbn1cXG5cXG46cm9vdHtcXG4gIC0tZGFyay1ncmF5OiAjMzMzOTNEO1xcbiAgLS15ZWxsb3c6ICNGRkNEMjQ7XFxuICAtLXNvbGlkLWJsdWU6ICMyQUFCRTQ7XFxuICAtLWxpZ2h0LWJsdWU6ICM5REM4RTQ7XFxuICAtLWxpZ2h0LWdyYXk6ICM2NjZCNkU7XFxufVxcblxcbmJvZHl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNvbGlkLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBEb2N1bWVudCBoZWFkZXIgKi9cXG4uaGVhZGVye1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5zY3JlZW57XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSW5wdXQgZm9ybSBzY3JlZW4gKi9cXG5cXG4uc2NyZWVuIC5mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBwYWRkaW5nOiAzJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybSBpbnB1dHtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybSBidXR0b257XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogUG9zdCBzdWJtaXNzaW9uIHRhYmxlIHNjcmVlbiBzdHlsaW5nICovXFxuXFxuLnNjcmVlbi50YWJsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IG1pbigxMCUsIDEwMHB4KTtcXG59XFxuXFxuLnRhYmxlIC5tb3J0Z2FnZS1pbmZve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgcGFkZGluZzogLjVlbSAxZW07XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi50YWJsZSAubW9ydGdhZ2UtaW5mbyBkaXZ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYmxlLXdyYXBwZXJ7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IG1pbigzNTBweCwgMzAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG50YWJsZSwgdGgsIHRke1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50cjpudGgtY2hpbGQoZXZlbil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxudHI6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG50aCwgdGR7XFxuICBwYWRkaW5nOiAwcHggMWVtIDBweCAxZW07XFxufVxcblxcbi5zY3JlZW4udGFibGUgYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgcGFkZGluZzogNXB4IC41ZW0gNXB4IC41ZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgTW9ydGdhZ2V7XG4gIGNvbnN0cnVjdG9yKHByaW5jaXBsZSwgbnVtUGF5bWVudHMsIGludGVyZXN0UmF0ZSl7XG4gICAgdGhpcy4kcHJpbmNpcGxlID0gcHJpbmNpcGxlO1xuICAgIHRoaXMuJG51bVBheW1lbnRzID0gbnVtUGF5bWVudHM7XG4gICAgdGhpcy4kaW50ZXJlc3RSYXRlID0gaW50ZXJlc3RSYXRlO1xuXG4gICAgdGhpcy5jcmVhdGVNb250aGx5TGlzdHMoKTtcbiAgfVxuXG4gIGdldCBwcmluY2lwbGUoKXtcbiAgICByZXR1cm4gdGhpcy4kcHJpbmNpcGxlO1xuICB9XG4gIGdldCBudW1QYXltZW50cygpe1xuICAgIHJldHVybiB0aGlzLiRudW1QYXltZW50cztcbiAgfVxuICBnZXQgaW50ZXJlc3RSYXRlKCl7XG4gICAgcmV0dXJuIHRoaXMuJGludGVyZXN0UmF0ZTtcbiAgfVxuICBnZXQgbW9udGhseVBheW1lbnQoKXtcbiAgICBsZXQgb25lUGx1c1J0b04gPSBNYXRoLnBvdygxICsgdGhpcy5pbnRlcmVzdFJhdGUsIHRoaXMubnVtUGF5bWVudHMpO1xuICAgIGxldCBwYXltZW50ID0gdGhpcy5wcmluY2lwbGUgKiAoKHRoaXMuaW50ZXJlc3RSYXRlICogb25lUGx1c1J0b04pIC8gKG9uZVBsdXNSdG9OIC0gMSkpO1xuICAgIHJldHVybiBwYXltZW50O1xuICB9XG4gIGdldCBwcmluY2lwbGVWYWx1ZXNMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMuJHByaW5jaXBsZVZhbHVlc0xpc3Q7XG4gIH1cbiAgZ2V0IHByaW5jaXBsZVBheW1lbnRzTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiRwcmluY2lwbGVQYXltZW50c0xpc3Q7XG4gIH1cbiAgZ2V0IGludGVyZXN0UGF5bWVudHNMaXN0KCl7XG4gICAgcmV0dXJuIHRoaXMuJGludGVyZXN0UGF5bWVudHNMaXN0O1xuICB9XG4gIGdldCB0b3RhbEludGVyZXN0TGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiR0b3RhbEludGVyZXN0TGlzdDtcbiAgfVxuICBnZXQgdG90YWxQYWlkTGlzdCgpe1xuICAgIHJldHVybiB0aGlzLiR0b3RhbFBhaWRMaXN0O1xuICB9XG5cbiAgc2V0IHByaW5jaXBsZVZhbHVlc0xpc3QodmFsdWVzKXtcbiAgICB0aGlzLiRwcmluY2lwbGVWYWx1ZXNMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBwcmluY2lwbGVQYXltZW50c0xpc3QodmFsdWVzKXtcbiAgICB0aGlzLiRwcmluY2lwbGVQYXltZW50c0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IGludGVyZXN0UGF5bWVudHNMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kaW50ZXJlc3RQYXltZW50c0xpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHRvdGFsSW50ZXJlc3RMaXN0KHZhbHVlcyl7XG4gICAgdGhpcy4kdG90YWxJbnRlcmVzdExpc3QgPSB2YWx1ZXM7XG4gIH1cbiAgc2V0IHRvdGFsUGFpZExpc3QodmFsdWVzKXtcbiAgICB0aGlzLiR0b3RhbFBhaWRMaXN0ID0gdmFsdWVzO1xuICB9XG4gIHNldCBwcmluY2lwbGUocHJpbmNpcGxlKXtcbiAgICB0aGlzLiRwcmluY2lwbGUgPSBwcmluY2lwbGU7XG4gIH1cbiAgc2V0IG51bVBheW1lbnRzKG51bSl7XG4gICAgdGhpcy4kbnVtUGF5bWVudHMgPSBudW07XG4gIH1cbiAgc2V0IGludGVyZXN0UmF0ZShyYXRlKXtcbiAgICB0aGlzLiRpbnRlcmVzdFJhdGUgPSByYXRlO1xuICB9XG4gIHNldCBtb250aGx5UGF5bWVudChtb250aGx5KXtcbiAgICBsZXQgb25lUGx1c1J0b04gPSBNYXRoLnBvdygxICsgdGhpcy5pbnRlcmVzdFJhdGUsIHRoaXMubnVtUGF5bWVudHMpO1xuICAgIGxldCBwYXltZW50ID0gdGhpcy5wcmluY2lwbGUgKiAoKHRoaXMuaW50ZXJlc3RSYXRlICogb25lUGx1c1J0b04pIC8gKG9uZVBsdXNSdG9OIC0gMSkpO1xuICAgIHRoaXMubW9udGhseVBheW1lbnQgPSBwYXltZW50O1xuICB9XG5cbiAgY3JlYXRlTW9udGhseUxpc3RzKCl7XG4gICAgY29uc3QgcHJpbmNpcGxlVmFsdWVzID0gW3RoaXMucHJpbmNpcGxlXTtcbiAgICBjb25zdCBwcmluY2lwbGVQYXltZW50cyA9IFswXTtcbiAgICBjb25zdCBpbnRlcmVzdFBheW1lbnRzID0gWzBdO1xuICAgIGNvbnN0IHRvdGFsSW50ZXJlc3QgPSBbMF07XG4gICAgY29uc3QgdG90YWxQYWlkID0gWzBdO1xuICAgIGZvcihsZXQgaT0xOyBpPD10aGlzLm51bVBheW1lbnRzOyBpKyspe1xuICAgICAgbGV0IGludGVyZXN0ID0gcHJpbmNpcGxlVmFsdWVzW2ktMV0gKiB0aGlzLmludGVyZXN0UmF0ZTtcbiAgICAgIGxldCBwcmluY2lwbGVQYXltZW50ID0gdGhpcy5tb250aGx5UGF5bWVudCAtIGludGVyZXN0O1xuXG4gICAgICBwcmluY2lwbGVWYWx1ZXMucHVzaChwcmluY2lwbGVWYWx1ZXNbaS0xXSAtIHByaW5jaXBsZVBheW1lbnQpO1xuICAgICAgcHJpbmNpcGxlUGF5bWVudHMucHVzaChwcmluY2lwbGVQYXltZW50KTtcbiAgICAgIGludGVyZXN0UGF5bWVudHMucHVzaChpbnRlcmVzdCk7XG4gICAgICB0b3RhbEludGVyZXN0LnB1c2godG90YWxJbnRlcmVzdFtpLTFdICsgaW50ZXJlc3QpO1xuICAgICAgdG90YWxQYWlkLnB1c2goaSAqIHRoaXMubW9udGhseVBheW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnByaW5jaXBsZVZhbHVlc0xpc3QgPSBwcmluY2lwbGVWYWx1ZXM7XG4gICAgdGhpcy5wcmluY2lwbGVQYXltZW50c0xpc3QgPSBwcmluY2lwbGVQYXltZW50cztcbiAgICB0aGlzLmludGVyZXN0UGF5bWVudHNMaXN0ID0gaW50ZXJlc3RQYXltZW50cztcbiAgICB0aGlzLnRvdGFsSW50ZXJlc3RMaXN0ID0gdG90YWxJbnRlcmVzdDtcbiAgICB0aGlzLnRvdGFsUGFpZExpc3QgPSB0b3RhbFBhaWQ7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3J0Z2FnZTsiLCJpbXBvcnQgTW9ydGdhZ2UgZnJvbSBcIi4vbW9ydGdhZ2VcIjtcblxuY2xhc3MgUGFnZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLiRzY3JlZW4gPSBuZXcgSW5wdXRTY3JlZW4odGhpcyk7XG4gICAgdGhpcy4kcGFnZU5vZGUgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgY29uc3QgaGVhZGVyID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydoZWFkZXInXSwgJ01vcnRnYWdlIEFtb3JpdGl6YXRpb24gU2NoZWR1bGUgQ2FsY3VsYXRvcicpO1xuICAgIHRoaXMucGFnZU5vZGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0aGlzLnBhZ2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuc2NyZWVuLmVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IHNjcmVlbigpe1xuICAgIHJldHVybiB0aGlzLiRzY3JlZW47XG4gIH1cbiAgZ2V0IHBhZ2VOb2RlKCl7XG4gICAgcmV0dXJuIHRoaXMuJHBhZ2VOb2RlO1xuICB9XG5cbiAgc2V0IHNjcmVlbihzY3JlZW4pe1xuICAgIGNvbnN0IG9sZFNjcmVlbiA9IHRoaXMuc2NyZWVuO1xuICAgIHRoaXMuJHNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZVBhZ2Uob2xkU2NyZWVuKTtcbiAgfVxuICBzZXQgcGFnZU5vZGUocGFnZU5vZGUpe1xuICAgIHRoaXMuJHBhZ2VOb2RlID0gcGFnZU5vZGU7XG4gIH1cblxuICB1cGRhdGVQYWdlKG9sZFNjcmVlbil7XG4gICAgdGhpcy5wYWdlTm9kZS5yZW1vdmVDaGlsZChvbGRTY3JlZW4uZWxlbWVudCk7XG4gICAgdGhpcy5wYWdlTm9kZS5hcHBlbmRDaGlsZCh0aGlzLnNjcmVlbi5lbGVtZW50KTtcbiAgfVxufVxuXG5jbGFzcyBJbnB1dFNjcmVlbntcbiAgY29uc3RydWN0b3IocGFnZSl7XG4gICAgdGhpcy4kcGFnZSA9IHBhZ2U7XG4gICAgdGhpcy4kZWxlbWVudCA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnc2NyZWVuJywgJ2Zvcm0nXSk7XG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnZm9ybSddKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBhcHBlbmRGb3JtSW5wdXRBbmRMYWJlbCgnbnVtYmVyJywgJ2xvYW5BbW91bnQnLCAnRW50ZXIgbG9hbiBhbW91bnQgKCQpJywgZm9ybSk7XG4gICAgYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwoJ251bWJlcicsICdsb2FuTGVuZ3RoJywgJ0VudGVyIGxvYW4gbGVuZ3RoIChNb250aHMpJywgZm9ybSk7XG4gICAgYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwoJ251bWJlcicsICdpbnRlcmVzdFJhdGUnLCAnRW50ZXIgbG9hbiBpbnRlcmVzdCByYXRlICglKScsIGZvcm0pO1xuXG4gICAgY29uc3Qgc3VibWl0TW9ydGdhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRNb3J0Z2FnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZG9uZScsICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3VibWl0TW9ydGdhZ2VCdXR0b24uaW5uZXJUZXh0ID0gJ2NoZWNrJztcbiAgICBzdWJtaXRNb3J0Z2FnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgcHJpbmNpcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYW5BbW91bnQnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FuTGVuZ3RoJykudmFsdWU7XG4gICAgICBjb25zdCByYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVyZXN0UmF0ZScpLnZhbHVlO1xuICAgICAgY29uc3QgbmV3TW9ydGdhZ2UgPSBuZXcgTW9ydGdhZ2UocHJpbmNpcGxlLCBtb250aHMsIHJhdGUvMTAwKTtcbiAgICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlU2NyZWVuKHRoaXMucGFnZSwgbmV3TW9ydGdhZ2UpO1xuICAgICAgdGhpcy5wYWdlLnNjcmVlbiA9IHRhYmxlO1xuXG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRNb3J0Z2FnZUJ1dHRvbik7XG5cbiAgfVxuXG4gIGdldCBlbGVtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gIH1cbiAgZ2V0IHBhZ2UoKXtcbiAgICByZXR1cm4gdGhpcy4kcGFnZTtcbiAgfVxuXG4gIHNldCBlbGVtZW50KGVsZW1lbnQpe1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG4gIHNldCBwYWdlKHBhZ2Upe1xuICAgIHRoaXMuJHBhZ2UgPSBwYWdlO1xuICB9XG59XG5cbmNsYXNzIFRhYmxlU2NyZWVue1xuICBjb25zdHJ1Y3RvcihwYWdlLCB0aGlzTW9ydGdhZ2Upe1xuICAgIHRoaXMubW9ydGdhZ2UgPSB0aGlzTW9ydGdhZ2U7XG4gICAgdGhpcy4kcGFnZSA9IHBhZ2U7XG4gICAgdGhpcy4kZWxlbWVudCA9IGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnc2NyZWVuJywgJ3RhYmxlJ10pO1xuXG4gICAgY29uc3QgbW9ydGdhZ2VJbmZvQmFyID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydtb3J0Z2FnZS1pbmZvJywgJ2JhciddKTtcbiAgICBtb3J0Z2FnZUluZm9CYXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydpbmZvJ10sICdPcmlnaW5hbCBQcmluY2lwbGU6ICQnICsgdGhpcy5tb3J0Z2FnZS5wcmluY2lwbGUpKTtcbiAgICBtb3J0Z2FnZUluZm9CYXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydpbmZvJ10sICdMb2FuIExlbmd0aDogJyArIHRoaXMubW9ydGdhZ2UubnVtUGF5bWVudHMgKyAnIE1vbnRocycpKTtcbiAgICBtb3J0Z2FnZUluZm9CYXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWydpbmZvJ10sICdJbnRlcmVzdCBSYXRlOiAnICsgdGhpcy5tb3J0Z2FnZS5pbnRlcmVzdFJhdGUgKiAxMDAgKyAnJScpKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChtb3J0Z2FnZUluZm9CYXIpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFsnTW9udGhzJywgJ1ByaW5jaXBsZSBSZW1haW5pbmcnLCAnVG90YWwgUGFpZCcsICdQcmluY2lwbGUgUGFpZCcsXG4gICAgICdJbnRlcmVzdCBQYWlkJywgJ1RvdGFsIEludGVyZXN0IEFjY3J1ZWQnXTtcblxuICAgICBjb25zdCBtb250aHNBcnJheSA9IEFycmF5LmZyb20oXG4gICAgICB7bGVuZ3RoOiAoTnVtYmVyKHRoaXMubW9ydGdhZ2UubnVtUGF5bWVudHMpICsgMSl9LFxuICAgICAgKF8sIGluZGV4KSA9PiBpbmRleFxuICAgICk7XG5cbiAgICBjb25zdCBjb2x1bW5EYXRhID0gW21vbnRoc0FycmF5LCB0aGlzLm1vcnRnYWdlLnByaW5jaXBsZVZhbHVlc0xpc3QsIHRoaXMubW9ydGdhZ2UudG90YWxQYWlkTGlzdCxcbiAgICAgIHRoaXMubW9ydGdhZ2UucHJpbmNpcGxlUGF5bWVudHNMaXN0LCB0aGlzLm1vcnRnYWdlLmludGVyZXN0UGF5bWVudHNMaXN0LFxuICAgICAgdGhpcy5tb3J0Z2FnZS50b3RhbEludGVyZXN0TGlzdF07XG5cbiAgICBjb25zdCB0YWJsZSA9IHRhYmxlTWFrZXIoaGVhZGVycywgY29sdW1uRGF0YSk7XG4gICAgY29uc3QgdGFibGVXcmFwcGVyID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgnZGl2JywgWyd0YWJsZS13cmFwcGVyJ10pO1xuICAgIHRhYmxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlV3JhcHBlcik7XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdyZXNldCcpO1xuICAgIHJlc2V0QnV0dG9uLmlubmVyVGV4dCA9ICdOZXcgTW9ydGdhZ2UnO1xuICAgIHJlc2V0QnV0dG9uLmFwcGVuZENoaWxkKGdlbmVyYXRlSFRNTEVsZW1lbnQoJ2RpdicsIFsnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCddLCAncmVwbGF5JykpO1xuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0aGlzLnBhZ2Uuc2NyZWVuID0gbmV3IElucHV0U2NyZWVuKHRoaXMucGFnZSk7XG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgfVxuXG4gIGdldCBlbGVtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG4gIH1cbiAgZ2V0IHBhZ2UoKXtcbiAgICByZXR1cm4gdGhpcy4kcGFnZTtcbiAgfVxuXG4gIHNldCBlbGVtZW50KGVsZW1lbnQpe1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG4gIHNldCBwYWdlKHBhZ2Upe1xuICAgIHRoaXMuJHBhZ2UgPSBwYWdlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSFRNTEVsZW1lbnQodHlwZSA9ICd0ZXh0JywgY2xhc3NMaXN0ID0gW10sIGlubmVySFRNTCA9ICcnKXtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goaHRtbENsYXNzID0+e1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICB9KTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRm9ybUlucHV0QW5kTGFiZWwodHlwZSwgaWQsIGxhYmVsLCBwYXJlbnQpe1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGV4dC50eXBlID0gdHlwZTtcbiAgdGV4dC5pZCA9IGlkO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlRm9ybUxhYmVsKGxhYmVsLCBpZCkpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybUxhYmVsKGxhYmVsLCBmb3JJbnB1dCl7XG4gIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvcklucHV0KTtcbiAgdGV4dExhYmVsLmlubmVyVGV4dCA9IGxhYmVsO1xuICByZXR1cm4gdGV4dExhYmVsO1xufVxuXG5mdW5jdGlvbiB0YWJsZU1ha2VyKGhlYWRlcnMgPSBbXSwgZGF0YUNvbHVtbnMgPSBbXSl7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgZm9yKGxldCBpPTA7IGk8aGVhZGVycy5sZW5ndGg7IGkrKyl7XG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGdlbmVyYXRlSFRNTEVsZW1lbnQoJ3RoJywgW10sIGhlYWRlcnNbaV0pKTtcbiAgfVxuICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICBmb3IobGV0IGk9MDsgaTxkYXRhQ29sdW1uc1swXS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IobGV0IGo9MDsgajxkYXRhQ29sdW1ucy5sZW5ndGg7IGorKyl7XG4gICAgICBjb25zdCBkYXRhID0gZ2VuZXJhdGVIVE1MRWxlbWVudCgndGQnLCBbXSwgTWF0aC5yb3VuZChkYXRhQ29sdW1uc1tqXVtpXSAqIDEwMCkgLyAxMDApOyAvLyBcIm5haXZlXCIgcm91bmRpbmcgYXBwYXJlbnRseSwgd29ya3MgZmluZSBlbm91Z2ggaGVyZSBiYyB0aGlzIGRvZXNudCBhZmZlY3QgY2FsY3VsYXRpb25zIG9uIGRpc3BsYXkuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgXG4gIHJldHVybiB0YWJsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1BhZ2UsIFRhYmxlU2NyZWVufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IE1vcnRnYWdlIGZyb20gXCIuL21vcnRnYWdlXCI7XG5pbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IHdlYnBhZ2UgPSBuZXcgcGFnZS5QYWdlKCk7XG5cbi8vZ28gc3RyYWlnaHQgdG8gdGFibGUgZm9yIGRldmVsb3BtZW50XG4vL3dlYnBhZ2Uuc2NyZWVuID0gbmV3IHBhZ2UuVGFibGVTY3JlZW4od2VicGFnZSwgbmV3IE1vcnRnYWdlKDEwMCwgMTAwLCAuMSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==