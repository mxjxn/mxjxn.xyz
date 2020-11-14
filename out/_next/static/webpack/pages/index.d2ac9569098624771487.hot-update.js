webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NFTs.js":
/*!****************************!*\
  !*** ./components/NFTs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NFTs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/mxjxn/workspace/mxjxnxyz/components/NFTs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nFlexBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__FlexBox\",\n  componentId: \"sc-1m0etfx-0\"\n})([\"display:flex;justify-content:space-between;flex-direction:row;padding:0 5rem;p{font-size:0.8em;}\"]);\nvar TwoColGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__TwoColGrid\",\n  componentId: \"sc-1m0etfx-1\"\n})([\"display:grid;grid-template-columns:1fr 1.16fr;\"]);\n_c = TwoColGrid;\nvar LeftCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__LeftCol\",\n  componentId: \"sc-1m0etfx-2\"\n})([\"grid-column:2 / span 1;border:1px solid green;\"]);\n_c2 = LeftCol;\nvar RightCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__RightCol\",\n  componentId: \"sc-1m0etfx-3\"\n})([\"grid-column:3 / span 1;border:1px solid green;text-align:left;\"]);\n_c3 = RightCol;\n\nvar NFTGrid = function NFTGrid(_ref) {\n  var left = _ref.left,\n      right = _ref.right;\n  return __jsx(TwoColGrid, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(LeftCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, left), __jsx(RightCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, right));\n};\n\n_c4 = NFTGrid;\nfunction NFTs() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(FlexBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(NFTGrid, {\n    left: __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, \"Buy some shit\"),\n    right: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nft-card\", {\n      contractAddress: \"0x60f80121c31a0d46b5279700f9df786054aa5ee5\",\n      tokenId: \"65572\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 19\n      }\n    }), __jsx(\"nft-card\", {\n      contractAddress: \"0xd07dc4262bcdbf85190c01c996b4c06a461d2430\",\n      tokenId: \"76044\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 19\n      }\n    }, \" \")),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  })), __jsx(\"script\", {\n    src: \"https://unpkg.com/embeddable-nfts/dist/nft-card.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }));\n}\n_c5 = NFTs;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"TwoColGrid\");\n$RefreshReg$(_c2, \"LeftCol\");\n$RefreshReg$(_c3, \"RightCol\");\n$RefreshReg$(_c4, \"NFTGrid\");\n$RefreshReg$(_c5, \"NFTs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRzLmpzPzA3ZWUiXSwibmFtZXMiOlsiRmxleEJveCIsInN0eWxlZCIsImRpdiIsIlR3b0NvbEdyaWQiLCJMZWZ0Q29sIiwiUmlnaHRDb2wiLCJORlRHcmlkIiwibGVmdCIsInJpZ2h0IiwiTkZUcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBQVA7QUFVQSxJQUFNQyxVQUFVLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0RBQWhCO0tBQU1DLFU7QUFJTixJQUFNQyxPQUFPLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0RBQWI7TUFBTUUsTztBQUlOLElBQU1DLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRUFBZDtNQUFNRyxROztBQU1OLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW1CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUMvQixTQUNJLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0QsSUFERCxDQURGLEVBSUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0MsS0FERCxDQUpGLENBREo7QUFVSCxDQVhEOztNQUFNRixPO0FBYVMsU0FBU0csSUFBVCxHQUFnQjtBQUMzQixTQUNJLG1FQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFI7QUFFRSxTQUFLLEVBQ0gsbUVBQ0U7QUFBVSxxQkFBZSxFQUFDLDRDQUExQjtBQUF1RSxhQUFPLEVBQUMsT0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBVSxxQkFBZSxFQUFDLDRDQUExQjtBQUF1RSxhQUFPLEVBQUMsT0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFXRTtBQUFRLE9BQUcsRUFBQyx3REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FESjtBQWVIO01BaEJ1QkEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTkZUcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbkZsZXhCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6MCA1cmVtO1xuICBwe1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbmBcblxuY29uc3QgVHdvQ29sR3JpZCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4xNmZyO1xuYFxuY29uc3QgTGVmdENvbCA9IHN0eWxlZC5kaXZgXG5ncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbmJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuYFxuY29uc3QgUmlnaHRDb2wgPSBzdHlsZWQuZGl2YFxuZ3JpZC1jb2x1bW46IDMgLyBzcGFuIDE7XG5ib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbnRleHQtYWxpZ246bGVmdDtcbmBcblxuY29uc3QgTkZUR3JpZCA9ICh7bGVmdCwgcmlnaHR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFR3b0NvbEdyaWQ+XG4gICAgICAgICAgPExlZnRDb2w+XG4gICAgICAgICAge2xlZnR9XG4gICAgICAgICAgPC9MZWZ0Q29sPlxuICAgICAgICAgIDxSaWdodENvbD5cbiAgICAgICAgICB7cmlnaHR9XG4gICAgICAgICAgPC9SaWdodENvbD5cbiAgICAgICAgPC9Ud29Db2xHcmlkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4Qm94PlxuICAgICAgICAgICAgPE5GVEdyaWRcbiAgICAgICAgICAgICAgbGVmdD17PGRpdj5CdXkgc29tZSBzaGl0PC9kaXY+fVxuICAgICAgICAgICAgICByaWdodD17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxuZnQtY2FyZCBjb250cmFjdEFkZHJlc3M9XCIweDYwZjgwMTIxYzMxYTBkNDZiNTI3OTcwMGY5ZGY3ODYwNTRhYTVlZTVcIiB0b2tlbklkPVwiNjU1NzJcIj48L25mdC1jYXJkPlxuICAgICAgICAgICAgICAgICAgPG5mdC1jYXJkIGNvbnRyYWN0QWRkcmVzcz1cIjB4ZDA3ZGM0MjYyYmNkYmY4NTE5MGMwMWM5OTZiNGMwNmE0NjFkMjQzMFwiIHRva2VuSWQ9XCI3NjA0NFwiPiA8L25mdC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9Lz5cbiAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9lbWJlZGRhYmxlLW5mdHMvZGlzdC9uZnQtY2FyZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTs.js\n");

/***/ })

})