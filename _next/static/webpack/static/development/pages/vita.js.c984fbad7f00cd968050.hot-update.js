webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/pages/vita/Talks.jsx":
/*!**********************************!*\
  !*** ./src/pages/vita/Talks.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultTalks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/data */ "./src/api/data.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Section */ "./src/components/Section.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _components_CVTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CVTable */ "./src/components/CVTable.jsx");
/* harmony import */ var _Talks_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Talks.scss */ "./src/pages/vita/Talks.scss");
/* harmony import */ var _Talks_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Talks_scss__WEBPACK_IMPORTED_MODULE_8__);










function formatDate(str, _default) {
  var date = moment__WEBPACK_IMPORTED_MODULE_5__(str, moment__WEBPACK_IMPORTED_MODULE_5__["ISO_8601"], false);

  if (date.isValid()) {
    return date.format("MMM YYYY");
  }

  return _default;
}

function Item(talk) {
  var name = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "talk-date"
  }, formatDate(talk.date) || talk.date);
  var content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "talk-title",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(talk.title)
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "talk-venue"
  }, talk.venue, talk.location ? ', ' : '.'), talk.location && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "talk-location"
  }, talk.location, ".")));
  return {
    name: name,
    content: content
  };
}

function Talks(props) {
  var title = props.title,
      talks = props.talks;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "talks"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(title)
    }
  }), talks && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CVTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "talks",
    items: talks.map(Item)
  }));
}

function DefaultTalks(props) {
  var talks = _api_data__WEBPACK_IMPORTED_MODULE_3__["default"].talks || [];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Talks, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Invited Talks",
    talks: talks
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.c984fbad7f00cd968050.hot-update.js.map