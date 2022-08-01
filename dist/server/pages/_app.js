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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/state.tsx":
/*!*******************************!*\
  !*** ./src/context/state.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductsContext\": () => (/* binding */ ProductsContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst ProductsProvider = ({ children  })=>{\n    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const checkProducts = (product)=>products.some((el)=>el.id === product.id);\n    const saveProduct = (product)=>{\n        if (checkProducts(product)) return;\n        const newProduct = {\n            id: product.id,\n            imgUrl: product.imgUrl,\n            name: product.name,\n            price: product.price,\n            qty: product.qty\n        };\n        setProducts([\n            ...products,\n            newProduct\n        ]);\n    };\n    const updateQty = (newProduct)=>{\n        // const productToUpdate = products.findIndex((x) => x.id === newProduct.id);\n        const updatedProducts = products.map((product)=>product.id === newProduct.id ? newProduct : product);\n        console.log(`new product`, newProduct);\n        console.log(`updatedProducts`, updatedProducts);\n        setProducts(updatedProducts);\n    // const newProductList =\n    // const productToUpdate = products.indexOf(newProduct);\n    // console.log(productToUpdate);\n    // products[productToUpdate] = newProduct\n    // const newProducts = Object.assign(products, newProduct);\n    // const newProducts = [...products, newProduct];\n    // setProducts(newProducts);\n    };\n    const clearProduct = (id)=>{\n        setProducts(products.filter((product)=>product.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsContext.Provider, {\n        value: {\n            products,\n            setProducts,\n            saveProduct,\n            clearProduct,\n            updateQty\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/jancarlo/projects/divotion-product-list/src/context/state.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9zdGF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFPcEQsTUFBTUUsZUFBZSxpQkFBR0Ysb0RBQWEsQ0FBNkIsSUFBSSxDQUFDLENBQUM7QUFFL0UsTUFBTUcsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQXlCLEdBQUs7SUFDaEUsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSUwsK0NBQVEsQ0FBYSxFQUFFLENBQUM7SUFDeEQsTUFBTU0sYUFBYSxHQUFHLENBQUNDLE9BQWlCLEdBQ3RDSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDQyxFQUFFLEdBQUtBLEVBQUUsQ0FBQ0MsRUFBRSxLQUFLSCxPQUFPLENBQUNHLEVBQUUsQ0FBQztJQUU3QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0osT0FBaUIsR0FBSztRQUN6QyxJQUFJRCxhQUFhLENBQUNDLE9BQU8sQ0FBQyxFQUFFLE9BQU87UUFDbkMsTUFBTUssVUFBVSxHQUFhO1lBQzNCRixFQUFFLEVBQUVILE9BQU8sQ0FBQ0csRUFBRTtZQUNkRyxNQUFNLEVBQUVOLE9BQU8sQ0FBQ00sTUFBTTtZQUN0QkMsSUFBSSxFQUFFUCxPQUFPLENBQUNPLElBQUk7WUFDbEJDLEtBQUssRUFBRVIsT0FBTyxDQUFDUSxLQUFLO1lBQ3BCQyxHQUFHLEVBQUVULE9BQU8sQ0FBQ1MsR0FBRztTQUNqQjtRQUNEWCxXQUFXLENBQUM7ZUFBSUQsUUFBUTtZQUFFUSxVQUFVO1NBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsTUFBTUssU0FBUyxHQUFHLENBQUNMLFVBQW9CLEdBQUs7UUFDMUMsNkVBQTZFO1FBQzdFLE1BQU1NLGVBQWUsR0FBR2QsUUFBUSxDQUFDZSxHQUFHLENBQUMsQ0FBQ1osT0FBTyxHQUMzQ0EsT0FBTyxDQUFDRyxFQUFFLEtBQUtFLFVBQVUsQ0FBQ0YsRUFBRSxHQUFHRSxVQUFVLEdBQUdMLE9BQU8sQ0FDcEQ7UUFDRGEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRVQsVUFBVSxDQUFDLENBQUM7UUFDdkNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUVILGVBQWUsQ0FBQyxDQUFDO1FBQ2hEYixXQUFXLENBQUNhLGVBQWUsQ0FBQyxDQUFDO0lBRTdCLHlCQUF5QjtJQUN6Qix3REFBd0Q7SUFDeEQsZ0NBQWdDO0lBQ2hDLHlDQUF5QztJQUN6QywyREFBMkQ7SUFDM0QsaURBQWlEO0lBQ2pELDRCQUE0QjtLQUM3QjtJQUVELE1BQU1JLFlBQVksR0FBRyxDQUFDWixFQUFVLEdBQUs7UUFDbkNMLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDbUIsTUFBTSxDQUFDLENBQUNoQixPQUFPLEdBQUtBLE9BQU8sQ0FBQ0csRUFBRSxLQUFLQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQscUJBQ0UsOERBQUNULGVBQWUsQ0FBQ3VCLFFBQVE7UUFDdkJDLEtBQUssRUFBRTtZQUFFckIsUUFBUTtZQUFFQyxXQUFXO1lBQUVNLFdBQVc7WUFBRVcsWUFBWTtZQUFFTCxTQUFTO1NBQUU7a0JBRXJFZCxRQUFROzs7OztpQkFDZ0IsQ0FDM0I7Q0FDSDtBQUVELGlFQUFlRCxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3QtbGlzdC8uL3NyYy9jb250ZXh0L3N0YXRlLnRzeD8wOGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RzUHJvdmlkZXJQcm9wcyxcbiAgUHJvZHVjdHNDb250ZXh0VHlwZSxcbiAgSVByb2R1Y3QsXG59IGZyb20gXCIuLi9AdHlwZXMvcHJvZHVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UHJvZHVjdHNDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBQcm9kdWN0c1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvZHVjdHNQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8SVByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBjaGVja1Byb2R1Y3RzID0gKHByb2R1Y3Q6IElQcm9kdWN0KSA9PlxuICAgIHByb2R1Y3RzLnNvbWUoKGVsKSA9PiBlbC5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgY29uc3Qgc2F2ZVByb2R1Y3QgPSAocHJvZHVjdDogSVByb2R1Y3QpID0+IHtcbiAgICBpZiAoY2hlY2tQcm9kdWN0cyhwcm9kdWN0KSkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1Byb2R1Y3Q6IElQcm9kdWN0ID0ge1xuICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICBpbWdVcmw6IHByb2R1Y3QuaW1nVXJsLFxuICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICBxdHk6IHByb2R1Y3QucXR5LFxuICAgIH07XG4gICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzLCBuZXdQcm9kdWN0XSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXR5ID0gKG5ld1Byb2R1Y3Q6IElQcm9kdWN0KSA9PiB7XG4gICAgLy8gY29uc3QgcHJvZHVjdFRvVXBkYXRlID0gcHJvZHVjdHMuZmluZEluZGV4KCh4KSA9PiB4LmlkID09PSBuZXdQcm9kdWN0LmlkKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+XG4gICAgICBwcm9kdWN0LmlkID09PSBuZXdQcm9kdWN0LmlkID8gbmV3UHJvZHVjdCA6IHByb2R1Y3RcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGBuZXcgcHJvZHVjdGAsIG5ld1Byb2R1Y3QpO1xuICAgIGNvbnNvbGUubG9nKGB1cGRhdGVkUHJvZHVjdHNgLCB1cGRhdGVkUHJvZHVjdHMpO1xuICAgIHNldFByb2R1Y3RzKHVwZGF0ZWRQcm9kdWN0cyk7XG5cbiAgICAvLyBjb25zdCBuZXdQcm9kdWN0TGlzdCA9XG4gICAgLy8gY29uc3QgcHJvZHVjdFRvVXBkYXRlID0gcHJvZHVjdHMuaW5kZXhPZihuZXdQcm9kdWN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0VG9VcGRhdGUpO1xuICAgIC8vIHByb2R1Y3RzW3Byb2R1Y3RUb1VwZGF0ZV0gPSBuZXdQcm9kdWN0XG4gICAgLy8gY29uc3QgbmV3UHJvZHVjdHMgPSBPYmplY3QuYXNzaWduKHByb2R1Y3RzLCBuZXdQcm9kdWN0KTtcbiAgICAvLyBjb25zdCBuZXdQcm9kdWN0cyA9IFsuLi5wcm9kdWN0cywgbmV3UHJvZHVjdF07XG4gICAgLy8gc2V0UHJvZHVjdHMobmV3UHJvZHVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyUHJvZHVjdCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgcHJvZHVjdHMsIHNldFByb2R1Y3RzLCBzYXZlUHJvZHVjdCwgY2xlYXJQcm9kdWN0LCB1cGRhdGVRdHkgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qcm9kdWN0c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1Byb3ZpZGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzQ29udGV4dCIsIlByb2R1Y3RzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjaGVja1Byb2R1Y3RzIiwicHJvZHVjdCIsInNvbWUiLCJlbCIsImlkIiwic2F2ZVByb2R1Y3QiLCJuZXdQcm9kdWN0IiwiaW1nVXJsIiwibmFtZSIsInByaWNlIiwicXR5IiwidXBkYXRlUXR5IiwidXBkYXRlZFByb2R1Y3RzIiwibWFwIiwiY29uc29sZSIsImxvZyIsImNsZWFyUHJvZHVjdCIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/state.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/state */ \"./src/context/state.tsx\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/jancarlo/projects/divotion-product-list/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jancarlo/projects/divotion-product-list/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDZ0Q7QUFDcEI7QUFFNUIsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILHNEQUFnQjtrQkFDZiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNYLENBQ25CO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1saXN0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFByb2R1Y3RzUHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvc3RhdGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9hcHAuc2Nzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm9kdWN0c1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm9kdWN0c1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();