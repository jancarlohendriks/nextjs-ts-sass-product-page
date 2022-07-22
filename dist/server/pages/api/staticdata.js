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
exports.id = "pages/api/staticdata";
exports.ids = ["pages/api/staticdata"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/staticdata.ts":
/*!*************************************!*\
  !*** ./src/pages/api/staticdata.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"src/json\");\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/data.json\", \"utf8\");\n    res.status(200).json(JSON.parse(fileContents));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXRpY2RhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDWTtBQU9yQixlQUFlRyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNQyxhQUFhLEdBQUdOLGdEQUFTLENBQUNRLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDO0lBQzFELE1BQU1DLFlBQVksR0FBRyxNQUFNUixpREFBVyxDQUFDSSxhQUFhLEdBQUcsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUM1RUQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLFlBQVksQ0FBQyxDQUFDLENBQUM7Q0FDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LWxpc3QvLi9zcmMvcGFnZXMvYXBpL3N0YXRpY2RhdGEudHM/NDU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICBjb25zdCBqc29uRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwic3JjL2pzb25cIik7XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGpzb25EaXJlY3RvcnkgKyBcIi9kYXRhLmpzb25cIiwgXCJ1dGY4XCIpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGZpbGVDb250ZW50cykpO1xufVxuIl0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/staticdata.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/staticdata.ts"));
module.exports = __webpack_exports__;

})();