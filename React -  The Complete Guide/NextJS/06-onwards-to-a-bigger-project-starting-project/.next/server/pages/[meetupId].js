(() => {
var exports = {};
exports.id = 549;
exports.ids = [549,660];
exports.modules = {

/***/ 2501:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__fx3Eg"
};


/***/ }),

/***/ 9393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/[meetupId]/index.js
var _meetupId_namespaceObject = {};
__webpack_require__.r(_meetupId_namespaceObject);
__webpack_require__.d(_meetupId_namespaceObject, {
  "default": () => (_meetupId_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js + 2 modules
var _app = __webpack_require__(3653);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(2501);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetupDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: props.image,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: props.description
            })
        ]
    });
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js




//! fetches all the meetup IDs and return as paths
//! needed if uses getStaticProps
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://dbUser:hvaIX5bXYdyXJbW2@cluster0.vpq0rkv.mongodb.net/");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    // retrieve all documents in a collection but return only its _id
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        //all the pages should be pre-generated
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
//! fetch data for single meetup
async function getStaticProps(context) {
    // fetch data for a single meetup
    //get ID from URL
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://dbUser:hvaIX5bXYdyXJbW2@cluster0.vpq0rkv.mongodb.net/");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    console.log(selectedMeetup);
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
}
function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(meetups_MeetupDetail, {
                image: props.meetupData.image,
                title: props.meetupData.title,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    });
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F%5BmeetupId%5D&preferredRegion=&absolutePagePath=private-next-pages%2F%5BmeetupId%5D%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_meetupId_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2F_5BmeetupId_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5BmeetupId_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_meetupId_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/[meetupId]","pathname":"/[meetupId]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: _meetupId_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,869,653], () => (__webpack_exec__(9393)));
module.exports = __webpack_exports__;

})();