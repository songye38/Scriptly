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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MainTab = (param)=>{\n    let { posts, projects } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    // 상태 관리: 기본 탭은 블로그로 설정\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('blog'); // 'blog' 또는 'study'로 상태 관리\n    // 탭 클릭 시 상태 변경 함수\n    const handleTabClick = (tab)=>{\n        setActiveTab(tab);\n    };\n    const handleProjectClick = (projectId)=>{\n        _s1();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        router.push(\"/projects/\".concat(projectId)); // 동적으로 URL로 이동\n    };\n    _s1(handleProjectClick, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    gap: '0px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: '16px',\n                            padding: '10px',\n                            cursor: 'pointer',\n                            fontWeight: activeTab === 'blog' ? '600' : '400',\n                            color: activeTab === 'blog' ? 'black' : '#BFBFBF',\n                            borderBottom: activeTab === 'blog' ? '2px solid black' : 'none'\n                        },\n                        onClick: ()=>handleTabClick('blog'),\n                        children: \"블로그\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: '16px',\n                            padding: '10px',\n                            cursor: 'pointer',\n                            fontWeight: activeTab === 'study' ? '600' : '400',\n                            color: activeTab === 'study' ? 'black' : '#BFBFBF',\n                            borderBottom: activeTab === 'study' ? '2px solid black' : 'none'\n                        },\n                        onClick: ()=>handleTabClick('study'),\n                        children: \"공부\"\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            activeTab === 'blog' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.content\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            activeTab === 'study' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            cursor: 'pointer',\n                            padding: '10px',\n                            border: '1px solid #ccc',\n                            marginBottom: '10px'\n                        },\n                        onClick: ()=>handleProjectClick(project.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/src/Components/BasicComponents/MainTab.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainTab, \"/hs33eknJxLsTMLVgMLT93h7YhI=\");\n_c = MainTab;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainTab);\nvar _c;\n$RefreshReg$(_c, \"MainTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvTWFpblRhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFOzs7SUFDbEMsdUJBQXVCO0lBQ3ZCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxTQUFTLDJCQUEyQjtJQUUvRSxrQkFBa0I7SUFDbEIsTUFBTU8saUJBQWlCLENBQUNDO1FBQ3RCRixhQUFhRTtJQUNmO0lBQ0EsTUFBTUMscUJBQXFCLENBQUNDOztRQUMxQixNQUFNQyxTQUFTVixzREFBU0E7UUFDeEJVLE9BQU9DLElBQUksQ0FBQyxhQUF1QixPQUFWRixhQUFjLGVBQWU7SUFDeEQ7UUFITUQ7O1lBQ1dSLGtEQUFTQTs7O0lBSTFCLHFCQUNFLDhEQUFDWTs7MEJBRUMsOERBQUNBO2dCQUFJQyxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxLQUFLO2dCQUFNOztrQ0FDeEMsOERBQUNIO3dCQUNDQyxPQUFPOzRCQUNMRyxVQUFTOzRCQUNUQyxTQUFTOzRCQUNUQyxRQUFROzRCQUNSQyxZQUFZZixjQUFjLFNBQVMsUUFBUTs0QkFDM0NnQixPQUFPaEIsY0FBYyxTQUFTLFVBQVU7NEJBQ3hDaUIsY0FBY2pCLGNBQWMsU0FBUyxvQkFBb0I7d0JBQzNEO3dCQUNBa0IsU0FBUyxJQUFNaEIsZUFBZTtrQ0FDL0I7Ozs7OztrQ0FHRCw4REFBQ007d0JBQ0NDLE9BQU87NEJBQ0xHLFVBQVM7NEJBQ1RDLFNBQVM7NEJBQ1RDLFFBQVE7NEJBQ1JDLFlBQVlmLGNBQWMsVUFBVSxRQUFROzRCQUM1Q2dCLE9BQU9oQixjQUFjLFVBQVUsVUFBVTs0QkFDekNpQixjQUFjakIsY0FBYyxVQUFVLG9CQUFvQjt3QkFDNUQ7d0JBQ0FrQixTQUFTLElBQU1oQixlQUFlO2tDQUMvQjs7Ozs7Ozs7Ozs7O1lBTUZGLGNBQWMsd0JBQ2IsOERBQUNROzBCQUNFVixNQUFNcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDWjs7MENBQ0MsOERBQUNhOzBDQUFJRCxLQUFLRSxLQUFLOzs7Ozs7MENBQ2YsOERBQUNDOzBDQUFHSCxLQUFLSSxPQUFPOzs7Ozs7O3VCQUZSSixLQUFLSyxFQUFFOzs7Ozs7Ozs7O1lBUXRCekIsY0FBYyx5QkFDYiw4REFBQ1E7MEJBQ0VULFNBQVNvQixHQUFHLENBQUMsQ0FBQ08sd0JBQ2IsOERBQUNsQjt3QkFDREMsT0FBTzs0QkFDTEssUUFBUTs0QkFDUkQsU0FBUzs0QkFDVGMsUUFBUTs0QkFDUkMsY0FBYzt3QkFDaEI7d0JBQ0FWLFNBQVMsSUFBTWQsbUJBQW1Cc0IsUUFBUUQsRUFBRTs7MENBRTFDLDhEQUFDSjswQ0FBSUssUUFBUUcsSUFBSTs7Ozs7OzBDQUNqQiw4REFBQ047MENBQUdHLFFBQVFJLFdBQVc7Ozs7Ozs7dUJBVmZKLFFBQVFELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmhDO0dBN0VNNUI7S0FBQUE7QUErRU4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25neWUvRG9jdW1lbnRzL3NjcmlwdGx5L3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9NYWluVGFiLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE1haW5UYWIgPSAoeyBwb3N0cywgcHJvamVjdHMgfSkgPT4ge1xuICAvLyDsg4Htg5wg6rSA66asOiDquLDrs7gg7YOt7J2AIOu4lOuhnOq3uOuhnCDshKTsoJVcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdibG9nJyk7IC8vICdibG9nJyDrmJDripQgJ3N0dWR5J+uhnCDsg4Htg5wg6rSA66asXG5cbiAgLy8g7YOtIO2BtOumrSDsi5wg7IOB7YOcIOuzgOqyvSDtlajsiJhcbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAodGFiKSA9PiB7XG4gICAgc2V0QWN0aXZlVGFiKHRhYik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByb3V0ZXIucHVzaChgL3Byb2plY3RzLyR7cHJvamVjdElkfWApOyAvLyDrj5nsoIHsnLzroZwgVVJM66GcIOydtOuPmVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiDtg60g66mU64m0ICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzBweCcgfX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6JzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBhY3RpdmVUYWIgPT09ICdibG9nJyA/ICc2MDAnIDogJzQwMCcsXG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlVGFiID09PSAnYmxvZycgPyAnYmxhY2snIDogJyNCRkJGQkYnLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBhY3RpdmVUYWIgPT09ICdibG9nJyA/ICcycHggc29saWQgYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soJ2Jsb2cnKX1cbiAgICAgICAgPlxuICAgICAgICAgIOu4lOuhnOq3uFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTonMTZweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGFjdGl2ZVRhYiA9PT0gJ3N0dWR5JyA/ICc2MDAnIDogJzQwMCcsXG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlVGFiID09PSAnc3R1ZHknID8gJ2JsYWNrJyA6ICcjQkZCRkJGJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYWN0aXZlVGFiID09PSAnc3R1ZHknID8gJzJweCBzb2xpZCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWJDbGljaygnc3R1ZHknKX1cbiAgICAgICAgPlxuICAgICAgICAgIOqzteu2gFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyog7YOtIOuCtOyaqSAqL31cbiAgICAgIHthY3RpdmVUYWIgPT09ICdibG9nJyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7YWN0aXZlVGFiID09PSAnc3R1ZHknICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdENsaWNrKHByb2plY3QuaWQpfSAvLyDtgbTrpq0g7IucIO2UhOuhnOygne2KuCDsg4HshLgg7Y6Y7J207KeA66GcIOydtOuPmVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzPntwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5UYWI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTWFpblRhYiIsInBvc3RzIiwicHJvamVjdHMiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJoYW5kbGVUYWJDbGljayIsInRhYiIsImhhbmRsZVByb2plY3RDbGljayIsInByb2plY3RJZCIsInJvdXRlciIsInB1c2giLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJnYXAiLCJmb250U2l6ZSIsInBhZGRpbmciLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJib3JkZXJCb3R0b20iLCJvbkNsaWNrIiwibWFwIiwicG9zdCIsImgzIiwidGl0bGUiLCJwIiwiY29udGVudCIsImlkIiwicHJvamVjdCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/BasicComponents/MainTab.jsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyIvVXNlcnMvc29uZ3llL0RvY3VtZW50cy9zY3JpcHRseS9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});