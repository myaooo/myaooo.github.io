webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/pages/vita/Services.jsx":
/*!*************************************!*\
  !*** ./src/pages/vita/Services.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultServices; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/data */ "./src/api/data.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Section */ "./src/components/Section.jsx");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _components_CVTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CVTable */ "./src/components/CVTable.jsx");









function Item(service) {
  var name = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "service-name"
  }, service.name);
  var content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "service-content"
  }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(service.content) ? service.content.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: i,
      dangerouslySetInnerHTML: {
        __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(c)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(service.content)
    }
  }));
  return {
    name: name,
    content: content
  };
}

function Services(props) {
  var title = props.title,
      services = props.services;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "services"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(title)
    }
  }), services && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CVTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "services",
    items: services.map(Item)
  }));
}

function DefaultServices(props) {
  var services = _api_data__WEBPACK_IMPORTED_MODULE_4__["default"].services || [];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Services, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Services",
    services: services
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.9bbf72e5fe0ab77c2d18.hot-update.js.map