webpackHotUpdate("static/development/pages/_page.js",{

/***/ "./content sync recursive \\.(png|jpe?g)$":
/*!******************************************************!*\
  !*** ./content ?resize&size=400 sync \.(png|jpe?g)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/pqe-reflection/forest.jpg": "./content/blog/pqe-reflection/forest.jpg?resize&size=400",
	"./blog/vis2017/cactus.jpg": "./content/blog/vis2017/cactus.jpg?resize&size=400",
	"./blog/vis2017/name_card.jpg": "./content/blog/vis2017/name_card.jpg?resize&size=400",
	"./blog/vis2017/present.jpg": "./content/blog/vis2017/present.jpg?resize&size=400",
	"./blog/vis2017/sun_flower.jpg": "./content/blog/vis2017/sun_flower.jpg?resize&size=400",
	"./blog/vis2018/wtc.jpg": "./content/blog/vis2018/wtc.jpg?resize&size=400",
	"./blog/vis2018/wtc_at_3.jpg": "./content/blog/vis2018/wtc_at_3.jpg?resize&size=400",
	"./notes/cpp/virtual-functions.png": "./content/notes/cpp/virtual-functions.png?resize&size=400",
	"./projects/atmseer/atmseer.png": "./content/projects/atmseer/atmseer.png?resize&size=400",
	"./projects/prototype-net/architecture-original.png": "./content/projects/prototype-net/architecture-original.png?resize&size=400",
	"./projects/prototype-net/architecture.png": "./content/projects/prototype-net/architecture.png?resize&size=400",
	"./projects/rnnvis/teaser-web.png": "./content/projects/rnnvis/teaser-web.png?resize&size=400",
	"./projects/rule-matrix/teaser-origin.jpg": "./content/projects/rule-matrix/teaser-origin.jpg?resize&size=400",
	"./projects/rule-matrix/teaser.jpg": "./content/projects/rule-matrix/teaser.jpg?resize&size=400"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content sync recursive \\.(png|jpe?g)$";

/***/ }),

/***/ "./content sync recursive \\.(png|jpe?g|gif)$":
/*!*****************************************!*\
  !*** ./content sync \.(png|jpe?g|gif)$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/animated_poster/1900.gif": "./content/blog/animated_poster/1900.gif",
	"./blog/animated_poster/3_idiots.gif": "./content/blog/animated_poster/3_idiots.gif",
	"./blog/animated_poster/edward_sheerwall.gif": "./content/blog/animated_poster/edward_sheerwall.gif",
	"./blog/animated_poster/iron_man.gif": "./content/blog/animated_poster/iron_man.gif",
	"./blog/animated_poster/v_for_construction.gif": "./content/blog/animated_poster/v_for_construction.gif",
	"./blog/pqe-reflection/forest.jpg": "./content/blog/pqe-reflection/forest.jpg",
	"./blog/vis2017/cactus.jpg": "./content/blog/vis2017/cactus.jpg",
	"./blog/vis2017/name_card.jpg": "./content/blog/vis2017/name_card.jpg",
	"./blog/vis2017/present.jpg": "./content/blog/vis2017/present.jpg",
	"./blog/vis2017/sun_flower.jpg": "./content/blog/vis2017/sun_flower.jpg",
	"./blog/vis2018/wtc.jpg": "./content/blog/vis2018/wtc.jpg",
	"./blog/vis2018/wtc_at_3.jpg": "./content/blog/vis2018/wtc_at_3.jpg",
	"./notes/cpp/virtual-functions.png": "./content/notes/cpp/virtual-functions.png",
	"./projects/atmseer/atmseer.png": "./content/projects/atmseer/atmseer.png",
	"./projects/prototype-net/architecture-original.png": "./content/projects/prototype-net/architecture-original.png",
	"./projects/prototype-net/architecture.png": "./content/projects/prototype-net/architecture.png",
	"./projects/rnnvis/teaser-web.png": "./content/projects/rnnvis/teaser-web.png",
	"./projects/rule-matrix/teaser-origin.jpg": "./content/projects/rule-matrix/teaser-origin.jpg",
	"./projects/rule-matrix/teaser.jpg": "./content/projects/rule-matrix/teaser.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content sync recursive \\.(png|jpe?g|gif)$";

/***/ }),

/***/ "./content sync recursive \\.(png|jpe?g|gif)$?23a6":
false,

/***/ "./content sync recursive \\.(png|jpe?g|gif)$?6227":
false,

/***/ "./content/blog/animated_poster/1900.gif?resize&size=400":
false,

/***/ "./content/blog/animated_poster/3_idiots.gif?resize&size=400":
false,

/***/ "./content/blog/animated_poster/edward_sheerwall.gif?resize&size=400":
false,

/***/ "./content/blog/animated_poster/iron_man.gif?resize&size=400":
false,

/***/ "./content/blog/animated_poster/v_for_construction.gif?resize&size=400":
false,

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: markedInline, urlForStatic, requireImage, requireImageSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markedInline", function() { return markedInline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlForStatic", function() { return urlForStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireImage", function() { return requireImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireImageSmall", function() { return requireImageSmall; });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);

var markedInline = function markedInline(md) {
  return marked__WEBPACK_IMPORTED_MODULE_0___default.a.inlineLexer(md, []);
};
var urlForStatic = function urlForStatic(path) {
  if (path[0] === '/') {
    path = path.slice(1);
  }

  return "/static/".concat(path);
};
var requireImage = __webpack_require__("./content sync recursive \\.(png|jpe?g|gif)$");
var requireImageSmall = __webpack_require__("./content sync recursive \\.(png|jpe?g)$");

/***/ })

})
//# sourceMappingURL=_page.js.918d283b17f29cff877a.hot-update.js.map