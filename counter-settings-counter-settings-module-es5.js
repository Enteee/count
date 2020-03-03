function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-settings-counter-settings-module"], {
  /***/
  "./src/app/counter-detail/counter-settings/counter-settings.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/counter-detail/counter-settings/counter-settings.module.ts ***!
    \****************************************************************************/

  /*! exports provided: CounterSettingsPageModule */

  /***/
  function srcAppCounterDetailCounterSettingsCounterSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterSettingsPageModule", function () {
      return CounterSettingsPageModule;
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


    var _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../guards/unsaved-changes/unsaved-changes.guard */
    "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts");
    /* harmony import */


    var _counter_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./counter-settings.page */
    "./src/app/counter-detail/counter-settings/counter-settings.page.ts");

    var routes = [{
      path: '',
      component: _counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"],
      canDeactivate: [_guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesGuard"]]
    }];

    var CounterSettingsPageModule = function CounterSettingsPageModule() {
      _classCallCheck(this, CounterSettingsPageModule);
    };

    CounterSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CounterSettingsPageModule
    });
    CounterSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CounterSettingsPageModule_Factory(t) {
        return new (t || CounterSettingsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterSettingsPageModule, {
        declarations: [_counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterSettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]],
          declarations: [_counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/counter-detail/counter-settings/counter-settings.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/counter-detail/counter-settings/counter-settings.page.ts ***!
    \**************************************************************************/

  /*! exports provided: CounterSettingsPage */

  /***/
  function srcAppCounterDetailCounterSettingsCounterSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterSettingsPage", function () {
      return CounterSettingsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/counter-repository.service */
    "./src/app/models/counter-repository.service.ts");
    /* harmony import */


    var _services_counter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/counter.service */
    "./src/app/services/counter.service.ts");
    /* harmony import */


    var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/app-state.service */
    "./src/app/services/app-state.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _not_implemented_not_implemented_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../not-implemented/not-implemented.directive */
    "./src/app/not-implemented/not-implemented.directive.ts");

    var _c0 = ["titleInput"];

    var CounterSettingsPage = /*#__PURE__*/function () {
      function CounterSettingsPage(router, route, counterRepositoryService, counterService, appStateService) {
        _classCallCheck(this, CounterSettingsPage);

        this.router = router;
        this.route = route;
        this.counterRepositoryService = counterRepositoryService;
        this.counterService = counterService;
        this.appStateService = appStateService;
      }

      _createClass(CounterSettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.counter = this.route.snapshot.data.counter;
          this.appState = this.appStateService.appState; // enable disable input boxed based on checkbox
          // TODO: this should become a component

          var positiveWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAround, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
          var positiveWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAroundActive, []);
          var negativeWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.negativeWrapAround, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
          var negativeWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.negativeWrapAroundActive, []);
          this.counterSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.title, []),
            plusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.plusCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]),
            minusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.minusCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]),
            positiveWrapAround: positiveWrapAround,
            positiveWrapAroundActive: positiveWrapAroundActive,
            negativeWrapAround: negativeWrapAround,
            negativeWrapAroundActive: negativeWrapAroundActive,
            vibrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.vibrate),
            locked: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.locked)
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var focusTitle;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    focusTitle = this.route.snapshot.paramMap.get('focusTitle');

                    if (focusTitle) {
                      /*
                       * TODO: Wohaaa this is ugly, but seems to be the only working solution..
                       * cmon angular, implement this focus on element ref thing already!
                       *
                       * Discussion on ionic discourse:
                       * https://forum.ionicframework.com/t/setting-focus-to-an-input-in-ionic/62789/56
                       * Angular pull request:
                       * https://github.com/angular/angular/issues/31133
                       */
                      setTimeout(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.titleElement.setFocus();

                                case 2:
                                  this.counterSettingsForm.patchValue({
                                    title: ''
                                  });

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, 200);
                    }

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.counterSettingsForm.valid) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    this.counterSettingsForm.value.minusCount = -this.counterSettingsForm.value.minusCount;
                    this.counterSettingsForm.value.negativeWrapAround = -this.counterSettingsForm.value.negativeWrapAround;
                    _context3.next = 6;
                    return this.counterRepositoryService.save(Object.assign(this.counter, this.counterSettingsForm.value));

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "hasUnsavedChanges",
        value: function hasUnsavedChanges() {
          return !this.counterSettingsForm.valid;
        }
      }, {
        key: "reset",
        value: function reset() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.counterService.reset(this.counter);

                  case 2:
                    this.router.navigate(['/counters']);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "check",
        value: function check(formControlName) {
          this.counterSettingsForm.patchValue(_defineProperty({}, formControlName, true));
        }
      }, {
        key: "increment",
        value: function increment(formControlName) {
          var value = this.counterSettingsForm.get(formControlName).value;

          if (value === null) {
            value = -1;
          }

          this.counterSettingsForm.patchValue(_defineProperty({}, formControlName, value + 1));
        }
      }, {
        key: "clamp",
        value: function clamp(formControlName) {
          var clampValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var clampFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'max';
          var value = this.counterSettingsForm.get(formControlName).value;

          if (value !== null) {
            this.counterSettingsForm.patchValue(_defineProperty({}, formControlName, Math[clampFunction](clampValue, value)));
          }
        }
      }, {
        key: "deleteCounter",
        value: function deleteCounter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // We want to make give the user the impression that this
                    // operation is very quick, so we first navigate away.
                    this.router.navigate(['/counters']);
                    _context5.next = 3;
                    return this.counterService.delete(this.counter);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return CounterSettingsPage;
    }();

    CounterSettingsPage.ɵfac = function CounterSettingsPage_Factory(t) {
      return new (t || CounterSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"]));
    };

    CounterSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CounterSettingsPage,
      selectors: [["app-counter-settings"]],
      viewQuery: function CounterSettingsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
        }
      },
      decls: 70,
      vars: 2,
      consts: [[3, "formGroup", "ngSubmit", "ionChange"], ["required", "", "formControlName", "title", "type", "text", "placeholder", "my Counter", 1, "title-input"], ["titleInput", ""], ["slot", "start", "name", "add", 3, "click"], ["required", "", "formControlName", "plusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "start", "name", "remove", 3, "click"], ["required", "", "formControlName", "minusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["required", "", "formControlName", "positiveWrapAround", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "end", "formControlName", "positiveWrapAroundActive"], ["required", "", "formControlName", "negativeWrapAround", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "end", "formControlName", "negativeWrapAroundActive"], [1, "vibrate-checkbox", 3, "hidden"], ["slot", "start", "name", "pulse"], ["slot", "end", "formControlName", "vibrate"], ["slot", "start", "name", "lock"], ["slot", "end", "formControlName", "locked"], ["slot", "start", "name", "trash"], ["slot", "end", "name", "arrow-back"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["size", "large", "expand", "full", "color", "medium", "appNotImplemented", "", "description", "Convert to binary counter", "issueId", "13", "on", "click"], ["name", "sync"], ["size", "large", "expand", "full", "appNotImplemented", "", "description", "Add counter widget to home screen", "issueId", "2", "on", "click"], ["name", "phone-portrait"], ["size", "large", "expand", "full", "color", "warning", 3, "click"], ["name", "refresh"]],
      template: function CounterSettingsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CounterSettingsPage_Template_form_ngSubmit_1_listener() {
            return ctx.submit();
          })("ionChange", function CounterSettingsPage_Template_form_ionChange_1_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Plus Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_13_listener() {
            return ctx.increment("plusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_14_listener() {
            return ctx.clamp("plusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Minus Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_19_listener() {
            return ctx.increment("minusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_20_listener() {
            return ctx.clamp("minusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Positive Wraparound");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_25_listener() {
            return ctx.increment("positiveWrapAround");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_26_listener() {
            ctx.clamp("positiveWrapAround", 1);
            return ctx.check("positiveWrapAroundActive");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Negative Wraparound");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_32_listener() {
            return ctx.increment("negativeWrapAround");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_33_listener() {
            ctx.clamp("negativeWrapAround", 1);
            return ctx.check("negativeWrapAroundActive");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Vibrate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ion-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Locked");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-checkbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item-options", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_item_option_click_52_listener() {
            return ctx.deleteCounter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Make binary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "ion-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " To Home Screen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_button_click_67_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.counterSettingsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.appState.vibrate);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _not_implemented_not_implemented_directive__WEBPACK_IMPORTED_MODULE_8__["NotImplementedDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItc2V0dGluZ3MvY291bnRlci1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CounterSettingsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-counter-settings',
          templateUrl: './counter-settings.page.html',
          styleUrls: ['./counter-settings.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]
        }, {
          type: _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"]
        }, {
          type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"]
        }];
      }, {
        titleElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['titleInput', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/guards/unsaved-changes/unsaved-changes.guard.ts ***!
    \*****************************************************************/

  /*! exports provided: UnsavedChangesGuard */

  /***/
  function srcAppGuardsUnsavedChangesUnsavedChangesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function () {
      return UnsavedChangesGuard;
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

    var UnsavedChangesGuard = /*#__PURE__*/function () {
      function UnsavedChangesGuard(alertController) {
        _classCallCheck(this, UnsavedChangesGuard);

        this.alertController = alertController;
      }

      _createClass(UnsavedChangesGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component, route, state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (component.hasUnsavedChanges()) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return", true);

                  case 2:
                    _context6.next = 4;
                    return this.canDiscard();

                  case 4:
                    return _context6.abrupt("return", _context6.sent);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /**
         * Ask the user if they want to discard unsaved changes
         */

      }, {
        key: "canDiscard",
        value: function canDiscard() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        header: 'Unsaved Changes',
                        message: 'You are trying to leave a page which has unsaved changes',
                        buttons: [{
                          text: 'Leave',
                          handler: function handler(_) {
                            return resolve(true);
                          }
                        }, {
                          text: 'Stay',
                          handler: function handler(_) {
                            return resolve(false);
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }]);

      return UnsavedChangesGuard;
    }();

    UnsavedChangesGuard.ɵfac = function UnsavedChangesGuard_Factory(t) {
      return new (t || UnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
    };

    UnsavedChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UnsavedChangesGuard,
      factory: UnsavedChangesGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnsavedChangesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var newCounter;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"](); // add counter to bottom

                    newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                    _context8.next = 4;
                    return this.counterRepositoryService.save(newCounter);

                  case 4:
                    return _context8.abrupt("return", newCounter);

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.counterRepositoryService.delete(counter);

                  case 2:
                    _context9.next = 4;
                    return Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) {
                      return _this3.countEventRepositoryService.delete(i);
                    }));

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "count",
        value: function count(counter, delta) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var position;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
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
                    _context10.prev = 5;
                    _context10.next = 8;
                    return this.positionService.getPosition();

                  case 8:
                    position = _context10.sent;
                    _context10.next = 15;
                    break;

                  case 11:
                    _context10.prev = 11;
                    _context10.t0 = _context10["catch"](5);
                    _context10.next = 15;
                    return this.appStateService.setRecordPosition(false);

                  case 15:
                    _context10.next = 17;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))]);

                  case 17:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[5, 11]]);
          }));
        }
      }, {
        key: "reset",
        value: function reset(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    counter.count = 0;
                    _context11.next = 3;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset))]);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "setLocked",
        value: function setLocked(counter, _setLocked) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    counter.locked = _setLocked;
                    _context12.next = 3;
                    return this.counterRepositoryService.save(counter);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "reorder",
        value: function reorder(from, to) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this4 = this;

            var counters;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    counters = this.counterRepositoryService.allSortBySortOrder; // move element in array

                    counters.splice(to, 0, counters.splice(from, 1)[0]); // save in new order

                    _context14.next = 4;
                    return Promise.all(counters.map(function (counter, i) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                counter.sortOrder = i;
                                _context13.next = 3;
                                return this.counterRepositoryService.save(counter);

                              case 3:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
        /**
         * For development purposes only
         */

      }, {
        key: "addRandomCountEvent",
        value: function addRandomCountEvent(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var delta, randomDate;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    randomDate = function _ref(start, end) {
                      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                    };

                    delta = Math.round(Math.random() * 10 % 10 - 5);
                    counter.count += delta;
                    _context15.next = 5;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))]);

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
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
//# sourceMappingURL=counter-settings-counter-settings-module-es5.js.map