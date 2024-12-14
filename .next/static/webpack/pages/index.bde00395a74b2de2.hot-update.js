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

/***/ "./src/Components/BasicComponents/MainTab.jsx":
/*!****************************************************!*\
  !*** ./src/Components/BasicComponents/MainTab.jsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MainTab = (param)=>{\n    let { posts, projects } = param;\n    _s();\n    // 상태 관리: 기본 탭은 블로그로 설정\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('blog'); // 'blog' 또는 'study'로 상태 관리\n    // 탭 클릭 시 상태 변경 함수\n    const handleTabClick = (tab)=>{\n        setActiveTab(tab);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleProjectClick = (projectId)=>{\n        router.push(\"/projects/\".concat(projectId)); // 클릭 시 해당 프로젝트 페이지로 이동\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    gap: '0px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: '16px',\n                            padding: '10px',\n                            cursor: 'pointer',\n                            fontWeight: activeTab === 'blog' ? '600' : '400',\n                            color: activeTab === 'blog' ? 'black' : '#BFBFBF',\n                            borderBottom: activeTab === 'blog' ? '2px solid black' : 'none'\n                        },\n                        onClick: ()=>handleTabClick('blog'),\n                        children: \"블로그\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: '16px',\n                            padding: '10px',\n                            cursor: 'pointer',\n                            fontWeight: activeTab === 'study' ? '600' : '400',\n                            color: activeTab === 'study' ? 'black' : '#BFBFBF',\n                            borderBottom: activeTab === 'study' ? '2px solid black' : 'none'\n                        },\n                        onClick: ()=>handleTabClick('study'),\n                        children: \"공부\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            activeTab === 'blog' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            activeTab === 'study' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            cursor: 'pointer',\n                            padding: '10px',\n                            border: '1px solid #ccc',\n                            marginBottom: '10px'\n                        },\n                        onClick: ()=>handleProjectClick(project.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainTab, \"vpfRi8CsoCvZm+bDVG23DeU9c5Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainTab;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainTab);\nvar _c;\n$RefreshReg$(_c, \"MainTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvTWFpblRhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFOztJQUNsQyx1QkFBdUI7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLFNBQVMsMkJBQTJCO0lBQy9FLGtCQUFrQjtJQUNsQixNQUFNTyxpQkFBaUIsQ0FBQ0M7UUFDdEJGLGFBQWFFO0lBQ2Y7SUFDQSxNQUFNQyxTQUFTUixzREFBU0E7SUFFeEIsTUFBTVMscUJBQXFCLENBQUNDO1FBQzFCRixPQUFPRyxJQUFJLENBQUMsYUFBdUIsT0FBVkQsYUFBYyx1QkFBdUI7SUFDaEU7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUVDLDhEQUFDQTtnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsS0FBSztnQkFBTTs7a0NBQ3hDLDhEQUFDSDt3QkFDQ0MsT0FBTzs0QkFDTEcsVUFBUzs0QkFDVEMsU0FBUzs0QkFDVEMsUUFBUTs0QkFDUkMsWUFBWWYsY0FBYyxTQUFTLFFBQVE7NEJBQzNDZ0IsT0FBT2hCLGNBQWMsU0FBUyxVQUFVOzRCQUN4Q2lCLGNBQWNqQixjQUFjLFNBQVMsb0JBQW9CO3dCQUMzRDt3QkFDQWtCLFNBQVMsSUFBTWhCLGVBQWU7a0NBQy9COzs7Ozs7a0NBR0QsOERBQUNNO3dCQUNDQyxPQUFPOzRCQUNMRyxVQUFTOzRCQUNUQyxTQUFTOzRCQUNUQyxRQUFROzRCQUNSQyxZQUFZZixjQUFjLFVBQVUsUUFBUTs0QkFDNUNnQixPQUFPaEIsY0FBYyxVQUFVLFVBQVU7NEJBQ3pDaUIsY0FBY2pCLGNBQWMsVUFBVSxvQkFBb0I7d0JBQzVEO3dCQUNBa0IsU0FBUyxJQUFNaEIsZUFBZTtrQ0FDL0I7Ozs7Ozs7Ozs7OztZQU1GRixjQUFjLHdCQUNiLDhEQUFDUTswQkFDRVYsTUFBTXFCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ1o7OzBDQUNDLDhEQUFDYTswQ0FBSUQsS0FBS0UsS0FBSzs7Ozs7OzBDQUNmLDhEQUFDQzswQ0FBR0gsS0FBS0ksT0FBTzs7Ozs7Ozt1QkFGUkosS0FBS0ssRUFBRTs7Ozs7Ozs7OztZQVF0QnpCLGNBQWMseUJBQ2IsOERBQUNROzBCQUNFVCxTQUFTb0IsR0FBRyxDQUFDLENBQUNPLHdCQUNiLDhEQUFDbEI7d0JBQ0RDLE9BQU87NEJBQ0xLLFFBQVE7NEJBQ1JELFNBQVM7NEJBQ1RjLFFBQVE7NEJBQ1JDLGNBQWM7d0JBQ2hCO3dCQUNBVixTQUFTLElBQU1iLG1CQUFtQnFCLFFBQVFELEVBQUU7OzBDQUUxQyw4REFBQ0o7MENBQUlLLFFBQVFHLElBQUk7Ozs7OzswQ0FDakIsOERBQUNOOzBDQUFHRyxRQUFRSSxXQUFXOzs7Ozs7O3VCQVZmSixRQUFRRCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJoQztHQTdFTTVCOztRQU9XRCxrREFBU0E7OztLQVBwQkM7QUErRU4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25neWUvRG9jdW1lbnRzL3NjcmlwdGx5L3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9NYWluVGFiLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1haW5UYWIgPSAoeyBwb3N0cywgcHJvamVjdHMgfSkgPT4ge1xuICAvLyDsg4Htg5wg6rSA66asOiDquLDrs7gg7YOt7J2AIOu4lOuhnOq3uOuhnCDshKTsoJVcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdibG9nJyk7IC8vICdibG9nJyDrmJDripQgJ3N0dWR5J+uhnCDsg4Htg5wg6rSA66asXG4gIC8vIO2DrSDtgbTrpq0g7IucIOyDge2DnCDrs4Dqsr0g7ZWo7IiYXG4gIGNvbnN0IGhhbmRsZVRhYkNsaWNrID0gKHRhYikgPT4ge1xuICAgIHNldEFjdGl2ZVRhYih0YWIpO1xuICB9O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVQcm9qZWN0Q2xpY2sgPSAocHJvamVjdElkKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gKTsgLy8g7YG066atIOyLnCDtlbTri7kg7ZSE66Gc7KCd7Yq4IO2OmOydtOyngOuhnCDsnbTrj5lcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Lyog7YOtIOuplOuJtCAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcwcHgnIH19PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOicxNnB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgZm9udFdlaWdodDogYWN0aXZlVGFiID09PSAnYmxvZycgPyAnNjAwJyA6ICc0MDAnLFxuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVRhYiA9PT0gJ2Jsb2cnID8gJ2JsYWNrJyA6ICcjQkZCRkJGJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYWN0aXZlVGFiID09PSAnYmxvZycgPyAnMnB4IHNvbGlkIGJsYWNrJyA6ICdub25lJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKCdibG9nJyl9XG4gICAgICAgID5cbiAgICAgICAgICDruJTroZzqt7hcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6JzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBhY3RpdmVUYWIgPT09ICdzdHVkeScgPyAnNjAwJyA6ICc0MDAnLFxuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVRhYiA9PT0gJ3N0dWR5JyA/ICdibGFjaycgOiAnI0JGQkZCRicsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206IGFjdGl2ZVRhYiA9PT0gJ3N0dWR5JyA/ICcycHggc29saWQgYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soJ3N0dWR5Jyl9XG4gICAgICAgID5cbiAgICAgICAgICDqs7XrtoBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIO2DrSDrgrTsmqkgKi99XG4gICAgICB7YWN0aXZlVGFiID09PSAnYmxvZycgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2FjdGl2ZVRhYiA9PT0gJ3N0dWR5JyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDbGljayhwcm9qZWN0LmlkKX0gLy8g7YG066atIOyLnCDtlITroZzsoJ3tirgg7IOB7IS4IO2OmOydtOyngOuhnCDsnbTrj5lcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMz57cHJvamVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluVGFiO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1haW5UYWIiLCJwb3N0cyIsInByb2plY3RzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiaGFuZGxlVGFiQ2xpY2siLCJ0YWIiLCJyb3V0ZXIiLCJoYW5kbGVQcm9qZWN0Q2xpY2siLCJwcm9qZWN0SWQiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FwIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiY3Vyc29yIiwiZm9udFdlaWdodCIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwib25DbGljayIsIm1hcCIsInBvc3QiLCJoMyIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJpZCIsInByb2plY3QiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/BasicComponents/MainTab.jsx\n"));

/***/ })

});