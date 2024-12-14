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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_utils_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils/supabase */ \"./src/utils/supabase.js\");\n/* harmony import */ var _src_Components_ComplexComponents_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Components/ComplexComponents/Header */ \"./src/Components/ComplexComponents/Header.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_MainTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Components/BasicComponents/MainTab */ \"./src/Components/BasicComponents/MainTab.jsx\");\n/* harmony import */ var _src_Components_BasicComponents_InputModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Components/BasicComponents/InputModal */ \"./src/Components/BasicComponents/InputModal.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n // supabase 클라이언트 불러오기\n\n\n\n\n\nconst Home = (param)=>{\n    let { posts, projects } = param;\n    _s();\n    const [projectName, setProjectName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''); //InputModal에서 받은 프로젝트 이름\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    //supabase에 프로젝트 이름을 저장하는 함수\n    const createProject = async (name)=>{\n        try {\n            const { data, error } = await _src_utils_supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.from('projects') // projects 테이블에 데이터 삽입\n            .insert([\n                {\n                    name,\n                    description: '새 프로젝트'\n                } // 프로젝트 이름과 기본 설명 추가\n            ]).single(); // 단일 객체 반환을 원하면 .single()을 사용\n            if (error) {\n                console.error('Error code:', error.code);\n                console.error('Error details:', error.details);\n                throw new Error(error.message); // 에러가 발생하면 출력\n            }\n            console.log('프로젝트 생성 성공:', data);\n            if (!data) {\n                throw new Error(\"프로젝트 생성 후 반환된 데이터가 없습니다.\");\n            }\n            // 새로 생성된 프로젝트의 ID를 가져옵니다.\n            const projectId = data.id;\n            console.log(\"프로젝트 Id\", projectId);\n            // 동적으로 해당 프로젝트의 페이지로 이동\n            router.push(\"/projects/\".concat(projectId));\n        } catch (error) {\n            console.error('프로젝트 생성 실패:', error.message);\n        }\n    };\n    // InputModal에서 프로젝트명을 받은 후 호출\n    const handleCreateProject = (name)=>{\n        setProjectName(name); // 프로젝트명 상태 업데이트\n        createProject(name); // 데이터베이스에 프로젝트 저장\n    };\n    //화면 그리는 부분\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_ComplexComponents_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_InputModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setProjectName: handleCreateProject\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_BasicComponents_MainTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        posts: posts,\n                        projects: projects\n                    }, void 0, false, {\n                        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songye/Documents/scriptly/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"DwDKbxSqL0wT3WUqQJUptRKGLV8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRCxDQUFDLHNCQUFzQjtBQUNSO0FBQ0E7QUFDTTtBQUNyQztBQUNPO0FBRXhDLE1BQU1NLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUsseUJBQXlCO0lBQzdFLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUN4Qiw0QkFBNEI7SUFFOUIsTUFBTU8sZ0JBQWdCLE9BQU9DO1FBRTNCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWYseURBQVFBLENBQ25DZ0IsSUFBSSxDQUFDLFlBQVksdUJBQXVCO2FBQ3hDQyxNQUFNLENBQUM7Z0JBQ047b0JBQUVKO29CQUFNSyxhQUFhO2dCQUFTLEVBQUUsb0JBQW9CO2FBQ3JELEVBQ0FDLE1BQU0sSUFBSSw4QkFBOEI7WUFFM0MsSUFBSUosT0FBTztnQkFDVEssUUFBUUwsS0FBSyxDQUFDLGVBQWVBLE1BQU1NLElBQUk7Z0JBQ3ZDRCxRQUFRTCxLQUFLLENBQUMsa0JBQWtCQSxNQUFNTyxPQUFPO2dCQUM3QyxNQUFNLElBQUlDLE1BQU1SLE1BQU1TLE9BQU8sR0FBRyxjQUFjO1lBQ2hEO1lBRUFKLFFBQVFLLEdBQUcsQ0FBQyxlQUFlWDtZQUUzQixJQUFJLENBQUNBLE1BQU07Z0JBQ1QsTUFBTSxJQUFJUyxNQUFNO1lBQ2xCO1lBRUEsMEJBQTBCO1lBQzFCLE1BQU1HLFlBQVlaLEtBQUthLEVBQUU7WUFDekJQLFFBQVFLLEdBQUcsQ0FBQyxXQUFVQztZQUV0Qix3QkFBd0I7WUFDeEJmLE9BQU9pQixJQUFJLENBQUMsYUFBdUIsT0FBVkY7UUFDM0IsRUFBRSxPQUFPWCxPQUFPO1lBQ2RLLFFBQVFMLEtBQUssQ0FBQyxlQUFlQSxNQUFNUyxPQUFPO1FBQzVDO0lBQ0Y7SUFFRSw4QkFBOEI7SUFDOUIsTUFBTUssc0JBQXNCLENBQUNoQjtRQUMzQkgsZUFBZUcsT0FBTyxnQkFBZ0I7UUFDdENELGNBQWNDLE9BQVMsa0JBQWtCO0lBQzNDO0lBRUEsV0FBVztJQUNYLHFCQUNFLDhEQUFDaUI7OzBCQUNDLDhEQUFDN0IsZ0ZBQU1BOzs7OzswQkFDUCw4REFBQzZCOztrQ0FDQyw4REFBQzNCLGtGQUFVQTt3QkFBQ08sZ0JBQWdCbUI7Ozs7OztrQ0FDNUIsOERBQUMzQiwrRUFBT0E7d0JBQUNLLE9BQU9BO3dCQUFPQyxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBdERNRjs7UUFFV0Qsa0RBQVNBOzs7S0FGcEJDOztBQXVGTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3Nvbmd5ZS9Eb2N1bWVudHMvc2NyaXB0bHkvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9zcmMvdXRpbHMvc3VwYWJhc2UnOyAvLyBzdXBhYmFzZSDtgbTrnbzsnbTslrjtirgg67aI65+s7Jik6riwXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy9Db21wb25lbnRzL0NvbXBsZXhDb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTWFpblRhYiBmcm9tICcuLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvTWFpblRhYic7XG5pbXBvcnQgSW5wdXRNb2RhbCBmcm9tICcuLi9zcmMvQ29tcG9uZW50cy9CYXNpY0NvbXBvbmVudHMvSW5wdXRNb2RhbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgSG9tZSA9ICh7IHBvc3RzLCBwcm9qZWN0cyB9KSA9PiB7XG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoJycpOyAvL0lucHV0TW9kYWzsl5DshJwg67Cb7J2AIO2UhOuhnOygne2KuCDsnbTrpoRcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vc3VwYWJhc2Xsl5Ag7ZSE66Gc7KCd7Yq4IOydtOumhOydhCDsoIDsnqXtlZjripQg7ZWo7IiYXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBhc3luYyAobmFtZSkgPT4ge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9qZWN0cycpIC8vIHByb2plY3RzIO2FjOydtOu4lOyXkCDrjbDsnbTthLAg7IK97J6FXG4gICAgICAuaW5zZXJ0KFtcbiAgICAgICAgeyBuYW1lLCBkZXNjcmlwdGlvbjogJ+yDiCDtlITroZzsoJ3tirgnIH0gLy8g7ZSE66Gc7KCd7Yq4IOydtOumhOqzvCDquLDrs7gg7ISk66qFIOy2lOqwgFxuICAgICAgXSlcbiAgICAgIC5zaW5nbGUoKTsgLy8g64uo7J28IOqwneyytCDrsJjtmZjsnYQg7JuQ7ZWY66m0IC5zaW5nbGUoKeydhCDsgqzsmqlcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29kZTonLCBlcnJvci5jb2RlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGFpbHM6JywgZXJyb3IuZGV0YWlscyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7IC8vIOyXkOufrOqwgCDrsJzsg53tlZjrqbQg7Lac66ClXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ+2UhOuhnOygne2KuCDsg53shLEg7ISx6rO1OicsIGRhdGEpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLtlITroZzsoJ3tirgg7IOd7ISxIO2bhCDrsJjtmZjrkJwg642w7J207YSw6rCAIOyXhuyKteuLiOuLpC5cIik7XG4gICAgfVxuXG4gICAgLy8g7IOI66GcIOyDneyEseuQnCDtlITroZzsoJ3tirjsnZggSUTrpbwg6rCA7KC47Ji164uI64ukLlxuICAgIGNvbnN0IHByb2plY3RJZCA9IGRhdGEuaWQ7IFxuICAgIGNvbnNvbGUubG9nKFwi7ZSE66Gc7KCd7Yq4IElkXCIscHJvamVjdElkKVxuXG4gICAgLy8g64+Z7KCB7Jy866GcIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7Y6Y7J207KeA66GcIOydtOuPmVxuICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign7ZSE66Gc7KCd7Yq4IOyDneyEsSDsi6TtjKg6JywgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cbiAgLy8gSW5wdXRNb2RhbOyXkOyEnCDtlITroZzsoJ3tirjrqoXsnYQg67Cb7J2AIO2bhCDtmLjstpxcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgc2V0UHJvamVjdE5hbWUobmFtZSk7IC8vIO2UhOuhnOygne2KuOuqhSDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgY3JlYXRlUHJvamVjdChuYW1lKTsgICAvLyDrjbDsnbTthLDrsqDsnbTsiqTsl5Ag7ZSE66Gc7KCd7Yq4IOyggOyepVxuICB9O1xuXG4gIC8v7ZmU66m0IOq3uOumrOuKlCDrtoDrtoRcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0TW9kYWwgc2V0UHJvamVjdE5hbWU9e2hhbmRsZUNyZWF0ZVByb2plY3R9IC8+XG4gICAgICAgIDxNYWluVGFiIHBvc3RzPXtwb3N0c30gcHJvamVjdHM9e3Byb2plY3RzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbi8vc3Ny66GcIOuNsOydtO2EsOulvCDrr7jrpqwg66Gc65Oc7ZWY64qUIOu2gOu2hFxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gcG9zdHMg7YWM7J2067iU7JeQ7IScIOuNsOydtO2EsCDqsIDsoLjsmKTquLBcbiAgY29uc3QgeyBkYXRhOiBwb3N0cywgZXJyb3I6IHBvc3RzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ3Bvc3RzJykgIC8vICdwb3N0cycg7YWM7J2067iU7JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmLXri4jri6QuXG4gICAgLnNlbGVjdCgnKicpOyAgICAvLyDrqqjrk6Ag7Lus65+8IOqwgOyguOyYpOq4sFxuXG4gIC8vIHByb2plY3RzIO2FjOydtOu4lOyXkOyEnCDrjbDsnbTthLAg6rCA7KC47Jik6riwXG4gIGNvbnN0IHsgZGF0YTogcHJvamVjdHMsIGVycm9yOiBwcm9qZWN0c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdwcm9qZWN0cycpICAvLyAncHJvamVjdHMnIO2FjOydtOu4lOyXkOyEnCDrjbDsnbTthLDrpbwg6rCA7KC47Ji164uI64ukLlxuICAgIC5zZWxlY3QoJyonKTsgICAgICAvLyDrqqjrk6Ag7Lus65+8IOqwgOyguOyYpOq4sFxuXG4gIC8vIOyXkOufrCDsspjrpqxcbiAgaWYgKHBvc3RzRXJyb3IgfHwgcHJvamVjdHNFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBwb3N0c0Vycm9yIHx8IHByb2plY3RzRXJyb3IpO1xuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3RzOiBbXSwgcHJvamVjdHM6IFtdIH0gfTsgLy8g7Jik66WYIOuwnOyDnSDsi5wg67mIIOuwsOyXtCDrsJjtmZhcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBwb3N0czpcIiwgcG9zdHMpO1xuICBjb25zb2xlLmxvZyhcIkZldGNoZWQgcHJvamVjdHM6XCIsIHByb2plY3RzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICAgIHByb2plY3RzLFxuICAgIH0sXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJIZWFkZXIiLCJNYWluVGFiIiwiSW5wdXRNb2RhbCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSG9tZSIsInBvc3RzIiwicHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwicm91dGVyIiwiY3JlYXRlUHJvamVjdCIsIm5hbWUiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwiZGVzY3JpcHRpb24iLCJzaW5nbGUiLCJjb25zb2xlIiwiY29kZSIsImRldGFpbHMiLCJFcnJvciIsIm1lc3NhZ2UiLCJsb2ciLCJwcm9qZWN0SWQiLCJpZCIsInB1c2giLCJoYW5kbGVDcmVhdGVQcm9qZWN0IiwiZGl2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});