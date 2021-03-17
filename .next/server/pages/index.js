module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/moslem/Downloads/nextTest/components/Card.js\";\n\nfunction Card({\n  avatar,\n  title,\n  newsTitle,\n  date,\n  tags = []\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"card-cont\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaWifi\"], {\n      className: \"wifi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: \"avatar\",\n        src: avatar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-row n-title\",\n      children: newsTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-row date\",\n      children: date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), !tags.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-row tag-cont\",\n      children: tags.map((tag, ind) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"tag\",\n        children: tag\n      }, ind, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 35\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanM/ZGNjYiJdLCJuYW1lcyI6WyJDYXJkIiwiYXZhdGFyIiwidGl0bGUiLCJuZXdzVGl0bGUiLCJkYXRlIiwidGFncyIsImxlbmd0aCIsIm1hcCIsInRhZyIsImluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUMsUUFBRjtBQUFVQyxPQUFWO0FBQWlCQyxXQUFqQjtBQUE0QkMsTUFBNUI7QUFBa0NDLE1BQUksR0FBRztBQUF6QyxDQUFkLEVBQTZEO0FBQzFFLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSxxRUFBQyxxREFBRDtBQUFRLGVBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBd0IsV0FBRyxFQUFFSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGlCQUFTLEVBQUMsT0FBaEI7QUFBQSxrQkFBeUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU1FO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsZ0JBQW1DQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsZ0JBQWdDQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRRyxDQUFDQyxJQUFJLENBQUNDLE1BQU4sZ0JBQWUsdUpBQWYsZ0JBQ0M7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSxnQkFDR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLGtCQUFjO0FBQWdCLGlCQUFTLEVBQUMsS0FBMUI7QUFBQSxrQkFBaUNEO0FBQWpDLFNBQVdDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRmFXaWZpIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBhdmF0YXIsIHRpdGxlLCBuZXdzVGl0bGUsIGRhdGUsIHRhZ3MgPSBbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udCc+XG4gICAgICA8RmFXaWZpIGNsYXNzTmFtZT0nd2lmaScgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXJvdyc+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhdmF0YXInIHNyYz17YXZhdGFyfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlJz57dGl0bGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1yb3cgbi10aXRsZSc+e25ld3NUaXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXJvdyBkYXRlJz57ZGF0ZX08L2Rpdj5cbiAgICAgIHshdGFncy5sZW5ndGggPyA8PjwvPiA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXJvdyB0YWctY29udCc+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZCkgPT4gPHNwYW4ga2V5PXtpbmR9IGNsYXNzTmFtZT0ndGFnJz57dGFnfTwvc3Bhbj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsBuzz; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n\nvar _jsxFileName = \"/home/moslem/Downloads/nextTest/pages/index.js\";\n\n\n\nfunction NewsBuzz() {\n  let {\n    0: news,\n    1: setNews\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      {\n    0: page,\n    1: setPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      {\n    0: isFetching,\n    1: setIsFetching\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      midRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getNewsFunc();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.addEventListener(\"scroll\", handleScroll);\n    return () => window.removeEventListener(\"scroll\", handleScroll);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (!isFetching) return;\n    getNewsFunc();\n  }, [isFetching]);\n\n  let handleScroll = () => {\n    let cH = document.getElementById('midId').clientHeight,\n        sT = document.getElementById('midId').scrollTop,\n        sH = document.getElementById('midId').scrollHeight,\n        perc = sT / (sH - cH) * 100;\n    if (perc < 97) return;\n    setIsFetching(true);\n  };\n\n  let getNewsFunc = async () => {\n    let nextPage = page + 1;\n    let reqNews = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/getNews?page=${nextPage}`);\n\n    if (reqNews.status == 200) {\n      setNews([...news, ...reqNews.data.news]);\n      setIsFetching(false);\n      setPage(nextPage);\n    }\n  };\n\n  return !news.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 25\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"cont\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"side\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"midId\",\n      className: \"mid\",\n      ref: midRef,\n      onScroll: handleScroll,\n      children: news.map((n, i) => {\n        var _n$source, _n$source2, _n$keywords;\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          avatar: n === null || n === void 0 ? void 0 : (_n$source = n.source) === null || _n$source === void 0 ? void 0 : _n$source.url,\n          title: n === null || n === void 0 ? void 0 : (_n$source2 = n.source) === null || _n$source2 === void 0 ? void 0 : _n$source2.title,\n          newsTitle: n === null || n === void 0 ? void 0 : n.title,\n          date: new Date(n === null || n === void 0 ? void 0 : n.created_at).toDateString(),\n          tags: n === null || n === void 0 ? void 0 : (_n$keywords = n.keywords) === null || _n$keywords === void 0 ? void 0 : _n$keywords.map(k => k.name)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"side\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk5ld3NCdXp6IiwibmV3cyIsInNldE5ld3MiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJtaWRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnZXROZXdzRnVuYyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY0giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0Iiwic1QiLCJzY3JvbGxUb3AiLCJzSCIsInNjcm9sbEhlaWdodCIsInBlcmMiLCJuZXh0UGFnZSIsInJlcU5ld3MiLCJheGlvcyIsImdldCIsInN0YXR1cyIsImRhdGEiLCJsZW5ndGgiLCJtYXAiLCJuIiwiaSIsInNvdXJjZSIsInVybCIsInRpdGxlIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b0RhdGVTdHJpbmciLCJrZXl3b3JkcyIsImsiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFFBQVQsR0FBb0I7QUFFakMsTUFBSTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUI7QUFBQSxNQUNJO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsQ0FBRCxDQUQ5QjtBQUFBLE1BRUk7QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4Qkosc0RBQVEsQ0FBQyxLQUFELENBRjFDO0FBQUEsTUFHSUssTUFBTSxHQUFHQyxvREFBTSxFQUhuQjtBQUtBQyx5REFBUyxDQUFDLE1BQUk7QUFBQ0MsZUFBVztBQUFHLEdBQXBCLEVBQXNCLEVBQXRCLENBQVQ7QUFFQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2RFLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDO0FBQ0EsV0FBTyxNQUFNRixNQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxZQUFyQyxDQUFiO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBSix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNKLFVBQUwsRUFBaUI7QUFDakJLLGVBQVc7QUFDWixHQUhRLEVBR04sQ0FBQ0wsVUFBRCxDQUhNLENBQVQ7O0FBS0EsTUFBSVEsWUFBWSxHQUFHLE1BQU07QUFDdkIsUUFBSUUsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLFlBQTFDO0FBQUEsUUFDRUMsRUFBRSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNHLFNBRHhDO0FBQUEsUUFFRUMsRUFBRSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNLLFlBRnhDO0FBQUEsUUFHRUMsSUFBSSxHQUFJSixFQUFFLElBQUlFLEVBQUUsR0FBR04sRUFBVCxDQUFILEdBQW1CLEdBSDVCO0FBS0EsUUFBSVEsSUFBSSxHQUFHLEVBQVgsRUFBZTtBQUNmakIsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQVJEOztBQVVBLE1BQUlJLFdBQVcsR0FBRyxZQUFZO0FBQzVCLFFBQUljLFFBQVEsR0FBR3JCLElBQUksR0FBRyxDQUF0QjtBQUNBLFFBQUlzQixPQUFPLEdBQUcsTUFBTUMsNENBQUssQ0FDdEJDLEdBRGlCLENBQ1oscUJBQW9CSCxRQUFTLEVBRGpCLENBQXBCOztBQUdBLFFBQUlDLE9BQU8sQ0FBQ0csTUFBUixJQUFrQixHQUF0QixFQUEyQjtBQUN6QjNCLGFBQU8sQ0FBQyxDQUFDLEdBQUdELElBQUosRUFBVSxHQUFHeUIsT0FBTyxDQUFDSSxJQUFSLENBQWE3QixJQUExQixDQUFELENBQVA7QUFDQU0sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsYUFBTyxDQUFDb0IsUUFBRCxDQUFQO0FBQ0Q7QUFDRixHQVZEOztBQWFBLFNBQU8sQ0FBQ3hCLElBQUksQ0FBQzhCLE1BQU4sZ0JBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFmLGdCQUNMO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssUUFBRSxFQUFDLE9BQVI7QUFBZ0IsZUFBUyxFQUFDLEtBQTFCO0FBQWdDLFNBQUcsRUFBRXZCLE1BQXJDO0FBQTZDLGNBQVEsRUFBRU0sWUFBdkQ7QUFBQSxnQkFFSWIsSUFBSSxDQUFDK0IsR0FBTCxDQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBOztBQUFBLDRCQUNQLHFFQUFDLHdEQUFEO0FBQ1UsZ0JBQU0sRUFBRUQsQ0FBRixhQUFFQSxDQUFGLG9DQUFFQSxDQUFDLENBQUVFLE1BQUwsOENBQUUsVUFBV0MsR0FEN0I7QUFDa0MsZUFBSyxFQUFFSCxDQUFGLGFBQUVBLENBQUYscUNBQUVBLENBQUMsQ0FBRUUsTUFBTCwrQ0FBRSxXQUFXRSxLQURwRDtBQUVFLG1CQUFTLEVBQUVKLENBQUYsYUFBRUEsQ0FBRix1QkFBRUEsQ0FBQyxDQUFFSSxLQUZoQjtBQUV1QixjQUFJLEVBQUUsSUFBSUMsSUFBSixDQUFTTCxDQUFULGFBQVNBLENBQVQsdUJBQVNBLENBQUMsQ0FBRU0sVUFBWixFQUF3QkMsWUFBeEIsRUFGN0I7QUFHRSxjQUFJLEVBQUVQLENBQUYsYUFBRUEsQ0FBRixzQ0FBRUEsQ0FBQyxDQUFFUSxRQUFMLGdEQUFFLFlBQWFULEdBQWIsQ0FBaUJVLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUF4QjtBQUhSLFdBQ09ULENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETztBQUFBLE9BQVQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFhRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQnV6eigpIHtcblxuICBsZXQgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pLFxuICAgICAgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCksXG4gICAgICBbaXNGZXRjaGluZywgc2V0SXNGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBtaWRSZWYgPSB1c2VSZWYoKVxuXG4gIHVzZUVmZmVjdCgoKT0+e2dldE5ld3NGdW5jKCl9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0ZldGNoaW5nKSByZXR1cm47XG4gICAgZ2V0TmV3c0Z1bmMoKTtcbiAgfSwgW2lzRmV0Y2hpbmddKTtcblxuICBsZXQgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGxldCBjSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRJZCcpLmNsaWVudEhlaWdodCxcbiAgICAgIHNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZElkJykuc2Nyb2xsVG9wLFxuICAgICAgc0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkSWQnKS5zY3JvbGxIZWlnaHQsXG4gICAgICBwZXJjID0gKHNUIC8gKHNIIC0gY0gpKSAqIDEwMDtcblxuICAgIGlmIChwZXJjIDwgOTcpIHJldHVybjtcbiAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xuICB9O1xuXG4gIGxldCBnZXROZXdzRnVuYyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgbmV4dFBhZ2UgPSBwYWdlICsgMTtcbiAgICBsZXQgcmVxTmV3cyA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAvYXBpL2dldE5ld3M/cGFnZT0ke25leHRQYWdlfWApO1xuXG4gICAgaWYgKHJlcU5ld3Muc3RhdHVzID09IDIwMCkge1xuICAgICAgc2V0TmV3cyhbLi4ubmV3cywgLi4ucmVxTmV3cy5kYXRhLm5ld3NdKTtcbiAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xuICAgICAgc2V0UGFnZShuZXh0UGFnZSk7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gIW5ld3MubGVuZ3RoID8gPGRpdj48L2Rpdj4gOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGUnPjwvZGl2PlxuICAgICAgPGRpdiBpZD0nbWlkSWQnIGNsYXNzTmFtZT0nbWlkJyByZWY9e21pZFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG4gICAgICAgIHtcbiAgICAgICAgICBuZXdzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpfSBhdmF0YXI9e24/LnNvdXJjZT8udXJsfSB0aXRsZT17bj8uc291cmNlPy50aXRsZX1cbiAgICAgICAgICAgICAgbmV3c1RpdGxlPXtuPy50aXRsZX0gZGF0ZT17bmV3IERhdGUobj8uY3JlYXRlZF9hdCkudG9EYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHRhZ3M9e24/LmtleXdvcmRzPy5tYXAoayA9PiBrLm5hbWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlJz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });