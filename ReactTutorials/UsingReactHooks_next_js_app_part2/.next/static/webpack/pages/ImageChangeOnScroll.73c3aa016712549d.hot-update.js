"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction ImageToggleOnScroll(param) {\n    var primaryImg = param.primaryImg, secondaryImg = param.secondaryImg;\n    _s();\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var isInView = function() {\n        var rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inView = ref[0], setInView = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", scrollHandler);\n        return function() {\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: primaryImg,\n        alt: \"\",\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Dan\\\\Dev\\\\ReactTutorials\\\\UsingReactHooks_next_js_app\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this));\n}\n_s(ImageToggleOnScroll, \"oQHLrS4gEf2AAS70+YfdHFBsmbk=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEOztTQUUvQ0ksbUJBQW1CLENBQUMsS0FBMEIsRUFBRSxDQUFDO1FBQTVCQyxVQUFVLEdBQVgsS0FBMEIsQ0FBekJBLFVBQVUsRUFBRUMsWUFBWSxHQUF6QixLQUEwQixDQUFiQSxZQUFZOztJQUNsRCxHQUFLLENBQUNDLFFBQVEsR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBRTVCLEdBQUssQ0FBQ08sUUFBUSxHQUFFLFFBQVEsR0FBRixDQUFDO1FBQ25CLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRixRQUFRLENBQUNHLE9BQU8sQ0FBQ0MscUJBQXFCO1FBQ25ELE1BQU0sQ0FBQ0YsSUFBSSxDQUFDRyxHQUFHLElBQUksQ0FBQyxJQUFJSCxJQUFJLENBQUNJLE1BQU0sSUFBSUMsTUFBTSxDQUFDQyxXQUFXO0lBQzdELENBQUM7SUFFRCxHQUFLLENBQXVCWixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ2EsTUFBTSxHQUFlYixHQUFlLEtBQTVCYyxTQUFTLEdBQUlkLEdBQWU7SUFDM0NELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYlksTUFBTSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVDLGFBQWE7UUFDL0MsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ1ZMLE1BQU0sQ0FBQ00sbUJBQW1CLENBQUMsQ0FBUSxTQUFFRCxhQUFhO1FBQ3RELENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDREUsQ0FBRztRQUVKQyxHQUFHLEVBQUVqQixVQUFVO1FBQ2ZrQixHQUFHLEVBQUMsQ0FBRTtRQUFDQyxHQUFHLEVBQUVqQixRQUFROzs7Ozs7QUFFNUIsQ0FBQztHQXJCUUgsbUJBQW1CO0tBQW5CQSxtQkFBbUI7QUF1QjVCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz9jYzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VUb2dnbGVPblNjcm9sbCh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkge1xyXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7ICAgIFxyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3PSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nIFxyXG5cclxuICAgICAgICBzcmM9e3ByaW1hcnlJbWd9XHJcbiAgICAgICAgYWx0PVwiXCIgcmVmPXtpbWFnZVJlZn0vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ })

});