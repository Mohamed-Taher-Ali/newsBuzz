module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getNews.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./configs/apis.js":
/*!*************************!*\
  !*** ./configs/apis.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.getNewsApi = (skip, limit) => `${process.env.REACT_APP_BASE_URL}/news?skip=${skip}&limit=${limit}`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWdzL2FwaXMuanM/MTU5ZSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiZ2V0TmV3c0FwaSIsInNraXAiLCJsaW1pdCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ2hCLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBbUIsY0FBYUosSUFBSyxVQUFTQyxLQUFNLEVBRHZFIiwiZmlsZSI6Ii4vY29uZmlncy9hcGlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5nZXROZXdzQXBpID0gKHNraXAsIGxpbWl0KSA9PiAoXG4gICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9uZXdzP3NraXA9JHtza2lwfSZsaW1pdD0ke2xpbWl0fWBcbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./configs/apis.js\n");

/***/ }),

/***/ "./pages/api/getNews.js":
/*!******************************!*\
  !*** ./pages/api/getNews.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/apis */ \"./configs/apis.js\");\n/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_apis__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  let limit = 10,\n      page = parseInt(req.query.page),\n      skip = (page - 1) * limit,\n      api = Object(_configs_apis__WEBPACK_IMPORTED_MODULE_1__[\"getNewsApi\"])(skip, limit);\n  let apiReq = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(api);\n\n  if (apiReq.status == 200) {\n    res.send(apiReq.data);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0TmV3cy5qcz9mNDcxIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImxpbWl0IiwicGFnZSIsInBhcnNlSW50IiwicXVlcnkiLCJza2lwIiwiYXBpIiwiZ2V0TmV3c0FwaSIsImFwaVJlcSIsImF4aW9zIiwiZ2V0Iiwic3RhdHVzIiwic2VuZCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR2Usc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUNBQyxLQUFLLEdBQUcsRUFEUjtBQUFBLE1BRUFDLElBQUksR0FBR0MsUUFBUSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUYsSUFBWCxDQUZmO0FBQUEsTUFHQUcsSUFBSSxHQUFHLENBQUNILElBQUksR0FBRyxDQUFSLElBQWFELEtBSHBCO0FBQUEsTUFJQUssR0FBRyxHQUFHQyxnRUFBVSxDQUFDRixJQUFELEVBQU9KLEtBQVAsQ0FKaEI7QUFNQSxNQUFJTyxNQUFNLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVSixHQUFWLENBQW5COztBQUVBLE1BQUdFLE1BQU0sQ0FBQ0csTUFBUCxJQUFpQixHQUFwQixFQUF3QjtBQUNwQlgsT0FBRyxDQUFDWSxJQUFKLENBQVNKLE1BQU0sQ0FBQ0ssSUFBaEI7QUFDSDtBQUNKLENBWkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0TmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7Z2V0TmV3c0FwaX0gZnJvbSAnLi4vLi4vY29uZmlncy9hcGlzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldFxuICAgIGxpbWl0ID0gMTAsXG4gICAgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlKSxcbiAgICBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0LFxuICAgIGFwaSA9IGdldE5ld3NBcGkoc2tpcCwgbGltaXQpO1xuXG4gICAgbGV0IGFwaVJlcSA9IGF3YWl0IGF4aW9zLmdldChhcGkpO1xuXG4gICAgaWYoYXBpUmVxLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICByZXMuc2VuZChhcGlSZXEuZGF0YSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getNews.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ })

/******/ });