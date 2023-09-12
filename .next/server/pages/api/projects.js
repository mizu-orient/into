"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "(api)/./pages/api/projects.js":
/*!*******************************!*\
  !*** ./pages/api/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/runMiddleware */ \"(api)/./utils/runMiddleware.js\");\n\n\n// Initializing the cors middleware\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nasync function handler(req, res) {\n    await (0,_utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, cors);\n    if (req.method === \"GET\") {\n        const projects = [\n            {\n                name: \"newTomodachi\",\n                description: \"新しい友達\",\n                stack: [\n                    \"Discord Bot\",\n                    \"Python\",\n                    \"janome\"\n                ],\n                link: \"https://github.com/mizu-orient/newTomodachi\",\n                largeImage: \"liberty-lg.png\"\n            }, \n        ];\n        return res.json(projects);\n    } else {\n        return res.status(400).json({\n            message: \"Only GET request allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QjtBQUM4QjtBQUVyRCxFQUFtQztBQUNuQyxLQUFLLENBQUNFLElBQUksR0FBR0YsMkNBQUksQ0FBQyxDQUFDO0lBQ2pCRyxPQUFPLEVBQUUsQ0FBQztRQUFBLENBQUs7UUFBRSxDQUFNO0lBQUEsQ0FBQztBQUMxQixDQUFDO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0wsZ0VBQWEsQ0FBQ0ksR0FBRyxFQUFFQyxHQUFHLEVBQUVKLElBQUk7SUFDbEMsRUFBRSxFQUFFRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QixLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1lBQ2hCLENBQUM7Z0JBQ0NDLElBQUksRUFBRSxDQUFjO2dCQUNwQkMsV0FBVyxFQUFDLENBQU87Z0JBQ25CQyxLQUFLLEVBQUUsQ0FBQztvQkFBQSxDQUFhO29CQUFFLENBQVE7b0JBQUUsQ0FBUTtnQkFBQSxDQUFDO2dCQUMxQ0MsSUFBSSxFQUFFLENBQTZDO2dCQUNuREMsVUFBVSxFQUFFLENBQWdCO1lBQzlCLENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxDQUFDUCxHQUFHLENBQUNRLElBQUksQ0FBQ04sUUFBUTtJQUMxQixDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFRCxJQUFJLENBQUMsQ0FBQztZQUFDRSxPQUFPLEVBQUUsQ0FBMEI7UUFBQyxDQUFDO0lBQ3JFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F2aW4yNS5naXRodWIuaW8vLi9wYWdlcy9hcGkvcHJvamVjdHMuanM/YTU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHJ1bk1pZGRsZXdhcmUgZnJvbSBcIi4uLy4uL3V0aWxzL3J1bk1pZGRsZXdhcmVcIjtcblxuLy8gSW5pdGlhbGl6aW5nIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgbWV0aG9kczogW1wiR0VUXCIsIFwiSEVBRFwiXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHByb2plY3RzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIm5ld1RvbW9kYWNoaVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIuaWsOOBl+OBhOWPi+mBlFwiLFxuICAgICAgICBzdGFjazogW1wiRGlzY29yZCBCb3RcIiwgXCJQeXRob25cIiwgXCJqYW5vbWVcIl0sXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL21penUtb3JpZW50L25ld1RvbW9kYWNoaVwiLFxuICAgICAgICBsYXJnZUltYWdlOiBcImxpYmVydHktbGcucG5nXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gcmVzLmpzb24ocHJvamVjdHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiT25seSBHRVQgcmVxdWVzdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb3JzIiwicnVuTWlkZGxld2FyZSIsImNvcnMiLCJtZXRob2RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb2plY3RzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhY2siLCJsaW5rIiwibGFyZ2VJbWFnZSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects.js\n");

/***/ }),

/***/ "(api)/./utils/runMiddleware.js":
/*!********************************!*\
  !*** ./utils/runMiddleware.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runMiddleware)\n/* harmony export */ });\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9ydW5NaWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxRQUFRLENBQUNBLGFBQWEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUUsRUFBRSxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEdBQUssQ0FBQztRQUN2Q0gsRUFBRSxDQUFDRixHQUFHLEVBQUVDLEdBQUcsR0FBR0ssTUFBTSxHQUFLLENBQUM7WUFDeEIsRUFBRSxFQUFFQSxNQUFNLFlBQVlDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixNQUFNLENBQUNGLE1BQU0sQ0FBQ0MsTUFBTTtZQUN0QixDQUFDO1lBRUQsTUFBTSxDQUFDRixPQUFPLENBQUNFLE1BQU07UUFDdkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F2aW4yNS5naXRodWIuaW8vLi91dGlscy9ydW5NaWRkbGV3YXJlLmpzP2ZiYzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/runMiddleware.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects.js"));
module.exports = __webpack_exports__;

})();