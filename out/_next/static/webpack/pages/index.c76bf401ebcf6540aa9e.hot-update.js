webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Elements.js":
/*!********************************!*\
  !*** ./components/Elements.js ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: linear-gradient(to bottom, #333 0%, #090909 100%);\\n  margin: 0.5em 1em;\\n  padding: 0.05em 1em;\\n  height: 2.2em;\\n  font-size: 0.85em;\\n  display: inline-block;\\n  border-radius: 999px;\\n  color:#cce;\\n  transition: color 800ms linear ease-in-out;\\n  animation: \", \" 5s linear infinite;\\n  &:hover {\\n    color: #bbf;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n0%, 100% {\\n  box-shadow: .04em .04em .03em #ff0000,\\n              .08em .08em .03em #ffa500,\\n              .12em .12em .03em #ffff00,\\n              .16em .16em .03em #00ff00, .20em .20em .03em #00a3ff, .24em .24em .03em #ff00ff;\\n}\\n16.5% {\\n  box-shadow: .04em .04em  .03em #ffa500,\\n              .08em .08em  .03em #ffff00,\\n              .12em .12em  .03em #00ff00,\\n              .16em .16em  .03em #00a3ff,\\n              .20em .20em  .03em #ff00ff,\\n              .24em .24em  .03em #ff0000;\\n}\\n33% {\\n  box-shadow: .04em .04em  .03em #ffff00,\\n              .08em .08em  .03em #00ff00,\\n              .12em .12em  .03em #00a3ff,\\n              .16em .16em  .03em #ff00ff,\\n              .20em .20em  .03em #ff0000,\\n              .24em .24em  .03em #ffa500;\\n}\\n50% {\\n  box-shadow: .04em .04em  .03em #00ff00,\\n              .08em .08em  .03em #00a3ff,\\n              .12em .12em  .03em #ff00ff,\\n              .16em .16em  .03em #ff0000,\\n              .20em .20em  .03em #ffa500,\\n              .24em .24em  .03em #ffff00;\\n}\\n63.5% {\\n  box-shadow: .04em .04em  .03em #00a3ff,\\n              .08em .08em  .03em #ff00ff,\\n              .12em .12em  .03em #ff0000,\\n              .16em .16em  .03em #ffa500,\\n              .20em .20em  .03em #ffff00,\\n              .24em .24em  .03em #00ff00;\\n}\\n78% {\\n  box-shadow: .04em .04em  .03em #ff00ff,\\n              .08em .08em  .03em #ff0000,\\n              .12em .12em  .03em #ffa500,\\n              .16em .16em  .03em #ffff00,\\n              .20em .20em  .03em #00ff00,\\n              .24em .24em  .03em #00a3ff;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar rainbowShadow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject());\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject2(), rainbowShadow);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbGVtZW50cy5qcz9lZjgxIl0sIm5hbWVzIjpbInJhaW5ib3dTaGFkb3ciLCJrZXlmcmFtZXMiLCJJdGVtIiwic3R5bGVkIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLG1FQUFILG1CQUFuQjtBQWlEQSxJQUFNQyxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLENBQVYscUJBVUtKLGFBVkwsQ0FBVjtBQWdCQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRWxlbWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCByYWluYm93U2hhZG93ID0ga2V5ZnJhbWVzYFxuMCUsIDEwMCUge1xuICBib3gtc2hhZG93OiAuMDRlbSAuMDRlbSAuMDNlbSAjZmYwMDAwLFxuICAgICAgICAgICAgICAuMDhlbSAuMDhlbSAuMDNlbSAjZmZhNTAwLFxuICAgICAgICAgICAgICAuMTJlbSAuMTJlbSAuMDNlbSAjZmZmZjAwLFxuICAgICAgICAgICAgICAuMTZlbSAuMTZlbSAuMDNlbSAjMDBmZjAwLCAuMjBlbSAuMjBlbSAuMDNlbSAjMDBhM2ZmLCAuMjRlbSAuMjRlbSAuMDNlbSAjZmYwMGZmO1xufVxuMTYuNSUge1xuICBib3gtc2hhZG93OiAuMDRlbSAuMDRlbSAgLjAzZW0gI2ZmYTUwMCxcbiAgICAgICAgICAgICAgLjA4ZW0gLjA4ZW0gIC4wM2VtICNmZmZmMDAsXG4gICAgICAgICAgICAgIC4xMmVtIC4xMmVtICAuMDNlbSAjMDBmZjAwLFxuICAgICAgICAgICAgICAuMTZlbSAuMTZlbSAgLjAzZW0gIzAwYTNmZixcbiAgICAgICAgICAgICAgLjIwZW0gLjIwZW0gIC4wM2VtICNmZjAwZmYsXG4gICAgICAgICAgICAgIC4yNGVtIC4yNGVtICAuMDNlbSAjZmYwMDAwO1xufVxuMzMlIHtcbiAgYm94LXNoYWRvdzogLjA0ZW0gLjA0ZW0gIC4wM2VtICNmZmZmMDAsXG4gICAgICAgICAgICAgIC4wOGVtIC4wOGVtICAuMDNlbSAjMDBmZjAwLFxuICAgICAgICAgICAgICAuMTJlbSAuMTJlbSAgLjAzZW0gIzAwYTNmZixcbiAgICAgICAgICAgICAgLjE2ZW0gLjE2ZW0gIC4wM2VtICNmZjAwZmYsXG4gICAgICAgICAgICAgIC4yMGVtIC4yMGVtICAuMDNlbSAjZmYwMDAwLFxuICAgICAgICAgICAgICAuMjRlbSAuMjRlbSAgLjAzZW0gI2ZmYTUwMDtcbn1cbjUwJSB7XG4gIGJveC1zaGFkb3c6IC4wNGVtIC4wNGVtICAuMDNlbSAjMDBmZjAwLFxuICAgICAgICAgICAgICAuMDhlbSAuMDhlbSAgLjAzZW0gIzAwYTNmZixcbiAgICAgICAgICAgICAgLjEyZW0gLjEyZW0gIC4wM2VtICNmZjAwZmYsXG4gICAgICAgICAgICAgIC4xNmVtIC4xNmVtICAuMDNlbSAjZmYwMDAwLFxuICAgICAgICAgICAgICAuMjBlbSAuMjBlbSAgLjAzZW0gI2ZmYTUwMCxcbiAgICAgICAgICAgICAgLjI0ZW0gLjI0ZW0gIC4wM2VtICNmZmZmMDA7XG59XG42My41JSB7XG4gIGJveC1zaGFkb3c6IC4wNGVtIC4wNGVtICAuMDNlbSAjMDBhM2ZmLFxuICAgICAgICAgICAgICAuMDhlbSAuMDhlbSAgLjAzZW0gI2ZmMDBmZixcbiAgICAgICAgICAgICAgLjEyZW0gLjEyZW0gIC4wM2VtICNmZjAwMDAsXG4gICAgICAgICAgICAgIC4xNmVtIC4xNmVtICAuMDNlbSAjZmZhNTAwLFxuICAgICAgICAgICAgICAuMjBlbSAuMjBlbSAgLjAzZW0gI2ZmZmYwMCxcbiAgICAgICAgICAgICAgLjI0ZW0gLjI0ZW0gIC4wM2VtICMwMGZmMDA7XG59XG43OCUge1xuICBib3gtc2hhZG93OiAuMDRlbSAuMDRlbSAgLjAzZW0gI2ZmMDBmZixcbiAgICAgICAgICAgICAgLjA4ZW0gLjA4ZW0gIC4wM2VtICNmZjAwMDAsXG4gICAgICAgICAgICAgIC4xMmVtIC4xMmVtICAuMDNlbSAjZmZhNTAwLFxuICAgICAgICAgICAgICAuMTZlbSAuMTZlbSAgLjAzZW0gI2ZmZmYwMCxcbiAgICAgICAgICAgICAgLjIwZW0gLjIwZW0gIC4wM2VtICMwMGZmMDAsXG4gICAgICAgICAgICAgIC4yNGVtIC4yNGVtICAuMDNlbSAjMDBhM2ZmO1xufVxuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmFgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMzMgMCUsICMwOTA5MDkgMTAwJSk7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xuICBwYWRkaW5nOiAwLjA1ZW0gMWVtO1xuICBoZWlnaHQ6IDIuMmVtO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6I2NjZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgODAwbXMgbGluZWFyIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246ICR7cmFpbmJvd1NoYWRvd30gNXMgbGluZWFyIGluZmluaXRlO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2JiZjtcbiAgfVxuYFxuXG5leHBvcnQgeyBJdGVtIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Elements.js\n");

/***/ })

})