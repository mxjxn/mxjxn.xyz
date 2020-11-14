webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Containers.js":
/*!**********************************!*\
  !*** ./components/Containers.js ***!
  \**********************************/
/*! exports provided: Grid, LeftThird, LeftTwoThird, RightThird, RightTwoThird, Left, Right, RedBox, BlueBox, FlexWrap, CornerBox, DarkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftThird\", function() { return LeftThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftTwoThird\", function() { return LeftTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightThird\", function() { return RightThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightTwoThird\", function() { return RightTwoThird; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RedBox\", function() { return RedBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlueBox\", function() { return BlueBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexWrap\", function() { return FlexWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerBox\", function() { return CornerBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkBox\", function() { return DarkBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Grid\",\n  componentId: \"sc-17xkhcv-0\"\n})([\"display:grid;grid-template-columns:[l-gutter] 5rem [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [r-gutter] 5rem\"]);\nvar LeftThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__LeftThird\",\n  componentId: \"sc-17xkhcv-1\"\n})([\"grid-column:one / span 3;padding:1rem;\"]);\nvar LeftTwoThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__LeftTwoThird\",\n  componentId: \"sc-17xkhcv-2\"\n})([\"grid-column:one / span 6;padding:1rem;\"]);\nvar RightThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RightThird\",\n  componentId: \"sc-17xkhcv-3\"\n})([\"grid-column:six / span 4;padding:1rem;\"]);\nvar RightTwoThird = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RightTwoThird\",\n  componentId: \"sc-17xkhcv-4\"\n})([\"grid-column:four / span 7;padding:1rem;\"]);\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Left\",\n  componentId: \"sc-17xkhcv-5\"\n})([\"grid-column:one / span 4;padding:1rem\"]);\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__Right\",\n  componentId: \"sc-17xkhcv-6\"\n})([\"grid-column:six / span 4;padding:1rem\"]);\nvar RedBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__RedBox\",\n  componentId: \"sc-17xkhcv-7\"\n})([\"background:linear-gradient(173deg,#330000 0%,#690000 20%,#700000 80%,#8a0000 99%,#aa0000 100%);padding-bottom:3rem\"]);\nvar BlueBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__BlueBox\",\n  componentId: \"sc-17xkhcv-8\"\n})([\"background:linear-gradient(to top,#000000 0%,#070737 90%,#11118a 99%,#0000aa 100%);padding-bottom:3rem\"]);\nvar FlexWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__FlexWrap\",\n  componentId: \"sc-17xkhcv-9\"\n})([\"display:flex;flex-wrap:wrap;justify-content:space-around;& > *{padding:1em;}\"]);\nvar CornerBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Containers__CornerBox\",\n  componentId: \"sc-17xkhcv-10\"\n})([\"border-radius:2rem;margin:1rem 3rem;padding:0 2rem;background:\\\"#ffffff\\\";background-opacity:0.25;\"]);\nvar DarkBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"Containers__DarkBox\",\n  componentId: \"sc-17xkhcv-11\"\n})([\"background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 90%,rgba(0,0,0,0) 100%);padding:1rem;border-radius 0.5rem;\"]);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJzLmpzPzlkOWUiXSwibmFtZXMiOlsiR3JpZCIsInN0eWxlZCIsImRpdiIsIkxlZnRUaGlyZCIsIkxlZnRUd29UaGlyZCIsIlJpZ2h0VGhpcmQiLCJSaWdodFR3b1RoaXJkIiwiTGVmdCIsIlJpZ2h0IiwiUmVkQm94IiwiQmx1ZUJveCIsIkZsZXhXcmFwIiwiQ29ybmVyQm94IiwiRGFya0JveCIsInAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1TEFBVjtBQUtBLElBQU1DLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FBZjtBQUlBLElBQU1FLFlBQVksR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FBbEI7QUFLQSxJQUFNRyxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBQWhCO0FBS0EsSUFBTUksYUFBYSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtDQUFuQjtBQUlBLElBQU1LLElBQUksR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2Q0FBVjtBQUlBLElBQU1NLEtBQUssR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2Q0FBWDtBQUtBLElBQU1PLE1BQU0sR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSEFBWjtBQUtBLElBQU1RLE9BQU8sR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4R0FBYjtBQUlBLElBQU1TLFFBQVEsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvRkFBZDtBQVNBLElBQU1VLFNBQVMsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwR0FBZjtBQU9BLElBQU1XLE9BQU8sR0FBR1oseURBQU0sQ0FBQ2EsQ0FBVjtBQUFBO0FBQUE7QUFBQSwwSUFBYjtBQU1BIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250YWluZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbbC1ndXR0ZXJdIDVyZW0gW29uZV0gMWZyIFt0d29dIDFmciBbdGhyZWVdIDFmciBbZm91cl0gMWZyIFtmaXZlXSAxZnIgW3NpeF0gMWZyIFtzZXZlbl0gMWZyIFtlaWdodF0gMWZyIFtuaW5lXSAxZnIgW3Rlbl0gMWZyIFtyLWd1dHRlcl0gNXJlbVxuYFxuXG5jb25zdCBMZWZ0VGhpcmQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogb25lIC8gc3BhbiAzO1xuICBwYWRkaW5nOiAxcmVtO1xuYFxuY29uc3QgTGVmdFR3b1RoaXJkID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IG9uZSAvIHNwYW4gNjtcbiAgcGFkZGluZzogMXJlbTtcbmBcblxuY29uc3QgUmlnaHRUaGlyZCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiBzaXggLyBzcGFuIDQ7XG4gIHBhZGRpbmc6IDFyZW07XG5gXG5cbmNvbnN0IFJpZ2h0VHdvVGhpcmQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogZm91ciAvIHNwYW4gNztcbiAgcGFkZGluZzogMXJlbTtcbmBcbmNvbnN0IExlZnQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogb25lIC8gc3BhbiA0O1xuICBwYWRkaW5nOiAxcmVtXG5gXG5jb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiBzaXggLyBzcGFuIDQ7XG4gIHBhZGRpbmc6IDFyZW1cbmBcblxuY29uc3QgUmVkQm94ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3M2RlZywgIzMzMDAwMCAwJSwgIzY5MDAwMCAyMCUsICM3MDAwMDAgODAlLCAjOGEwMDAwIDk5JSwgI2FhMDAwMCAxMDAlKTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW1cbmBcblxuY29uc3QgQmx1ZUJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAgMCUsICMwNzA3MzcgOTAlLCAjMTExMThhIDk5JSwgIzAwMDBhYSAxMDAlKTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW1cbmBcbmNvbnN0IEZsZXhXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgJiA+ICoge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuYFxuXG5jb25zdCBDb3JuZXJCb3ggPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtYXJnaW46IDFyZW0gM3JlbTtcbiAgcGFkZGluZzogMCAycmVtO1xuICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIjtcbiAgYmFja2dyb3VuZC1vcGFjaXR5OiAwLjI1O1xuYFxuY29uc3QgRGFya0JveCA9IHN0eWxlZC5wYFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuMykgMCUsIHJnYmEoMCwwLDAsMC4xKSA5MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXMgMC41cmVtO1xuYFxuXG5leHBvcnQge1xuICBHcmlkLFxuICBMZWZ0VGhpcmQsXG4gIExlZnRUd29UaGlyZCxcbiAgUmlnaHRUaGlyZCxcbiAgUmlnaHRUd29UaGlyZCxcbiAgTGVmdCwgUmlnaHQsXG4gIFJlZEJveCwgQmx1ZUJveCxcbiAgRmxleFdyYXAsXG4gIENvcm5lckJveCxcbiAgRGFya0JveFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Containers.js\n");

/***/ })

})