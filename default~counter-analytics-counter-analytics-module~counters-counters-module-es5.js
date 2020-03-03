function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~counter-analytics-counter-analytics-module~counters-counters-module"], {
  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
    /* harmony import */


    var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../not-implemented/not-implemented.module */
    "./src/app/not-implemented/not-implemented.module.ts");
    /* harmony import */


    var _plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component */
    "./src/app/components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component.ts");
    /* harmony import */


    var _plus_minus_counter_plus_minus_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./plus-minus-counter/plus-minus-counter.component */
    "./src/app/components/plus-minus-counter/plus-minus-counter.component.ts");
    /* harmony import */


    var _day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./day-of-week-histogram/day-of-week-histogram.component */
    "./src/app/components/day-of-week-histogram/day-of-week-histogram.component.ts");
    /* harmony import */


    var _day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./day-of-month-histogram/day-of-month-histogram.component */
    "./src/app/components/day-of-month-histogram/day-of-month-histogram.component.ts");
    /* harmony import */


    var _hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hour-of-day-radar/hour-of-day-radar.component */
    "./src/app/components/hour-of-day-radar/hour-of-day-radar.component.ts");
    /* harmony import */


    var _year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./year-heatmap/year-heatmap.component */
    "./src/app/components/year-heatmap/year-heatmap.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__["PlusMinusTotalsPieChartComponent"], _plus_minus_counter_plus_minus_counter_component__WEBPACK_IMPORTED_MODULE_7__["PlusMinusCounterComponent"], _day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_8__["DayOfWeekHistogramComponent"], _day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_9__["DayOfMonthHistogramComponent"], _hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_10__["HourOfDayRadarComponent"], _year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_11__["YearHeatmapComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]],
        exports: [_plus_minus_counter_plus_minus_counter_component__WEBPACK_IMPORTED_MODULE_7__["PlusMinusCounterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]],
          declarations: [_plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__["PlusMinusTotalsPieChartComponent"], _plus_minus_counter_plus_minus_counter_component__WEBPACK_IMPORTED_MODULE_7__["PlusMinusCounterComponent"], _day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_8__["DayOfWeekHistogramComponent"], _day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_9__["DayOfMonthHistogramComponent"], _hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_10__["HourOfDayRadarComponent"], _year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_11__["YearHeatmapComponent"]],
          exports: [_plus_minus_counter_plus_minus_counter_component__WEBPACK_IMPORTED_MODULE_7__["PlusMinusCounterComponent"]],
          entryComponents: [_plus_minus_totals_pie_chart_plus_minus_totals_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__["PlusMinusTotalsPieChartComponent"], _day_of_week_histogram_day_of_week_histogram_component__WEBPACK_IMPORTED_MODULE_8__["DayOfWeekHistogramComponent"], _day_of_month_histogram_day_of_month_histogram_component__WEBPACK_IMPORTED_MODULE_9__["DayOfMonthHistogramComponent"], _hour_of_day_radar_hour_of_day_radar_component__WEBPACK_IMPORTED_MODULE_10__["HourOfDayRadarComponent"], _year_heatmap_year_heatmap_component__WEBPACK_IMPORTED_MODULE_11__["YearHeatmapComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/plus-minus-counter/plus-minus-counter.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/plus-minus-counter/plus-minus-counter.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PlusMinusCounterComponent */

  /***/
  function srcAppComponentsPlusMinusCounterPlusMinusCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlusMinusCounterComponent", function () {
      return PlusMinusCounterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var _services_counter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/counter.service */
    "./src/app/services/counter.service.ts");
    /* harmony import */


    var _services_app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/app-state.service */
    "./src/app/services/app-state.service.ts");
    /* harmony import */


    var _fullscreen_counter_fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../fullscreen-counter/fullscreen-counter.page */
    "./src/app/fullscreen-counter/fullscreen-counter.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlusMinusCounterComponent_ng_template_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlusMinusCounterComponent_ng_template_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r28.counter.minusCount, " ");
      }
    }

    function PlusMinusCounterComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlusMinusCounterComponent_ng_template_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r29.countMinus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlusMinusCounterComponent_ng_template_2_div_2_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlusMinusCounterComponent_ng_template_2_div_3_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r23.counter.locked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r23.counter.minusCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 0 - 1);
      }
    }

    function PlusMinusCounterComponent_ng_template_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlusMinusCounterComponent_ng_template_8_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", ctx_r32.counter.plusCount, " ");
      }
    }

    function PlusMinusCounterComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlusMinusCounterComponent_ng_template_8_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.countPlus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlusMinusCounterComponent_ng_template_8_div_2_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlusMinusCounterComponent_ng_template_8_div_3_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r24.counter.locked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r24.counter.plusCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
      }
    }

    var _c0 = function _c0(a2) {
      return ["/fullscreen-counter", "minus", a2];
    };

    function PlusMinusCounterComponent_ion_item_options_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-options", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r25.counter.id));
      }
    }

    var _c1 = function _c1(a2) {
      return ["/fullscreen-counter", "plus", a2];
    };

    function PlusMinusCounterComponent_ion_item_options_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-options", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r26.counter.id));
      }
    }

    var _c2 = function _c2(a1) {
      return ["/counter-detail", a1];
    };

    var PlusMinusCounterComponent = /*#__PURE__*/function () {
      function PlusMinusCounterComponent(router, counterService, appStateService) {
        _classCallCheck(this, PlusMinusCounterComponent);

        this.router = router;
        this.counterService = counterService;
        this.appStateService = appStateService;
        this.FULL_SCREEN_COUNTER_DELAY = 700;
        this.FullScreenCounterType = _fullscreen_counter_fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__["FullScreenCounterType"];
      }

      _createClass(PlusMinusCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countPlus",
        value: function countPlus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.counterService.count(this.counter, this.counter.plusCount);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "countMinus",
        value: function countMinus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.counterService.count(this.counter, this.counter.minusCount);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openFullScreenCounter",
        value: function openFullScreenCounter(type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['/fullscreen-counter', type, this.counter.id]);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return PlusMinusCounterComponent;
    }();

    PlusMinusCounterComponent.ɵfac = function PlusMinusCounterComponent_Factory(t) {
      return new (t || PlusMinusCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_5__["AppStateService"]));
    };

    PlusMinusCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlusMinusCounterComponent,
      selectors: [["app-plus-minus-counter"]],
      inputs: {
        counter: "counter"
      },
      decls: 12,
      vars: 9,
      consts: [[3, "ngIf"], ["clickable", "", 1, "ion-text-center", 3, "routerLink"], ["slot", "end"], ["side", "start", 4, "ngIf"], ["side", "end", 4, "ngIf"], ["size", "large", "color", "danger", 3, "disabled", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["name", "remove"], ["size", "large", "color", "success", 3, "disabled", "click"], ["name", "add"], ["side", "start"], ["color", "danger", 3, "routerLink"], ["slot", "icon-only", "name", "expand"], ["side", "end"], ["color", "success", 3, "routerLink"]],
      template: function PlusMinusCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlusMinusCounterComponent_ng_template_2_Template, 4, 3, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PlusMinusCounterComponent_ng_template_8_Template, 4, 3, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-reorder", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlusMinusCounterComponent_ion_item_options_10_Template, 3, 3, "ion-item-options", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PlusMinusCounterComponent_ion_item_options_11_Template, 3, 3, "ion-item-options", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.minusCount < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.counter.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.counter.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.counter.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.plusCount > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.minusCount < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.plusCount > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGx1cy1taW51cy1jb3VudGVyL3BsdXMtbWludXMtY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlusMinusCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-plus-minus-counter',
          templateUrl: './plus-minus-counter.component.html',
          styleUrls: ['./plus-minus-counter.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"]
        }, {
          type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_5__["AppStateService"]
        }];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~counter-analytics-counter-analytics-module~counters-counters-module-es5.js.map