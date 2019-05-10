webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: markedInline, urlForStatic, requireImage, requireImageSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markedInline", function() { return markedInline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlForStatic", function() { return urlForStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireImage", function() { return requireImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireImageSmall", function() { return requireImageSmall; });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
 // export const smartMarkdown = (props) => {
//   const {text, ...rest} = props;
//   if 
// }

var markedInline = function markedInline(md) {
  return marked__WEBPACK_IMPORTED_MODULE_0___default.a.inlineLexer(md, []);
};
var urlForStatic = function urlForStatic(path) {
  if (path[0] === '/') {
    path = path.slice(1);
  }

  return "/static/".concat(path);
};
var requireImage = __webpack_require__("./content sync recursive \\.(png|jpe?g|gif)$");
var requireImageSmall = __webpack_require__("./content sync recursive \\.(png|jpe?g)$");

/***/ })

})
//# sourceMappingURL=index.js.81d4a5bae8eaa7be2781.hot-update.js.map