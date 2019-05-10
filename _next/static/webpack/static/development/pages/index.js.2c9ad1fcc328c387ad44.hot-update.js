webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/home/Bio.jsx":
/*!*************************************!*\
  !*** ./src/components/home/Bio.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config */ "./src/api/config.js");
/* harmony import */ var _Bio_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bio.scss */ "./src/components/home/Bio.scss");
/* harmony import */ var _Bio_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Bio_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Socials */ "./src/components/home/Socials.jsx");


/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */






function Bio(props) {
  var info = props.info;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "m-info",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-3 col-md-4 col-sm-5 col-8 mx-auto mt-2",
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "profile-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: info.profile_img
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: info.profile_img,
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Socials__WEBPACK_IMPORTED_MODULE_5__["default"], {
    detail: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-9 col-md-8 col-sm-7 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_2___default.a.inlineLexer(info.full_name, [])
    }
  }), info.job_title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_2___default.a.inlineLexer(info.job_title, [])
    }
  }), info.headline && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_2___default.a.inlineLexer(info.headline, [])
    }
  }), info.affiliation && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_2___default.a.inlineLexer(info.affiliation, [])
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(info.about)
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_api_config__WEBPACK_IMPORTED_MODULE_3__["withConfig"])(function (props) {
  var info = props.config.info;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bio, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    info: info
  }, props));
}));

/***/ })

})
//# sourceMappingURL=index.js.2c9ad1fcc328c387ad44.hot-update.js.map