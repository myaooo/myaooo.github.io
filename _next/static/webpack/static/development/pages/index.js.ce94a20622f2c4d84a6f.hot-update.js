webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/head/index.jsx":
/*!***************************************!*\
  !*** ./src/components/head/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config */ "./src/api/config.js");
/* harmony import */ var _googleAnalytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googleAnalytics */ "./src/components/head/googleAnalytics.jsx");


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */





function Head(props) {
  var description = props.description,
      lang = props.lang,
      meta = props.meta,
      keywords = props.keywords,
      title = props.title,
      author = props.author,
      siteTitle = props.siteTitle;
  var metaDescription = description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    defaultTitle: siteTitle,
    titleTemplate: "".concat(siteTitle, " - %s"),
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }].concat(keywords.length > 0 ? {
      name: "keywords",
      content: keywords.join(", ")
    } : []).concat(meta)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i|Open+Sans",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    type: "text/css"
  }, "\n        body {\n          font-family: 'Lato', 'Open Sans', 'Noto Sans SC', \"Microsoft YaHei\", sans-serif;\n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_googleAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

Head.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_api_config__WEBPACK_IMPORTED_MODULE_3__["withConfig"])(function (props) {
  var siteTitle = props.config.title;
  var author = props.config.author;
  var description = props.config.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Head, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    siteTitle: siteTitle,
    author: author,
    description: description
  }, props));
}));

/***/ })

})
//# sourceMappingURL=index.js.ce94a20622f2c4d84a6f.hot-update.js.map