webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/components/home/Experience.jsx":
/*!********************************************!*\
  !*** ./src/components/home/Experience.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultExperience; });
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
/* harmony import */ var _CVTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../CVTable */ "./src/components/CVTable.jsx");
/* harmony import */ var _Experience_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Experience.scss */ "./src/components/home/Experience.scss");
/* harmony import */ var _Experience_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Experience_scss__WEBPACK_IMPORTED_MODULE_14__);
















function formatDate(str, _default) {
  var date = moment__WEBPACK_IMPORTED_MODULE_10__(str, moment__WEBPACK_IMPORTED_MODULE_10__["ISO_8601"], false);

  if (date.isValid()) {
    return date.format("MMM YYYY");
  }

  return _default;
}

function Experience(props) {
  var experience = props.experience,
      detail = props.detail;
  var job = experience.job;

  if (experience.advisor) {
    job = "".concat(job, " (advised by ").concat(experience.advisor, ")");
  }

  var name = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "date-from"
  }, formatDate(experience.from, experience.from)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "date-to"
  }, " - ", formatDate(experience.to, experience.to)));
  var content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "institute",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(experience.company)
    }
  }), experience.location), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "title",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(job)
    }
  }), experience.department && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, ", ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "department",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(experience.department)
    }
  }))), detail && experience.content && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: marked__WEBPACK_IMPORTED_MODULE_7___default()(experience.content)
    }
  }));
  return {
    name: name,
    content: content
  };
}

var Experiences =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Experiences, _React$Component);

  function Experiences() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Experiences);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Experiences).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Experiences, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          experiences = _this$props.experiences,
          detail = _this$props.detail;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "experiences"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        dangerouslySetInnerHTML: {
          __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["markedInline"])(title)
        }
      }), experiences && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CVTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "experiences",
        items: experiences.map(function (experience) {
          return Experience({
            experience: experience,
            detail: detail
          });
        })
      }));
    }
  }]);

  return Experiences;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function DefaultExperience(props) {
  var experiences = _api_data__WEBPACK_IMPORTED_MODULE_11__["default"].experience || [];
  var title = "Research / Work Experience";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Experiences, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: title,
    experiences: experiences
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.9cf16c5005b121f62d60.hot-update.js.map