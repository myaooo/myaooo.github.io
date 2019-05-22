webpackHotUpdate("static/development/pages/_page.js",{

/***/ "./src/templates/post.jsx":
/*!********************************!*\
  !*** ./src/templates/post.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/head */ "./src/components/head/index.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post.scss */ "./src/templates/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Icon */ "./src/components/Icon.jsx");












var template = 'post';

function PostMeta(props) {
  var date = props.date,
      modified = props.modified;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "post-meta"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: ['far', 'calendar']
  }), "Posted on ", moment__WEBPACK_IMPORTED_MODULE_9___default()(date).format("YYYY-MM-DD")));
}

var PostTemplate =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostTemplate, _React$Component);

  function PostTemplate() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostTemplate);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostTemplate).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostTemplate, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var post = this.props.page;
      var _this$props$page = this.props.page,
          previous = _this$props$page.previous,
          next = _this$props$page.next;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: post.frontmatter.title,
        description: post.frontmatter.description || post.excerpt
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: template,
        itemScope: true,
        itemType: "http://schema.org/Article"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "".concat(template, "-header")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PostMeta, {
        date: post.frontmatter.date,
        modified: post.frontmatter.modified
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "".concat(template, "-body"),
        dangerouslySetInnerHTML: {
          __html: post.html
        },
        suppressHydrationWarning: true
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, previous && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        to: previous.fields.slug,
        rel: "prev"
      }, "\u2190 ", previous.frontmatter.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, next && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        to: next.fields.slug,
        rel: "next"
      }, next.frontmatter.title, " \u2192")))));
    }
  }]);

  return PostTemplate;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ })

})
//# sourceMappingURL=_page.js.5451075ffb4787f8995a.hot-update.js.map