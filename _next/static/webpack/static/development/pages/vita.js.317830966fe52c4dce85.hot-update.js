webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/components/home/Socials.jsx":
/*!*****************************************!*\
  !*** ./src/components/home/Socials.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Socials; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon.jsx");
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/data */ "./src/api/data.js");
/* harmony import */ var _Socials_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Socials.scss */ "./src/components/home/Socials.scss");
/* harmony import */ var _Socials_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Socials_scss__WEBPACK_IMPORTED_MODULE_4__);






function _Socials(props) {
  var socials = props.socials,
      style = props.style,
      fontSize = props.fontSize,
      detail = props.detail;
  var classes = ['socials'];

  if (detail) {
    classes.push('detail');
  }

  function Item(_ref) {
    var social = _ref.social;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
      href: social.url || ""
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: social.icon,
      style: {
        fontSize: fontSize
      }
    }), detail && social.content));
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: classes.join(' '),
    style: style
  }, socials.map(function (social, i) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Item, {
      key: i,
      social: social
    });
  }));
}

function Socials(props) {
  var socials = _api_data__WEBPACK_IMPORTED_MODULE_3__["default"].socials || [];
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Socials, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    socials: socials
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.317830966fe52c4dce85.hot-update.js.map