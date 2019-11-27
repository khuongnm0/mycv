(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-headroom duration=\"300\" easing=\"ease-in-out\">\n  <nav class=\"navbar\">\n    <div class=\"container\">\n      <a pageScroll [pageScrollDuration]=500 href=\"#home\" class=\"btn\">\n        <i class=\"fas fa-home\"></i>\n        <span>Home</span>\n      </a>\n      <a pageScroll [pageScrollDuration]=500 href=\"#skill\" class=\"btn\">\n        <i class=\"fas fa-align-left\"></i>\n        <span>Skill</span>\n      </a>\n      <a pageScroll [pageScrollDuration]=500 href=\"#experience\" class=\"btn\">\n        <i class=\"fas fa-business-time\"></i>\n        <span>Experience</span>\n      </a>\n      <a pageScroll [pageScrollDuration]=500 href=\"#contact\" class=\"btn\">\n        <i class=\"fas fa-address-card\"></i>\n        <span>Contact</span>\n      </a>\n    </div>\n  </nav>\n</ngx-headroom>\n\n\n<div class=\"section\" id=\"home\">\n  <div class=\"ovewview-container text-center\">\n    <h1 data-aos=\"fade-zoom-in\" data-aos-delay=\"300\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">Nguyễn Mạnh\n      Khương</h1>\n    <h3 data-aos=\"fade-up\" data-aos-delay=\"1000\">Software Engineer</h3>\n  </div>\n\n</div>\n<div class=\"section\" id=\"skill\">\n  <div class=\"container\">\n    <h2 data-aos=\"fade-right\" data-aos-delay=\"300\">\n      <i class=\"fas fa-align-left\"></i>\n      Skills\n    </h2>\n\n    <!-- <h4 class=\"mt-3\">Technologies</h4> -->\n    <div class=\"row skill-list\" *ngIf=\"skillList && skillList.length > 0\">\n      <div class=\"col-3 skill-item\" *ngFor=\"let skill of skillList; let i = index\" data-aos=\"fade-up\"\n        [attr.data-aos-delay]=\"500+i*300\">\n        <p>{{skill.name}}</p>\n        <div class=\"skill-bar-container\">\n          <div class=\"skill-bar\" [style.width.%]=\"skill.value\">\n            <span *ngIf=\"skill.value < 80\">Fair</span>\n            <span *ngIf=\"skill.value >= 80\">Good</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section\" id=\"experience\">\n  <div class=\"container\">\n    <h2 data-aos=\"fade-right\" data-aos-delay=\"300\">\n      <i class=\"fas fa-business-time\"></i>\n      Experience\n    </h2>\n    <div class=\"timeline-list\" data-aos=\"fade-up\" data-aos-delay=\"500\" *ngIf=\"timelineList && timelineList.length > 0\">\n      <div class=\"timeline-item row\" *ngFor=\"let timeline of timelineList\">\n        <div class=\"timeline-left col-3\" data-aos=\"fade-right\" data-aos-delay=\"1000\">\n          <p class=\"time\">\n            <span class=\"badge badge-danger\"> {{timeline.time}}</span>\n          </p>\n          <h4 class=\"company text-warning\">{{timeline.company}}</h4>\n        </div>\n        <div class=\"timeline-right col-9\" data-aos=\"fade-left\" data-aos-delay=\"1300\">\n          <ul class=\"project-list\" *ngIf=\"timeline.projects && timeline.projects.length > 0\">\n            <li class=\"project-item\" data-aos=\"flip-right\" [attr.data-aos-delay]=\"1300+i*200\"\n              *ngFor=\"let project of timeline.projects; let i = index\">\n              <!-- <p class=\"name\">{{project.name}}</p> -->\n              <h4 class=\"name\">\n                <!-- <span class=\"mr-2\">Project:</span> -->\n                <span class=\"badge badge-danger\"> {{project.name}}</span>\n              </h4>\n              <p class=\"role\">\n                <span class=\"mr-2\">Role:</span>\n                <b>{{project.role}}</b> </p>\n              <p class=\"technologies\" *ngIf=\"project.technologies && project.technologies.length > 0\">\n                <!-- <span class=\"badge mr-2\" [ngClass]=\"{'badge-primary': odd,'badge-danger': even}\" -->\n                <span class=\"mr-2\">Technologies:</span>\n                <span class=\"badge mr-2\"\n                  *ngFor=\"let technology of project.technologies; let i = index; let odd = odd; let even = even\">\n                  {{technology}}\n                </span>\n              </p>\n              <div [innerHTML]=\"project.description\" *ngIf=\"!!project.description\"></div>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"section\" id=\"contact\">\n  <div class=\"container\">\n    <h2 data-aos=\"fade-right\" data-aos-delay=\"300\">\n      <i class=\"fas fa-address-card\"></i>\n      Contact\n    </h2>\n    <ul class=\"contact-list row mt-5\">\n      <li class=\"col-3 contact-item\">\n        <a href=\"tel:+84378334899\" class=\"btn btn-danger\">\n          <i class=\"fas fa-phone-square-alt\"></i>\n          <span>+84378334899</span>\n        </a>\n      </li>\n      <li class=\"col-3 contact-item\">\n        <a href=\"https://www.facebook.com/akite.banhmi\" target=\"_blank\" class=\"btn  btn-primary\">\n          <i class=\"fab fa-facebook-square\"></i>\n          <span>Facebook</span>\n        </a>\n      </li>\n      <li class=\"col-3 contact-item\">\n        <a href=\"https://www.linkedin.com/in/khuongnm/\" target=\"_blank\" class=\"btn  btn-secondary\">\n          <i class=\"fab fa-linkedin\"></i>\n          <span>Linkedin</span>\n        </a>\n      </li>\n      <li class=\"col-3 contact-item\">\n        <a href=\"https://github.com/khuongnm0\" target=\"_blank\" class=\"btn btn-warning\">\n          <i class=\"fab fa-github-square\"></i>\n          <span>Github</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n:host:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-size: cover;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  background-image: url('home-bg.jpg');\n  background-attachment: fixed;\n  z-index: -1;\n}\n.navbar {\n  background-color: #cacaca;\n}\n@media (max-width: 575.98px) {\n  .navbar {\n    padding: 0.5rem;\n  }\n}\n.navbar .container {\n  place-content: space-evenly;\n}\n.navbar .btn {\n  font-weight: bold;\n  outline: none;\n}\n.navbar .btn:hover {\n  color: #d40000;\n}\n.navbar .btn i {\n  margin-right: 1rem;\n}\n.section {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.section .container {\n  background-color: whitesmoke;\n  padding: 3rem;\n  border-radius: 1rem;\n}\n.section h2 {\n  display: block;\n  margin-bottom: 0;\n  padding-bottom: 1rem;\n  position: relative;\n}\n.section h2:after {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: linear-gradient(to right, #d40000 0%, #a30662 100%);\n}\n.section h2 i {\n  margin-right: 0.5rem;\n}\n#home {\n  height: 100vh;\n  width: 100%;\n}\n#home .ovewview-container {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#home h1 {\n  font-size: 4rem;\n  font-weight: 800;\n}\n@media (max-width: 575.98px) {\n  #home h1 {\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 575.98px) {\n  #home h3 {\n    color: white;\n  }\n}\n#home:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-size: cover;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  background-position-y: center;\n  background-image: url('landing-bg.jpg');\n  z-index: -1;\n}\n@media (max-width: 575.98px) {\n  #home:before {\n    background-position-x: -400px;\n  }\n}\n.skill-list .skill-item:hover p {\n  color: #d40000;\n}\n.skill-list .skill-item:hover .skill-bar-container .skill-bar {\n  background-image: linear-gradient(to right, #d40000 0%, #a30662 100%);\n}\n.skill-list p {\n  margin: 0.5rem 0;\n  font-weight: bold;\n}\n.skill-list .skill-bar-container {\n  background-color: #e9ecef;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.skill-list .skill-bar-container .skill-bar {\n  color: #fff;\n  padding: 0.25rem 1rem;\n  text-align: right;\n  background-color: #1e7fe6;\n  background-image: linear-gradient(to right, #2f5498 0%, #1e7fe6 100%);\n}\n.timeline-list .timeline-item {\n  border-bottom: 5px solid;\n  -o-border-image: linear-gradient(to right, #d40000 0%, #a30662 100%);\n     border-image: linear-gradient(to right, #d40000 0%, #a30662 100%);\n  border-image-slice: 1;\n  border-width: 5px;\n  margin: 0;\n  padding: 40px;\n  counter-increment: section;\n  position: relative;\n}\n.timeline-list .timeline-item:nth-child(odd) {\n  border-right: 5px solid;\n  padding-left: 0;\n}\n.timeline-list .timeline-item:nth-child(even) {\n  border-left: 5px solid;\n  padding-right: 0;\n}\n.timeline-list .timeline-item .timeline-left {\n  text-align: right;\n}\n.timeline-list .timeline-item .timeline-left .time {\n  font-size: 2rem;\n}\n.timeline-list .timeline-item .timeline-left .time .badge {\n  background-image: linear-gradient(to right, #000 0%, #d40000 100%);\n}\n.timeline-list .timeline-item .timeline-left .company {\n  font-weight: bold;\n}\n.timeline-list .timeline-item .project-list .project-item {\n  transition: all ease-in-out 0.3s;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n}\n.timeline-list .timeline-item .project-list .project-item:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 3px 3px 20px #888888;\n}\n.timeline-list .timeline-item .project-list .project-item .name {\n  font-size: 1.5rem;\n}\n.timeline-list .timeline-item .project-list .project-item .name .badge {\n  background-image: linear-gradient(to right, #dc3545 0%, #d40000 100%);\n}\n.timeline-list .timeline-item .project-list .project-item .technologies .badge {\n  color: #fff;\n  background-image: linear-gradient(to right, #8093f1 0%, #0041b7 100%);\n}\n.contact-list .contact-item {\n  text-align: center;\n}\n.contact-list .contact-item .btn {\n  font-size: 1.5rem;\n  transition: width 2s;\n  color: white;\n}\n.contact-list .contact-item .btn span {\n  display: none;\n}\n.contact-list .contact-item .btn:hover {\n  width: 100%;\n}\n.contact-list .contact-item .btn:hover i {\n  margin-right: 0.5rem;\n}\n.contact-list .contact-item .btn:hover span {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFxLaHVvbmdOTVxcbXljdi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0U6XFxQcm9qZWN0c1xcS2h1b25nTk1cXG15Y3Yvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSEY7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7RUFDRSx5QkFBQTtBQ0hGO0FDbURJO0VGakRKO0lBR0ksZUFBQTtFQ0RGO0FBQ0Y7QURFRTtFQUNFLDJCQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FEQ0k7RUFDRSxjQUFBO0FDQ047QURDSTtFQUNFLGtCQUFBO0FDQ047QURJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0RGO0FERUU7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxxRUFBQTtBQ0FOO0FERUk7RUFDRSxvQkFBQTtBQ0FOO0FES0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FESUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBRE1FO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0FDTEo7QUNiSTtFRmVGO0lBS0ksZ0JBQUE7RUNISjtBQUNGO0FDbEJJO0VGd0JGO0lBRUksWUFBQTtFQ0pKO0FBQ0Y7QURPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtBQ0xKO0FDckNJO0VGOEJGO0lBY0ksNkJBQUE7RUNISjtBQUNGO0FEVU07RUFDRSxjQUFBO0FDUFI7QURVUTtFQUNFLHFFQUFBO0FDUlY7QURhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNYSjtBRGFFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDWEo7QURhSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxRUFBQTtBQ1hOO0FEZ0JFO0VBQ0Usd0JBQUE7RUFDQSxvRUFBQTtLQUFBLGlFQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEZUk7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNiTjtBRGVJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQ2JOO0FEbUJJO0VBQ0UsaUJBQUE7QUNqQk47QURrQk07RUFDRSxlQUFBO0FDaEJSO0FEaUJRO0VBQ0Usa0VBQUE7QUNmVjtBRGtCTTtFQUNFLGlCQUFBO0FDaEJSO0FEcUJNO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDbkJSO0FEb0JRO0VBQ0UsZ0NBQUE7RUFFQSxnQ0FBQTtBQ25CVjtBRHFCUTtFQUNFLGlCQUFBO0FDbkJWO0FEc0JVO0VBQ0UscUVBQUE7QUNwQlo7QUQ0QlU7RUFDRSxXQUFBO0VBQ0EscUVBQUE7QUMxQlo7QUR1Q0U7RUFDRSxrQkFBQTtBQ3BDSjtBRHFDSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDbkNOO0FEdUNNO0VBQ0UsYUFBQTtBQ3JDUjtBRHdDTTtFQUVFLFdBQUE7QUN2Q1I7QUR3Q1E7RUFDRSxvQkFBQTtBQ3RDVjtBRHdDUTtFQUNFLHFCQUFBO0FDdENWIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9ob21lLWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZDQwMDAwO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ZmU2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkNDAwMDAgMCUsICNhMzA2NjIgMTAwJSk7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLm92ZXd2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBwbGFjZS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICAvLyBtYXJnaW46IDEwcmVtIDA7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1iZy5qcGdcIik7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC00MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5za2lsbC1saXN0IHtcclxuICAuc2tpbGwtaXRlbSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNkNDAwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNraWxsLWJhci1jb250YWluZXIge1xyXG4gICAgICAgIC5za2lsbC1iYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZDQwMDAwIDAlLCAjYTMwNjYyIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnNraWxsLWJhci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLnNraWxsLWJhciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ZmU2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjU0OTggMCUsICMxZTdmZTYgMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50aW1lbGluZS1saXN0IHtcclxuICAudGltZWxpbmUtaXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0MDAwMCAwJSwgI2EzMDY2MiAxMDAlKTtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLy8gJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAvLyAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnRpbWVsaW5lLWxlZnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLnRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwIDAlLCAjZDQwMDAwIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29tcGFueSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9qZWN0LWxpc3Qge1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIC5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICAgICAgICAgIC8vIGJveC1zaGFkb3c6ICNkYWRhZGEgMnB4IDJweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAjODg4ODg4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAjZGMzNTQ1IDAlLFxyXG4gICAgICAgICAgICAgICNkNDAwMDAgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGVjaG5vbG9naWVzIHtcclxuICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICAgIzgwOTNmMSAwJSxcclxuICAgICAgICAgICAgICAjMDA0MWI3IDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWxpc3Qge1xyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAycztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBpIHtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIC8vIHdpZHRoOiAwJTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2hvbWUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG59XG4ubmF2YmFyIC5jb250YWluZXIge1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ubmF2YmFyIC5idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZiYXIgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZDQwMDAwO1xufVxuLm5hdmJhciAuYnRuIGkge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5zZWN0aW9uIGgyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbiBoMjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0MDAwMCAwJSwgI2EzMDY2MiAxMDAlKTtcbn1cbi5zZWN0aW9uIGgyIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuI2hvbWUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbiNob21lIC5vdmV3dmlldy1jb250YWluZXIge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jaG9tZSBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAjaG9tZSBoMSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICNob21lIGgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiNob21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1iZy5qcGdcIik7XG4gIHotaW5kZXg6IC0xO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICNob21lOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNDAwcHg7XG4gIH1cbn1cblxuLnNraWxsLWxpc3QgLnNraWxsLWl0ZW06aG92ZXIgcCB7XG4gIGNvbG9yOiAjZDQwMDAwO1xufVxuLnNraWxsLWxpc3QgLnNraWxsLWl0ZW06aG92ZXIgLnNraWxsLWJhci1jb250YWluZXIgLnNraWxsLWJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0MDAwMCAwJSwgI2EzMDY2MiAxMDAlKTtcbn1cbi5za2lsbC1saXN0IHAge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5za2lsbC1saXN0IC5za2lsbC1iYXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNraWxsLWxpc3QgLnNraWxsLWJhci1jb250YWluZXIgLnNraWxsLWJhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ZmU2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjU0OTggMCUsICMxZTdmZTYgMTAwJSk7XG59XG5cbi50aW1lbGluZS1saXN0IC50aW1lbGluZS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkO1xuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0MDAwMCAwJSwgI2EzMDY2MiAxMDAlKTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb3VudGVyLWluY3JlbWVudDogc2VjdGlvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lLWxpc3QgLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnRpbWVsaW5lLWxpc3QgLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi50aW1lbGluZS1saXN0IC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGltZWxpbmUtbGlzdCAudGltZWxpbmUtaXRlbSAudGltZWxpbmUtbGVmdCAudGltZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50aW1lbGluZS1saXN0IC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1sZWZ0IC50aW1lIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMCAwJSwgI2Q0MDAwMCAxMDAlKTtcbn1cbi50aW1lbGluZS1saXN0IC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1sZWZ0IC5jb21wYW55IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGltZWxpbmUtbGlzdCAudGltZWxpbmUtaXRlbSAucHJvamVjdC1saXN0IC5wcm9qZWN0LWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4udGltZWxpbmUtbGlzdCAudGltZWxpbmUtaXRlbSAucHJvamVjdC1saXN0IC5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4ICM4ODg4ODg7XG59XG4udGltZWxpbmUtbGlzdCAudGltZWxpbmUtaXRlbSAucHJvamVjdC1saXN0IC5wcm9qZWN0LWl0ZW0gLm5hbWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi50aW1lbGluZS1saXN0IC50aW1lbGluZS1pdGVtIC5wcm9qZWN0LWxpc3QgLnByb2plY3QtaXRlbSAubmFtZSAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYzM1NDUgMCUsICNkNDAwMDAgMTAwJSk7XG59XG4udGltZWxpbmUtbGlzdCAudGltZWxpbmUtaXRlbSAucHJvamVjdC1saXN0IC5wcm9qZWN0LWl0ZW0gLnRlY2hub2xvZ2llcyAuYmFkZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjODA5M2YxIDAlLCAjMDA0MWI3IDEwMCUpO1xufVxuXG4uY29udGFjdC1saXN0IC5jb250YWN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdC1saXN0IC5jb250YWN0LWl0ZW0gLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAycztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhY3QtbGlzdCAuY29udGFjdC1pdGVtIC5idG4gc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFjdC1saXN0IC5jb250YWN0LWl0ZW0gLmJ0bjpob3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtbGlzdCAuY29udGFjdC1pdGVtIC5idG46aG92ZXIgaSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmNvbnRhY3QtbGlzdCAuY29udGFjdC1pdGVtIC5idG46aG92ZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
            /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/app/data/index.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = "mycv";
                    this.timelineList = _data__WEBPACK_IMPORTED_MODULE_3__["EXPERIENCE_DATA"];
                    this.skillList = _data__WEBPACK_IMPORTED_MODULE_3__["SKILLS_DATA"];
                }
                AppComponent.prototype.ngOnInit = function () {
                    aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ctrl/ngx-headroom */ "./node_modules/@ctrl/ngx-headroom/fesm2015/ctrl-ngx-headroom.js");
            /* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_4__["HeadroomModule"],
                        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/data/experience.ts": 
        /*!************************************!*\
          !*** ./src/app/data/experience.ts ***!
          \************************************/
        /*! exports provided: EXPERIENCE_DATA */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCE_DATA", function () { return EXPERIENCE_DATA; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EXPERIENCE_DATA = [
                {
                    time: "Oct 2017 - Now ",
                    company: "KYANON DIGITAL",
                    projects: [
                        {
                            name: "The Better Travaller",
                            role: "Lead Front-end Team",
                            technologies: ["Angular", "SSR", "PWA", "Google Cloud", "Firebase"],
                            description: "<p>Develop web-app to help people sharing their's travel stories and idea.</p>"
                        },
                        {
                            name: "Wecheer.IO",
                            role: "Front-end Developer",
                            technologies: ["VueJS", "FeatherJS", "Lavarel"],
                            description: "<p>Develop CMS UI. Working with realtime data and map.</p>"
                        },
                        {
                            name: "IDEM Lab",
                            role: "Front-end Developer",
                            technologies: ["HAML,", "Coffeescript", "SASS"],
                            description: "<p>Build CMS and website for Hotel/Event Management (Singapore).</p>"
                        },
                        {
                            name: "Stadium Mapping",
                            role: "Front-end Developer",
                            technologies: ["AngularJS", "FabricJS", "SCSS"],
                            description: "<p>Build interactive map for ANZ Stadium (Australia), develop modules for facilities/seats management.</p>"
                        }
                    ]
                },
                {
                    time: "Mar 2017 - Oct 2017 ",
                    company: "3FORCOM",
                    projects: [
                        {
                            name: "Hoa Sen Group",
                            role: "Full-stack Developer",
                            technologies: ["ASP.NET MVC 3", "SCSS", "jQuery"],
                            description: "<p>Develop new website for Ton Hoa Sen Group. </p>"
                        },
                        {
                            name: "Outsource",
                            role: "Collaborator (role as PM)",
                            technologies: ["Firebase", "Android", "iOS", "Socket.io"],
                            description: "<p>Manage timeline and delivery mobile apps for customer from Singapore. </p>"
                        }
                    ]
                },
                {
                    time: "Feb 2016 - Mar 2017 ",
                    company: "FPT Software HCM",
                    projects: [
                        {
                            name: "SPIKA",
                            role: "Front-end Developer",
                            technologies: ["AnugularJS", "SCSS", "Web RTC", "Socket.io"],
                            description: "<p>Develop chat-bot app for a big customer from Japan. End-user can use app for chatting, video call (Web RTC) or make question for robots. (as Skype)</p>"
                        }
                    ]
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/data/index.ts": 
        /*!*******************************!*\
          !*** ./src/app/data/index.ts ***!
          \*******************************/
        /*! exports provided: EXPERIENCE_DATA, SKILLS_DATA */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience */ "./src/app/data/experience.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCE_DATA", function () { return _experience__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE_DATA"]; });
            /* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill */ "./src/app/data/skill.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SKILLS_DATA", function () { return _skill__WEBPACK_IMPORTED_MODULE_2__["SKILLS_DATA"]; });
            /***/ 
        }),
        /***/ "./src/app/data/skill.ts": 
        /*!*******************************!*\
          !*** ./src/app/data/skill.ts ***!
          \*******************************/
        /*! exports provided: SKILLS_DATA */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS_DATA", function () { return SKILLS_DATA; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SKILLS_DATA = [
                {
                    name: "HTML 5",
                    value: 95
                },
                {
                    name: "CSS 3",
                    value: 90
                },
                {
                    name: "Javascript",
                    value: 85
                },
                {
                    name: "Typescript",
                    value: 75
                },
                {
                    name: "Angular",
                    value: 85
                },
                {
                    name: "Firebase",
                    value: 75
                },
                {
                    name: "GIT",
                    value: 90
                },
                {
                    name: "English",
                    value: 75
                },
            ];
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\Projects\KhuongNM\mycv\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map