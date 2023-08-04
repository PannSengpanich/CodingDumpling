"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 2100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js
// /api/new-meetup
// POST /api/new-meetup
// NextJS will trigger this function for us when a request reaches this path

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { title, image, address, description } = data;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://dbUser:hvaIX5bXYdyXJbW2@cluster0.vpq0rkv.mongodb.net/");
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2100));
module.exports = __webpack_exports__;

})();