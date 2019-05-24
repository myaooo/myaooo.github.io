webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/pages/vita/Education.jsx":
/*!**************************************!*\
  !*** ./src/pages/vita/Education.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultEducation; });
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
/* harmony import */ var _Education_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Education.scss */ "./src/pages/vita/Education.scss");
/* harmony import */ var _Education_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Education_scss__WEBPACK_IMPORTED_MODULE_8__);










function formatDate(str, _default) {
  var date = moment__WEBPACK_IMPORTED_MODULE_5__(str, moment__WEBPACK_IMPORTED_MODULE_5__["ISO_8601"], false);

  if (date.isValid()) {
    return date.format("MMM YYYY");
  }

  return _default;
}

function Educations(props) {
  var title = props.title,
      educations = props.educations;
  var items = educations && educations.map(function (education) {
    var name = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "date-from"
    }, formatDate(education.from, education.from)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "date-to"
    }, " - ", formatDate(education.to, education.to)));
    var content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "degree",
      dangerouslySetInnerHTML: {
        __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(education.degree)
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "institute",
      dangerouslySetInnerHTML: {
        __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(education.university)
      }
    }), education.location, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "description",
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(education.content)
      }
    }));
    return {
      name: name,
      content: content
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "education"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["markedInline"])(title)
    }
  }), educations && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CVTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: items,
    className: "educations"
  }) // <table className="educations">
  //   <tbody>
  //     {educations.map((item, i) => (
  //       <Item education={item} key={i}/>
  //     ))}
  //   </tbody>
  // </table>
  );
}

function DefaultEducation(props) {
  var educations = _api_data__WEBPACK_IMPORTED_MODULE_3__["default"].education || [];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Educations, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Education",
    educations: educations
  }, props));
}

/***/ })

})
//# sourceMappingURL=vita.js.5baf9a231a5b1d1ab9c0.hot-update.js.map