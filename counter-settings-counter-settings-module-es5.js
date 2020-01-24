(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-settings-counter-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-settings/counter-settings.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter-detail/counter-settings/counter-settings.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form\n    [formGroup]=\"counterSettingsForm\"\n    (ngSubmit)=\"submit()\"\n    (ionChange)=\"submit()\"\n  >\n      <ion-list>\n\n          <ion-list-header>Title</ion-list-header>\n          <ion-item>\n            <ion-input\n              required\n              formControlName=\"title\"\n              type=\"text\"\n              placeholder=\"my Counter\"\n              class=\"title-input\"\n            ></ion-input>\n          </ion-item>\n\n          <ion-list-header>Plus Count</ion-list-header>\n          <ion-item>\n\n            <ion-icon\n              slot=\"start\"\n              name=\"add\"\n              (click)=\"increment('plusCount')\"\n            ></ion-icon>\n\n            <ion-input\n              required\n              formControlName=\"plusCount\"\n              type=\"number\"\n              placeholder=\"0\"\n              (ionChange)=\"clamp('plusCount')\"\n            >\n            </ion-input>\n\n          </ion-item>\n\n          <ion-list-header>Minus Count</ion-list-header>\n          <ion-item>\n\n            <ion-icon\n              slot=\"start\"\n              name=\"remove\"\n              (click)=\"increment('minusCount')\"\n            ></ion-icon>\n\n            <ion-input\n              required\n              formControlName=\"minusCount\"\n              type=\"number\"\n              placeholder=\"0\"\n              (ionChange)=\"clamp('minusCount')\"\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-list-header>Positive Wraparound</ion-list-header>\n          <ion-item>\n\n            <ion-icon\n              slot=\"start\"\n              name=\"add\"\n              (click)=\"increment('positiveWrapAround')\"\n            >\n            </ion-icon>\n\n            <ion-input\n              required\n              formControlName=\"positiveWrapAround\"\n              type=\"number\"\n              placeholder=\"0\"\n              (ionChange)=\"\n                clamp('positiveWrapAround', 1);\n                check('positiveWrapAroundActive');\n              \"\n            >\n            </ion-input>\n\n            <ion-checkbox\n              slot=\"end\"\n              formControlName=\"positiveWrapAroundActive\"\n            >\n            </ion-checkbox>\n\n          </ion-item>\n\n          <ion-list-header>Negative Wraparound</ion-list-header>\n          <ion-item>\n\n            <ion-icon\n              slot=\"start\"\n              name=\"remove\"\n              (click)=\"increment('negativeWrapAround')\"\n            >\n            </ion-icon>\n\n            <ion-input\n              required\n              formControlName=\"negativeWrapAround\"\n              type=\"number\"\n              placeholder=\"0\"\n              (ionChange)=\"\n                clamp('negativeWrapAround', 1);\n                check('negativeWrapAroundActive');\n              \"\n            >\n            </ion-input>\n\n            <ion-checkbox\n              slot=\"end\"\n              formControlName=\"negativeWrapAroundActive\"\n            >\n            </ion-checkbox>\n\n          </ion-item>\n\n          <ion-item\n            [hidden]=\"!appState.vibrate\"\n            class=\"vibrate-checkbox\"\n          >\n            <ion-icon slot=\"start\" name=\"pulse\"></ion-icon>\n            <ion-label>Vibrate</ion-label>\n            <ion-checkbox\n              slot=\"end\"\n              formControlName=\"vibrate\"\n            >\n            </ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\n            <ion-label>Locked</ion-label>\n            <ion-checkbox\n              slot=\"end\"\n              formControlName=\"locked\"\n            >\n            </ion-checkbox>\n          </ion-item>\n\n          <ion-item-sliding>\n\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n              <ion-label>Delete</ion-label>\n              <ion-icon slot=\"end\" name=\"arrow-back\"></ion-icon>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option\n                color=\"danger\"\n                (click)=\"deleteCounter()\"\n              >\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              size=\"large\"\n              expand=\"full\"\n              color=\"medium\"\n              appNotImplemented description=\"Convert to binary counter\" issueId=\"13\" on=\"click\"\n            >\n              <ion-icon name=\"sync\"></ion-icon>\n              Make binary\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n\n            <ion-button\n              size=\"large\"\n              expand=\"full\"\n              appNotImplemented description=\"Add counter widget to home screen\" issueId=\"2\" on=\"click\"\n            >\n              <ion-icon name=\"phone-portrait\"></ion-icon>\n              To Home Screen\n            </ion-button>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              size=\"large\"\n              expand=\"full\"\n              color=\"warning\"\n              (click)=\"reset()\"\n            >\n              <ion-icon name=\"refresh\"></ion-icon>\n              Reset\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counter-detail/counter-settings/counter-settings.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/counter-detail/counter-settings/counter-settings.module.ts ***!
  \****************************************************************************/
/*! exports provided: CounterSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterSettingsPageModule", function() { return CounterSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/unsaved-changes/unsaved-changes.guard */ "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts");
/* harmony import */ var _counter_settings_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-settings.page */ "./src/app/counter-detail/counter-settings/counter-settings.page.ts");









