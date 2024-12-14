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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/Components/BasicComponents/ProjectName */ \"./src/Components/BasicComponents/ProjectName.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_ProjectTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Components/BasicComponents/ProjectTab */ \"./src/Components/BasicComponents/ProjectTab.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/BasicComponents/Logo */ \"./src/Components/BasicComponents/Logo.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_MyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Components/BasicComponents/MyInput */ \"./src/Components/BasicComponents/MyInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_Components_BasicComponents_Toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Components/BasicComponents/Toggle */ \"./src/Components/BasicComponents/Toggle.jsx\");\n\nvar _s = $RefreshSig$();\n // Next.js의 useRouter 훅을 사용하여 동적 라우팅 처리\n\n\n\n\n\n\nconst ProjectDetail = (param)=>{\n    let { project, posts } = param;\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { project_id } = router.query; // URL에서 project_id를 가져옴\n    if (!project) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"프로젝트를 찾을 수 없습니다.\"\n        }, void 0, false, {\n            fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n            lineNumber: 24,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            flexDirection: 'row',\n            width: '100%',\n            height: '100vh',\n            alignItems: 'flex-start',\n            gap: '20px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '20%',\n                    height: '100%',\n                    display: 'flex',\n                    flexDirection: 'row',\n                    borderRight: \"1px solid #ccc\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_ProjectName__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: project.name\n                }, void 0, false, {\n                    fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    width: '80%'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex',\n                            flexDirection: 'row',\n                            justifyContent: 'space-between',\n                            marginBottom: '52px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_ProjectTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex',\n                            flexDirection: 'column'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_MyInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                value: inputValue,\n                                onChange: handleInputChange,\n                                placeholder: \"나만의 Input\"\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: 'flex',\n                                    flexDirection: 'row',\n                                    gap: '2px',\n                                    alignItems: 'center'\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"대화모드\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_Toggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/pages/projects/[project_id].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDetail, \"8KMAhB7dq+VJbPd0nwgdqPUrPCk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetail;\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdF9pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDLENBQUUsdUNBQXVDO0FBQ047QUFDRjtBQUNaO0FBQ007QUFDbEM7QUFDZ0M7QUFHakUsTUFBTU8sZ0JBQWdCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7O0lBR3JDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDdkJGLGNBQWNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNoQztJQUVGLE1BQU1DLFNBQVNoQixzREFBU0E7SUFDeEIsTUFBTSxFQUFFaUIsVUFBVSxFQUFFLEdBQUdELE9BQU9FLEtBQUssRUFBRSx3QkFBd0I7SUFFN0QsSUFBSSxDQUFDVixTQUFTO1FBQ1oscUJBQU8sOERBQUNXO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtRQUFJQyxPQUFTO1lBQUNDLFNBQVE7WUFBT0MsZUFBYztZQUFNQyxPQUFNO1lBQU9DLFFBQVM7WUFBUUMsWUFBVztZQUFhQyxLQUFJO1FBQU07OzBCQUdoSCw4REFBQ1A7Z0JBQUlDLE9BQU87b0JBQUNHLE9BQVE7b0JBQU1DLFFBQVM7b0JBQVFILFNBQVE7b0JBQU9DLGVBQWM7b0JBQU1LLGFBQWE7Z0JBQWlCOzBCQUMzRyw0RUFBQzFCLG1GQUFXQTtvQkFBQzJCLE9BQVNwQixRQUFRcUIsSUFBSTs7Ozs7Ozs7Ozs7MEJBSXBDLDhEQUFDVjtnQkFBSUMsT0FBTztvQkFBQ0MsU0FBUTtvQkFBT0MsZUFBYztvQkFBU0MsT0FBTTtnQkFBSzs7a0NBRTVELDhEQUFDSjt3QkFBSUMsT0FBTzs0QkFBQ0MsU0FBUTs0QkFBT0MsZUFBYzs0QkFBTVEsZ0JBQWU7NEJBQWdCQyxjQUFhO3dCQUFNOzswQ0FDOUYsOERBQUM3QixrRkFBVUE7Ozs7OzBDQUNYLDhEQUFDQyw0RUFBSUE7Ozs7Ozs7Ozs7O2tDQU9ULDhEQUFDZ0I7d0JBQUlDLE9BQU87NEJBQUNDLFNBQVE7NEJBQU9DLGVBQWM7d0JBQVE7OzBDQUM5Qyw4REFBQ2xCLCtFQUFPQTtnQ0FDSlcsT0FBT0w7Z0NBQ1BzQixVQUFVcEI7Z0NBQ1ZxQixhQUFZOzs7Ozs7MENBRWhCLDhEQUFDZDtnQ0FBSUMsT0FBTztvQ0FBQ0MsU0FBUTtvQ0FBT0MsZUFBYztvQ0FBTUksS0FBSTtvQ0FBTUQsWUFBVztnQ0FBUTs7a0RBQ3pFLDhEQUFDTjtrREFBSTs7Ozs7O2tEQUNMLDhEQUFDYiw4RUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJ2QjtHQXJFTUM7O1FBU1dQLGtEQUFTQTs7O0tBVHBCTzs7QUF5R04saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25neWUvRG9jdW1lbnRzL3NjcmlwdGx5L3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0X2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uL3NyYy91dGlscy9zdXBhYmFzZSc7IC8vIFN1cGFiYXNlIO2BtOudvOydtOyWuO2KuCDrtojrn6zsmKTquLBcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJzsgIC8vIE5leHQuanPsnZggdXNlUm91dGVyIO2bheydhCDsgqzsmqntlZjsl6wg64+Z7KCBIOudvOyasO2MhSDsspjrpqxcbmltcG9ydCBQcm9qZWN0TmFtZSBmcm9tICcuLi8uLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvUHJvamVjdE5hbWUnO1xuaW1wb3J0IFByb2plY3RUYWIgZnJvbSAnLi4vLi4vc3JjL0NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzL1Byb2plY3RUYWInO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vc3JjL0NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzL0xvZ28nO1xuaW1wb3J0IE15SW5wdXQgZnJvbSAnLi4vLi4vc3JjL0NvbXBvbmVudHMvQmFzaWNDb21wb25lbnRzL015SW5wdXQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uLy4uL3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9Ub2dnbGUnO1xuXG5cbmNvbnN0IFByb2plY3REZXRhaWwgPSAoeyBwcm9qZWN0LCBwb3N0cyB9KSA9PiB7XG5cblxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvamVjdF9pZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBVUkzsl5DshJwgcHJvamVjdF9pZOulvCDqsIDsoLjsmLRcblxuICBpZiAoIXByb2plY3QpIHtcbiAgICByZXR1cm4gPGRpdj7tlITroZzsoJ3tirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlID0ge3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidyb3cnLHdpZHRoOicxMDAlJyxoZWlnaHQgOiAnMTAwdmgnLGFsaWduSXRlbXM6J2ZsZXgtc3RhcnQnLGdhcDonMjBweCd9fT5cbiAgICBcbiAgICAgIHsvKiDtlITroZzsoJ3tirgg7KCc66qp6rO8IOuFuO2KuCDshLnshZggKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGggOiAnMjAlJyxoZWlnaHQgOiAnMTAwJScsIGRpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J3JvdycsYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICNjY2NcIix9fT5cbiAgICAgICAgPFByb2plY3ROYW1lIHRpdGxlID0ge3Byb2plY3QubmFtZX0gLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgey8qIOyYpOuluOyqveydmCDrjIDtmZQg7IS57IWYICovfVxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsd2lkdGg6JzgwJSd9fT5cbiAgICAgICAgey8qIOyDgeuLqOydmCDtl6TrjZQg67aA67aEICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjoncm93JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsbWFyZ2luQm90dG9tOic1MnB4J319PlxuICAgICAgICAgICAgPFByb2plY3RUYWIgLz5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDrjIDtmZQg7IS57IWYICovfVxuXG5cbiAgICAgICAgey8qIOyeheugpeywvSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cbiAgICAgICAgICAgIDxNeUlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64KY66eM7J2YIElucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjoncm93JyxnYXA6JzJweCcsYWxpZ25JdGVtczonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxkaXY+64yA7ZmU66qo65OcPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgey8qIDxoMT7tlITroZzsoJ3tirg6IHtwcm9qZWN0LnRpdGxlfTwvaDE+XG4gICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8aDI+6rSA66CoIOu4lOuhnOq3uCDquIA8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZ2V0U2VydmVyU2lkZVByb3Bz66W8IOydtOyaqe2VmOyXrCDshJzrsoQg7IKs7J2065Oc7JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmLXri4jri6QuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0X2lkIH0gPSBwYXJhbXM7XG5cbiAgLy8gU3VwYWJhc2Xsl5DshJwgcHJvamVjdF9pZOyXkCDtlbTri7ntlZjripQg7ZSE66Gc7KCd7Yq4IOygleuztOulvCDqsIDsoLjsmLXri4jri6QuXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdCwgZXJyb3I6IHByb2plY3RFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvamVjdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgnaWQnLCBwcm9qZWN0X2lkKVxuICAgIC5zaW5nbGUoKTsgIC8vIO2VmOuCmOydmCDqsrDqs7zrp4wg67CY7ZmYXG5cbiAgaWYgKHByb2plY3RFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+2UhOuhnOygne2KuOulvCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwcm9qZWN0RXJyb3IpO1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07ICAvLyDtlITroZzsoJ3tirjqsIAg7JeG7Jy866m0IDQwNCDtjpjsnbTsp4Ag7ZGc7IucXG4gIH1cblxuICAvLyDtlbTri7kg7ZSE66Gc7KCd7Yq47JeQIOq0gOugqOuQnCDruJTroZzqt7gg6riAIOqwgOyguOyYpOq4sFxuICBjb25zdCB7IGRhdGE6IHBvc3RzLCBlcnJvcjogcG9zdHNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncG9zdHMnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5lcSgncHJvamVjdF9pZCcsIHByb2plY3RfaWQpO1xuXG4gIGlmIChwb3N0c0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign67iU66Gc6re4IOq4gOydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBwb3N0c0Vycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2plY3QsXG4gICAgICBwb3N0czogcG9zdHMgfHwgW10sICAvLyDruJTroZzqt7gg6riA7J20IOyXhuuLpOuptCDruYgg67Cw7Je07J2EIOuwmO2ZmFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2plY3ROYW1lIiwiUHJvamVjdFRhYiIsIkxvZ28iLCJNeUlucHV0IiwidXNlU3RhdGUiLCJUb2dnbGUiLCJQcm9qZWN0RGV0YWlsIiwicHJvamVjdCIsInBvc3RzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvdXRlciIsInByb2plY3RfaWQiLCJxdWVyeSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJnYXAiLCJib3JkZXJSaWdodCIsInRpdGxlIiwibmFtZSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[project_id].js\n"));

/***/ })

});