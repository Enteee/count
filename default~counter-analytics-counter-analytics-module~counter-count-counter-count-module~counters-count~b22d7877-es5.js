function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counters-count~b22d7877"], {
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var _services_counter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/counter.service */
    "./src/app/services/counter.service.ts");
    /* harmony import */


    var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/app-state.service */
    "./src/app/services/app-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["rootItem"];
    var _c1 = ["textCenter"];
    var _c2 = ["clickIndicator"];
    var _c3 = ["buttonRight"];
    var _c4 = ["buttonLeft"];

    function PlusMinusCounterComponent_ng_template_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlusMinusCounterComponent_ng_template_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r29.counter.minusCount, " ");
      }
    }

    function PlusMinusCounterComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlusMinusCounterComponent_ng_template_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r30.countMinus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlusMinusCounterComponent_ng_template_2_div_3_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlusMinusCounterComponent_ng_template_2_div_4_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r22.counter.locked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r22.counter.minusCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 0 - 1);
      }
    }

    function PlusMinusCounterComponent_h1_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.counter.title);
      }
    }

    function PlusMinusCounterComponent_ng_template_10_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PlusMinusCounterComponent_ng_template_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", ctx_r34.counter.plusCount, " ");
      }
    }

    function PlusMinusCounterComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlusMinusCounterComponent_ng_template_10_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r35.countPlus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlusMinusCounterComponent_ng_template_10_div_3_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlusMinusCounterComponent_ng_template_10_div_4_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r26.counter.locked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r26.counter.plusCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
      }
    }

    var _c5 = function _c5(a1) {
      return ["/counter-detail", a1];
    };

    var PlusMinusCounterComponent = /*#__PURE__*/function () {
      function PlusMinusCounterComponent(router, counterService, appStateService, gestureCtrl) {
        _classCallCheck(this, PlusMinusCounterComponent);

        this.router = router;
        this.counterService = counterService;
        this.appStateService = appStateService;
        this.gestureCtrl = gestureCtrl;
        this.SWIPE_CLICK_WIDTH_RATIO = 0.3;
        this.hideTitle = false;
        this.swipeClickLeft = false;
        this.swipeClickRight = false;
      }

      _createClass(PlusMinusCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          if (this.appStateService.appState.swipeCounting) {
            this.swipeClickGesture = this.gestureCtrl.create({
              el: this.rootItem.nativeElement,
              direction: 'x',
              threshold: 15,
              gestureName: 'swipe',
              onStart: function onStart(ev) {
                return _this.onStart(ev);
              },
              onMove: function onMove(ev) {
                return _this.onMoveHandler(ev);
              },
              onEnd: function onEnd(ev) {
                return _this.onEnd(ev);
              }
            });
            this.swipeClickGesture.enable();
          }
        }
      }, {
        key: "onStart",
        value: function onStart(event) {
          var _this2 = this;

          this.rootItemWidth = this.rootItem.nativeElement.offsetWidth;
          this.rightButtonWidth = this.rightButton ? this.rightButton.nativeElement.offsetWidth : 0;
          this.leftButtonWidth = this.leftButton ? this.leftButton.nativeElement.offsetWidth : 0;
          this.swipeClickRight = false;
          this.swipeClickLeft = false; // disable click events

          if (this.rightButton) {
            this.rightButton.nativeElement.style.pointerEvents = 'none';
          }

          if (this.leftButton) {
            this.leftButton.nativeElement.style.pointerEvents = 'none';
          }

          this.textCenter.nativeElement.style.pointerEvents = 'none';
          requestAnimationFrame(function () {
            if (_this2.rightButton) {
              _this2.rightButton.nativeElement.style.removeProperty('transition');
            }

            if (_this2.leftButton) {
              _this2.leftButton.nativeElement.style.removeProperty('transition');
            }
          });
        }
      }, {
        key: "onMoveHandler",
        value: function onMoveHandler(event) {
          var newRightButtonWidth = this.rightButtonWidth - event.deltaX;

          if (this.rightButton) {
            this.rightButton.nativeElement.style.width = Math.max(this.leftButton ? 0 : this.rightButtonWidth, newRightButtonWidth) + 'px';
          }

          var newLeftButtonWidth = this.leftButtonWidth + event.deltaX;

          if (this.leftButton) {
            this.leftButton.nativeElement.style.width = Math.max(this.rightButton ? 0 : this.leftButtonWidth, newLeftButtonWidth) + 'px';
          }

          if (this.rootItemWidth * this.SWIPE_CLICK_WIDTH_RATIO < newRightButtonWidth) {
            console.log('rightClick');

            if (this.rightButton) {
              this.rightButton.nativeElement.style.width = '100%';

              if (this.leftButton) {
                this.leftButton.nativeElement.style.display = 'none';
              }

              this.clickIndicator.nativeElement.style.display = 'none';
              this.swipeClickRight = true;
            }
          } else if (this.rootItemWidth * this.SWIPE_CLICK_WIDTH_RATIO < newLeftButtonWidth) {
            console.log('leftClick');

            if (this.leftButton) {
              this.leftButton.nativeElement.style.width = '100%';

              if (this.rightButton) {
                this.rightButton.nativeElement.style.display = 'none';
              }

              this.clickIndicator.nativeElement.style.display = 'none';
              this.swipeClickLeft = true;
            }
          } else {
            if (this.rightButton) {
              this.rightButton.nativeElement.style.display = 'block';
            }

            if (this.leftButton) {
              this.leftButton.nativeElement.style.display = 'block';
            }

            this.clickIndicator.nativeElement.style.display = 'block';
            this.swipeClickRight = false;
            this.swipeClickLeft = false;
          }
        }
      }, {
        key: "onEnd",
        value: function onEnd(event) {
          var _this3 = this;

          // enable click events again
          if (this.rightButton) {
            this.rightButton.nativeElement.style.pointerEvents = 'auto';
          }

          if (this.leftButton) {
            this.leftButton.nativeElement.style.pointerEvents = 'auto';
          }

          this.textCenter.nativeElement.style.pointerEvents = 'auto';
          requestAnimationFrame(function () {
            if (_this3.rightButton) {
              _this3.rightButton.nativeElement.style.setProperty('transition', '0.2s all ease');

              _this3.rightButton.nativeElement.style.display = 'block';
              _this3.rightButton.nativeElement.style.width = _this3.rightButtonWidth + 'px';
            }

            if (_this3.leftButton) {
              _this3.leftButton.nativeElement.style.setProperty('transition', '0.2s all ease');

              _this3.leftButton.nativeElement.style.display = 'block';
              _this3.leftButton.nativeElement.style.width = _this3.leftButtonWidth + 'px';
            }

            _this3.clickIndicator.nativeElement.style.display = 'block';
          });

          if (this.swipeClickRight) {
            if (this.rightButton) {
              this.rightButton.nativeElement.click();
            }
          }

          if (this.swipeClickLeft) {
            if (this.leftButton) {
              this.leftButton.nativeElement.click();
            }
          }
        }
      }, {
        key: "countPlus",
        value: function countPlus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.counter.locked) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return this.counterService.count(this.counter, this.counter.plusCount);

                  case 3:
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
                    if (this.counter.locked) {
                      _context2.next = 3;
                      break;
                    }

                    _context2.next = 3;
                    return this.counterService.count(this.counter, this.counter.minusCount);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return PlusMinusCounterComponent;
    }();

    PlusMinusCounterComponent.ɵfac = function PlusMinusCounterComponent_Factory(t) {
      return new (t || PlusMinusCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"]));
    };

    PlusMinusCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlusMinusCounterComponent,
      selectors: [["app-plus-minus-counter"]],
      viewQuery: function PlusMinusCounterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rootItem = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textCenter = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clickIndicator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rightButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.leftButton = _t.first);
        }
      },
      inputs: {
        counter: "counter",
        minHeight: "minHeight",
        hideTitle: "hideTitle"
      },
      decls: 12,
      vars: 9,
      consts: [[1, "ion-no-padding"], ["rootItem", ""], [3, "ngIf"], ["clickable", "", 1, "ion-text-center", 3, "routerLink"], ["textCenter", ""], [4, "ngIf"], ["name", "chevron-forward-outline"], ["clickIndicator", ""], ["slot", "end"], ["size", "large", "color", "danger", "expand", "full", 1, "ion-no-padding", 3, "disabled", "click"], ["buttonLeft", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["name", "remove"], ["size", "large", "color", "success", "expand", "full", 1, "ion-no-padding", 3, "disabled", "click"], ["buttonRight", ""], ["name", "add"]],
      template: function PlusMinusCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlusMinusCounterComponent_ng_template_2_Template, 5, 3, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlusMinusCounterComponent_h1_5_Template, 2, 1, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlusMinusCounterComponent_ng_template_10_Template, 5, 3, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-reorder", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("--min-height", ctx.minHeight, "vh");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.minusCount < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c5, ctx.counter.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.counter.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.plusCount > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"]],
      styles: ["ion-button[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvdW50L2NvdW50L3NyYy9hcHAvY29tcG9uZW50cy9wbHVzLW1pbnVzLWNvdW50ZXIvcGx1cy1taW51cy1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsdXMtbWludXMtY291bnRlci9wbHVzLW1pbnVzLWNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbHVzLW1pbnVzLWNvdW50ZXIvcGx1cy1taW51cy1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
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
          type: _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"]
        }, {
          type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"]
        }];
      }, {
        rootItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['rootItem', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        textCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['textCenter', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        clickIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['clickIndicator', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        rightButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['buttonRight', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        leftButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['buttonLeft', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/counter.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/counter.service.ts ***!
    \*********************************************/

  /*! exports provided: CounterService */

  /***/
  function srcAppServicesCounterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterService", function () {
      return CounterService;
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


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/counter */
    "./src/app/models/counter.ts");
    /* harmony import */


    var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/counter-repository.service */
    "./src/app/models/counter-repository.service.ts");
    /* harmony import */


    var _models_count_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/count-event */
    "./src/app/models/count-event.ts");
    /* harmony import */


    var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/count-event-repository.service */
    "./src/app/models/count-event-repository.service.ts");
    /* harmony import */


    var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./position.service */
    "./src/app/services/position.service.ts");
    /* harmony import */


    var _app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-state.service */
    "./src/app/services/app-state.service.ts");

    var CounterService = /*#__PURE__*/function () {
      function CounterService(counterRepositoryService, countEventRepositoryService, positionService, appStateService, vibration) {
        _classCallCheck(this, CounterService);

        this.counterRepositoryService = counterRepositoryService;
        this.countEventRepositoryService = countEventRepositoryService;
        this.positionService = positionService;
        this.appStateService = appStateService;
        this.vibration = vibration;
      }

      _createClass(CounterService, [{
        key: "addCounter",
        value: function addCounter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var newCounter;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"](); // add counter to bottom

                    newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                    _context3.next = 4;
                    return this.counterRepositoryService.save(newCounter);

                  case 4:
                    return _context3.abrupt("return", newCounter);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.counterRepositoryService.delete(counter);

                  case 2:
                    _context4.next = 4;
                    return Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) {
                      return _this4.countEventRepositoryService.delete(i);
                    }));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "count",
        value: function count(counter, delta) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var position;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    counter.count += delta; // vibrate

                    if (this.appStateService.appState.vibrate && counter.vibrate) {
                      this.vibration.vibrate(delta > 0 ? CounterService.VIBRATION_PATTERN_POSITIVE : CounterService.VIBRATION_PATTERN_NEGATIVE);
                    } // apply positive and negative wraparounds


                    if (counter.positiveWrapAroundActive && counter.count > counter.positiveWrapAround) {
                      counter.count = counter.count % counter.positiveWrapAround;
                    }

                    if (counter.negativeWrapAroundActive && counter.count < counter.negativeWrapAround) {
                      counter.count = counter.count % counter.negativeWrapAround;
                    }

                    position = null;
                    _context5.prev = 5;
                    _context5.next = 8;
                    return this.positionService.getPosition();

                  case 8:
                    position = _context5.sent;
                    _context5.next = 15;
                    break;

                  case 11:
                    _context5.prev = 11;
                    _context5.t0 = _context5["catch"](5);
                    _context5.next = 15;
                    return this.appStateService.setRecordPosition(false);

                  case 15:
                    _context5.next = 17;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))]);

                  case 17:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[5, 11]]);
          }));
        }
      }, {
        key: "reset",
        value: function reset(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    counter.count = 0;
                    _context6.next = 3;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset))]);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setLocked",
        value: function setLocked(counter, _setLocked) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    counter.locked = _setLocked;
                    _context7.next = 3;
                    return this.counterRepositoryService.save(counter);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "reorder",
        value: function reorder(from, to) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this5 = this;

            var counters;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    counters = this.counterRepositoryService.allSortBySortOrder; // move element in array

                    counters.splice(to, 0, counters.splice(from, 1)[0]); // save in new order

                    _context9.next = 4;
                    return Promise.all(counters.map(function (counter, i) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                counter.sortOrder = i;
                                _context8.next = 3;
                                return this.counterRepositoryService.save(counter);

                              case 3:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
        /**
         * For development purposes only
         */

      }, {
        key: "addRandomCountEvent",
        value: function addRandomCountEvent(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var delta, randomDate;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    randomDate = function _ref(start, end) {
                      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                    };

                    delta = Math.round(Math.random() * 10 % 10 - 5);
                    counter.count += delta;
                    _context10.next = 5;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))]);

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "allSortBySortOrder",
        get: function get() {
          return this.counterRepositoryService.allSortBySortOrder;
        }
      }]);

      return CounterService;
    }();

    CounterService.VIBRATION_PATTERN_POSITIVE = [30];
    CounterService.VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];

    CounterService.ɵfac = function CounterService_Factory(t) {
      return new (t || CounterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"]));
    };

    CounterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CounterService,
      factory: CounterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CounterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]
        }, {
          type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"]
        }, {
          type: _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"]
        }, {
          type: _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"]
        }, {
          type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counters-count~b22d7877-es5.js.map