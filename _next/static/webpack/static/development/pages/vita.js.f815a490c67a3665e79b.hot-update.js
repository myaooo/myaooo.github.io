webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/pages/vita/Front.jsx":
/*!**********************************!*\
  !*** ./src/pages/vita/Front.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Front; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/config */ "./src/api/config.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Section */ "./src/components/Section.jsx");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Icon */ "./src/components/Icon.jsx");
/* harmony import */ var _Front_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Front.scss */ "./src/pages/vita/Front.scss");
/* harmony import */ var _Front_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Front_scss__WEBPACK_IMPORTED_MODULE_11__);













function Address(props) {
  var address = props.address;

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(address)) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "address"
    }, address.map(function (addr, i) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: i
      }, addr);
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "address"
  }, address);
}

var _Front =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_Front, _React$Component);

  function _Front() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _Front);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_Front).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_Front, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          contact = _this$props.contact;

      var _ref = contact || {},
          address = _ref.address,
          mobile = _ref.mobile,
          email = _ref.email,
          website = _ref.website;

      var mobiles = mobile && (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(mobile) ? mobile : [mobile]);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mr-auto name"
      }, name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "contact"
      }, address && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Address, {
        address: address
      }), mobiles && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile"
      }, mobiles.map(function (mobile, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          icon: "phone"
        }), mobile);
      })), email && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "email"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "envelope"
      }), email), website && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "website"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icon: "home"
      }), website))));
    }
  }]);

  return _Front;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function Front(props) {
  var info = _api_config__WEBPACK_IMPORTED_MODULE_8__["default"].info;
  var name = info.name;
  var contact = info.contact;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Front, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: name,
    contact: contact
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.f815a490c67a3665e79b.hot-update.js.map