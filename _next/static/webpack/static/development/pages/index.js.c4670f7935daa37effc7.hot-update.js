webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/home/Awards.jsx":
/*!****************************************!*\
  !*** ./src/components/home/Awards.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Awards; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news.scss */ "./src/components/home/news.scss");
/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Section */ "./src/components/Section.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/data */ "./src/api/data.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _Awards_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Awards.scss */ "./src/components/home/Awards.scss");
/* harmony import */ var _Awards_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Awards_scss__WEBPACK_IMPORTED_MODULE_13__);















function formatDate(str, _default) {
  var date = moment__WEBPACK_IMPORTED_MODULE_10__(str, moment__WEBPACK_IMPORTED_MODULE_10__["ISO_8601"], false);

  if (date.isValid()) {
    return date.format("YYYY");
  }

  return _default;
}

function Award(props) {
  var award = props.award;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "date"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "award-date"
  }, formatDate(award.date, award.date))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "award-name",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(award.name)
    }
  }), award.content && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "award-content",
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_7___default()(award.content)
    }
  }))));
}

var _Awards =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_Awards, _React$Component);

  function _Awards() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _Awards);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_Awards).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_Awards, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          awards = _this$props.awards;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "awards"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        dangerouslySetInnerHTML: {
          __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(title)
        }
      }), awards && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "awards"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, awards.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Award, {
          award: item,
          key: i
        });
      }))));
    }
  }]);

  return _Awards;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function Awards(props) {
  var awards = _api_data__WEBPACK_IMPORTED_MODULE_11__["default"].awards || [];
  var title = "Honors and Awards";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Awards, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: title,
    awards: awards
  }, props));
}

/***/ })

})
//# sourceMappingURL=index.js.c4670f7935daa37effc7.hot-update.js.map