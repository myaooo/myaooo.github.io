webpackHotUpdate("styles",{

/***/ "./src/components/CVTable.scss":
false,

/***/ "./src/components/header.scss":
/*!************************************!*\
  !*** ./src/components/header.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1563985469578");
          });
      }
    }
  

/***/ }),

/***/ "./src/components/home/Awards.scss":
false,

/***/ "./src/components/home/Bio.scss":
false,

/***/ "./src/components/home/Experience.scss":
false,

/***/ "./src/components/home/news.scss":
false,

/***/ "./src/components/home/research.scss":
false,

/***/ "./src/components/project/publication.scss":
false,

/***/ 10:
false,

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false,

/***/ 7:
false,

/***/ 8:
false,

/***/ 9:
false

})
//# sourceMappingURL=styles.2fb9e5bc4027fa1f5935.hot-update.js.map