webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Containers.js":
/*!**********************************!*\
  !*** ./components/Containers.js ***!
  \**********************************/
/*! exports provided: Grid, LeftThird, LeftTwoThird, RightThird, RightTwoThird, Left, Right, RedBox, BlueBox, PurpleBox, FlexWrap, CornerBox, DarkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftThird\", function() { return LeftThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftTwoThird\", function() { return LeftTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightThird\", function() { return RightThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightTwoThird\", function() { return RightTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RedBox\", function() { return RedBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlueBox\", function() { return BlueBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PurpleBox\", function() { return PurpleBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexWrap\", function() { return FlexWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerBox\", function() { return CornerBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkBox\", function() { return DarkBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Div\",\n  componentId: \"sc-17xkhcv-0\"\n})([\"padding:\", \";\"], function (props) {\n  return props.narrow ? \"0.2rem 1rem\" : \"1rem\";\n});\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Grid\",\n  componentId: \"sc-17xkhcv-1\"\n})([\"display:grid;grid-template-columns:[l-gutter] 5rem [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [r-gutter] 5rem\"]);\nvar Full = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__Full\",\n  componentId: \"sc-17xkhcv-2\"\n})([\"grid-column:one / span 8;\"]);\nvar LeftThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__LeftThird\",\n  componentId: \"sc-17xkhcv-3\"\n})([\"grid-column:one / span 3;\"]);\nvar LeftTwoThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__LeftTwoThird\",\n  componentId: \"sc-17xkhcv-4\"\n})([\"grid-column:one / span 6;\"]);\nvar RightThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__RightThird\",\n  componentId: \"sc-17xkhcv-5\"\n})([\"grid-column:seven / span 4;\"]);\nvar RightTwoThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__RightTwoThird\",\n  componentId: \"sc-17xkhcv-6\"\n})([\"grid-column:four / span 7;\"]);\nvar Left = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__Left\",\n  componentId: \"sc-17xkhcv-7\"\n})([\"grid-column:one / span 4;\"]);\nvar Right = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__Right\",\n  componentId: \"sc-17xkhcv-8\"\n})([\"grid-column:six / span 5;\"]);\nvar Rounded = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Rounded\",\n  componentId: \"sc-17xkhcv-9\"\n})([\"border-radius:\", \" \", \";padding-bottom:\", \";\"], function (props) {\n  return props.roundTop ? \"5rem 5rem\" : \"0 0\";\n}, function (props) {\n  return props.roundBottom ? \"5rem 5rem\" : \"0 0\";\n}, function (props) {\n  return props.narrow ? \"0em\" : \"2em\";\n});\nvar RedBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Rounded).withConfig({\n  displayName: \"Containers__RedBox\",\n  componentId: \"sc-17xkhcv-10\"\n})([\"background:linear-gradient(173deg,#330000 0%,#690000 20%,#700000 80%,#8a0000 99%,#aa0000 100%);\"]);\nvar PurpleBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Rounded).withConfig({\n  displayName: \"Containers__PurpleBox\",\n  componentId: \"sc-17xkhcv-11\"\n})([\"background:linear-gradient(180deg,rgba(216,136,251,1) 0%,rgba(178,57,234,1) 2%,rgba(100,27,158,1) 30%,rgba(32,1,77,1) 50%,rgba(0,0,0,0) 100%);\"]);\nvar BlueBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Rounded).withConfig({\n  displayName: \"Containers__BlueBox\",\n  componentId: \"sc-17xkhcv-12\"\n})([\"background:linear-gradient(to top,#000000 0%,#070737 90%,#11118a 99%,#0000aa 100%);\"]);\nvar FlexWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__FlexWrap\",\n  componentId: \"sc-17xkhcv-13\"\n})([\"display:flex;flex-wrap:wrap;justify-content:space-around;& > *{padding:1em;}\"]);\nvar CornerBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__CornerBox\",\n  componentId: \"sc-17xkhcv-14\"\n})([\"border-radius:2rem;margin:1rem 3rem;padding:1rem 2rem;background:white;background-opacity:0.15;\"]);\nvar DarkBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"Containers__DarkBox\",\n  componentId: \"sc-17xkhcv-15\"\n})([\"background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 90%,rgba(0,0,0,0) 100%);padding:1rem;border-radius 0.5rem;\"]);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJzLmpzPzlkOWUiXSwibmFtZXMiOlsiRGl2Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJuYXJyb3ciLCJHcmlkIiwiRnVsbCIsIkxlZnRUaGlyZCIsIkxlZnRUd29UaGlyZCIsIlJpZ2h0VGhpcmQiLCJSaWdodFR3b1RoaXJkIiwiTGVmdCIsIlJpZ2h0IiwiUm91bmRlZCIsInJvdW5kVG9wIiwicm91bmRCb3R0b20iLCJSZWRCb3giLCJQdXJwbGVCb3giLCJCbHVlQm94IiwiRmxleFdyYXAiLCJDb3JuZXJCb3giLCJEYXJrQm94IiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0JBQ0ssVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLGFBQWYsR0FBK0IsTUFBbkM7QUFBQSxDQURWLENBQVQ7QUFJQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUxBQVY7QUFJQSxJQUFNSSxJQUFJLEdBQUdMLGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpQ0FBVjtBQUlBLElBQU1PLFNBQVMsR0FBR04saUVBQU0sQ0FBQ0QsR0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlDQUFmO0FBR0EsSUFBTVEsWUFBWSxHQUFHUCxpRUFBTSxDQUFDRCxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUNBQWxCO0FBSUEsSUFBTVMsVUFBVSxHQUFHUixpRUFBTSxDQUFDRCxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsbUNBQWhCO0FBSUEsSUFBTVUsYUFBYSxHQUFHVCxpRUFBTSxDQUFDRCxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsa0NBQW5CO0FBR0EsSUFBTVcsSUFBSSxHQUFHVixpRUFBTSxDQUFDRCxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUNBQVY7QUFHQSxJQUFNWSxLQUFLLEdBQUdYLGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpQ0FBWDtBQUtBLElBQU1hLE9BQU8sR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFDTyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDVyxRQUFOLEdBQWlCLFdBQWpCLEdBQStCLEtBQW5DO0FBQUEsQ0FEWixFQUMwRCxVQUFBWCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDWSxXQUFOLEdBQW9CLFdBQXBCLEdBQW1DLEtBQXZDO0FBQUEsQ0FEL0QsRUFFUSxVQUFBWixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsS0FBZixHQUF1QixLQUEzQjtBQUFBLENBRmIsQ0FBYjtBQUtBLElBQU1ZLE1BQU0sR0FBR2YsaUVBQU0sQ0FBQ1ksT0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVHQUFaO0FBSUEsSUFBTUksU0FBUyxHQUFHaEIsaUVBQU0sQ0FBQ1ksT0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNKQUFmO0FBSUEsSUFBTUssT0FBTyxHQUFHakIsaUVBQU0sQ0FBQ1ksT0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDJGQUFiO0FBR0EsSUFBTU0sUUFBUSxHQUFHbEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvRkFBZDtBQVNBLElBQU1rQixTQUFTLEdBQUduQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUFmO0FBT0EsSUFBTW1CLE9BQU8sR0FBR3BCLHlEQUFNLENBQUNxQixDQUFWO0FBQUE7QUFBQTtBQUFBLDBJQUFiO0FBTUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhaW5lcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAkeyBwcm9wcyA9PiBwcm9wcy5uYXJyb3cgPyBcIjAuMnJlbSAxcmVtXCIgOiBcIjFyZW1cIn07XG5gXG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2wtZ3V0dGVyXSA1cmVtIFtvbmVdIDFmciBbdHdvXSAxZnIgW3RocmVlXSAxZnIgW2ZvdXJdIDFmciBbZml2ZV0gMWZyIFtzaXhdIDFmciBbc2V2ZW5dIDFmciBbZWlnaHRdIDFmciBbbmluZV0gMWZyIFt0ZW5dIDFmciBbci1ndXR0ZXJdIDVyZW1cbmBcbmNvbnN0IEZ1bGwgPSBzdHlsZWQoRGl2KWBcbiAgZ3JpZC1jb2x1bW46IG9uZSAvIHNwYW4gODtcbmBcblxuY29uc3QgTGVmdFRoaXJkID0gc3R5bGVkKERpdilgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDM7XG5gXG5jb25zdCBMZWZ0VHdvVGhpcmQgPSBzdHlsZWQoRGl2KWBcbiAgZ3JpZC1jb2x1bW46IG9uZSAvIHNwYW4gNjtcbmBcblxuY29uc3QgUmlnaHRUaGlyZCA9IHN0eWxlZChEaXYpYFxuICBncmlkLWNvbHVtbjogc2V2ZW4gLyBzcGFuIDQ7XG5gXG5cbmNvbnN0IFJpZ2h0VHdvVGhpcmQgPSBzdHlsZWQoRGl2KWBcbiAgZ3JpZC1jb2x1bW46IGZvdXIgLyBzcGFuIDc7XG5gXG5jb25zdCBMZWZ0ID0gc3R5bGVkKERpdilgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDQ7XG5gXG5jb25zdCBSaWdodCA9IHN0eWxlZChEaXYpYFxuICBncmlkLWNvbHVtbjogc2l4IC8gc3BhbiA1O1xuYFxuXG5cbmNvbnN0IFJvdW5kZWQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAkeyBwcm9wcyA9PiBwcm9wcy5yb3VuZFRvcCA/IFwiNXJlbSA1cmVtXCIgOiBcIjAgMFwiIH0gJHsgcHJvcHMgPT4gcHJvcHMucm91bmRCb3R0b20gPyBcIjVyZW0gNXJlbVwiIDogIFwiMCAwXCJ9O1xuICBwYWRkaW5nLWJvdHRvbTogJHsgcHJvcHMgPT4gcHJvcHMubmFycm93ID8gXCIwZW1cIiA6IFwiMmVtXCJ9O1xuYFxuXG5jb25zdCBSZWRCb3ggPSBzdHlsZWQoUm91bmRlZClgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzNkZWcsICMzMzAwMDAgMCUsICM2OTAwMDAgMjAlLCAjNzAwMDAwIDgwJSwgIzhhMDAwMCA5OSUsICNhYTAwMDAgMTAwJSk7XG5gXG5cbmNvbnN0IFB1cnBsZUJveCA9IHN0eWxlZChSb3VuZGVkKWBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMTYsMTM2LDI1MSwxKSAwJSwgcmdiYSgxNzgsNTcsMjM0LDEpIDIlLCByZ2JhKDEwMCwyNywxNTgsMSkgMzAlLCByZ2JhKDMyLDEsNzcsMSkgNTAlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xuYFxuXG5jb25zdCBCbHVlQm94ID0gc3R5bGVkKFJvdW5kZWQpYFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwIDAlLCAjMDcwNzM3IDkwJSwgIzExMTE4YSA5OSUsICMwMDAwYWEgMTAwJSk7XG5gXG5jb25zdCBGbGV4V3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICYgPiAqIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbmBcblxuY29uc3QgQ29ybmVyQm94ID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgbWFyZ2luOiAxcmVtIDNyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQtb3BhY2l0eTogMC4xNTtcbmBcbmNvbnN0IERhcmtCb3ggPSBzdHlsZWQucGBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwLjMpIDAlLCByZ2JhKDAsMCwwLDAuMSkgOTAlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzIDAuNXJlbTtcbmBcblxuZXhwb3J0IHtcbiAgR3JpZCxcbiAgTGVmdFRoaXJkLFxuICBMZWZ0VHdvVGhpcmQsXG4gIFJpZ2h0VGhpcmQsXG4gIFJpZ2h0VHdvVGhpcmQsXG4gIExlZnQsIFJpZ2h0LFxuICBSZWRCb3gsIEJsdWVCb3gsIFB1cnBsZUJveCxcbiAgRmxleFdyYXAsXG4gIENvcm5lckJveCxcbiAgRGFya0JveFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Containers.js\n");

/***/ })

})