"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Audiovisuales.jsx":
/*!**************************************!*\
  !*** ./components/Audiovisuales.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Audiovisuales; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Audiovisuales.module.css */ \"./components/Audiovisuales.module.css\");\n/* harmony import */ var _Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Titulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Titulo */ \"./components/Titulo.jsx\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/e/c\\xF3digo/yunga-web/components/Audiovisuales.jsx\";\n\n\n\n\nvar videos = [{\n  src: \"https://www.youtube.com/embed/Xgx9pg9h9Fc\"\n}, {\n  src: \"https://www.youtube.com/embed/hNx78lOYRvg\"\n}];\nvar arrowStyles = {\n  position: \"absolute\",\n  zIndex: 2,\n  top: \"calc(50% - 15px)\",\n  width: 30,\n  height: 30,\n  cursor: \"pointer\",\n  border: \"none\",\n  // color: \"white\",\n  backgroundColor: \"black\",\n  fontSize: \"20px\" // \":hover\": {\n  //   color: \"red\",\n  //   backgroundColor: \"white\",\n  // },\n\n};\nfunction Audiovisuales() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    id: \"audiovisuales\",\n    className: (_Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedor),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Titulo__WEBPACK_IMPORTED_MODULE_1__.default, {\n      texto: \"Audiovisuales\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n      showStatus: false,\n      className: (_Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4___default().carrusel),\n      statusFormatter: function statusFormatter(current, total) {\n        return \"Current slide: \".concat(current, \" / Total: \").concat(total);\n      },\n      renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {\n        return hasPrev && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          className: (_Audiovisuales_module_css__WEBPACK_IMPORTED_MODULE_4___default().boton),\n          onClick: onClickHandler,\n          title: label // style={{ ...arrowStyles, left: 5 }}\n          ,\n          children: \"\\u25C4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this);\n      },\n      renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {\n        return hasNext && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: onClickHandler,\n          title: label // style={{ ...arrowStyles, right: 5 }}\n          ,\n          children: \"\\u25BA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this);\n      },\n      children: videos.map(function (video) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n            width: \"1270\",\n            height: \"480\",\n            src: video.src,\n            title: \"YouTube video player\",\n            frameborder: \"0\",\n            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n            allowfullscreen: \"allowfullscreen\",\n            mozallowfullscreen: \"mozallowfullscreen\",\n            msallowfullscreen: \"msallowfullscreen\",\n            oallowfullscreen: \"oallowfullscreen\",\n            webkitallowfullscreen: \"webkitallowfullscreen\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c = Audiovisuales;\n\nvar _c;\n\n$RefreshReg$(_c, \"Audiovisuales\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1ZGlvdmlzdWFsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUcsTUFBTSxHQUFHLENBQ2I7QUFBRUMsRUFBQUEsR0FBRyxFQUFFO0FBQVAsQ0FEYSxFQUViO0FBQUVBLEVBQUFBLEdBQUcsRUFBRTtBQUFQLENBRmEsQ0FBZjtBQUtBLElBQU1DLFdBQVcsR0FBRztBQUNsQkMsRUFBQUEsUUFBUSxFQUFFLFVBRFE7QUFFbEJDLEVBQUFBLE1BQU0sRUFBRSxDQUZVO0FBR2xCQyxFQUFBQSxHQUFHLEVBQUUsa0JBSGE7QUFJbEJDLEVBQUFBLEtBQUssRUFBRSxFQUpXO0FBS2xCQyxFQUFBQSxNQUFNLEVBQUUsRUFMVTtBQU1sQkMsRUFBQUEsTUFBTSxFQUFFLFNBTlU7QUFPbEJDLEVBQUFBLE1BQU0sRUFBRSxNQVBVO0FBUWxCO0FBQ0FDLEVBQUFBLGVBQWUsRUFBRSxPQVRDO0FBVWxCQyxFQUFBQSxRQUFRLEVBQUUsTUFWUSxDQVdsQjtBQUNBO0FBQ0E7QUFDQTs7QUFka0IsQ0FBcEI7QUFpQmUsU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUN0QyxzQkFDRTtBQUFTLE1BQUUsRUFBQyxlQUFaO0FBQTRCLGFBQVMsRUFBRWYsNkVBQXZDO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBUSxXQUFLLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrREFBRDtBQUNFLGdCQUFVLEVBQUUsS0FEZDtBQUVFLGVBQVMsRUFBRUEsMkVBRmI7QUFHRSxxQkFBZSxFQUFFLHlCQUFDa0IsT0FBRCxFQUFVQyxLQUFWO0FBQUEsd0NBQ0dELE9BREgsdUJBQ3VCQyxLQUR2QjtBQUFBLE9BSG5CO0FBTUUscUJBQWUsRUFBRSx5QkFBQ0MsY0FBRCxFQUFpQkMsT0FBakIsRUFBMEJDLEtBQTFCO0FBQUEsZUFDZkQsT0FBTyxpQkFDTDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRXJCLHdFQUZiO0FBR0UsaUJBQU8sRUFBRW9CLGNBSFg7QUFJRSxlQUFLLEVBQUVFLEtBSlQsQ0FLRTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZhO0FBQUEsT0FObkI7QUFtQkUscUJBQWUsRUFBRSx5QkFBQ0YsY0FBRCxFQUFpQkksT0FBakIsRUFBMEJGLEtBQTFCO0FBQUEsZUFDZkUsT0FBTyxpQkFDTDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsaUJBQU8sRUFBRUosY0FGWDtBQUdFLGVBQUssRUFBRUUsS0FIVCxDQUlFO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmE7QUFBQSxPQW5CbkI7QUFBQSxnQkFnQ0duQixNQUFNLENBQUNzQixHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JCLDRCQUNFO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFDLE1BRFI7QUFFRSxrQkFBTSxFQUFDLEtBRlQ7QUFHRSxlQUFHLEVBQUVBLEtBQUssQ0FBQ3RCLEdBSGI7QUFJRSxpQkFBSyxFQUFDLHNCQUpSO0FBS0UsdUJBQVcsRUFBQyxHQUxkO0FBTUUsaUJBQUssRUFBQywwRkFOUjtBQU9FLDJCQUFlLEVBQUMsaUJBUGxCO0FBUUUsOEJBQWtCLEVBQUMsb0JBUnJCO0FBU0UsNkJBQWlCLEVBQUMsbUJBVHBCO0FBVUUsNEJBQWdCLEVBQUMsa0JBVm5CO0FBV0UsaUNBQXFCLEVBQUM7QUFYeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFpQkQsT0FsQkE7QUFoQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUREO0tBMUR1QlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdWRpb3Zpc3VhbGVzLmpzeD85YjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQXVkaW92aXN1YWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgVGl0dWxvIGZyb20gXCIuL1RpdHVsb1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcblxuY29uc3QgdmlkZW9zID0gW1xuICB7IHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9YZ3g5cGc5aDlGY1wiIH0sXG4gIHsgc3JjOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2hOeDc4bE9ZUnZnXCIgfSxcbl07XG5cbmNvbnN0IGFycm93U3R5bGVzID0ge1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB6SW5kZXg6IDIsXG4gIHRvcDogXCJjYWxjKDUwJSAtIDE1cHgpXCIsXG4gIHdpZHRoOiAzMCxcbiAgaGVpZ2h0OiAzMCxcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgLy8gY29sb3I6IFwid2hpdGVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgLy8gXCI6aG92ZXJcIjoge1xuICAvLyAgIGNvbG9yOiBcInJlZFwiLFxuICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAvLyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW92aXN1YWxlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImF1ZGlvdmlzdWFsZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW5lZG9yfT5cbiAgICAgIDxUaXR1bG8gdGV4dG89XCJBdWRpb3Zpc3VhbGVzXCIgLz5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FycnVzZWx9XG4gICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnQsIHRvdGFsKSA9PlxuICAgICAgICAgIGBDdXJyZW50IHNsaWRlOiAke2N1cnJlbnR9IC8gVG90YWw6ICR7dG90YWx9YFxuICAgICAgICB9XG4gICAgICAgIHJlbmRlckFycm93UHJldj17KG9uQ2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbCkgPT5cbiAgICAgICAgICBoYXNQcmV2ICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJvdG9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgICAvLyBzdHlsZT17eyAuLi5hcnJvd1N0eWxlcywgbGVmdDogNSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDil4RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhvbkNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWwpID0+XG4gICAgICAgICAgaGFzTmV4dCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgICAvLyBzdHlsZT17eyAuLi5hcnJvd1N0eWxlcywgcmlnaHQ6IDUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg4pa6XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge3ZpZGVvcy5tYXAoKHZpZGVvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEyNzBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ4MFwiXG4gICAgICAgICAgICAgICAgc3JjPXt2aWRlby5zcmN9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cImFsbG93ZnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuPVwibW96YWxsb3dmdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICBtc2FsbG93ZnVsbHNjcmVlbj1cIm1zYWxsb3dmdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICBvYWxsb3dmdWxsc2NyZWVuPVwib2FsbG93ZnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgICAgd2Via2l0YWxsb3dmdWxsc2NyZWVuPVwid2Via2l0YWxsb3dmdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUaXR1bG8iLCJDYXJvdXNlbCIsInZpZGVvcyIsInNyYyIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImN1cnNvciIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiQXVkaW92aXN1YWxlcyIsImNvbnRlbmVkb3IiLCJjYXJydXNlbCIsImN1cnJlbnQiLCJ0b3RhbCIsIm9uQ2xpY2tIYW5kbGVyIiwiaGFzUHJldiIsImxhYmVsIiwiYm90b24iLCJoYXNOZXh0IiwibWFwIiwidmlkZW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Audiovisuales.jsx\n");

/***/ })

});