function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fullscreen-counter-fullscreen-counter-module"], {
  /***/
  "./src/app/fullscreen-counter/fullscreen-counter.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/fullscreen-counter/fullscreen-counter.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FullscreenCounterPageModule */

  /***/
  function srcAppFullscreenCounterFullscreenCounterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenCounterPageModule", function () {
      return FullscreenCounterPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fullscreen-counter.page */
    "./src/app/fullscreen-counter/fullscreen-counter.page.ts");

    var routes = [{
      path: '',
      component: _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_5__["FullscreenCounterPage"]
    }];

    var FullscreenCounterPageModule = function FullscreenCounterPageModule() {
      _classCallCheck(this, FullscreenCounterPageModule);
    };

    FullscreenCounterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FullscreenCounterPageModule
    });
    FullscreenCounterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FullscreenCounterPageModule_Factory(t) {
        return new (t || FullscreenCounterPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FullscreenCounterPageModule, {
        declarations: [_fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_5__["FullscreenCounterPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullscreenCounterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_5__["FullscreenCounterPage"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=fullscreen-counter-fullscreen-counter-module-es5.js.map