"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[project_id]",{

/***/ "./pages/projects/[project_id].js":
/*!****************************************!*\
  !*** ./pages/projects/[project_id].js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/Components/BasicComponents/ProjectName */ \"./src/Components/BasicComponents/ProjectName.jsx\");\n\nvar _s = $RefreshSig$();\n // Next.js의 useRouter 훅을 사용하여 동적 라우팅 처리\n\nconst ProjectDetail = (param)=>{\n    let { project, posts } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { project_id } = router.query; // URL에서 project_id를 가져옴\n    if (!project) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"프로젝트를 찾을 수 없습니다.\"\n        }, void 0, false, {\n            fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"프로젝트: \",\n                    project.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: project.description\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"관련 블로그 글\"\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetail;\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdF9pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDLENBQUUsdUNBQXVDO0FBQ047QUFFM0UsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3ZDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLFVBQVUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLLEVBQUUsd0JBQXdCO0lBRTdELElBQUksQ0FBQ0osU0FBUztRQUNaLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7OzBCQUNDLDhEQUFDUCxtRkFBV0E7Ozs7OzBCQUNaLDhEQUFDUTs7b0JBQUc7b0JBQU9OLFFBQVFPLEtBQUs7Ozs7Ozs7MEJBQ3hCLDhEQUFDQzswQkFBR1IsUUFBUVMsV0FBVzs7Ozs7OzBCQUN2Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0w7MEJBQ0VKLE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ1A7OzBDQUNDLDhEQUFDUTswQ0FBSUQsS0FBS0wsS0FBSzs7Ozs7OzBDQUNmLDhEQUFDQzswQ0FBR0ksS0FBS0UsT0FBTzs7Ozs7Ozt1QkFGUkYsS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVEzQjtHQXhCTWhCOztRQUNXRixrREFBU0E7OztLQURwQkU7O0FBNEROLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc29uZ3llL0RvY3VtZW50cy9zY3JpcHRseS9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdF9pZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvc3VwYWJhc2UnOyAvLyBTdXBhYmFzZSDtgbTrnbzsnbTslrjtirgg67aI65+s7Jik6riwXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7ICAvLyBOZXh0Lmpz7J2YIHVzZVJvdXRlciDtm4XsnYQg7IKs7Jqp7ZWY7JesIOuPmeyggSDrnbzsmrDtjIUg7LKY66asXG5pbXBvcnQgUHJvamVjdE5hbWUgZnJvbSAnLi4vLi4vc3JjL0NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzL1Byb2plY3ROYW1lJztcblxuY29uc3QgUHJvamVjdERldGFpbCA9ICh7IHByb2plY3QsIHBvc3RzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdF9pZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBVUkzsl5DshJwgcHJvamVjdF9pZOulvCDqsIDsoLjsmLRcblxuICBpZiAoIXByb2plY3QpIHtcbiAgICByZXR1cm4gPGRpdj7tlITroZzsoJ3tirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2plY3ROYW1lIC8+XG4gICAgICA8aDE+7ZSE66Gc7KCd7Yq4OiB7cHJvamVjdC50aXRsZX08L2gxPlxuICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGgyPuq0gOugqCDruJTroZzqt7gg6riAPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZ2V0U2VydmVyU2lkZVByb3Bz66W8IOydtOyaqe2VmOyXrCDshJzrsoQg7IKs7J2065Oc7JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmLXri4jri6QuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0X2lkIH0gPSBwYXJhbXM7XG5cbiAgLy8gU3VwYWJhc2Xsl5DshJwgcHJvamVjdF9pZOyXkCDtlbTri7ntlZjripQg7ZSE66Gc7KCd7Yq4IOygleuztOulvCDqsIDsoLjsmLXri4jri6QuXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdCwgZXJyb3I6IHByb2plY3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvamVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBwcm9qZWN0X2lkKVxuICAgIC5zaW5nbGUoKTsgIC8vIO2VmOuCmOydmCDqsrDqs7zrp4wg67CY7ZmYXG5cbiAgaWYgKHByb2plY3RFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+2UhOuhnOygne2KuOulvCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwcm9qZWN0RXJyb3IpO1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07ICAvLyDtlITroZzsoJ3tirjqsIAg7JeG7Jy866m0IDQwNCDtjpjsnbTsp4Ag7ZGc7IucXG4gIH1cblxuICAvLyDtlbTri7kg7ZSE66Gc7KCd7Yq47JeQIOq0gOugqOuQnCDruJTroZzqt7gg6riAIOqwgOyguOyYpOq4sFxuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBlcnJvcjogcG9zdHNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncG9zdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgncHJvamVjdF9pZCcsIHByb2plY3RfaWQpO1xuXG4gIGlmIChwb3N0c0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign67iU66Gc6re4IOq4gOydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwb3N0c0Vycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2plY3QsXG4gICAgICBwb3N0czogcG9zdHMgfHwgW10sICAvLyDruJTroZzqt7gg6riA7J20IOyXhuuLpOuptCDruYgg67Cw7Je07J2EIOuwmO2ZmFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2plY3ROYW1lIiwiUHJvamVjdERldGFpbCIsInByb2plY3QiLCJwb3N0cyIsInJvdXRlciIsInByb2plY3RfaWQiLCJxdWVyeSIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJoMiIsIm1hcCIsInBvc3QiLCJoMyIsImNvbnRlbnQiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[project_id].js\n"));

