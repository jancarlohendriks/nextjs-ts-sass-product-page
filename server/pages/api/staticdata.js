"use strict";
(() => {
var exports = {};
exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./src/pages/api/staticdata.ts


async function handler(req, res) {
    const jsonDirectory = external_path_default().join(process.cwd(), "src/json");
    const fileContents = await external_fs_namespaceObject.promises.readFile(jsonDirectory + "/data.json", "utf8");
    res.status(200).json(JSON.parse(fileContents));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(924));
module.exports = __webpack_exports__;

})();