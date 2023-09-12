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
exports.id = "pages/api/contacts";
exports.ids = ["pages/api/contacts"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "(api)/./pages/api/contacts.js":
/*!*******************************!*\
  !*** ./pages/api/contacts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/runMiddleware */ \"(api)/./utils/runMiddleware.js\");\n\n\n// Initializing the cors middleware\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nasync function handler(req, res) {\n    await (0,_utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, cors);\n    if (req.method === \"GET\") {\n        const contactMediums = [\n            {\n                medium: \"github\",\n                username: \"mizu-orient\",\n                link: \"https://github.com/mizu-orient\"\n            },\n            {\n                medium: \"email\",\n                username: \"Mizu\",\n                link: \"TBD\"\n            },\n            {\n                medium: \"Zenn\",\n                username: \"いぬお\",\n                link: \"https://zenn.dev/inuo\"\n            },\n            {\n                medium: \"linkedin\",\n                username: \"TBD\",\n                link: \"TBD\"\n            }, \n        ];\n        res.json(contactMediums);\n    } else {\n        return res.status(400).json({\n            message: \"Only GET request allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QjtBQUM4QjtBQUVyRCxFQUFtQztBQUNuQyxLQUFLLENBQUNFLElBQUksR0FBR0YsMkNBQUksQ0FBQyxDQUFDO0lBQ2pCRyxPQUFPLEVBQUUsQ0FBQztRQUFBLENBQUs7UUFBRSxDQUFNO0lBQUEsQ0FBQztBQUMxQixDQUFDO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0wsZ0VBQWEsQ0FBQ0ksR0FBRyxFQUFFQyxHQUFHLEVBQUVKLElBQUk7SUFDbEMsRUFBRSxFQUFFRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QixLQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFDO1lBQ3RCLENBQUM7Z0JBQ0NDLE1BQU0sRUFBRSxDQUFRO2dCQUNoQkMsUUFBUSxFQUFFLENBQWE7Z0JBQ3ZCQyxJQUFJLEVBQUUsQ0FBZ0M7WUFDeEMsQ0FBQztZQUNELENBQUM7Z0JBQ0NGLE1BQU0sRUFBRSxDQUFPO2dCQUNmQyxRQUFRLEVBQUUsQ0FBTTtnQkFDaEJDLElBQUksRUFBRSxDQUFLO1lBQ2IsQ0FBQztZQUNELENBQUM7Z0JBQ0NGLE1BQU0sRUFBRSxDQUFNO2dCQUNkQyxRQUFRLEVBQUUsQ0FBSztnQkFDZkMsSUFBSSxFQUFFLENBQXVCO1lBQy9CLENBQUM7WUFDRCxDQUFDO2dCQUNDRixNQUFNLEVBQUUsQ0FBVTtnQkFDbEJDLFFBQVEsRUFBRSxDQUFLO2dCQUNmQyxJQUFJLEVBQUUsQ0FBSztZQUNiLENBQUM7UUFDSCxDQUFDO1FBRURMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDSixjQUFjO0lBQ3pCLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDRixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQyxDQUFDO1lBQUNFLE9BQU8sRUFBRSxDQUEwQjtRQUFDLENBQUM7SUFDckUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXZpbjI1LmdpdGh1Yi5pby8uL3BhZ2VzL2FwaS9jb250YWN0cy5qcz80MTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgcnVuTWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vdXRpbHMvcnVuTWlkZGxld2FyZVwiO1xuXG4vLyBJbml0aWFsaXppbmcgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IENvcnMoe1xuICBtZXRob2RzOiBbXCJHRVRcIiwgXCJIRUFEXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycyk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgY29udGFjdE1lZGl1bXMgPSBbXG4gICAgICB7XG4gICAgICAgIG1lZGl1bTogXCJnaXRodWJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwibWl6dS1vcmllbnRcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbWl6dS1vcmllbnRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lZGl1bTogXCJlbWFpbFwiLFxuICAgICAgICB1c2VybmFtZTogXCJNaXp1XCIsXG4gICAgICAgIGxpbms6IFwiVEJEXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtZWRpdW06IFwiWmVublwiLFxuICAgICAgICB1c2VybmFtZTogXCLjgYTjgazjgYpcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3plbm4uZGV2L2ludW9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lZGl1bTogXCJsaW5rZWRpblwiLFxuICAgICAgICB1c2VybmFtZTogXCJUQkRcIixcbiAgICAgICAgbGluazogXCJUQkRcIixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJlcy5qc29uKGNvbnRhY3RNZWRpdW1zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIk9ubHkgR0VUIHJlcXVlc3QgYWxsb3dlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29ycyIsInJ1bk1pZGRsZXdhcmUiLCJjb3JzIiwibWV0aG9kcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb250YWN0TWVkaXVtcyIsIm1lZGl1bSIsInVzZXJuYW1lIiwibGluayIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contacts.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contacts.js"));
module.exports = __webpack_exports__;

})();