var routes = [
    {
        path: '',
        component: _counter_settings_page__WEBPACK_IMPORTED_MODULE_8__["CounterSettingsPage"],
        canDeactivate: [
            _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesGuard"],
        ],
    }
];
var CounterSettingsPageModule = /** @class */ (function () {
    function CounterSettingsPageModule() {
    }
    CounterSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModule"],
            ],
            declarations: [_counter_settings_page__WEBPACK_IMPORTED_MODULE_8__["CounterSettingsPage"]]
        })
    ], CounterSettingsPageModule);
    return CounterSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/counter-detail/counter-settings/counter-settings.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/counter-detail/counter-settings/counter-settings.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItc2V0dGluZ3MvY291bnRlci1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/counter-detail/counter-settings/counter-settings.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/counter-detail/counter-settings/counter-settings.page.ts ***!
  \**************************************************************************/
/*! exports provided: CounterSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterSettingsPage", function() { return CounterSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-state.service */ "./src/app/services/app-state.service.ts");







var CounterSettingsPage = /** @class */ (function () {
    function CounterSettingsPage(router, route, counterRepositoryService, counterService, appStateService) {
        this.router = router;
        this.route = route;
        this.counterRepositoryService = counterRepositoryService;
        this.counterService = counterService;
        this.appStateService = appStateService;
    }
    CounterSettingsPage.prototype.ngOnInit = function () {
        this.counter = this.route.snapshot.data.counter;
        this.appState = this.appStateService.appState;
        // enable disable input boxed based on checkbox
        // TODO: this should become a component
        var positiveWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAround, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
        ]);
        var positiveWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAroundActive, []);
        var negativeWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.negativeWrapAround, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
        ]);
        var negativeWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.negativeWrapAroundActive, []);
        this.counterSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.title, []),
            plusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.plusCount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)
            ]),
            minusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.minusCount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)
            ]),
            positiveWrapAround: positiveWrapAround,
            positiveWrapAroundActive: positiveWrapAroundActive,
            negativeWrapAround: negativeWrapAround,
            negativeWrapAroundActive: negativeWrapAroundActive,
            vibrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.vibrate),
            locked: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.locked),
        });
    };
    CounterSettingsPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // only submit if valid
                        if (!this.counterSettingsForm.valid) {
                            return [2 /*return*/];
                        }
                        this.counterSettingsForm.value.minusCount = -this.counterSettingsForm.value.minusCount;
                        this.counterSettingsForm.value.negativeWrapAround = -this.counterSettingsForm.value.negativeWrapAround;
                        return [4 /*yield*/, this.counterRepositoryService.save(Object.assign(this.counter, this.counterSettingsForm.value))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterSettingsPage.prototype.hasUnsavedChanges = function () {
        return !this.counterSettingsForm.valid;
    };
    CounterSettingsPage.prototype.reset = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.counterService.reset(this.counter)];
                    case 1:
                        _a.sent();
                        this.router.navigate([
                            '/counters',
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterSettingsPage.prototype.check = function (formControlName) {
        var _a;
        this.counterSettingsForm.patchValue((_a = {},
            _a[formControlName] = true,
            _a));
    };
    CounterSettingsPage.prototype.increment = function (formControlName) {
        var _a;
        var value = this.counterSettingsForm.get(formControlName).value;
        if (value === null) {
            value = -1;
        }
        this.counterSettingsForm.patchValue((_a = {},
            _a[formControlName] = value + 1,
            _a));
    };
    CounterSettingsPage.prototype.clamp = function (formControlName, clampValue, clampFunction) {
        var _a;
        if (clampValue === void 0) { clampValue = 0; }
        if (clampFunction === void 0) { clampFunction = 'max'; }
        var value = this.counterSettingsForm.get(formControlName).value;
        if (value !== null) {
            this.counterSettingsForm.patchValue((_a = {},
                _a[formControlName] = Math[clampFunction](clampValue, value),
                _a));
        }
    };
    CounterSettingsPage.prototype.deleteCounter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // We want to make give the user the impression that this
                        // operation is very quick, so we first navigate away.
                        this.router.navigate([
                            '/counters',
                        ]);
                        return [4 /*yield*/, this.counterService.delete(this.counter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterSettingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] },
        { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"] },
        { type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"] }
    ]; };
    CounterSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter-settings',
            template: __webpack_require__(/*! raw-loader!./counter-settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-settings/counter-settings.page.html"),
            styles: [__webpack_require__(/*! ./counter-settings.page.scss */ "./src/app/counter-detail/counter-settings/counter-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"],
            _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"],
            _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"]])
    ], CounterSettingsPage);
    return CounterSettingsPage;
}());



/***/ }),

/***/ "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/guards/unsaved-changes/unsaved-changes.guard.ts ***!
  \*****************************************************************/