/***/ }),

/***/ "./src/Components/BasicComponents/ProjectName.jsx":
/*!********************************************************!*\
  !*** ./src/Components/BasicComponents/ProjectName.jsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProjectName = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            paddingTop: 10,\n            paddingBottom: 30,\n            paddingLeft: 10,\n            paddingRight: 10,\n            flexDirection: \"column\",\n            justifyContent: \"flex-start\",\n            alignItems: \"flex-start\",\n            gap: 10,\n            display: \"inline-flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                alignSelf: \"stretch\",\n                height: 22,\n                flexDirection: \"column\",\n                justifyContent: \"flex-start\",\n                alignItems: \"center\",\n                gap: 16,\n                display: \"flex\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    alignSelf: \"stretch\",\n                    color: \"black\",\n                    fontSize: 18,\n                    fontFamily: \"Pretendard\",\n                    fontWeight: \"500\",\n                    wordWrap: \"break-word\"\n                },\n                children: \"프로젝트 제목이 들어갑니다.\"\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/ProjectName.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/ProjectName.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/ProjectName.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectName;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectName);\nvar _c;\n$RefreshReg$(_c, \"ProjectName\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvUHJvamVjdE5hbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxjQUFjO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUNDQyxPQUFPO1lBQ0xDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLGVBQWU7WUFDZkMsYUFBYTtZQUNiQyxjQUFjO1lBQ2RDLGVBQWU7WUFDZkMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLEtBQUs7WUFDTEMsU0FBUztRQUNYO2tCQUVBLDRFQUFDWjtZQUNDQyxPQUFPO2dCQUNMWSxXQUFXO2dCQUNYVixRQUFRO2dCQUNSSyxlQUFlO2dCQUNmQyxnQkFBZ0I7Z0JBQ2hCQyxZQUFZO2dCQUNaQyxLQUFLO2dCQUNMQyxTQUFTO1lBQ1g7c0JBRUEsNEVBQUNaO2dCQUNDQyxPQUFPO29CQUNMWSxXQUFXO29CQUNYQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxVQUFVO2dCQUNaOzBCQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7S0EzQ01uQjtBQTZDTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3Nvbmd5ZS9Eb2N1bWVudHMvc2NyaXB0bHkvc3JjL0NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzL1Byb2plY3ROYW1lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2plY3ROYW1lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgIGdhcDogMTAsXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG4gICAgICAgICAgaGVpZ2h0OiAyMixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGdhcDogMTYsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25TZWxmOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlByZXRlbmRhcmRcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIO2UhOuhnOygne2KuCDsoJzrqqnsnbQg65Ok7Ja06rCR64uI64ukLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE5hbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9qZWN0TmFtZSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsImRpc3BsYXkiLCJhbGlnblNlbGYiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ3b3JkV3JhcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/BasicComponents/ProjectName.jsx\n"));

/***/ })

});