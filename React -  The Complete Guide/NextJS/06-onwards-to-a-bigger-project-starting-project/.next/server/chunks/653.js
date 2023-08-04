exports.id = 653;
exports.ids = [653];
exports.modules = {

/***/ 2062:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__RMpyO"
};


/***/ }),

/***/ 9092:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MainNavigation_header__JBIUU",
	"logo": "MainNavigation_logo__aeMOX",
	"active": "MainNavigation_active__y3Fl_"
};


/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(9092);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/MainNavigation.js



function MainNavigation() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: (MainNavigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (MainNavigation_module_default()).logo,
                children: "React Meetups"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: "All Meetups"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/new-meetup",
                                children: "Add New Meetup"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const layout_MainNavigation = (MainNavigation);

// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(2062);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout_MainNavigation, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: (Layout_module_default()).main,
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js



// act as a root component
// will change whenever we navigate from Page A to Page B
//function MyApp ({prop that holds the actual page content, props our pages might be getting})
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;