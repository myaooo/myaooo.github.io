webpackHotUpdate("static/development/pages/vita.js",{

/***/ "./src/components/project/publication.jsx":
/*!************************************************!*\
  !*** ./src/components/project/publication.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.js");
/* harmony import */ var _publication_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publication.scss */ "./src/components/project/publication.scss");
/* harmony import */ var _publication_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_publication_scss__WEBPACK_IMPORTED_MODULE_3__);





function PublicationX(props) {
  var publication = props.publication,
      className = props.className,
      style = props.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub mb-4 ".concat(className),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "shadow-sm rounded px-3 py-1 row no-gutters"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-teaser-container mx-auto col-10 col-md-3 col-sm-4 py-2"
  }, publication.teaser ? // <a href={publication.teaser} className="fancybox fancybox.image">
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["requireImageSmall"])(".".concat(publication.teaser)),
    className: "pub-teaser"
  }) : // </a>
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "pub-teaser",
    dangerouslySetInnerHTML: {
      __html: publication.short && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"])(publication.short) || ""
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-info col-12 col-md-9 col-sm-8 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: publication.link,
    className: "pub-title",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"])(publication.title)
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-author",
    dangerouslySetInnerHTML: {
      __html: publication.authors.map(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"]).join(", ") + "."
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-venue"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "pub-venue-type"
  }, publication.venue.tag), publication.venue.title, ", ", publication.date, publication.note && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " (", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"])(publication.note)
    }
  }), ")"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, publication.resources.map(function (resource, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i,
      className: "pub-resource"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: resource.url
    }, resource.type));
  }))))));
}

function PublicationSimple(props) {
  var publication = props.publication,
      className = props.className,
      style = props.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub pt-1 pb-2 ".concat(className),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "pub-title",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"])(publication.title)
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-author",
    dangerouslySetInnerHTML: {
      __html: publication.authors.map(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"]).join(", ") + "."
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-venue"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, publication.venue.title), ", ", publication.date, ".")), publication.cv_note && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pub-note"
  }, "[", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["markedInline"])(publication.cv_note)
    }
  }), "]")));
}

function Publication(props) {
  var detail = props.detail,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["detail"]);

  var Pub = detail ? PublicationX : PublicationSimple;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pub, rest);
}

/* harmony default export */ __webpack_exports__["default"] = (Publication);

/***/ })

})
//# sourceMappingURL=vita.js.2447daa19e2b74bb7e77.hot-update.js.map