/*! exports provided: UnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function() { return UnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UnsavedChangesGuard = /** @class */ (function () {
    function UnsavedChangesGuard(alertController) {
        this.alertController = alertController;
    }
    UnsavedChangesGuard.prototype.canDeactivate = function (component, route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!component.hasUnsavedChanges()) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.canDiscard()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Ask the user if they want to discard unsaved changes
     */
    UnsavedChangesGuard.prototype.canDiscard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Unsaved Changes',
                            message: 'You are trying to leave a page which has unsaved changes',
                            buttons: [
                                {
                                    text: 'Leave',
                                    handler: function (_) { return resolve(true); }
                                },
                                {
                                    text: 'Stay',
                                    handler: function (_) { return resolve(false); }
                                }
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    UnsavedChangesGuard.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    UnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UnsavedChangesGuard);
    return UnsavedChangesGuard;
}());



/***/ }),

/***/ "./src/app/services/counter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/counter.service.ts ***!
  \*********************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/counter */ "./src/app/models/counter.ts");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _models_count_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/count-event */ "./src/app/models/count-event.ts");
/* harmony import */ var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/count-event-repository.service */ "./src/app/models/count-event-repository.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.service */ "./src/app/services/position.service.ts");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-state.service */ "./src/app/services/app-state.service.ts");









var CounterService = /** @class */ (function () {
    function CounterService(counterRepositoryService, countEventRepositoryService, positionService, appStateService, vibration) {
        this.counterRepositoryService = counterRepositoryService;
        this.countEventRepositoryService = countEventRepositoryService;
        this.positionService = positionService;
        this.appStateService = appStateService;
        this.vibration = vibration;
    }
    CounterService_1 = CounterService;
    Object.defineProperty(CounterService.prototype, "allSortBySortOrder", {
        get: function () {
            return this.counterRepositoryService.allSortBySortOrder;
        },
        enumerable: true,
        configurable: true
    });
    CounterService.prototype.addCounter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newCounter;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"]();
                        newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                        return [4 /*yield*/, this.counterRepositoryService.save(newCounter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.delete = function (counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // first delete the counter: this is so that the ui element disappers
                    // quicker which should be create better user experience.
                    return [4 /*yield*/, this.counterRepositoryService.delete(counter)];
                    case 1:
                        // first delete the counter: this is so that the ui element disappers
                        // quicker which should be create better user experience.
                        _a.sent();
                        // then, delete all events of this counter
                        return [4 /*yield*/, Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) { return _this.countEventRepositoryService.delete(i); }))];
                    case 2:
                        // then, delete all events of this counter
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.count = function (counter, delta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var position, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter.count += delta;
                        // vibrate
                        if (this.appStateService.appState.vibrate
                            && counter.vibrate) {
                            this.vibration.vibrate((delta > 0) ?
                                CounterService_1.VIBRATION_PATTERN_POSITIVE :
                                CounterService_1.VIBRATION_PATTERN_NEGATIVE);
                        }
                        // apply positive and negative wraparounds
                        if (counter.positiveWrapAroundActive
                            && counter.count > counter.positiveWrapAround) {
                            counter.count = counter.count % counter.positiveWrapAround;
                        }
                        if (counter.negativeWrapAroundActive
                            && counter.count < counter.negativeWrapAround) {
                            counter.count = counter.count % counter.negativeWrapAround;
                        }
                        position = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.positionService.getPosition()];
                    case 2:
                        position = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        // user does not allow posiiton recording or something unexpected happened
                        return [4 /*yield*/, this.appStateService.setRecordPosition(false)];
                    case 4:
                        // user does not allow posiiton recording or something unexpected happened
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, Promise.all([
                            this.counterRepositoryService.save(counter),
                            this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))
                        ])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.reset = function (counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter.count = 0;
                        return [4 /*yield*/, Promise.all([
                                this.counterRepositoryService.save(counter),
                                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset)),
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.setLocked = function (counter, setLocked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter.locked = setLocked;
                        return [4 /*yield*/, this.counterRepositoryService.save(counter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.reorder = function (from, to) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var counters;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counters = this.counterRepositoryService.allSortBySortOrder;
                        // move element in array
                        counters.splice(to, 0, counters.splice(from, 1)[0]);
                        // save in new order
                        return [4 /*yield*/, Promise.all(counters.map(function (counter, i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            counter.sortOrder = i;
                                            return [4 /*yield*/, this.counterRepositoryService.save(counter)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        // save in new order
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var CounterService_1;
    CounterService.VIBRATION_PATTERN_POSITIVE = [30];
    CounterService.VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];
    CounterService.ctorParameters = function () { return [
        { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] },
        { type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"] },
        { type: _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"] },
        { type: _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"] },
        { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"] }
    ]; };
    CounterService = CounterService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"],
            _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"],
            _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"],
            _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"]])
    ], CounterService);
    return CounterService;
}());



/***/ })

}]);
//# sourceMappingURL=counter-settings-counter-settings-module-es5.js.map