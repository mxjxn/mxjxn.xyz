webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Containers.js":
/*!**********************************!*\
  !*** ./components/Containers.js ***!
  \**********************************/
/*! exports provided: Grid, LeftThird, LeftTwoThird, RightThird, RightTwoThird, Left, Right, RedBox, BlueBox, FlexWrap, CornerBox, DarkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftThird\", function() { return LeftThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftTwoThird\", function() { return LeftTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightThird\", function() { return RightThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightTwoThird\", function() { return RightTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RedBox\", function() { return RedBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlueBox\", function() { return BlueBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexWrap\", function() { return FlexWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerBox\", function() { return CornerBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkBox\", function() { return DarkBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Grid\",\n  componentId: \"sc-17xkhcv-0\"\n})([\"display:grid;grid-template-columns:[l-gutter] 5rem [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [r-gutter] 5rem\"]);\nvar LeftThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__LeftThird\",\n  componentId: \"sc-17xkhcv-1\"\n})([\"grid-column:one / span 3;padding:1rem;\"]);\nvar LeftTwoThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__LeftTwoThird\",\n  componentId: \"sc-17xkhcv-2\"\n})([\"grid-column:one / span 6;padding:1rem;\"]);\nvar RightThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RightThird\",\n  componentId: \"sc-17xkhcv-3\"\n})([\"grid-column:six / span 4;padding:1rem;\"]);\nvar RightTwoThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RightTwoThird\",\n  componentId: \"sc-17xkhcv-4\"\n})([\"grid-column:four / span 7;padding:1rem;\"]);\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Left\",\n  componentId: \"sc-17xkhcv-5\"\n})([\"grid-column:one / span 4;padding:1rem\"]);\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Right\",\n  componentId: \"sc-17xkhcv-6\"\n})([\"grid-column:six / span 4;padding:1rem\"]);\nvar RedBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RedBox\",\n  componentId: \"sc-17xkhcv-7\"\n})([\"background:linear-gradient(160deg,#8a1111 0%,#cc6666 10%,#c05757 90%,#8a1111 99%,#aa0000 100%);padding-bottom:3rem\"]);\nvar BlueBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__BlueBox\",\n  componentId: \"sc-17xkhcv-8\"\n})([\"background:linear-gradient(to top,#000000 0%,#070737 90%,#11118a 99%,#0000aa 100%);\"]);\nvar FlexWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__FlexWrap\",\n  componentId: \"sc-17xkhcv-9\"\n})([\"display:flex;flex-wrap:wrap;justify-content:space-around;& > *{padding:1em;}\"]);\nvar CornerBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__CornerBox\",\n  componentId: \"sc-17xkhcv-10\"\n})([\"border-radius:2rem;margin:1rem 3rem;padding:0 2rem;background-color:\", \";\"], function (props) {\n  return props.color ? props.color : \"auto\";\n});\nvar DarkBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"Containers__DarkBox\",\n  componentId: \"sc-17xkhcv-11\"\n})([\"background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 90%,rgba(0,0,0,0) 100%);padding:1rem;border-radius 0.5rem;\"]);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJzLmpzPzlkOWUiXSwibmFtZXMiOlsiR3JpZCIsInN0eWxlZCIsImRpdiIsIkxlZnRUaGlyZCIsIkxlZnRUd29UaGlyZCIsIlJpZ2h0VGhpcmQiLCJSaWdodFR3b1RoaXJkIiwiTGVmdCIsIlJpZ2h0IiwiUmVkQm94IiwiQmx1ZUJveCIsIkZsZXhXcmFwIiwiQ29ybmVyQm94IiwicHJvcHMiLCJjb2xvciIsIkRhcmtCb3giLCJwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUxBQVY7QUFLQSxJQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBQWY7QUFJQSxJQUFNRSxZQUFZLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBQWxCO0FBS0EsSUFBTUcsVUFBVSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFoQjtBQUtBLElBQU1JLGFBQWEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrQ0FBbkI7QUFJQSxJQUFNSyxJQUFJLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQVY7QUFJQSxJQUFNTSxLQUFLLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQVg7QUFLQSxJQUFNTyxNQUFNLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEhBQVo7QUFLQSxJQUFNUSxPQUFPLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWI7QUFHQSxJQUFNUyxRQUFRLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0ZBQWQ7QUFTQSxJQUFNVSxTQUFTLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0ZBSVMsVUFBQVcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjRCxLQUFLLENBQUNDLEtBQXBCLEdBQTRCLE1BQWhDO0FBQUEsQ0FKZCxDQUFmO0FBTUEsSUFBTUMsT0FBTyxHQUFHZCx5REFBTSxDQUFDZSxDQUFWO0FBQUE7QUFBQTtBQUFBLDBJQUFiO0FBTUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhaW5lcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtsLWd1dHRlcl0gNXJlbSBbb25lXSAxZnIgW3R3b10gMWZyIFt0aHJlZV0gMWZyIFtmb3VyXSAxZnIgW2ZpdmVdIDFmciBbc2l4XSAxZnIgW3NldmVuXSAxZnIgW2VpZ2h0XSAxZnIgW25pbmVdIDFmciBbdGVuXSAxZnIgW3ItZ3V0dGVyXSA1cmVtXG5gXG5cbmNvbnN0IExlZnRUaGlyZCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDM7XG4gIHBhZGRpbmc6IDFyZW07XG5gXG5jb25zdCBMZWZ0VHdvVGhpcmQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogb25lIC8gc3BhbiA2O1xuICBwYWRkaW5nOiAxcmVtO1xuYFxuXG5jb25zdCBSaWdodFRoaXJkID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IHNpeCAvIHNwYW4gNDtcbiAgcGFkZGluZzogMXJlbTtcbmBcblxuY29uc3QgUmlnaHRUd29UaGlyZCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiBmb3VyIC8gc3BhbiA3O1xuICBwYWRkaW5nOiAxcmVtO1xuYFxuY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDQ7XG4gIHBhZGRpbmc6IDFyZW1cbmBcbmNvbnN0IFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IHNpeCAvIHNwYW4gNDtcbiAgcGFkZGluZzogMXJlbVxuYFxuXG5jb25zdCBSZWRCb3ggPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjOGExMTExIDAlLCAjY2M2NjY2IDEwJSwgI2MwNTc1NyA5MCUsICM4YTExMTEgOTklLCAjYWEwMDAwIDEwMCUpO1xucGFkZGluZy1ib3R0b206IDNyZW1cbmBcblxuY29uc3QgQmx1ZUJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAgMCUsICMwNzA3MzcgOTAlLCAjMTExMThhIDk5JSwgIzAwMDBhYSAxMDAlKTtcbmBcbmNvbnN0IEZsZXhXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgJiA+ICoge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuYFxuXG5jb25zdCBDb3JuZXJCb3ggPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtYXJnaW46IDFyZW0gM3JlbTtcbiAgcGFkZGluZzogMCAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDokeyAgcHJvcHMgPT4gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IFwiYXV0b1wiIH07XG5gXG5jb25zdCBEYXJrQm94ID0gc3R5bGVkLnBgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMC4zKSAwJSwgcmdiYSgwLDAsMCwwLjEpIDkwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1cyAwLjVyZW07XG5gXG5cbmV4cG9ydCB7XG4gIEdyaWQsXG4gIExlZnRUaGlyZCxcbiAgTGVmdFR3b1RoaXJkLFxuICBSaWdodFRoaXJkLFxuICBSaWdodFR3b1RoaXJkLFxuICBMZWZ0LCBSaWdodCxcbiAgUmVkQm94LCBCbHVlQm94LFxuICBGbGV4V3JhcCxcbiAgQ29ybmVyQm94LFxuICBEYXJrQm94XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Containers.js\n");

/***/ })

})