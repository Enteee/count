function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-analytics-counter-analytics-module"], {
  /***/
  "./src/app/counter-analytics/counter-analytics.directive.ts":
  /*!******************************************************************!*\
    !*** ./src/app/counter-analytics/counter-analytics.directive.ts ***!
    \******************************************************************/

  /*! exports provided: CounterAnalyticsDirective */

  /***/
  function srcAppCounterAnalyticsCounterAnalyticsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterAnalyticsDirective", function () {
      return CounterAnalyticsDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CounterAnalyticsDirective = function CounterAnalyticsDirective(viewContainerRef) {
      _classCallCheck(this, CounterAnalyticsDirective);

      this.viewContainerRef = viewContainerRef;
    };

    CounterAnalyticsDirective.ɵfac = function CounterAnalyticsDirective_Factory(t) {
      return new (t || CounterAnalyticsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    CounterAnalyticsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CounterAnalyticsDirective,
      selectors: [["", "appCounterAnalytics", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appCounterAnalytics]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/counter-analytics/counter-analytics.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/counter-analytics/counter-analytics.module.ts ***!
    \***************************************************************/

  /*! exports provided: CounterAnalyticsPageModule */

  /***/
  function srcAppCounterAnalyticsCounterAnalyticsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterAnalyticsPageModule", function () {
      return CounterAnalyticsPageModule;
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


    var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../not-implemented/not-implemented.module */
    "./src/app/not-implemented/not-implemented.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _counter_analytics_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./counter-analytics.page */
    "./src/app/counter-analytics/counter-analytics.page.ts");
    /* harmony import */


    var _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./counter-analytics.directive */
    "./src/app/counter-analytics/counter-analytics.directive.ts");

    var routes = [{
      path: '',
      component: _counter_analytics_page__WEBPACK_IMPORTED_MODULE_7__["CounterAnalyticsPage"]
    }];

    var CounterAnalyticsPageModule = function CounterAnalyticsPageModule() {
      _classCallCheck(this, CounterAnalyticsPageModule);
    };

    CounterAnalyticsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CounterAnalyticsPageModule
    });
    CounterAnalyticsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CounterAnalyticsPageModule_Factory(t) {
        return new (t || CounterAnalyticsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterAnalyticsPageModule, {
        declarations: [_counter_analytics_page__WEBPACK_IMPORTED_MODULE_7__["CounterAnalyticsPage"], _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_8__["CounterAnalyticsDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
          declarations: [_counter_analytics_page__WEBPACK_IMPORTED_MODULE_7__["CounterAnalyticsPage"], _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_8__["CounterAnalyticsDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/counter-analytics/counter-analytics.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/counter-analytics/counter-analytics.page.ts ***!
    \*************************************************************/

  /*! exports provided: CounterAnalyticsPage */

  /***/
  function srcAppCounterAnalyticsCounterAnalyticsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterAnalyticsPage", function () {
      return CounterAnalyticsPage;
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


    var _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./counter-analytics.directive */
    "./src/app/counter-analytics/counter-analytics.directive.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    function CounterAnalyticsPage_ng_template_7_Template(rf, ctx) {}

    var _c0 = function _c0(a1) {
      return ["/counter-detail", a1, "analytics"];
    };

    var CounterAnalyticsPage = /*#__PURE__*/function () {
      function CounterAnalyticsPage(router, route, componentFactoryResolver) {
        _classCallCheck(this, CounterAnalyticsPage);

        this.router = router;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(CounterAnalyticsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.counter = this.route.snapshot.data.counter;
          this.analyticsItem = this.route.snapshot.data.analyticsItem;
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.analyticsItem.component);
          var viewContainerRef = this.counterAnalyticsHost.viewContainerRef;
          var componentRef = viewContainerRef.createComponent(componentFactory);
          var analyticsComponent = componentRef.instance;
          analyticsComponent.counter = this.counter;
        }
      }]);

      return CounterAnalyticsPage;
    }();

    CounterAnalyticsPage.ɵfac = function CounterAnalyticsPage_Factory(t) {
      return new (t || CounterAnalyticsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    CounterAnalyticsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CounterAnalyticsPage,
      selectors: [["app-counter-analytics"]],
      viewQuery: function CounterAnalyticsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_counter_analytics_directive__WEBPACK_IMPORTED_MODULE_2__["CounterAnalyticsDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.counterAnalyticsHost = _t.first);
        }
      },
      decls: 8,
      vars: 5,
      consts: [["slot", "start"], ["icon", "arrow-back", 3, "defaultHref"], ["appCounterAnalytics", ""]],
      template: function CounterAnalyticsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CounterAnalyticsPage_ng_template_7_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultHref", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.counter.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.counter.title, " > ", ctx.analyticsItem.info.name, " ");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_2__["CounterAnalyticsDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItYW5hbHl0aWNzL2NvdW50ZXItYW5hbHl0aWNzLnBhZ2Uuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-counter-analytics',
          templateUrl: './counter-analytics.page.html',
          styleUrls: ['./counter-analytics.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        counterAnalyticsHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_counter_analytics_directive__WEBPACK_IMPORTED_MODULE_2__["CounterAnalyticsDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=counter-analytics-counter-analytics-module-es5.js.map