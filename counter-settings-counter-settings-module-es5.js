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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["titleInput"];

    function CounterSettingsPage_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_ng_template_35_Template_ion_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r45.increment("positiveLimit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_ng_template_35_Template_ion_input_ionChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r47.clamp("positiveLimit", 1);
          return ctx_r47.check("positiveLimitActive");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CounterSettingsPage_ng_template_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_ng_template_47_Template_ion_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r48.increment("negativeLimit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_ng_template_47_Template_ion_input_ionChange_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          ctx_r50.clamp("negativeLimit", 1);
          return ctx_r50.check("negativeLimitActive");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

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

          var positiveLimit = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
          var positiveLimitActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveLimitActive, []);
          var negativeLimit = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.negativeLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
          var negativeLimitActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.negativeLimitActive, []);
          this.counterSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.title, []),
            plusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.plusCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]),
            minusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.minusCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]),
            positiveLimit: positiveLimit,
            positiveLimitActive: positiveLimitActive,
            negativeLimit: negativeLimit,
            negativeLimitActive: negativeLimitActive,
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
                    this.counterSettingsForm.value.negativeLimit = -this.counterSettingsForm.value.negativeLimit;
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
      decls: 48,
      vars: 5,
      consts: [[3, "formGroup", "ngSubmit", "ionChange"], ["position", "stacked"], ["required", "", "formControlName", "title", "type", "text", "placeholder", "my Counter", 1, "title-input"], ["titleInput", ""], [1, "vibrate-checkbox", 3, "hidden"], ["slot", "start", "name", "pulse"], ["slot", "end", "formControlName", "vibrate"], ["slot", "start", 3, "name"], ["slot", "end", "formControlName", "locked"], ["slot", "start", "name", "phone-portrait-outline"], ["slot", "end", "appNotImplemented", "", "description", "Add counter widget to home screen", "issueId", "2", "on", "click"], ["color", "success"], ["name", "add-circle-outline"], ["slot", "start", "name", "add", 3, "click"], ["required", "", "formControlName", "plusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "start", "name", "code-download-outline", 1, "rotate-180"], ["slot", "end", "formControlName", "positiveLimitActive"], [3, "ngIf"], ["color", "danger"], ["name", "remove-circle-outline"], ["slot", "start", "name", "remove", 3, "click"], ["required", "", "formControlName", "minusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "start", "name", "code-download-outline"], ["slot", "end", "formControlName", "negativeLimitActive"], ["required", "", "formControlName", "positiveLimit", "type", "number", "placeholder", "0", 3, "ionChange"], ["required", "", "formControlName", "negativeLimit", "type", "number", "placeholder", "0", 3, "ionChange"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Vibrate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Locked");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Add to Home Screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item-divider", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_28_listener() {
            return ctx.increment("plusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_29_listener() {
            return ctx.clamp("plusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-checkbox", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CounterSettingsPage_ng_template_35_Template, 3, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item-divider", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_40_listener() {
            return ctx.increment("minusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_41_listener() {
            return ctx.clamp("minusCount");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ion-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CounterSettingsPage_ng_template_47_Template, 3, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.counterSettingsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.appState.vibrate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx.counter.locked ? "lock-closed-outline" : "lock-open-outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.positiveLimitActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.counter.negativeLimitActive);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"], _not_implemented_not_implemented_directive__WEBPACK_IMPORTED_MODULE_8__["NotImplementedDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NumericValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: [".rotate-180[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvdW50L2NvdW50L3NyYy9hcHAvY291bnRlci1kZXRhaWwvY291bnRlci1zZXR0aW5ncy9jb3VudGVyLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291bnRlci1kZXRhaWwvY291bnRlci1zZXR0aW5ncy9jb3VudGVyLXNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY291bnRlci1kZXRhaWwvY291bnRlci1zZXR0aW5ncy9jb3VudGVyLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUtMTgwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuIiwiLnJvdGF0ZS0xODAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"]
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (component.hasUnsavedChanges()) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", true);

                  case 2:
                    _context4.next = 4;
                    return this.canDiscard();

                  case 4:
                    return _context4.abrupt("return", _context4.sent);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
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
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var newCounter;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"](); // add counter to bottom

                    newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                    _context6.next = 4;
                    return this.counterRepositoryService.save(newCounter);

                  case 4:
                    return _context6.abrupt("return", newCounter);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.counterRepositoryService.delete(counter);

                  case 2:
                    _context7.next = 4;
                    return Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) {
                      return _this3.countEventRepositoryService.delete(i);
                    }));

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "count",
        value: function count(counter, delta) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var position;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    counter.count += delta; // vibrate

                    if (this.appStateService.appState.vibrate && counter.vibrate) {
                      this.vibration.vibrate(delta > 0 ? CounterService.VIBRATION_PATTERN_POSITIVE : CounterService.VIBRATION_PATTERN_NEGATIVE);
                    } // apply positive and negative wraparounds


                    if (counter.positiveLimitActive && counter.count > counter.positiveLimit) {
                      counter.count = counter.count % counter.positiveLimit;
                    }

                    if (counter.negativeLimitActive && counter.count < counter.negativeLimit) {
                      counter.count = counter.count % counter.negativeLimit;
                    }

                    position = null;
                    _context8.prev = 5;
                    _context8.next = 8;
                    return this.positionService.getPosition();

                  case 8:
                    position = _context8.sent;
                    _context8.next = 15;
                    break;

                  case 11:
                    _context8.prev = 11;
                    _context8.t0 = _context8["catch"](5);
                    _context8.next = 15;
                    return this.appStateService.setRecordPosition(false);

                  case 15:
                    _context8.next = 17;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))]);

                  case 17:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[5, 11]]);
          }));
        }
      }, {
        key: "reset",
        value: function reset(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    counter.count = 0;
                    _context9.next = 3;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset))]);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "setLocked",
        value: function setLocked(counter, _setLocked) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    counter.locked = _setLocked;
                    _context10.next = 3;
                    return this.counterRepositoryService.save(counter);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "reorder",
        value: function reorder(from, to) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this4 = this;

            var counters;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    counters = this.counterRepositoryService.allSortBySortOrder; // move element in array

                    counters.splice(to, 0, counters.splice(from, 1)[0]); // save in new order

                    _context12.next = 4;
                    return Promise.all(counters.map(function (counter, i) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                counter.sortOrder = i;
                                _context11.next = 3;
                                return this.counterRepositoryService.save(counter);

                              case 3:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
        /**
         * For development purposes only
         */

      }, {
        key: "addRandomCountEvent",
        value: function addRandomCountEvent(counter) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var delta, randomDate;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    randomDate = function _ref(start, end) {
                      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                    };

                    delta = Math.round(Math.random() * 10 % 10 - 5);
                    counter.count += delta;
                    _context13.next = 5;
                    return Promise.all([this.counterRepositoryService.save(counter), this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))]);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
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