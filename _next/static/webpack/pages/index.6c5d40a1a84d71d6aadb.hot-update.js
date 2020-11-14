webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NFTs.js":
/*!****************************!*\
  !*** ./components/NFTs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NFTs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/mxjxn/workspace/mxjxnxyz/components/NFTs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar FlexDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__FlexDescription\",\n  componentId: \"sc-1m0etfx-0\"\n})([\"display:flex;justify-content:space-between;flex-direction:row;padding:0 5rem;p{font-size:0.8em;}\"]);\n_c = FlexDescription;\nvar TwoColGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__TwoColGrid\",\n  componentId: \"sc-1m0etfx-1\"\n})([\"display:grid;grid-template-columns:1fr 1.16fr;\"]);\n_c2 = TwoColGrid;\nvar LeftCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__LeftCol\",\n  componentId: \"sc-1m0etfx-2\"\n})([\"grid-column:2 / span 1;border:1px solid green;\"]);\n_c3 = LeftCol;\nvar RightCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__RightCol\",\n  componentId: \"sc-1m0etfx-3\"\n})([\"grid-column:3 / span 1;border:1px solid green;text-align:left;\"]);\n_c4 = RightCol;\n\nvar NFTGrid = function NFTGrid(_ref) {\n  var left = _ref.left,\n      right = _ref.right;\n  return __jsx(TwoColGrid, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(LeftCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, left), __jsx(RightCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, right));\n};\n\n_c5 = NFTGrid;\nfunction NFTs() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(FlexDescription, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Bridging old artforms with new mediums.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Working on rarible to sell art blah blah blah\")), __jsx(\"nft-card\", {\n    contractAddress: \"0x60f80121c31a0d46b5279700f9df786054aa5ee5\",\n    tokenId: \"65572\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }), __jsx(\"nft-card\", {\n    contractAddress: \"0xd07dc4262bcdbf85190c01c996b4c06a461d2430\",\n    tokenId: \"76044\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \" \"), __jsx(\"script\", {\n    src: \"https://unpkg.com/embeddable-nfts/dist/nft-card.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }));\n}\n_c6 = NFTs;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"FlexDescription\");\n$RefreshReg$(_c2, \"TwoColGrid\");\n$RefreshReg$(_c3, \"LeftCol\");\n$RefreshReg$(_c4, \"RightCol\");\n$RefreshReg$(_c5, \"NFTGrid\");\n$RefreshReg$(_c6, \"NFTs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRzLmpzPzA3ZWUiXSwibmFtZXMiOlsiRmxleERlc2NyaXB0aW9uIiwic3R5bGVkIiwiZGl2IiwiVHdvQ29sR3JpZCIsIkxlZnRDb2wiLCJSaWdodENvbCIsIk5GVEdyaWQiLCJsZWZ0IiwicmlnaHQiLCJORlRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFyQjtLQUFNRixlO0FBVU4sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFoQjtNQUFNQyxVO0FBSU4sSUFBTUMsT0FBTyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFiO01BQU1FLE87QUFJTixJQUFNQyxRQUFRLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0VBQWQ7TUFBTUcsUTs7QUFNTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFtQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDL0IsU0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NELElBREQsQ0FERixFQUlFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NDLEtBREQsQ0FKRixDQURKO0FBVUgsQ0FYRDs7TUFBTUYsTztBQWFTLFNBQVNHLElBQVQsR0FBZ0I7QUFDM0IsU0FDSSxtRUFDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUpGLENBREYsRUFTSTtBQUFVLG1CQUFlLEVBQUMsNENBQTFCO0FBQXVFLFdBQU8sRUFBQyxPQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSTtBQUFVLG1CQUFlLEVBQUMsNENBQTFCO0FBQXVFLFdBQU8sRUFBQyxPQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVkosRUFXRTtBQUFRLE9BQUcsRUFBQyx3REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FESjtBQWVIO01BaEJ1QkEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTkZUcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEZsZXhEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzowIDVyZW07XG4gIHB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuYFxuXG5jb25zdCBUd29Db2xHcmlkID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjE2ZnI7XG5gXG5jb25zdCBMZWZ0Q29sID0gc3R5bGVkLmRpdmBcbmdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xuYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG5gXG5jb25zdCBSaWdodENvbCA9IHN0eWxlZC5kaXZgXG5ncmlkLWNvbHVtbjogMyAvIHNwYW4gMTtcbmJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xudGV4dC1hbGlnbjpsZWZ0O1xuYFxuXG5jb25zdCBORlRHcmlkID0gKHtsZWZ0LCByaWdodH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VHdvQ29sR3JpZD5cbiAgICAgICAgICA8TGVmdENvbD5cbiAgICAgICAgICB7bGVmdH1cbiAgICAgICAgICA8L0xlZnRDb2w+XG4gICAgICAgICAgPFJpZ2h0Q29sPlxuICAgICAgICAgIHtyaWdodH1cbiAgICAgICAgICA8L1JpZ2h0Q29sPlxuICAgICAgICA8L1R3b0NvbEdyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXhEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgQnJpZGdpbmcgb2xkIGFydGZvcm1zIHdpdGggbmV3IG1lZGl1bXMuXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdvcmtpbmcgb24gcmFyaWJsZSB0byBzZWxsIGFydCBibGFoIGJsYWggYmxhaFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvRmxleERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPG5mdC1jYXJkIGNvbnRyYWN0QWRkcmVzcz1cIjB4NjBmODAxMjFjMzFhMGQ0NmI1Mjc5NzAwZjlkZjc4NjA1NGFhNWVlNVwiIHRva2VuSWQ9XCI2NTU3MlwiPjwvbmZ0LWNhcmQ+XG4gICAgICAgICAgICA8bmZ0LWNhcmQgY29udHJhY3RBZGRyZXNzPVwiMHhkMDdkYzQyNjJiY2RiZjg1MTkwYzAxYzk5NmI0YzA2YTQ2MWQyNDMwXCIgdG9rZW5JZD1cIjc2MDQ0XCI+IDwvbmZ0LWNhcmQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9lbWJlZGRhYmxlLW5mdHMvZGlzdC9uZnQtY2FyZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTs.js\n");

/***/ })

})