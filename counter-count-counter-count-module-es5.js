function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-count-counter-count-module"], {
  /***/
  "./src/app/counter-detail/counter-count/counter-count.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/counter-detail/counter-count/counter-count.module.ts ***!
    \**********************************************************************/

  /*! exports provided: CounterCountPageModule */

  /***/
  function srcAppCounterDetailCounterCountCounterCountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterCountPageModule", function () {
      return CounterCountPageModule;
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
    /*! ../../not-implemented/not-implemented.module */
    "./src/app/not-implemented/not-implemented.module.ts");
    /* harmony import */


    var _counter_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./counter-count.page */
    "./src/app/counter-detail/counter-count/counter-count.page.ts");

    var routes = [{
      path: '',
      component: _counter_count_page__WEBPACK_IMPORTED_MODULE_6__["CounterCountPage"]
    }];

    var CounterCountPageModule = function CounterCountPageModule() {
      _classCallCheck(this, CounterCountPageModule);
    };

    CounterCountPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CounterCountPageModule
    });
    CounterCountPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CounterCountPageModule_Factory(t) {
        return new (t || CounterCountPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterCountPageModule, {
        declarations: [_counter_count_page__WEBPACK_IMPORTED_MODULE_6__["CounterCountPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterCountPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]],
          declarations: [_counter_count_page__WEBPACK_IMPORTED_MODULE_6__["CounterCountPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/counter-detail/counter-count/counter-count.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/counter-detail/counter-count/counter-count.page.ts ***!
    \********************************************************************/

  /*! exports provided: CounterCountPage */

  /***/
  function srcAppCounterDetailCounterCountCounterCountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterCountPage", function () {
      return CounterCountPage;
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


    var _services_counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/counter.service */
    "./src/app/services/counter.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CounterCountPage = /*#__PURE__*/function () {
      function CounterCountPage(router, route, counterService) {
        _classCallCheck(this, CounterCountPage);

        this.router = router;
        this.route = route;
        this.counterService = counterService;
      }

      _createClass(CounterCountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.counter = this.route.snapshot.data.counter;
        }
      }, {
        key: "addRandomCountEvent",
        value: function addRandomCountEvent() {
          this.counterService.addRandomCountEvent(this.counter);
        }
      }]);

      return CounterCountPage;
    }();

    CounterCountPage.ɵfac = function CounterCountPage_Factory(t) {
      return new (t || CounterCountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]));
    };

    CounterCountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CounterCountPage,
      selectors: [["app-counter-count"]],
      decls: 5,
      vars: 0,
      consts: [["size", "large", "expand", "full", "color", "dark", 3, "click"], ["name", "shuffle"]],
      template: function CounterCountPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterCountPage_Template_ion_button_click_2_listener() {
            return ctx.addRandomCountEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Random Count Event ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItY291bnQvY291bnRlci1jb3VudC5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterCountPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-counter-count',
          templateUrl: './counter-count.page.html',
          styleUrls: ['./counter-count.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]
        }];
      }, null);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var newCounter;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"](); // add counter to bottom

                    newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                    _context.next = 4;
                    return this.counterRepositoryService.save(newCounter);

                  case 4:
                    return _context.abrupt("return", newCounter);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.counterRepositoryService.delete(counter);

                  case 2:
                    _context2.next = 4;
                    return Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) {
                      return _this.countEventRepositoryService.delete(i);
                    }));

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "count",
        value: function count(counter, delta) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var position;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
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
                    _context3.prev = 5;
                    _context3.next = 8;
                    return this.positionService.getPosition();

                  case 8:
                    position = _context3.sent;
                    _context3.next = 15;
                    break;

                  case 11:
                    _context3.prev = 11;
                    _context3.t0 = _context3["catch"](5);
                    _context3.next = 15;
                    return this.appStateService.setRecordPosition(false);

                  case 15:
                    _context3.next = 17;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))]);

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[5, 11]]);
          }));
        }
      }, {
        key: "reset",
        value: function reset(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    counter.count = 0;
                    _context4.next = 3;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset))]);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setLocked",
        value: function setLocked(counter, _setLocked) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    counter.locked = _setLocked;
                    _context5.next = 3;
                    return this.counterRepositoryService.save(counter);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "reorder",
        value: function reorder(from, to) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this2 = this;

            var counters;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    counters = this.counterRepositoryService.allSortBySortOrder; // move element in array

                    counters.splice(to, 0, counters.splice(from, 1)[0]); // save in new order

                    _context7.next = 4;
                    return Promise.all(counters.map(function (counter, i) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                counter.sortOrder = i;
                                _context6.next = 3;
                                return this.counterRepositoryService.save(counter);

                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /**
         * For development purposes only
         */

      }, {
        key: "addRandomCountEvent",
        value: function addRandomCountEvent(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var delta, randomDate;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    randomDate = function _ref(start, end) {
                      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                    };

                    delta = Math.round(Math.random() * 10 % 10 - 5);
                    counter.count += delta;
                    _context8.next = 5;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))]);

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
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
//# sourceMappingURL=counter-count-counter-count-module-es5.js.map