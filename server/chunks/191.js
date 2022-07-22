"use strict";
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ProductsContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProductsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ProductsProvider = ({ children  })=>{
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const checkProducts = (product)=>products.some((el)=>el.id === product.id);
    const saveProduct = (product)=>{
        if (checkProducts(product)) return;
        const newProduct = {
            id: product.id,
            imgUrl: product.imgUrl,
            name: product.name,
            price: product.price,
            qty: product.qty
        };
        setProducts([
            ...products,
            newProduct
        ]);
    };
    const updateQty = (newProduct)=>{
        const newProducts = Object.assign(products, newProduct);
        setProducts(newProducts);
    };
    const clearProduct = (id)=>{
        setProducts(products.filter((product)=>product.id !== id));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductsContext.Provider, {
        value: {
            products,
            setProducts,
            saveProduct,
            clearProduct,
            updateQty
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsProvider);


/***/ })

};
;