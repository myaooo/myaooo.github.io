webpackHotUpdate("static/development/pages/vita.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config */ "./src/api/config.js");
/* harmony import */ var _googleAnalytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googleAnalytics */ "./src/components/head/googleAnalytics.jsx");


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */





function MyHead(props) {
  var description = props.description,
      lang = props.lang,
      meta = props.meta,
      keywords = props.keywords,
      title = props.title,
      author = props.author,
      siteTitle = props.siteTitle,
      defaultTitle = props.defaultTitle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    defaultTitle: defaultTitle,
    titleTemplate: "".concat(siteTitle, " - %s"),
    meta: [{
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
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
      content: description
    }].concat(keywords.length > 0 ? {
      name: "keywords",
      content: keywords.join(", ")
    } : []).concat(meta)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i|Open+Sans",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    type: "text/css"
  }, "\n        body {\n          font-family: 'Lato', 'Open Sans', 'Noto Sans SC', \"Microsoft YaHei\", sans-serif;\n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_googleAnalytics__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

MyHead.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_api_config__WEBPACK_IMPORTED_MODULE_3__["withConfig"])(function (props) {
  var siteTitle = props.config.title;
  var defaultTitle = props.config.metaTitle;
  var author = props.config.author;
  var description = props.config.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyHead, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    siteTitle: siteTitle,
    defaultTitle: defaultTitle,
    author: author,
    description: description
  }, props));
}));

/***/ })

})
//# sourceMappingURL=vita.js.df2e4c6e332fdbb13790.hot-update.js.map