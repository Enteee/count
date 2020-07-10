function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");
    /* harmony import */


    var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/counter-repository.service */
    "./src/app/models/counter-repository.service.ts");
    /* harmony import */


    var _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/analytics-item-repository.service */
    "./src/app/models/analytics-item-repository.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'counters',
      pathMatch: 'full'
    }, {
      path: 'counters',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | counters-counters-module */
        [__webpack_require__.e("default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counters-count~b22d7877"), __webpack_require__.e("counters-counters-module")]).then(__webpack_require__.bind(null,
        /*! ./counters/counters.module */
        "./src/app/counters/counters.module.ts")).then(function (m) {
          return m.CountersPageModule;
        });
      }
    }, {
      path: 'counter-detail/:counter-id',
      resolve: {
        counter: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_3__["CounterRepositoryService"]
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | counter-detail-counter-detail-module */
        "counter-detail-counter-detail-module").then(__webpack_require__.bind(null,
        /*! ./counter-detail/counter-detail.module */
        "./src/app/counter-detail/counter-detail.module.ts")).then(function (m) {
          return m.CounterDetailPageModule;
        });
      }
    }, {
      path: 'counter-analytics/:analyticsitem-id/:counter-id',
      resolve: {
        analyticsItem: _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsItemRepositoryService"],
        counter: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_3__["CounterRepositoryService"]
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | counter-analytics-counter-analytics-module */
        [__webpack_require__.e("default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counters-count~b22d7877"), __webpack_require__.e("counter-analytics-counter-analytics-module")]).then(__webpack_require__.bind(null,
        /*! ./counter-analytics/counter-analytics.module */
        "./src/app/counter-analytics/counter-analytics.module.ts")).then(function (m) {
          return m.CounterAnalyticsPageModule;
        });
      }
    }, {
      path: 'contribute',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | contribute-contribute-module */
        [__webpack_require__.e("common"), __webpack_require__.e("contribute-contribute-module")]).then(__webpack_require__.bind(null,
        /*! ./contribute/contribute.module */
        "./src/app/contribute/contribute.module.ts")).then(function (m) {
          return m.ContributePageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./settings/settings.module */
        "./src/app/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      },
      resolve: {
        appState: _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__["AppStateRepositoryService"]
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | help-help-module */
        [__webpack_require__.e("common"), __webpack_require__.e("help-help-module")]).then(__webpack_require__.bind(null,
        /*! ./help/help.module */
        "./src/app/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'fullscreen-counter/:type/:counter-id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | fullscreen-counter-fullscreen-counter-module */
        "fullscreen-counter-fullscreen-counter-module").then(__webpack_require__.bind(null,
        /*! ./fullscreen-counter/fullscreen-counter.module */
        "./src/app/fullscreen-counter/fullscreen-counter.module.ts")).then(function (m) {
          return m.FullscreenCounterPageModule;
        });
      },
      resolve: {
        counter: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_3__["CounterRepositoryService"]
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/app-state.service */
    "./src/app/services/app-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_ion_menu_toggle_9_ion_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 8);
      }

      if (rf & 2) {
        var p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", p_r3.icon);
      }
    }

    function AppComponent_ion_menu_toggle_9_ion_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 9);
      }

      if (rf & 2) {
        var p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r3.src);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function AppComponent_ion_menu_toggle_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-menu-toggle", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ion_menu_toggle_9_ion_icon_2_Template, 1, 1, "ion-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ion_menu_toggle_9_ion_icon_3_Template, 1, 1, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerDirection", "root")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, p_r3.url));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.src);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.title, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, appStateService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appStateService = appStateService;
        this.appPages = [{
          title: 'Count',
          icon: 'add-circle',
          url: '/counters'
        }, {
          title: 'Contribute',
          icon: 'heart',
          url: '/contribute'
        }, {
          title: 'Help',
          icon: 'help-circle',
          url: '/help'
        }, {
          title: 'Settings',
          icon: 'settings',
          url: '/settings'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.appStateService.update();
          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 1,
      consts: [["contentId", "main"], ["contentId", "main", "type", "overlay", "swipeGesture", "false"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["id", "main"], ["auto-hide", "false"], [3, "routerDirection", "routerLink"], ["slot", "start", 3, "name", 4, "ngIf"], ["slot", "start", 3, "src", 4, "ngIf"], ["slot", "start", 3, "name"], ["slot", "start", 3, "src"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-split-pane", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_ion_menu_toggle_9_Template, 6, 7, "ion-menu-toggle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-router-outlet", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appPages);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styleUrls: ['app.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }, {
          type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _models_model_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./models/model.module */
    "./src/app/models/model.module.ts");
    /* harmony import */


    var _services_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/services.module */
    "./src/app/services/services.module.ts");
    /* harmony import */


    var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./not-implemented/not-implemented.module */
    "./src/app/not-implemented/not-implemented.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _models_model_module__WEBPACK_IMPORTED_MODULE_9__["ModelModule"].forRoot(), _services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"].forRoot(), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_11__["NotImplementedModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _models_model_module__WEBPACK_IMPORTED_MODULE_9__["ModelModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_11__["NotImplementedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          entryComponents: [],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _models_model_module__WEBPACK_IMPORTED_MODULE_9__["ModelModule"].forRoot(), _services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"].forRoot(), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_11__["NotImplementedModule"].forRoot()],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/day-of-month-histogram/day-of-month-histogram.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/day-of-month-histogram/day-of-month-histogram.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DayOfMonthHistogramComponent */

  /***/
  function srcAppComponentsDayOfMonthHistogramDayOfMonthHistogramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayOfMonthHistogramComponent", function () {
      return DayOfMonthHistogramComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/counter-analytics.service */
    "./src/app/services/counter-analytics.service.ts");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var DayOfMonthHistogramComponent = /*#__PURE__*/function () {
      function DayOfMonthHistogramComponent(counterAnalyticsService) {
        _classCallCheck(this, DayOfMonthHistogramComponent);

        this.counterAnalyticsService = counterAnalyticsService;
        this.chart = {
          type: 'bar',
          height: 500,
          toolbar: {
            show: false
          }
        };
        this.series = [];
        this.plotOptions = {
          bar: {
            horizontal: false,
            columnWidth: '95%'
          }
        };
        this.xaxis = {
          type: 'numeric',
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
          labels: {
            formatter: function formatter(value, raw) {
              return 'Day ' + value;
            }
          },
          tooltip: {
            enabled: false
          },
          tickPlacement: 'on'
        };
        this.colors = ['#10dc60', '#f04141', '#ffce00'];
        this.dataLabels = {
          enabled: false
        };
      }

      _createClass(DayOfMonthHistogramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.series = [{
            name: 'Plus',
            data: this.counterAnalyticsService.extractHistogramData(this.counter, 'getDate', function (e) {
              return e.delta > 0;
            }, 31)
          }, {
            name: 'Minus',
            data: this.counterAnalyticsService.extractHistogramData(this.counter, 'getDate', function (e) {
              return e.delta < 0;
            }, 31)
          }];
        }
      }]);

      return DayOfMonthHistogramComponent;
    }();

    DayOfMonthHistogramComponent.ɵfac = function DayOfMonthHistogramComponent_Factory(t) {
      return new (t || DayOfMonthHistogramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]));
    };

    DayOfMonthHistogramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DayOfMonthHistogramComponent,
      selectors: [["app-day-of-month-histogram"]],
      inputs: {
        counter: "counter"
      },
      decls: 1,
      vars: 6,
      consts: [[3, "series", "chart", "plotOptions", "xaxis", "colors", "dataLabels"]],
      template: function DayOfMonthHistogramComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.series)("chart", ctx.chart)("plotOptions", ctx.plotOptions)("xaxis", ctx.xaxis)("colors", ctx.colors)("dataLabels", ctx.dataLabels);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF5LW9mLW1vbnRoLWhpc3RvZ3JhbS9kYXktb2YtbW9udGgtaGlzdG9ncmFtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayOfMonthHistogramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-day-of-month-histogram',
          templateUrl: './day-of-month-histogram.component.html',
          styleUrls: ['./day-of-month-histogram.component.scss']
        }]
      }], function () {
        return [{
          type: _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/day-of-week-histogram/day-of-week-histogram.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/day-of-week-histogram/day-of-week-histogram.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DayOfWeekHistogramComponent */

  /***/
  function srcAppComponentsDayOfWeekHistogramDayOfWeekHistogramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayOfWeekHistogramComponent", function () {
      return DayOfWeekHistogramComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/counter-analytics.service */
    "./src/app/services/counter-analytics.service.ts");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var DayOfWeekHistogramComponent = /*#__PURE__*/function () {
      function DayOfWeekHistogramComponent(counterAnalyticsService) {
        _classCallCheck(this, DayOfWeekHistogramComponent);

        this.counterAnalyticsService = counterAnalyticsService;
        this.chart = {
          type: 'bar',
          height: 500,
          toolbar: {
            show: false
          }
        };
        this.series = [];
        this.plotOptions = {
          bar: {
            horizontal: true,
            columnWidth: '80%'
          }
        };
        this.xaxis = {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        };
        this.colors = ['#10dc60', '#f04141', '#ffce00'];
      }

      _createClass(DayOfWeekHistogramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var plusData = this.counterAnalyticsService.extractHistogramData(this.counter, 'getDay', function (e) {
            return e.delta > 0;
          }, 7); // make sunday last day

          plusData.push(plusData.shift());
          var minusData = this.counterAnalyticsService.extractHistogramData(this.counter, 'getDay', function (e) {
            return e.delta < 0;
          }, 7); // make sunday last day

          minusData.push(minusData.shift());
          this.series = [{
            name: 'Plus',
            data: plusData
          }, {
            name: 'Minus',
            data: minusData
          }];
        }
      }]);

      return DayOfWeekHistogramComponent;
    }();

    DayOfWeekHistogramComponent.ɵfac = function DayOfWeekHistogramComponent_Factory(t) {
      return new (t || DayOfWeekHistogramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]));
    };

    DayOfWeekHistogramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DayOfWeekHistogramComponent,
      selectors: [["app-day-of-week-histogram"]],
      inputs: {
        counter: "counter"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "series", "chart", "plotOptions", "xaxis", "colors"]],
      template: function DayOfWeekHistogramComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.series)("chart", ctx.chart)("plotOptions", ctx.plotOptions)("xaxis", ctx.xaxis)("colors", ctx.colors);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF5LW9mLXdlZWstaGlzdG9ncmFtL2RheS1vZi13ZWVrLWhpc3RvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayOfWeekHistogramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-day-of-week-histogram',
          templateUrl: './day-of-week-histogram.component.html',
          styleUrls: ['./day-of-week-histogram.component.scss']
        }]
      }], function () {
        return [{
          type: _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/hour-of-day-radar/hour-of-day-radar.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/hour-of-day-radar/hour-of-day-radar.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: HourOfDayRadarComponent */

  /***/
  function srcAppComponentsHourOfDayRadarHourOfDayRadarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HourOfDayRadarComponent", function () {
      return HourOfDayRadarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/counter-analytics.service */
    "./src/app/services/counter-analytics.service.ts");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var HourOfDayRadarComponent = /*#__PURE__*/function () {
      function HourOfDayRadarComponent(counterAnalyticsService) {
        _classCallCheck(this, HourOfDayRadarComponent);

        this.counterAnalyticsService = counterAnalyticsService;
        this.chart = {
          type: 'radar',
          height: 500,
          toolbar: {
            show: false
          }
        };
        this.series = [];
        this.xaxis = {
          categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        };
        this.colors = ['#10dc60', '#f04141', '#ffce00'];
        this.markers = {
          size: 0
        };
      }

      _createClass(HourOfDayRadarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.series = [{
            name: 'Plus',
            data: this.counterAnalyticsService.extractHistogramData(this.counter, 'getHours', function (e) {
              return e.delta > 0;
            }, 24)
          }, {
            name: 'Minus',
            data: this.counterAnalyticsService.extractHistogramData(this.counter, 'getHours', function (e) {
              return e.delta < 0;
            }, 24)
          }];
        }
      }]);

      return HourOfDayRadarComponent;
    }();

    HourOfDayRadarComponent.ɵfac = function HourOfDayRadarComponent_Factory(t) {
      return new (t || HourOfDayRadarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]));
    };

    HourOfDayRadarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HourOfDayRadarComponent,
      selectors: [["app-hour-of-day-radar"]],
      inputs: {
        counter: "counter"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "series", "chart", "xaxis", "colors", "markers"]],
      template: function HourOfDayRadarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.series)("chart", ctx.chart)("xaxis", ctx.xaxis)("colors", ctx.colors)("markers", ctx.markers);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG91ci1vZi1kYXktcmFkYXIvaG91ci1vZi1kYXktcmFkYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HourOfDayRadarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hour-of-day-radar',
          templateUrl: './hour-of-day-radar.component.html',
          styleUrls: ['./hour-of-day-radar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: PlusMinusTotalsPieChartComponent */

  /***/
  function srcAppComponentsPlusMinusTotalsPieChartPlusMinusTotalsPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlusMinusTotalsPieChartComponent", function () {
      return PlusMinusTotalsPieChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/counter-analytics.service */
    "./src/app/services/counter-analytics.service.ts");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var PlusMinusTotalsPieChartComponent = /*#__PURE__*/function () {
      function PlusMinusTotalsPieChartComponent(counterAnalyticsService) {
        _classCallCheck(this, PlusMinusTotalsPieChartComponent);

        this.counterAnalyticsService = counterAnalyticsService;
        this.chart = {
          type: 'pie',
          height: 500,
          toolbar: {
            show: false
          }
        };
        this.series = [];
        this.labels = ['Plus', 'Minus'];
        this.colors = ['#10dc60', '#f04141', '#ffce00'];
        this.dataLabels = {};
        this.legend = {
          position: 'bottom'
        };
      }

      _createClass(PlusMinusTotalsPieChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var data = this.counterAnalyticsService.extractTotalData(this.counter);
          this.series = [data.totals.positive, data.totals.negative];
        }
      }]);

      return PlusMinusTotalsPieChartComponent;
    }();

    PlusMinusTotalsPieChartComponent.ɵfac = function PlusMinusTotalsPieChartComponent_Factory(t) {
      return new (t || PlusMinusTotalsPieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]));
    };

    PlusMinusTotalsPieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlusMinusTotalsPieChartComponent,
      selectors: [["app-plus-minus-totals-pie-chart"]],
      inputs: {
        counter: "counter"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "chart", "series", "labels", "colors", "legend"]],
      template: function PlusMinusTotalsPieChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.chart)("series", ctx.series)("labels", ctx.labels)("colors", ctx.colors)("legend", ctx.legend);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGx1cy1taW51cy10b3RhbHMtcGllLWNoYXJ0L3BsdXMtbWludXMtdG90YWxzLXBpZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusMinusTotalsPieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plus-minus-totals-pie-chart',
          templateUrl: './plus-minus-totals-pie-chart.component.html',
          styleUrls: ['./plus-minus-totals-pie-chart.component.scss']
        }]
      }], function () {
        return [{
          type: _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/year-heatmap/year-heatmap.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/year-heatmap/year-heatmap.component.ts ***!
    \*******************************************************************/

  /*! exports provided: YearHeatmapComponent */

  /***/
  function srcAppComponentsYearHeatmapYearHeatmapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YearHeatmapComponent", function () {
      return YearHeatmapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/counter-analytics.service */
    "./src/app/services/counter-analytics.service.ts");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var YearHeatmapComponent = /*#__PURE__*/function () {
      function YearHeatmapComponent(counterAnalyticsService) {
        _classCallCheck(this, YearHeatmapComponent);

        this.counterAnalyticsService = counterAnalyticsService;
        this.chart = {
          type: 'heatmap',
          height: 500,
          toolbar: {
            show: false
          }
        };
        this.series = [];
        this.xaxis = {
          type: 'numeric',
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
          labels: {
            formatter: function formatter(value, raw) {
              return 'Day ' + value;
            }
          },
          tooltip: {
            enabled: false
          },
          tickPlacement: 'on'
        };
        this.colors = ['#10dc60'];
        this.dataLabels = {
          enabled: false
        };
      }

      _createClass(YearHeatmapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.series = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'].map(function (v, i) {
            return {
              name: v,
              data: _this2.counterAnalyticsService.extractHistogramData(_this2.counter, 'getDate', function (e) {
                return e.delta > 0 && e.timestamp.getMonth() === i;
              }, 31)
            };
          }).reverse();
        }
      }]);

      return YearHeatmapComponent;
    }();

    YearHeatmapComponent.ɵfac = function YearHeatmapComponent_Factory(t) {
      return new (t || YearHeatmapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]));
    };

    YearHeatmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: YearHeatmapComponent,
      selectors: [["app-year-heatmap"]],
      inputs: {
        counter: "counter"
      },
      decls: 1,
      vars: 5,
      consts: [[3, "series", "chart", "colors", "dataLabels", "xaxis"]],
      template: function YearHeatmapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.series)("chart", ctx.chart)("colors", ctx.colors)("dataLabels", ctx.dataLabels)("xaxis", ctx.xaxis);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWVhci1oZWF0bWFwL3llYXItaGVhdG1hcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearHeatmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-year-heatmap',
          templateUrl: './year-heatmap.component.html',
          styleUrls: ['./year-heatmap.component.scss']
        }]
      }], function () {
        return [{
          type: _services_counter_analytics_service__WEBPACK_IMPORTED_MODULE_1__["CounterAnalyticsService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/analytics-item-repository.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/models/analytics-item-repository.service.ts ***!
    \*************************************************************/

  /*! exports provided: AnalyticsItemRepositoryService */

  /***/
  function srcAppModelsAnalyticsItemRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsItemRepositoryService", function () {
      return AnalyticsItemRepositoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model-repository.service */
    "./src/app/models/model-repository.service.ts");
    /* harmony import */


    var _analytics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./analytics-item */
    "./src/app/models/analytics-item.ts");
    /* harmony import */


    var _components_plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component */
    "./src/app/components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component.ts");
    /* harmony import */


    var _components_day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/day-of-week-histogram/day-of-week-histogram.component */
    "./src/app/components/day-of-week-histogram/day-of-week-histogram.component.ts");
    /* harmony import */


    var _components_day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/day-of-month-histogram/day-of-month-histogram.component */
    "./src/app/components/day-of-month-histogram/day-of-month-histogram.component.ts");
    /* harmony import */


    var _components_hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/hour-of-day-radar/hour-of-day-radar.component */
    "./src/app/components/hour-of-day-radar/hour-of-day-radar.component.ts");
    /* harmony import */


    var _components_year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/year-heatmap/year-heatmap.component */
    "./src/app/components/year-heatmap/year-heatmap.component.ts");

    var AnalyticsItemRepositoryService = /*#__PURE__*/function (_model_repository_ser) {
      _inherits(AnalyticsItemRepositoryService, _model_repository_ser);

      var _super2 = _createSuper(AnalyticsItemRepositoryService);

      function AnalyticsItemRepositoryService() {
        _classCallCheck(this, AnalyticsItemRepositoryService);

        return _super2.apply(this, arguments);
      }

      _createClass(AnalyticsItemRepositoryService, [{
        key: "loadAll",
        value: function loadAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.save(new _analytics_item__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItem"](_components_plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PlusMinusTotalsPieChartComponent"], {
                      name: 'Plus Minus Totals Pie Chart',
                      description: 'Total plus and minus as a pie chart',
                      icon: 'pie-chart-outline',
                      url: 'plus-minus-totals-pie-chart'
                    }));
                    this.save(new _analytics_item__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItem"](_components_day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_5__["DayOfWeekHistogramComponent"], {
                      name: 'Day of Week Histogram',
                      description: 'Total grouped by day of the week as a bar chart',
                      icon: 'bar-chart-outline',
                      url: 'day-of-week-histogram'
                    }));
                    this.save(new _analytics_item__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItem"](_components_day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_6__["DayOfMonthHistogramComponent"], {
                      name: 'Day of Month Histogram',
                      description: 'Total grouped by day of the month as a bar chart',
                      icon: 'bar-chart-outline',
                      url: 'day-of-month-histogram'
                    }));
                    this.save(new _analytics_item__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItem"](_components_hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_7__["HourOfDayRadarComponent"], {
                      name: 'Hour of Day Radar',
                      description: 'Total grouped by hour of the day as radar chart',
                      icon: 'time-outline',
                      url: 'hour-of-day-radar'
                    }));
                    this.save(new _analytics_item__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItem"](_components_year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_8__["YearHeatmapComponent"], {
                      name: 'Year Heatmap',
                      description: 'Total for each day of the year on a two dimensional heatmap',
                      icon: 'calendar-outline',
                      url: 'year-heatmap'
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AnalyticsItemRepositoryService;
    }(_model_repository_service__WEBPACK_IMPORTED_MODULE_2__["VolatileModelRepositoryService"]);

    AnalyticsItemRepositoryService.ɵfac = function AnalyticsItemRepositoryService_Factory(t) {
      return ɵAnalyticsItemRepositoryService_BaseFactory(t || AnalyticsItemRepositoryService);
    };

    AnalyticsItemRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnalyticsItemRepositoryService,
      factory: AnalyticsItemRepositoryService.ɵfac,
      providedIn: 'root'
    });

    var ɵAnalyticsItemRepositoryService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AnalyticsItemRepositoryService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalyticsItemRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/analytics-item.ts":
  /*!******************************************!*\
    !*** ./src/app/models/analytics-item.ts ***!
    \******************************************/

  /*! exports provided: AnalyticsItem */

  /***/
  function srcAppModelsAnalyticsItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsItem", function () {
      return AnalyticsItem;
    });
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./model */
    "./src/app/models/model.ts");

    var AnalyticsItem = /*#__PURE__*/function (_model__WEBPACK_IMPOR) {
      _inherits(AnalyticsItem, _model__WEBPACK_IMPOR);

      var _super3 = _createSuper(AnalyticsItem);

      function AnalyticsItem(component, info) {
        var _this3;

        _classCallCheck(this, AnalyticsItem);

        _this3 = _super3.call(this);
        _this3.component = component;
        _this3.info = info;
        _this3.id = _this3.info.url;
        return _this3;
      }

      return AnalyticsItem;
    }(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]);
    /***/

  },

  /***/
  "./src/app/models/app-state-repository.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/models/app-state-repository.service.ts ***!
    \********************************************************/

  /*! exports provided: AppStateRepositoryService */

  /***/
  function srcAppModelsAppStateRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStateRepositoryService", function () {
      return AppStateRepositoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model-repository.service */
    "./src/app/models/model-repository.service.ts");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-state */
    "./src/app/models/app-state.ts");

    var AppStateRepositoryService = /*#__PURE__*/function (_model_repository_ser2) {
      _inherits(AppStateRepositoryService, _model_repository_ser2);

      var _super4 = _createSuper(AppStateRepositoryService);

      function AppStateRepositoryService() {
        _classCallCheck(this, AppStateRepositoryService);

        return _super4.apply(this, arguments);
      }

      _createClass(AppStateRepositoryService, [{
        key: "init",
        value: function init(MCtor) {
          var _this4 = this;

          var _super = Object.create(null, {
            init: {
              get: function get() {
                return _get(_getPrototypeOf(AppStateRepositoryService.prototype), "init", _this4);
              }
            },
            deleteAll: {
              get: function get() {
                return _get(_getPrototypeOf(AppStateRepositoryService.prototype), "deleteAll", _this4);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _super.init.call(this, MCtor);

                  case 2:
                    // no matter how many app states were saved, only keep one.
                    this.appState = this.all[0] || new _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]();
                    _context2.next = 5;
                    return _super.deleteAll.call(this);

                  case 5:
                    _context2.next = 7;
                    return this.save(this.appState);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "save",
        value: function save(m) {
          var _this5 = this;

          var _super = Object.create(null, {
            save: {
              get: function get() {
                return _get(_getPrototypeOf(AppStateRepositoryService.prototype), "save", _this5);
              }
            }
          });

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.appState = m;
                    _context3.next = 3;
                    return _super.save.call(this, m);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "resolve",
        value: function resolve() {
          return this.state;
        }
      }, {
        key: "state",
        get: function get() {
          return this.appState;
        }
      }]);

      return AppStateRepositoryService;
    }(_model_repository_service__WEBPACK_IMPORTED_MODULE_2__["ModelRepositoryService"]);

    AppStateRepositoryService.ɵfac = function AppStateRepositoryService_Factory(t) {
      return ɵAppStateRepositoryService_BaseFactory(t || AppStateRepositoryService);
    };

    AppStateRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppStateRepositoryService,
      factory: AppStateRepositoryService.ɵfac,
      providedIn: 'root'
    });

    var ɵAppStateRepositoryService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AppStateRepositoryService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStateRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/app-state.ts":
  /*!*************************************!*\
    !*** ./src/app/models/app-state.ts ***!
    \*************************************/

  /*! exports provided: UpdateChannel, AppState */

  /***/
  function srcAppModelsAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateChannel", function () {
      return UpdateChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppState", function () {
      return AppState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! cerialize */
    "./node_modules/cerialize/index.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model */
    "./src/app/models/model.ts");

    var UpdateChannel;

    (function (UpdateChannel) {
      UpdateChannel["Production"] = "Production";
      UpdateChannel["Master"] = "Master";
      UpdateChannel["Disabled"] = "Disabled";
    })(UpdateChannel || (UpdateChannel = {}));

    var AppState = /*#__PURE__*/function (_model__WEBPACK_IMPOR2) {
      _inherits(AppState, _model__WEBPACK_IMPOR2);

      var _super5 = _createSuper(AppState);

      function AppState() {
        var _this6;

        _classCallCheck(this, AppState);

        _this6 = _super5.apply(this, arguments);
        _this6.disableNotImplemented = false;
        _this6.updateChannel = UpdateChannel.Production;
        _this6.swipeCounting = true;
        _this6.recordPosition = true;
        _this6.vibrate = true;
        _this6.directMonitization = true;
        _this6.developmentMode = false;
        return _this6;
      }

      return AppState;
    }(_model__WEBPACK_IMPORTED_MODULE_2__["Model"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "disableNotImplemented", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "updateChannel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "swipeCounting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "recordPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "vibrate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "directMonitization", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppState.prototype, "developmentMode", void 0);
    AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["inheritSerialization"])(_model__WEBPACK_IMPORTED_MODULE_2__["Model"])], AppState);
    /***/
  },

  /***/
  "./src/app/models/count-event-repository.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/models/count-event-repository.service.ts ***!
    \**********************************************************/

  /*! exports provided: CountEventRepositoryService */

  /***/
  function srcAppModelsCountEventRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountEventRepositoryService", function () {
      return CountEventRepositoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model-repository.service */
    "./src/app/models/model-repository.service.ts");

    var CountEventRepositoryService = /*#__PURE__*/function (_model_repository_ser3) {
      _inherits(CountEventRepositoryService, _model_repository_ser3);

      var _super6 = _createSuper(CountEventRepositoryService);

      function CountEventRepositoryService() {
        _classCallCheck(this, CountEventRepositoryService);

        return _super6.apply(this, arguments);
      }

      _createClass(CountEventRepositoryService, [{
        key: "getByCounter",
        value: function getByCounter(counter) {
          return this.all.filter(function (c) {
            return c.counterId === counter.id;
          });
        }
      }]);

      return CountEventRepositoryService;
    }(_model_repository_service__WEBPACK_IMPORTED_MODULE_1__["ModelRepositoryService"]);

    CountEventRepositoryService.ɵfac = function CountEventRepositoryService_Factory(t) {
      return ɵCountEventRepositoryService_BaseFactory(t || CountEventRepositoryService);
    };

    CountEventRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CountEventRepositoryService,
      factory: CountEventRepositoryService.ɵfac,
      providedIn: 'root'
    });

    var ɵCountEventRepositoryService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CountEventRepositoryService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountEventRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/count-event.ts":
  /*!***************************************!*\
    !*** ./src/app/models/count-event.ts ***!
    \***************************************/

  /*! exports provided: Position, CountEventType, CountEvent */

  /***/
  function srcAppModelsCountEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Position", function () {
      return Position;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountEventType", function () {
      return CountEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountEvent", function () {
      return CountEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! cerialize */
    "./node_modules/cerialize/index.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model */
    "./src/app/models/model.ts"); // From:
    // https://github.com/ionic-team/ionic-native/blob/master/src/@ionic-native/plugins/geolocation/index.ts#L7


    var Position = function Position() {
      _classCallCheck(this, Position);
    };

    var CountEventType;

    (function (CountEventType) {
      CountEventType["Change"] = "change";
      CountEventType["Reset"] = "reset";
    })(CountEventType || (CountEventType = {}));

    var CountEvent = /*#__PURE__*/function (_model__WEBPACK_IMPOR3) {
      _inherits(CountEvent, _model__WEBPACK_IMPOR3);

      var _super7 = _createSuper(CountEvent);

      function CountEvent(counterId, delta) {
        var _this7;

        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CountEventType.Change;
        var timestamp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Date();

        _classCallCheck(this, CountEvent);

        _this7 = _super7.call(this);
        _this7.counterId = counterId;
        _this7.delta = delta;
        _this7.position = position;
        _this7.type = type;
        _this7.timestamp = timestamp;
        return _this7;
      }

      return CountEvent;
    }(_model__WEBPACK_IMPORTED_MODULE_2__["Model"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CountEvent.prototype, "counterId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CountEvent.prototype, "delta", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Position)], CountEvent.prototype, "position", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CountEvent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserializeAs"])(Date), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CountEvent.prototype, "timestamp", void 0);
    CountEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["inheritSerialization"])(_model__WEBPACK_IMPORTED_MODULE_2__["Model"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Number, Position, Object, Date])], CountEvent);
    /***/
  },

  /***/
  "./src/app/models/counter-repository.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/models/counter-repository.service.ts ***!
    \******************************************************/

  /*! exports provided: CounterRepositoryService */

  /***/
  function srcAppModelsCounterRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterRepositoryService", function () {
      return CounterRepositoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model-repository.service */
    "./src/app/models/model-repository.service.ts");

    var CounterRepositoryService = /*#__PURE__*/function (_model_repository_ser4) {
      _inherits(CounterRepositoryService, _model_repository_ser4);

      var _super8 = _createSuper(CounterRepositoryService);

      function CounterRepositoryService() {
        _classCallCheck(this, CounterRepositoryService);

        return _super8.apply(this, arguments);
      }

      _createClass(CounterRepositoryService, [{
        key: "allSortBySortOrder",
        get: function get() {
          return this.all.sort(function (c1, c2) {
            return c1.sortOrder - c2.sortOrder;
          });
        }
      }]);

      return CounterRepositoryService;
    }(_model_repository_service__WEBPACK_IMPORTED_MODULE_1__["ModelRepositoryService"]);

    CounterRepositoryService.ɵfac = function CounterRepositoryService_Factory(t) {
      return ɵCounterRepositoryService_BaseFactory(t || CounterRepositoryService);
    };

    CounterRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CounterRepositoryService,
      factory: CounterRepositoryService.ɵfac,
      providedIn: 'root'
    });

    var ɵCounterRepositoryService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CounterRepositoryService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/counter.ts":
  /*!***********************************!*\
    !*** ./src/app/models/counter.ts ***!
    \***********************************/

  /*! exports provided: Counter */

  /***/
  function srcAppModelsCounterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Counter", function () {
      return Counter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! cerialize */
    "./node_modules/cerialize/index.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./model */
    "./src/app/models/model.ts");

    var Counter = /*#__PURE__*/function (_model__WEBPACK_IMPOR4) {
      _inherits(Counter, _model__WEBPACK_IMPOR4);

      var _super9 = _createSuper(Counter);

      function Counter() {
        var _this8;

        _classCallCheck(this, Counter);

        _this8 = _super9.apply(this, arguments);
        _this8.title = 'new Counter';
        _this8.count = 0;
        _this8.plusCount = 1;
        _this8.minusCount = 0;
        _this8.positiveLimit = 1;
        _this8.positiveLimitActive = false;
        _this8.negativeLimit = -1;
        _this8.negativeLimitActive = false;
        _this8.locked = false;
        _this8.sortOrder = 0;
        _this8.vibrate = true;
        return _this8;
      }

      return Counter;
    }(_model__WEBPACK_IMPORTED_MODULE_2__["Model"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "count", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "plusCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "minusCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "positiveLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "positiveLimitActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "negativeLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "negativeLimitActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "locked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "sortOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Counter.prototype, "vibrate", void 0);
    Counter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(cerialize__WEBPACK_IMPORTED_MODULE_1__["inheritSerialization"])(_model__WEBPACK_IMPORTED_MODULE_2__["Model"])], Counter);
    /***/
  },

  /***/
  "./src/app/models/model-repository.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/models/model-repository.service.ts ***!
    \****************************************************/

  /*! exports provided: ModelRepositoryService, VolatileModelRepositoryService */

  /***/
  function srcAppModelsModelRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelRepositoryService", function () {
      return ModelRepositoryService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolatileModelRepositoryService", function () {
      return VolatileModelRepositoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! cerialize */
    "./node_modules/cerialize/index.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_3__);
    /**
     * A generic ModelRepositoryService which stores models in a Ionic Storage.
     *
     * Ionic Storage is just a simple key/value storage, which means this will store
     * all the models information at the same place. This is obviously not ideal.
     * On the upside Ionic Storage is highly portable and should work on all devices
     * as well as in a web browser without cordova support.
     *
     * ModelRepositoryService implements basic separation of models using constructor names.
     */


    var ModelRepositoryService = /*#__PURE__*/function () {
      function ModelRepositoryService(storage) {
        _classCallCheck(this, ModelRepositoryService);

        this.storage = storage;
        this.models = {};
      }

      _createClass(ModelRepositoryService, [{
        key: "init",
        value: function init(MCtor) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // Because Typescript does not have type information available,
                    // at runtime we have to pass in here the constructor of M (MCtor).
                    this.MCtor = MCtor;
                    _context4.next = 3;
                    return this.loadAll();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "save",
        value: function save(m) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.models[m.id] = m;
                    _context5.next = 3;
                    return this.storage.set(this.MCtor.name + m.id, Object(cerialize__WEBPACK_IMPORTED_MODULE_3__["Serialize"])(m, this.MCtor));

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(m) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.storage.remove(this.MCtor.name + m.id);

                  case 2:
                    delete this.models[m.id];

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            var modelsToDelete;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    modelsToDelete = [];
                    _context8.next = 3;
                    return this.storage.forEach(function (v, k) {
                      // only delete instance of this class
                      if (k.startsWith(_this9.MCtor.name)) {
                        modelsToDelete.push(Object(cerialize__WEBPACK_IMPORTED_MODULE_3__["Deserialize"])(v, _this9.MCtor));
                      }
                    });

                  case 3:
                    _context8.next = 5;
                    return Promise.all(modelsToDelete.map(function (model) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                delete this.models[model.id];
                                _context7.next = 3;
                                return this.storage.remove(this.MCtor.name + model.id);

                              case 3:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }));

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.models[id];
        }
      }, {
        key: "resolve",
        value: function resolve(route) {
          return this.getById(route.paramMap.get(this.MCtor.name.toLowerCase() + '-id'));
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storage.forEach(function (v, k) {
                      // only load instance of this class
                      if (k.startsWith(_this10.MCtor.name)) {
                        var model = Object(cerialize__WEBPACK_IMPORTED_MODULE_3__["Deserialize"])(v, _this10.MCtor);
                        _this10.models[model.id] = model;
                      }
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "all",
        get: function get() {
          return Object.values(this.models);
        }
      }]);

      return ModelRepositoryService;
    }();

    ModelRepositoryService.ɵfac = function ModelRepositoryService_Factory(t) {
      return new (t || ModelRepositoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    ModelRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ModelRepositoryService,
      factory: ModelRepositoryService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      }, null);
    })();
    /**
     * An implementation of the ModelRepositoryService which does not persist
     * any data.
     */


    var VolatileModelRepositoryService = /*#__PURE__*/function (_ModelRepositoryServi) {
      _inherits(VolatileModelRepositoryService, _ModelRepositoryServi);

      var _super10 = _createSuper(VolatileModelRepositoryService);

      function VolatileModelRepositoryService() {
        _classCallCheck(this, VolatileModelRepositoryService);

        return _super10.apply(this, arguments);
      }

      _createClass(VolatileModelRepositoryService, [{
        key: "save",
        value: function save(m) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.models[m.id] = m;

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(m) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    delete this.models[m.id];

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.models = {};

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }]);

      return VolatileModelRepositoryService;
    }(ModelRepositoryService);

    VolatileModelRepositoryService.ɵfac = function VolatileModelRepositoryService_Factory(t) {
      return ɵVolatileModelRepositoryService_BaseFactory(t || VolatileModelRepositoryService);
    };

    VolatileModelRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VolatileModelRepositoryService,
      factory: VolatileModelRepositoryService.ɵfac
    });

    var ɵVolatileModelRepositoryService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](VolatileModelRepositoryService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VolatileModelRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/model.module.ts":
  /*!****************************************!*\
    !*** ./src/app/models/model.module.ts ***!
    \****************************************/

  /*! exports provided: initializeModelServices, ModelModule */

  /***/
  function srcAppModelsModelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeModelServices", function () {
      return initializeModelServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelModule", function () {
      return ModelModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");
    /* harmony import */


    var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-state */
    "./src/app/models/app-state.ts");
    /* harmony import */


    var _analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./analytics-item-repository.service */
    "./src/app/models/analytics-item-repository.service.ts");
    /* harmony import */


    var _analytics_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./analytics-item */
    "./src/app/models/analytics-item.ts");
    /* harmony import */


    var _counter_repository_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./counter-repository.service */
    "./src/app/models/counter-repository.service.ts");
    /* harmony import */


    var _counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var _count_event_repository_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./count-event-repository.service */
    "./src/app/models/count-event-repository.service.ts");
    /* harmony import */


    var _count_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./count-event */
    "./src/app/models/count-event.ts");

    function initializeModelServices(appStateRepositoryService, analyticsItemRepositoryService, counterRepositoryService, countEventRepositoryService) {
      var _this11 = this;

      return function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return Promise.all([appStateRepositoryService.init(_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]), analyticsItemRepositoryService.init(_analytics_item__WEBPACK_IMPORTED_MODULE_6__["AnalyticsItem"]), counterRepositoryService.init(_counter__WEBPACK_IMPORTED_MODULE_8__["Counter"]), countEventRepositoryService.init(_count_event__WEBPACK_IMPORTED_MODULE_10__["CountEvent"])]);

                case 2:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));
      };
    }

    var ModelModule = /*#__PURE__*/function () {
      function ModelModule() {
        _classCallCheck(this, ModelModule);
      }

      _createClass(ModelModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: ModelModule,
            providers: [_app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__["AppStateRepositoryService"], _analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsItemRepositoryService"], _counter_repository_service__WEBPACK_IMPORTED_MODULE_7__["CounterRepositoryService"], _count_event_repository_service__WEBPACK_IMPORTED_MODULE_9__["CountEventRepositoryService"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
              useFactory: initializeModelServices,
              deps: [_app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__["AppStateRepositoryService"], _analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_5__["AnalyticsItemRepositoryService"], _counter_repository_service__WEBPACK_IMPORTED_MODULE_7__["CounterRepositoryService"], _count_event_repository_service__WEBPACK_IMPORTED_MODULE_9__["CountEventRepositoryService"]],
              multi: true
            }]
          };
        }
      }]);

      return ModelModule;
    }();

    ModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ModelModule
    });
    ModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ModelModule_Factory(t) {
        return new (t || ModelModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModelModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/model.ts":
  /*!*********************************!*\
    !*** ./src/app/models/model.ts ***!
    \*********************************/

  /*! exports provided: Model */

  /***/
  function srcAppModelsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Model", function () {
      return Model;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! cerialize */
    "./node_modules/cerialize/index.js");
    /* harmony import */


    var cerialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cerialize__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var Model = function Model() {
      _classCallCheck(this, Model);

      this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([cerialize__WEBPACK_IMPORTED_MODULE_1__["autoserialize"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Model.prototype, "id", void 0);
    /***/
  },

  /***/
  "./src/app/not-implemented/not-implemented-modal.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/not-implemented/not-implemented-modal.page.ts ***!
    \***************************************************************/

  /*! exports provided: NotImplementedModalPage */

  /***/
  function srcAppNotImplementedNotImplementedModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotImplementedModalPage", function () {
      return NotImplementedModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/app-state.service */
    "./src/app/services/app-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NotImplementedModalPage_ion_item_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Summary");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.description);
      }
    }

    function NotImplementedModalPage_ion_item_group_13_ion_item_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotImplementedModalPage_ion_item_group_13_ion_item_13_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r19.openIssueOnIssueHunt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "IssueHunt");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "... open a bounty on IssueHunt");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function NotImplementedModalPage_ion_item_group_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Support ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You can help it grow by ... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotImplementedModalPage_ion_item_group_13_Template_ion_item_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.openIssueOnGithub();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Github");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "... voting on Github");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotImplementedModalPage_ion_item_group_13_ion_item_13_Template, 8, 0, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.appState.directMonitization);
      }
    }

    var NotImplementedModalPage = /*#__PURE__*/function () {
      function NotImplementedModalPage(modalController, iab, appStateService) {
        _classCallCheck(this, NotImplementedModalPage);

        this.modalController = modalController;
        this.iab = iab;
        this.appStateService = appStateService;
        this.appState = this.appStateService.appState;
      }

      _createClass(NotImplementedModalPage, [{
        key: "dismissModal",
        value: function dismissModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.modalController.dismiss();

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "openIssueOnGithub",
        value: function openIssueOnGithub() {
          this.iab.create("".concat(NotImplementedModalPage.GITHUB_URL, "/").concat(NotImplementedModalPage.PROJECT_NAME, "/issues/").concat(this.issueId));
        }
      }, {
        key: "openIssueOnIssueHunt",
        value: function openIssueOnIssueHunt() {
          this.iab.create("".concat(NotImplementedModalPage.ISSUEHUNT_URL, "/r/").concat(NotImplementedModalPage.PROJECT_NAME, "/issues/").concat(this.issueId));
        }
      }, {
        key: "disableNotImplemented",
        value: function disableNotImplemented() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.appStateService.setDisableNotImplemented(true);

                  case 2:
                    this.modalController.dismiss();

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }]);

      return NotImplementedModalPage;
    }();

    NotImplementedModalPage.GITHUB_URL = 'https://github.com';
    NotImplementedModalPage.ISSUEHUNT_URL = 'https://issuehunt.io';
    NotImplementedModalPage.PROJECT_NAME = 'Enteee/count';

    NotImplementedModalPage.ɵfac = function NotImplementedModalPage_Factory(t) {
      return new (t || NotImplementedModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"]));
    };

    NotImplementedModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotImplementedModalPage,
      selectors: [["app-not-implemented-modal"]],
      inputs: {
        issueId: "issueId",
        description: "description"
      },
      decls: 23,
      vars: 2,
      consts: [["slot", "start"], [3, "click"], ["name", "arrow-back"], ["name", "construct-outline"], [4, "ngIf"], ["slot", "start", "name", "construct-outline"], ["slot", "end", 3, "ionChange"], ["position", "stacked"], ["button", "", 3, "click"], ["slot", "start", "name", "logo-github"], ["button", "", 3, "click", 4, "ngIf"], ["src", "./assets/issuehunt.png"]],
      template: function NotImplementedModalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotImplementedModalPage_Template_ion_button_click_3_listener() {
            return ctx.dismissModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Not Implemented ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "This feature was not implemented, yet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NotImplementedModalPage_ion_item_12_Template, 5, 1, "ion-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotImplementedModalPage_ion_item_group_13_Template, 14, 1, "ion-item-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " If you are not interested in previews, you can also disable all not implemented feautres: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Disable not implemented");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function NotImplementedModalPage_Template_ion_checkbox_ionChange_22_listener() {
            return ctx.disableNotImplemented();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.issueId);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1pbXBsZW1lbnRlZC9ub3QtaW1wbGVtZW50ZWQtbW9kYWwucGFnZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotImplementedModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-not-implemented-modal',
          templateUrl: './not-implemented-modal.page.html',
          styleUrls: ['./not-implemented-modal.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
        }, {
          type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"]
        }];
      }, {
        issueId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/not-implemented/not-implemented.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/not-implemented/not-implemented.component.ts ***!
    \**************************************************************/

  /*! exports provided: NotImplementedComponent */

  /***/
  function srcAppNotImplementedNotImplementedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotImplementedComponent", function () {
      return NotImplementedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");
    /* harmony import */


    var _not_implemented__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-implemented */
    "./src/app/not-implemented/not-implemented.ts");

    var _c0 = ["*"];

    var NotImplementedComponent = /*#__PURE__*/function (_not_implemented__WEB) {
      _inherits(NotImplementedComponent, _not_implemented__WEB);

      var _super11 = _createSuper(NotImplementedComponent);

      /**
       * This contructor is here because the base class (NotImplemented)
       * does not have a @Directive / @Component annotation, which is required
       * for dependency injection as of angular 9.
       * For this reason we provide here our own dummy constructor which
       * just calls super()
       */
      function NotImplementedComponent(renderer, elementRef, modalController, appStateRepositoryService) {
        _classCallCheck(this, NotImplementedComponent);

        return _super11.call(this, renderer, elementRef, modalController, appStateRepositoryService);
      }

      return NotImplementedComponent;
    }(_not_implemented__WEBPACK_IMPORTED_MODULE_3__["NotImplemented"]);

    NotImplementedComponent.ɵfac = function NotImplementedComponent_Factory(t) {
      return new (t || NotImplementedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__["AppStateRepositoryService"]));
    };

    NotImplementedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotImplementedComponent,
      selectors: [["app-not-implemented"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function NotImplementedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1pbXBsZW1lbnRlZC9ub3QtaW1wbGVtZW50ZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotImplementedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-implemented',
          templateUrl: './not-implemented.component.html',
          styleUrls: ['./not-implemented.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__["AppStateRepositoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-implemented/not-implemented.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/not-implemented/not-implemented.directive.ts ***!
    \**************************************************************/

  /*! exports provided: NotImplementedDirective */

  /***/
  function srcAppNotImplementedNotImplementedDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotImplementedDirective", function () {
      return NotImplementedDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");
    /* harmony import */


    var _not_implemented__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-implemented */
    "./src/app/not-implemented/not-implemented.ts");

    var NotImplementedDirective = /*#__PURE__*/function (_not_implemented__WEB2) {
      _inherits(NotImplementedDirective, _not_implemented__WEB2);

      var _super12 = _createSuper(NotImplementedDirective);

      /**
       * This contructor is here because the base class (NotImplemented)
       * does not have a @Directive / @Component annotation, which is required
       * for dependency injection as of angular 9.
       * For this reason we provide here our own dummy constructor which
       * just calls super()
       */
      function NotImplementedDirective(renderer, elementRef, modalController, appStateRepositoryService) {
        _classCallCheck(this, NotImplementedDirective);

        return _super12.call(this, renderer, elementRef, modalController, appStateRepositoryService);
      }

      return NotImplementedDirective;
    }(_not_implemented__WEBPACK_IMPORTED_MODULE_3__["NotImplemented"]);

    NotImplementedDirective.ɵfac = function NotImplementedDirective_Factory(t) {
      return new (t || NotImplementedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__["AppStateRepositoryService"]));
    };

    NotImplementedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NotImplementedDirective,
      selectors: [["", "appNotImplemented", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotImplementedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appNotImplemented]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_2__["AppStateRepositoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-implemented/not-implemented.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/not-implemented/not-implemented.module.ts ***!
    \***********************************************************/

  /*! exports provided: NotImplementedModule */

  /***/
  function srcAppNotImplementedNotImplementedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotImplementedModule", function () {
      return NotImplementedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _not_implemented_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-implemented.component */
    "./src/app/not-implemented/not-implemented.component.ts");
    /* harmony import */


    var _not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-implemented-modal.page */
    "./src/app/not-implemented/not-implemented-modal.page.ts");
    /* harmony import */


    var _not_implemented_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./not-implemented.directive */
    "./src/app/not-implemented/not-implemented.directive.ts");

    var NotImplementedModule = /*#__PURE__*/function () {
      function NotImplementedModule() {
        _classCallCheck(this, NotImplementedModule);
      }

      _createClass(NotImplementedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: NotImplementedModule,
            providers: []
          };
        }
      }]);

      return NotImplementedModule;
    }();

    NotImplementedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotImplementedModule
    });
    NotImplementedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotImplementedModule_Factory(t) {
        return new (t || NotImplementedModule)();
      },
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotImplementedModule, {
        declarations: [_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["NotImplementedComponent"], _not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModalPage"], _not_implemented_directive__WEBPACK_IMPORTED_MODULE_7__["NotImplementedDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["NotImplementedComponent"], _not_implemented_directive__WEBPACK_IMPORTED_MODULE_7__["NotImplementedDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotImplementedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["NotImplementedComponent"], _not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModalPage"], _not_implemented_directive__WEBPACK_IMPORTED_MODULE_7__["NotImplementedDirective"]],
          entryComponents: [_not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModalPage"]],
          exports: [_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["NotImplementedComponent"], _not_implemented_directive__WEBPACK_IMPORTED_MODULE_7__["NotImplementedDirective"]],
          providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-implemented/not-implemented.ts":
  /*!****************************************************!*\
    !*** ./src/app/not-implemented/not-implemented.ts ***!
    \****************************************************/

  /*! exports provided: NotImplemented */

  /***/
  function srcAppNotImplementedNotImplementedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotImplemented", function () {
      return NotImplemented;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-implemented-modal.page */
    "./src/app/not-implemented/not-implemented-modal.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");

    var NotImplemented = /*#__PURE__*/function () {
      function NotImplemented(renderer, elementRef, modalController, appStateRepositoryService) {
        _classCallCheck(this, NotImplemented);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.modalController = modalController;
        this.appStateRepositoryService = appStateRepositoryService;
        this.on = 'click';
        this.alwaysDisplay = false;
        this.styleDisplay = this.elementRef.nativeElement.style.display;
        this.appState = this.appStateRepositoryService.state;
      }

      _createClass(NotImplemented, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.renderer.listen(this.elementRef.nativeElement, this.on, function (e) {
            return _this12.onEvent(e);
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          // Hide this element if the user has chosen to hide not implemented features
          if (!this.alwaysDisplay) {
            this.elementRef.nativeElement.style.display = this.appState.disableNotImplemented ? 'none' : this.styleDisplay;
          }
        }
      }, {
        key: "onEvent",
        value: function onEvent(event) {
          if (!this.appState.disableNotImplemented) {
            this.presentModal();
          }
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.modalController.create({
                      component: _not_implemented_modal_page__WEBPACK_IMPORTED_MODULE_2__["NotImplementedModalPage"],
                      componentProps: {
                        issueId: this.issueId,
                        description: this.description
                      }
                    });

                  case 2:
                    this.modal = _context17.sent;
                    _context17.next = 5;
                    return this.modal.present();

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return NotImplemented;
    }();

    NotImplemented.ɵfac = function NotImplemented_Factory(t) {
      return new (t || NotImplemented)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_4__["AppStateRepositoryService"]));
    };

    NotImplemented.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NotImplemented,
      inputs: {
        issueId: "issueId",
        description: "description",
        on: "on",
        alwaysDisplay: "alwaysDisplay"
      }
    });
    /***/
  },

  /***/
  "./src/app/services/app-state.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/app-state.service.ts ***!
    \***********************************************/

  /*! exports provided: AppStateService */

  /***/
  function srcAppServicesAppStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStateService", function () {
      return AppStateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! cordova-plugin-ionic/dist/ngx */
    "./node_modules/cordova-plugin-ionic/__ivy_ngcc__/dist/ngx/ngx/index.js");
    /* harmony import */


    var _position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./position.service */
    "./src/app/services/position.service.ts");
    /* harmony import */


    var _models_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-state */
    "./src/app/models/app-state.ts");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");

    var AppStateService = /*#__PURE__*/function () {
      function AppStateService(appStateRepositoryService, positionService, deploy) {
        _classCallCheck(this, AppStateService);

        this.appStateRepositoryService = appStateRepositoryService;
        this.positionService = positionService;
        this.deploy = deploy;
      }

      _createClass(AppStateService, [{
        key: "setSwipeCounting",
        value: function setSwipeCounting(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var appState;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.swipeCounting = v;
                    _context18.next = 4;
                    return this.appStateRepositoryService.save(appState);

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "setVibrate",
        value: function setVibrate(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var appState;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.vibrate = v;
                    _context19.next = 4;
                    return this.appStateRepositoryService.save(appState);

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "setRecordPosition",
        value: function setRecordPosition(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var appState;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.recordPosition = v; // get position once in order to trigger user notification:

                    _context20.prev = 2;
                    _context20.next = 5;
                    return this.positionService.getPosition();

                  case 5:
                    _context20.next = 13;
                    break;

                  case 7:
                    _context20.prev = 7;
                    _context20.t0 = _context20["catch"](2);
                    appState.recordPosition = false;
                    _context20.next = 12;
                    return this.appStateRepositoryService.save(appState);

                  case 12:
                    return _context20.abrupt("return", Promise.reject(_context20.t0));

                  case 13:
                    _context20.next = 15;
                    return this.appStateRepositoryService.save(appState);

                  case 15:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this, [[2, 7]]);
          }));
        }
      }, {
        key: "setDisableNotImplemented",
        value: function setDisableNotImplemented(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var appState;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.disableNotImplemented = v;
                    _context21.next = 4;
                    return this.appStateRepositoryService.save(appState);

                  case 4:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "setUpdateChannel",
        value: function setUpdateChannel(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var appState;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.updateChannel = v;
                    _context22.next = 4;
                    return this.appStateRepositoryService.save(appState);

                  case 4:
                    _context22.next = 6;
                    return this.deploy.configure({
                      updateMethod: appState.updateChannel === _models_app_state__WEBPACK_IMPORTED_MODULE_4__["UpdateChannel"].Disabled ? 'none' : 'background',
                      channel: v
                    });

                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "update",
        value: function update() {
          var updateMethod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'background';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var appState;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    _context23.next = 3;
                    return this.setUpdateChannel(appState.updateChannel);

                  case 3:
                    if (!(appState.updateChannel !== _models_app_state__WEBPACK_IMPORTED_MODULE_4__["UpdateChannel"].Disabled)) {
                      _context23.next = 6;
                      break;
                    }

                    _context23.next = 6;
                    return this.deploy.sync({
                      updateMethod: updateMethod
                    });

                  case 6:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "setDevelopmentMode",
        value: function setDevelopmentMode(v) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var appState;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    appState = this.appStateRepositoryService.state;
                    appState.developmentMode = v;
                    _context24.next = 4;
                    return this.appStateRepositoryService.save(appState);

                  case 4:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "appState",
        get: function get() {
          return this.appStateRepositoryService.state;
        }
      }]);

      return AppStateService;
    }();

    AppStateService.ɵfac = function AppStateService_Factory(t) {
      return new (t || AppStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_5__["AppStateRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__["Deploy"]));
    };

    AppStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppStateService,
      factory: AppStateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_5__["AppStateRepositoryService"]
        }, {
          type: _position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"]
        }, {
          type: cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__["Deploy"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/counter-analytics.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/counter-analytics.service.ts ***!
    \*******************************************************/

  /*! exports provided: CounterAnalyticsService */

  /***/
  function srcAppServicesCounterAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterAnalyticsService", function () {
      return CounterAnalyticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/count-event-repository.service */
    "./src/app/models/count-event-repository.service.ts");

    var CounterAnalyticsService = /*#__PURE__*/function () {
      function CounterAnalyticsService(countEventRepository) {
        _classCallCheck(this, CounterAnalyticsService);

        this.countEventRepository = countEventRepository;
      }

      _createClass(CounterAnalyticsService, [{
        key: "extractHistogramData",
        value: function extractHistogramData(counter, dateAggregationFunction) {
          var countEventFilterCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
            return true;
          };
          var minBuckets = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var undefinedValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var countEvents = this.countEventRepository.getByCounter(counter);
          var data = [];

          for (var i = 0; i < minBuckets; ++i) {
            data.push(undefined);
          }

          var _iterator = _createForOfIteratorHelper(countEvents),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var countEvent = _step.value;

              if (!countEventFilterCallback(countEvent)) {
                continue;
              }

              var aggregationBucketIndex = countEvent.timestamp[dateAggregationFunction]();

              if (data[aggregationBucketIndex] === undefined) {
                data[aggregationBucketIndex] = 0;
              }

              data[aggregationBucketIndex] += Math.abs(countEvent.delta);
            } // replace all undefined values

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          for (var _i = 0; _i < data.length; ++_i) {
            if (data[_i] === undefined) {
              data[_i] = undefinedValue;
            }
          }

          return data;
        }
      }, {
        key: "extractTotalData",
        value: function extractTotalData(counter) {
          var countEventFilterCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return true;
          };
          var countEvents = this.countEventRepository.getByCounter(counter);
          var data = {
            totals: {
              positive: 0,
              negative: 0,
              neutral: 0
            },
            events: {
              change: 0,
              reset: 0,
              positive: 0,
              negative: 0,
              neutral: 0
            }
          };

          var _iterator2 = _createForOfIteratorHelper(countEvents),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var countEvent = _step2.value;

              if (!countEventFilterCallback(countEvent)) {
                continue;
              } // aggregate counts


              if (countEvent.delta > 0) {
                data.events.positive += 1;
                data.totals.positive += countEvent.delta;
              } else if (countEvent.delta < 0) {
                data.events.negative += 1;
                data.totals.negative -= countEvent.delta;
              } else {
                data.events.neutral += 1;
                data.totals.neutral += countEvent.delta; // should always  be 0
              } // aggregate types


              switch (countEvent.type) {
                case 'change':
                  data.events.change += 1;
                  break;

                case 'reset':
                  data.events.reset += 1;
                  break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return data;
        }
      }]);

      return CounterAnalyticsService;
    }();

    CounterAnalyticsService.ɵfac = function CounterAnalyticsService_Factory(t) {
      return new (t || CounterAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_1__["CountEventRepositoryService"]));
    };

    CounterAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CounterAnalyticsService,
      factory: CounterAnalyticsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_1__["CountEventRepositoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/position.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/position.service.ts ***!
    \**********************************************/

  /*! exports provided: PositionService */

  /***/
  function srcAppServicesPositionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionService", function () {
      return PositionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/app-state-repository.service */
    "./src/app/models/app-state-repository.service.ts");

    var PositionService = /*#__PURE__*/function () {
      function PositionService(appStateRepositoryService, geolocation) {
        _classCallCheck(this, PositionService);

        this.appStateRepositoryService = appStateRepositoryService;
        this.geolocation = geolocation;
      }

      _createClass(PositionService, [{
        key: "getPosition",
        value: function getPosition() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var position;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    position = null;

                    if (!this.appStateRepositoryService.state.recordPosition) {
                      _context25.next = 5;
                      break;
                    }

                    _context25.next = 4;
                    return this.geolocation.getCurrentPosition();

                  case 4:
                    position = _context25.sent;

                  case 5:
                    return _context25.abrupt("return", position);

                  case 6:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }]);

      return PositionService;
    }();

    PositionService.ɵfac = function PositionService_Factory(t) {
      return new (t || PositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__["AppStateRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]));
    };

    PositionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PositionService,
      factory: PositionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PositionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _models_app_state_repository_service__WEBPACK_IMPORTED_MODULE_3__["AppStateRepositoryService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/services.module.ts ***!
    \*********************************************/

  /*! exports provided: ServicesModule */

  /***/
  function srcAppServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
      return ServicesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! cordova-plugin-ionic/dist/ngx */
    "./node_modules/cordova-plugin-ionic/__ivy_ngcc__/dist/ngx/ngx/index.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");

    var ServicesModule = /*#__PURE__*/function () {
      function ServicesModule() {
        _classCallCheck(this, ServicesModule);
      }

      _createClass(ServicesModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: ServicesModule
          };
        }
      }]);

      return ServicesModule;
    }();

    ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicesModule
    });
    ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicesModule_Factory(t) {
        return new (t || ServicesModule)();
      },
      providers: [cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_3__["Deploy"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_3__["Deploy"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/compiler */
    "./node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/count/count/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map