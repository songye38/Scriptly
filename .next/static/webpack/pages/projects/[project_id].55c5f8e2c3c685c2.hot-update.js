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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/Components/BasicComponents/ProjectName */ \"./src/Components/BasicComponents/ProjectName.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_ProjectTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Components/BasicComponents/ProjectTab */ \"./src/Components/BasicComponents/ProjectTab.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/BasicComponents/Logo */ \"./src/Components/BasicComponents/Logo.jsx\");\n\nvar _s = $RefreshSig$();\n // Next.js의 useRouter 훅을 사용하여 동적 라우팅 처리\n\n\n\nconst ProjectDetail = (param)=>{\n    let { project, posts } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { project_id } = router.query; // URL에서 project_id를 가져옴\n    if (!project) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"프로젝트를 찾을 수 없습니다.\"\n        }, void 0, false, {\n            fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            flexDirection: 'row'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: project.name\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    height: '100%',\n                    transform: 'rotate(90deg)',\n                    transformOrigin: '0 0',\n                    border: '0.20px gray solid'\n                }\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex-line',\n                    flexDirection: 'row',\n                    justifyContent: 'space-between',\n                    marginBottom: '52px',\n                    width: '100%'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_ProjectTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetail;\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdF9pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDd0MsQ0FBRSx1Q0FBdUM7QUFDTjtBQUNGO0FBQ1o7QUFHN0QsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3ZDLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLFVBQVUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLLEVBQUUsd0JBQXdCO0lBRTdELElBQUksQ0FBQ0osU0FBUztRQUNaLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsT0FBUztZQUFDQyxTQUFRO1lBQU9DLGVBQWM7UUFBTTs7MEJBR2hELDhEQUFDWixtRkFBV0E7Z0JBQUNhLE9BQVNULFFBQVFVLElBQUk7Ozs7OzswQkFDbEMsOERBQUNMO2dCQUFJQyxPQUFPO29CQUFDSyxPQUFPO29CQUFRQyxRQUFRO29CQUFRQyxXQUFXO29CQUFpQkMsaUJBQWlCO29CQUFPQyxRQUFRO2dCQUFtQjs7Ozs7OzBCQUkzSCw4REFBQ1Y7Z0JBQUlDLE9BQU87b0JBQUNDLFNBQVE7b0JBQVlDLGVBQWM7b0JBQU1RLGdCQUFlO29CQUFnQkMsY0FBYTtvQkFBT04sT0FBTTtnQkFBTTs7a0NBQ2xILDhEQUFDZCxrRkFBVUE7Ozs7O2tDQUNYLDhEQUFDQyw0RUFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJiO0dBeENNQzs7UUFDV0osa0RBQVNBOzs7S0FEcEJJOztBQTRFTixpRUFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3Nvbmd5ZS9Eb2N1bWVudHMvc2NyaXB0bHkvcGFnZXMvcHJvamVjdHMvW3Byb2plY3RfaWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxzL3N1cGFiYXNlJzsgLy8gU3VwYWJhc2Ug7YG065287J207Ja47Yq4IOu2iOufrOyYpOq4sFxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyAgLy8gTmV4dC5qc+ydmCB1c2VSb3V0ZXIg7ZuF7J2EIOyCrOyaqe2VmOyXrCDrj5nsoIEg65287Jqw7YyFIOyymOumrFxuaW1wb3J0IFByb2plY3ROYW1lIGZyb20gJy4uLy4uL3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9Qcm9qZWN0TmFtZSc7XG5pbXBvcnQgUHJvamVjdFRhYiBmcm9tICcuLi8uLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvUHJvamVjdFRhYic7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvTG9nbyc7XG5cblxuY29uc3QgUHJvamVjdERldGFpbCA9ICh7IHByb2plY3QsIHBvc3RzIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdF9pZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBVUkzsl5DshJwgcHJvamVjdF9pZOulvCDqsIDsoLjsmLRcblxuICBpZiAoIXByb2plY3QpIHtcbiAgICByZXR1cm4gPGRpdj7tlITroZzsoJ3tirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlID0ge3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidyb3cnLH19PlxuICAgIFxuICAgICAgey8qIO2UhOuhnOygne2KuCDsoJzrqqnqs7wg64W47Yq4IOyEueyFmCAqL31cbiAgICAgIDxQcm9qZWN0TmFtZSB0aXRsZSA9IHtwcm9qZWN0Lm5hbWV9IC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknLCB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLCBib3JkZXI6ICcwLjIwcHggZ3JheSBzb2xpZCd9fT48L2Rpdj5cbiAgICAgIFxuICAgICAgey8qIOyYpOuluOyqveydmCDrjIDtmZQg7IS57IWYICovfVxuICAgICAgey8qIOyDgeuLqOydmCDtl6TrjZQg67aA67aEICovfVxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgtbGluZScsZmxleERpcmVjdGlvbjoncm93JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsbWFyZ2luQm90dG9tOic1MnB4Jyx3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgPFByb2plY3RUYWIgLz5cbiAgICAgICAgPExvZ28gLz5cblxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgey8qIDxoMT7tlITroZzsoJ3tirg6IHtwcm9qZWN0LnRpdGxlfTwvaDE+XG4gICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8aDI+6rSA66CoIOu4lOuhnOq3uCDquIA8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZ2V0U2VydmVyU2lkZVByb3Bz66W8IOydtOyaqe2VmOyXrCDshJzrsoQg7IKs7J2065Oc7JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmLXri4jri6QuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0X2lkIH0gPSBwYXJhbXM7XG5cbiAgLy8gU3VwYWJhc2Xsl5DshJwgcHJvamVjdF9pZOyXkCDtlbTri7ntlZjripQg7ZSE66Gc7KCd7Yq4IOygleuztOulvCDqsIDsoLjsmLXri4jri6QuXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdCwgZXJyb3I6IHByb2plY3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvamVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBwcm9qZWN0X2lkKVxuICAgIC5zaW5nbGUoKTsgIC8vIO2VmOuCmOydmCDqsrDqs7zrp4wg67CY7ZmYXG5cbiAgaWYgKHByb2plY3RFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+2UhOuhnOygne2KuOulvCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwcm9qZWN0RXJyb3IpO1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07ICAvLyDtlITroZzsoJ3tirjqsIAg7JeG7Jy866m0IDQwNCDtjpjsnbTsp4Ag7ZGc7IucXG4gIH1cblxuICAvLyDtlbTri7kg7ZSE66Gc7KCd7Yq47JeQIOq0gOugqOuQnCDruJTroZzqt7gg6riAIOqwgOyguOyYpOq4sFxuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBlcnJvcjogcG9zdHNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncG9zdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgncHJvamVjdF9pZCcsIHByb2plY3RfaWQpO1xuXG4gIGlmIChwb3N0c0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign67iU66Gc6re4IOq4gOydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwb3N0c0Vycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2plY3QsXG4gICAgICBwb3N0czogcG9zdHMgfHwgW10sICAvLyDruJTroZzqt7gg6riA7J20IOyXhuuLpOuptCDruYgg67Cw7Je07J2EIOuwmO2ZmFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2plY3ROYW1lIiwiUHJvamVjdFRhYiIsIkxvZ28iLCJQcm9qZWN0RGV0YWlsIiwicHJvamVjdCIsInBvc3RzIiwicm91dGVyIiwicHJvamVjdF9pZCIsInF1ZXJ5IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRpdGxlIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwiYm9yZGVyIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[project_id].js\n"));

/***/ })

});