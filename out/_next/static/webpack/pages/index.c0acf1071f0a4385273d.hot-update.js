webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Containers.js":
/*!**********************************!*\
  !*** ./components/Containers.js ***!
  \**********************************/
/*! exports provided: Grid, LeftThird, LeftTwoThird, RightThird, RightTwoThird, Left, Right, RedBox, BlueBox, PurpleBox, FlexWrap, CornerBox, DarkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftThird\", function() { return LeftThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftTwoThird\", function() { return LeftTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightThird\", function() { return RightThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightTwoThird\", function() { return RightTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RedBox\", function() { return RedBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlueBox\", function() { return BlueBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PurpleBox\", function() { return PurpleBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexWrap\", function() { return FlexWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerBox\", function() { return CornerBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkBox\", function() { return DarkBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Div\",\n  componentId: \"sc-17xkhcv-0\"\n})([\"padding:\", \";\"], function (props) {\n  return props.narrow ? \"0.2rem 1rem\" : \"1rem\";\n});\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Grid\",\n  componentId: \"sc-17xkhcv-1\"\n})([\"display:grid;grid-template-columns:[l-gutter] 5rem [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [r-gutter] 5rem\"]);\nvar LeftThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__LeftThird\",\n  componentId: \"sc-17xkhcv-2\"\n})([\"grid-column:one / span 3;\"]);\nvar LeftTwoThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__LeftTwoThird\",\n  componentId: \"sc-17xkhcv-3\"\n})([\"grid-column:one / span 6;\"]);\nvar RightThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__RightThird\",\n  componentId: \"sc-17xkhcv-4\"\n})([\"grid-column:seven / span 4;\"]);\nvar RightTwoThird = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__RightTwoThird\",\n  componentId: \"sc-17xkhcv-5\"\n})([\"grid-column:four / span 7;\"]);\nvar Left = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__Left\",\n  componentId: \"sc-17xkhcv-6\"\n})([\"grid-column:one / span 4;\"]);\nvar Right = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Div).withConfig({\n  displayName: \"Containers__Right\",\n  componentId: \"sc-17xkhcv-7\"\n})([\"grid-column:six / span 4;\"]);\nvar RedBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RedBox\",\n  componentId: \"sc-17xkhcv-8\"\n})([\"background:linear-gradient(173deg,#330000 0%,#690000 20%,#700000 80%,#8a0000 99%,#aa0000 100%);padding-bottom:2rem;border-radius:\", \" \", \";\"], function (props) {\n  return props.roundTop ? \"5rem 5rem\" : \"0 0\";\n}, function (props) {\n  return props.roundBottom ? \"5rem 5rem\" : \"0 0\";\n});\nvar PurpleBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__PurpleBox\",\n  componentId: \"sc-17xkhcv-9\"\n})([\"background:linear-gradient(180deg,rgba(216,136,251,1) 0%,rgba(178,57,234,1) 2%,rgba(100,27,158,1) 30%,rgba(32,1,77,1) 50%,rgba(0,0,0,0) 100%);padding-bottom:\", \";border-radius:5rem 5rem 0 0;\"], function (props) {\n  return props.narrow ? \"0em\" : \"2em\";\n});\nvar BlueBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__BlueBox\",\n  componentId: \"sc-17xkhcv-10\"\n})([\"background:linear-gradient(to top,#000000 0%,#070737 90%,#11118a 99%,#0000aa 100%);padding-bottom:\", \";border-radius:5rem 5rem 0 0;\"], function (props) {\n  return props.narrow ? \"0em\" : \"2em\";\n});\nvar FlexWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__FlexWrap\",\n  componentId: \"sc-17xkhcv-11\"\n})([\"display:flex;flex-wrap:wrap;justify-content:space-around;& > *{padding:1em;}\"]);\nvar CornerBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__CornerBox\",\n  componentId: \"sc-17xkhcv-12\"\n})([\"border-radius:2rem;margin:1rem 3rem;padding:1rem 2rem;background:white;background-opacity:0.15;\"]);\nvar DarkBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"Containers__DarkBox\",\n  componentId: \"sc-17xkhcv-13\"\n})([\"background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 90%,rgba(0,0,0,0) 100%);padding:1rem;border-radius 0.5rem;\"]);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJzLmpzPzlkOWUiXSwibmFtZXMiOlsiRGl2Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJuYXJyb3ciLCJHcmlkIiwiTGVmdFRoaXJkIiwiTGVmdFR3b1RoaXJkIiwiUmlnaHRUaGlyZCIsIlJpZ2h0VHdvVGhpcmQiLCJMZWZ0IiwiUmlnaHQiLCJSZWRCb3giLCJyb3VuZFRvcCIsInJvdW5kQm90dG9tIiwiUHVycGxlQm94IiwiQmx1ZUJveCIsIkZsZXhXcmFwIiwiQ29ybmVyQm94IiwiRGFya0JveCIsInAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNCQUNLLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxhQUFmLEdBQStCLE1BQW5DO0FBQUEsQ0FEVixDQUFUO0FBSUEsSUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVMQUFWO0FBS0EsSUFBTUksU0FBUyxHQUFHTCxpRUFBTSxDQUFDRCxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUNBQWY7QUFHQSxJQUFNTyxZQUFZLEdBQUdOLGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpQ0FBbEI7QUFJQSxJQUFNUSxVQUFVLEdBQUdQLGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxtQ0FBaEI7QUFJQSxJQUFNUyxhQUFhLEdBQUdSLGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrQ0FBbkI7QUFHQSxJQUFNVSxJQUFJLEdBQUdULGlFQUFNLENBQUNELEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpQ0FBVjtBQUdBLElBQU1XLEtBQUssR0FBR1YsaUVBQU0sQ0FBQ0QsR0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlDQUFYO0FBTUEsSUFBTVksTUFBTSxHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9KQUdRLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNVLFFBQU4sR0FBaUIsV0FBakIsR0FBK0IsS0FBbkM7QUFBQSxDQUhiLEVBRzJELFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNXLFdBQU4sR0FBb0IsV0FBcEIsR0FBbUMsS0FBdkM7QUFBQSxDQUhoRSxDQUFaO0FBTUEsSUFBTUMsU0FBUyxHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVNQUVNLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxLQUFmLEdBQXVCLEtBQTNCO0FBQUEsQ0FGWCxDQUFmO0FBTUEsSUFBTVksT0FBTyxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRJQUVRLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxLQUFmLEdBQXVCLEtBQTNCO0FBQUEsQ0FGYixDQUFiO0FBS0EsSUFBTWEsUUFBUSxHQUFHaEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvRkFBZDtBQVNBLElBQU1nQixTQUFTLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUFmO0FBT0EsSUFBTWlCLE9BQU8sR0FBR2xCLHlEQUFNLENBQUNtQixDQUFWO0FBQUE7QUFBQTtBQUFBLDBJQUFiO0FBTUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhaW5lcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAkeyBwcm9wcyA9PiBwcm9wcy5uYXJyb3cgPyBcIjAuMnJlbSAxcmVtXCIgOiBcIjFyZW1cIn07XG5gXG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2wtZ3V0dGVyXSA1cmVtIFtvbmVdIDFmciBbdHdvXSAxZnIgW3RocmVlXSAxZnIgW2ZvdXJdIDFmciBbZml2ZV0gMWZyIFtzaXhdIDFmciBbc2V2ZW5dIDFmciBbZWlnaHRdIDFmciBbbmluZV0gMWZyIFt0ZW5dIDFmciBbci1ndXR0ZXJdIDVyZW1cbmBcblxuY29uc3QgTGVmdFRoaXJkID0gc3R5bGVkKERpdilgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDM7XG5gXG5jb25zdCBMZWZ0VHdvVGhpcmQgPSBzdHlsZWQoRGl2KWBcbiAgZ3JpZC1jb2x1bW46IG9uZSAvIHNwYW4gNjtcbmBcblxuY29uc3QgUmlnaHRUaGlyZCA9IHN0eWxlZChEaXYpYFxuICBncmlkLWNvbHVtbjogc2V2ZW4gLyBzcGFuIDQ7XG5gXG5cbmNvbnN0IFJpZ2h0VHdvVGhpcmQgPSBzdHlsZWQoRGl2KWBcbiAgZ3JpZC1jb2x1bW46IGZvdXIgLyBzcGFuIDc7XG5gXG5jb25zdCBMZWZ0ID0gc3R5bGVkKERpdilgXG4gIGdyaWQtY29sdW1uOiBvbmUgLyBzcGFuIDQ7XG5gXG5jb25zdCBSaWdodCA9IHN0eWxlZChEaXYpYFxuICBncmlkLWNvbHVtbjogc2l4IC8gc3BhbiA0O1xuYFxuXG5cblxuY29uc3QgUmVkQm94ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3M2RlZywgIzMzMDAwMCAwJSwgIzY5MDAwMCAyMCUsICM3MDAwMDAgODAlLCAjOGEwMDAwIDk5JSwgI2FhMDAwMCAxMDAlKTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6ICR7IHByb3BzID0+IHByb3BzLnJvdW5kVG9wID8gXCI1cmVtIDVyZW1cIiA6IFwiMCAwXCIgfSAkeyBwcm9wcyA9PiBwcm9wcy5yb3VuZEJvdHRvbSA/IFwiNXJlbSA1cmVtXCIgOiAgXCIwIDBcIn07XG5gXG5cbmNvbnN0IFB1cnBsZUJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjE2LDEzNiwyNTEsMSkgMCUsIHJnYmEoMTc4LDU3LDIzNCwxKSAyJSwgcmdiYSgxMDAsMjcsMTU4LDEpIDMwJSwgcmdiYSgzMiwxLDc3LDEpIDUwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbiAgcGFkZGluZy1ib3R0b206ICR7IHByb3BzID0+IHByb3BzLm5hcnJvdyA/IFwiMGVtXCIgOiBcIjJlbVwifTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbSA1cmVtIDAgMDtcbmBcblxuY29uc3QgQmx1ZUJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAgMCUsICMwNzA3MzcgOTAlLCAjMTExMThhIDk5JSwgIzAwMDBhYSAxMDAlKTtcbiAgcGFkZGluZy1ib3R0b206ICR7IHByb3BzID0+IHByb3BzLm5hcnJvdyA/IFwiMGVtXCIgOiBcIjJlbVwifTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbSA1cmVtIDAgMDtcbmBcbmNvbnN0IEZsZXhXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgJiA+ICoge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuYFxuXG5jb25zdCBDb3JuZXJCb3ggPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtYXJnaW46IDFyZW0gM3JlbTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1vcGFjaXR5OiAwLjE1O1xuYFxuY29uc3QgRGFya0JveCA9IHN0eWxlZC5wYFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuMykgMCUsIHJnYmEoMCwwLDAsMC4xKSA5MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXMgMC41cmVtO1xuYFxuXG5leHBvcnQge1xuICBHcmlkLFxuICBMZWZ0VGhpcmQsXG4gIExlZnRUd29UaGlyZCxcbiAgUmlnaHRUaGlyZCxcbiAgUmlnaHRUd29UaGlyZCxcbiAgTGVmdCwgUmlnaHQsXG4gIFJlZEJveCwgQmx1ZUJveCwgUHVycGxlQm94LFxuICBGbGV4V3JhcCxcbiAgQ29ybmVyQm94LFxuICBEYXJrQm94XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Containers.js\n");

/***/ })

})