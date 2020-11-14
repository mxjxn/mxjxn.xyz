webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NFTs.js":
/*!****************************!*\
  !*** ./components/NFTs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NFTs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/mxjxn/workspace/mxjxnxyz/components/NFTs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar TwoColGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__TwoColGrid\",\n  componentId: \"sc-1m0etfx-0\"\n})([\"display:grid;grid-template-columns:5rem 1fr 2fr 5rem;\"]);\n_c = TwoColGrid;\nvar LeftCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__LeftCol\",\n  componentId: \"sc-1m0etfx-1\"\n})([\"grid-column:2 / span 1;border:1px solid green;\"]);\n_c2 = LeftCol;\nvar RightCol = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"NFTs__RightCol\",\n  componentId: \"sc-1m0etfx-2\"\n})([\"grid-column:3 / span 1;border:1px solid green;text-align:left;\"]);\n_c3 = RightCol;\n\nvar NFTGrid = function NFTGrid(_ref) {\n  var left = _ref.left,\n      right = _ref.right;\n  return __jsx(TwoColGrid, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(LeftCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, left), __jsx(RightCol, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, right));\n};\n\n_c4 = NFTGrid;\nfunction NFTs() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NFTGrid, {\n    left: __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, \"Buy some shit\"),\n    right: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nft-card\", {\n      contractAddress: \"0x60f80121c31a0d46b5279700f9df786054aa5ee5\",\n      tokenId: \"65572\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }), __jsx(\"nft-card\", {\n      contractAddress: \"0xd07dc4262bcdbf85190c01c996b4c06a461d2430\",\n      tokenId: \"76044\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, \" \")),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://unpkg.com/embeddable-nfts/dist/nft-card.min.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }));\n}\n_c5 = NFTs;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"TwoColGrid\");\n$RefreshReg$(_c2, \"LeftCol\");\n$RefreshReg$(_c3, \"RightCol\");\n$RefreshReg$(_c4, \"NFTGrid\");\n$RefreshReg$(_c5, \"NFTs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRzLmpzPzA3ZWUiXSwibmFtZXMiOlsiVHdvQ29sR3JpZCIsInN0eWxlZCIsImRpdiIsIkxlZnRDb2wiLCJSaWdodENvbCIsIk5GVEdyaWQiLCJsZWZ0IiwicmlnaHQiLCJORlRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUFoQjtLQUFNRixVO0FBSU4sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFiO01BQU1DLE87QUFJTixJQUFNQyxRQUFRLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0VBQWQ7TUFBTUUsUTs7QUFNTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFtQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDL0IsU0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NELElBREQsQ0FERixFQUlFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NDLEtBREQsQ0FKRixDQURKO0FBVUgsQ0FYRDs7TUFBTUYsTztBQWFTLFNBQVNHLElBQVQsR0FBZ0I7QUFDM0IsU0FDSSxtRUFDQSxNQUFDLE9BQUQ7QUFDRSxRQUFJLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUjtBQUVFLFNBQUssRUFBRSxtRUFDTDtBQUFVLHFCQUFlLEVBQUMsNENBQTFCO0FBQXVFLGFBQU8sRUFBQyxPQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREssRUFFTDtBQUFVLHFCQUFlLEVBQUMsNENBQTFCO0FBQXVFLGFBQU8sRUFBQyxPQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkssQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFPQTtBQUFRLE9BQUcsRUFBQyx3REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEEsQ0FESjtBQVdIO01BWnVCQSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ORlRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVHdvQ29sR3JpZCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDFmciAyZnIgNXJlbTtcbmBcbmNvbnN0IExlZnRDb2wgPSBzdHlsZWQuZGl2YFxuZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG5ib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbmBcbmNvbnN0IFJpZ2h0Q29sID0gc3R5bGVkLmRpdmBcbmdyaWQtY29sdW1uOiAzIC8gc3BhbiAxO1xuYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG50ZXh0LWFsaWduOmxlZnQ7XG5gXG5cbmNvbnN0IE5GVEdyaWQgPSAoe2xlZnQsIHJpZ2h0fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUd29Db2xHcmlkPlxuICAgICAgICAgIDxMZWZ0Q29sPlxuICAgICAgICAgIHtsZWZ0fVxuICAgICAgICAgIDwvTGVmdENvbD5cbiAgICAgICAgICA8UmlnaHRDb2w+XG4gICAgICAgICAge3JpZ2h0fVxuICAgICAgICAgIDwvUmlnaHRDb2w+XG4gICAgICAgIDwvVHdvQ29sR3JpZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPE5GVEdyaWRcbiAgICAgICAgICBsZWZ0PXs8ZGl2PkJ1eSBzb21lIHNoaXQ8L2Rpdj59XG4gICAgICAgICAgcmlnaHQ9ezw+XG4gICAgICAgICAgICA8bmZ0LWNhcmQgY29udHJhY3RBZGRyZXNzPVwiMHg2MGY4MDEyMWMzMWEwZDQ2YjUyNzk3MDBmOWRmNzg2MDU0YWE1ZWU1XCIgdG9rZW5JZD1cIjY1NTcyXCI+PC9uZnQtY2FyZD5cbiAgICAgICAgICAgIDxuZnQtY2FyZCBjb250cmFjdEFkZHJlc3M9XCIweGQwN2RjNDI2MmJjZGJmODUxOTBjMDFjOTk2YjRjMDZhNDYxZDI0MzBcIiB0b2tlbklkPVwiNzYwNDRcIj4gPC9uZnQtY2FyZD5cbiAgICAgICAgICA8Lz59Lz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9lbWJlZGRhYmxlLW5mdHMvZGlzdC9uZnQtY2FyZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTs.js\n");

/***/ })

})