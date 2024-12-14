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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_utils_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils/supabase */ \"./src/utils/supabase.js\");\n/* harmony import */ var _src_Components_ComplexComponents_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/ComplexComponents/Header */ \"./src/Components/ComplexComponents/Header.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_MainTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/BasicComponents/MainTab */ \"./src/Components/BasicComponents/MainTab.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_InputModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/BasicComponents/InputModal */ \"./src/Components/BasicComponents/InputModal.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n // supabase 클라이언트 불러오기\n\n\n\n\n\nconst Home = (param)=>{\n    let { posts, projects } = param;\n    _s();\n    const [projectName, setProjectName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''); //InputModal에서 받은 프로젝트 이름\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    //supabase에 프로젝트 이름을 저장하는 함수\n    const createProject = async (name)=>{\n        try {\n            // 프로젝트 삽입\n            const { data, error } = await _src_utils_supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.from('projects').insert([\n                {\n                    name,\n                    description: '새 프로젝트'\n                }\n            ]);\n            if (error) {\n                console.error('Error code:', error.code); // 오류 코드 출력\n                console.error('Error details:', error.details); // 오류 세부 사항 출력\n                throw new Error(error.message); // 에러 발생 시 메시지 출력\n            }\n            console.log('프로젝트 생성 성공:', data);\n            // 새로 삽입된 데이터가 배열의 첫 번째 항목에 위치하므로 첫 번째 항목을 사용\n            const project = data[0]; // 배열의 첫 번째 항목만 선택\n            // 동적으로 해당 프로젝트의 페이지로 이동\n            router.push(\"/projects/\".concat(project.id));\n        } catch (error) {\n            console.error('프로젝트 생성 실패:', error.message);\n        }\n    };\n    // InputModal에서 프로젝트명을 받은 후 호출\n    const handleCreateProject = (name)=>{\n        setProjectName(name); // 프로젝트명 상태 업데이트\n        createProject(name); // 데이터베이스에 프로젝트 저장\n    };\n    //화면 그리는 부분\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_ComplexComponents_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_InputModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setProjectName: handleCreateProject\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_MainTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        posts: posts,\n                        projects: projects\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"DwDKbxSqL0wT3WUqQJUptRKGLV8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRCxDQUFDLHNCQUFzQjtBQUNSO0FBQ0E7QUFDTTtBQUNyQztBQUNPO0FBRXhDLE1BQU1NLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUsseUJBQXlCO0lBQzdFLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUN4Qiw0QkFBNEI7SUFFNUIsTUFBTU8sZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUk7WUFDRixVQUFVO1lBQ1YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1mLHlEQUFRQSxDQUNuQ2dCLElBQUksQ0FBQyxZQUNMQyxNQUFNLENBQUM7Z0JBQUM7b0JBQUVKO29CQUFNSyxhQUFhO2dCQUFTO2FBQUU7WUFFM0MsSUFBSUgsT0FBTztnQkFDVEksUUFBUUosS0FBSyxDQUFDLGVBQWVBLE1BQU1LLElBQUksR0FBTSxXQUFXO2dCQUN4REQsUUFBUUosS0FBSyxDQUFDLGtCQUFrQkEsTUFBTU0sT0FBTyxHQUFHLGNBQWM7Z0JBQzlELE1BQU0sSUFBSUMsTUFBTVAsTUFBTVEsT0FBTyxHQUFJLGlCQUFpQjtZQUNwRDtZQUVBSixRQUFRSyxHQUFHLENBQUMsZUFBZVY7WUFFM0IsNkNBQTZDO1lBQzdDLE1BQU1XLFVBQVVYLElBQUksQ0FBQyxFQUFFLEVBQUcsa0JBQWtCO1lBRTVDLHdCQUF3QjtZQUN4QkgsT0FBT2UsSUFBSSxDQUFDLGFBQXdCLE9BQVhELFFBQVFFLEVBQUU7UUFDckMsRUFBRSxPQUFPWixPQUFPO1lBQ2RJLFFBQVFKLEtBQUssQ0FBQyxlQUFlQSxNQUFNUSxPQUFPO1FBQzVDO0lBQ0Y7SUFJQSw4QkFBOEI7SUFDOUIsTUFBTUssc0JBQXNCLENBQUNmO1FBQzNCSCxlQUFlRyxPQUFPLGdCQUFnQjtRQUN0Q0QsY0FBY0MsT0FBUyxrQkFBa0I7SUFDM0M7SUFFQSxXQUFXO0lBQ1gscUJBQ0UsOERBQUNnQjs7MEJBQ0MsOERBQUM1QixnRkFBTUE7Ozs7OzBCQUNQLDhEQUFDNEI7O2tDQUNDLDhEQUFDMUIsa0ZBQVVBO3dCQUFDTyxnQkFBZ0JrQjs7Ozs7O2tDQUM1Qiw4REFBQzFCLCtFQUFPQTt3QkFBQ0ssT0FBT0E7d0JBQU9DLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekM7R0FoRE1GOztRQUVXRCxrREFBU0E7OztLQUZwQkM7O0FBZ0ZOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc29uZ3llL0RvY3VtZW50cy9zY3JpcHRseS9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL3NyYy91dGlscy9zdXBhYmFzZSc7IC8vIHN1cGFiYXNlIO2BtOudvOydtOyWuO2KuCDrtojrn6zsmKTquLBcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL0NvbXBvbmVudHMvQ29tcGxleENvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBNYWluVGFiIGZyb20gJy4uL3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9NYWluVGFiJztcbmltcG9ydCBJbnB1dE1vZGFsIGZyb20gJy4uL3NyYy9Db21wb25lbnRzL0Jhc2ljQ29tcG9uZW50cy9JbnB1dE1vZGFsJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIb21lID0gKHsgcG9zdHMsIHByb2plY3RzIH0pID0+IHtcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7IC8vSW5wdXRNb2RhbOyXkOyEnCDrsJvsnYAg7ZSE66Gc7KCd7Yq4IOydtOumhFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy9zdXBhYmFzZeyXkCDtlITroZzsoJ3tirgg7J2066aE7J2EIOyggOyepe2VmOuKlCDtlajsiJhcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8g7ZSE66Gc7KCd7Yq4IOyCveyehVxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oJ3Byb2plY3RzJylcbiAgICAgICAgLmluc2VydChbeyBuYW1lLCBkZXNjcmlwdGlvbjogJ+yDiCDtlITroZzsoJ3tirgnIH1dKTtcbiAgXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29kZTonLCBlcnJvci5jb2RlKTsgICAgLy8g7Jik66WYIOy9lOuTnCDstpzroKVcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0YWlsczonLCBlcnJvci5kZXRhaWxzKTsgLy8g7Jik66WYIOyEuOu2gCDsgqztla0g7Lac66ClXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTsgIC8vIOyXkOufrCDrsJzsg50g7IucIOuplOyLnOyngCDstpzroKVcbiAgICAgIH1cbiAgXG4gICAgICBjb25zb2xlLmxvZygn7ZSE66Gc7KCd7Yq4IOyDneyEsSDshLHqs7U6JywgZGF0YSk7XG4gIFxuICAgICAgLy8g7IOI66GcIOyCveyeheuQnCDrjbDsnbTthLDqsIAg67Cw7Je07J2YIOyyqyDrsojsp7gg7ZWt66qp7JeQIOychOy5mO2VmOuvgOuhnCDssqsg67KI7Ke4IO2VreuqqeydhCDsgqzsmqlcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkYXRhWzBdOyAgLy8g67Cw7Je07J2YIOyyqyDrsojsp7gg7ZWt66qp66eMIOyEoO2DnVxuICBcbiAgICAgIC8vIOuPmeyggeycvOuhnCDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIO2OmOydtOyngOuhnCDsnbTrj5lcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdHMvJHtwcm9qZWN0LmlkfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCftlITroZzsoJ3tirgg7IOd7ISxIOyLpO2MqDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG4gIFxuICBcbiAgXG4gIC8vIElucHV0TW9kYWzsl5DshJwg7ZSE66Gc7KCd7Yq466qF7J2EIOuwm+ydgCDtm4Qg7Zi47LacXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIHNldFByb2plY3ROYW1lKG5hbWUpOyAvLyDtlITroZzsoJ3tirjrqoUg7IOB7YOcIOyXheuNsOydtO2KuFxuICAgIGNyZWF0ZVByb2plY3QobmFtZSk7ICAgLy8g642w7J207YSw67Kg7J207Iqk7JeQIO2UhOuhnOygne2KuCDsoIDsnqVcbiAgfTtcblxuICAvL+2ZlOuptCDqt7jrpqzripQg67aA67aEXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dE1vZGFsIHNldFByb2plY3ROYW1lPXtoYW5kbGVDcmVhdGVQcm9qZWN0fSAvPlxuICAgICAgICA8TWFpblRhYiBwb3N0cz17cG9zdHN9IHByb2plY3RzPXtwcm9qZWN0c30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG4vL3NzcuuhnCDrjbDsnbTthLDrpbwg66+466asIOuhnOuTnO2VmOuKlCDrtoDrtoRcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIHBvc3RzIO2FjOydtOu4lOyXkOyEnCDrjbDsnbTthLAg6rCA7KC47Jik6riwXG4gIGNvbnN0IHsgZGF0YTogcG9zdHMsIGVycm9yOiBwb3N0c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdwb3N0cycpICAvLyAncG9zdHMnIO2FjOydtOu4lOyXkOyEnCDrjbDsnbTthLDrpbwg6rCA7KC47Ji164uI64ukLlxuICAgIC5zZWxlY3QoJyonKTsgICAgLy8g66qo65OgIOy7rOufvCDqsIDsoLjsmKTquLBcblxuICAvLyBwcm9qZWN0cyDthYzsnbTruJTsl5DshJwg642w7J207YSwIOqwgOyguOyYpOq4sFxuICBjb25zdCB7IGRhdGE6IHByb2plY3RzLCBlcnJvcjogcHJvamVjdHNFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgncHJvamVjdHMnKSAgLy8gJ3Byb2plY3RzJyDthYzsnbTruJTsl5DshJwg642w7J207YSw66W8IOqwgOyguOyYteuLiOuLpC5cbiAgICAuc2VsZWN0KCcqJyk7ICAgICAgLy8g66qo65OgIOy7rOufvCDqsIDsoLjsmKTquLBcblxuICAvLyDsl5Drn6wg7LKY66asXG4gIGlmIChwb3N0c0Vycm9yIHx8IHByb2plY3RzRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgcG9zdHNFcnJvciB8fCBwcm9qZWN0c0Vycm9yKTtcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0czogW10sIHByb2plY3RzOiBbXSB9IH07IC8vIOyYpOulmCDrsJzsg50g7IucIOu5iCDrsLDsl7Qg67CY7ZmYXG4gIH1cblxuICBjb25zb2xlLmxvZyhcIkZldGNoZWQgcG9zdHM6XCIsIHBvc3RzKTtcbiAgY29uc29sZS5sb2coXCJGZXRjaGVkIHByb2plY3RzOlwiLCBwcm9qZWN0cyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgICAgcHJvamVjdHNcbiAgICB9LFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiSGVhZGVyIiwiTWFpblRhYiIsIklucHV0TW9kYWwiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhvbWUiLCJwb3N0cyIsInByb2plY3RzIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsInJvdXRlciIsImNyZWF0ZVByb2plY3QiLCJuYW1lIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImNvZGUiLCJkZXRhaWxzIiwiRXJyb3IiLCJtZXNzYWdlIiwibG9nIiwicHJvamVjdCIsInB1c2giLCJpZCIsImhhbmRsZUNyZWF0ZVByb2plY3QiLCJkaXYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});