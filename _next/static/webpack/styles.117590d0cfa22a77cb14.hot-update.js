webpackHotUpdate("styles",{

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
            injectCss(link, link.href.split("?")[0] + "?unix=1558708770061");
          });
      }
    }
  

/***/ }),

/***/ "./src/pages/vita/Education.scss":
false,

/***/ "./src/pages/vita/Front.scss":
false,

/***/ "./src/pages/vita/Talks.scss":
false,

/***/ "./src/pages/vita/vita.scss":
false,

/***/ 17:
false,

/***/ 18:
false,

/***/ 19:
false,

/***/ 20:
false

})
//# sourceMappingURL=styles.117590d0cfa22a77cb14.hot-update.js.map