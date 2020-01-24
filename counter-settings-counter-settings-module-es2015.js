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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/unsaved-changes/unsaved-changes.guard */ "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts");
/* harmony import */ var _counter_settings_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-settings.page */ "./src/app/counter-detail/counter-settings/counter-settings.page.ts");









const routes = [
    {
        path: '',
        component: _counter_settings_page__WEBPACK_IMPORTED_MODULE_8__["CounterSettingsPage"],
        canDeactivate: [
            _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesGuard"],
        ],
    }
];
let CounterSettingsPageModule = class CounterSettingsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-state.service */ "./src/app/services/app-state.service.ts");







let CounterSettingsPage = class CounterSettingsPage {
    constructor(router, route, counterRepositoryService, counterService, appStateService) {
        this.router = router;
        this.route = route;
        this.counterRepositoryService = counterRepositoryService;
        this.counterService = counterService;
        this.appStateService = appStateService;
    }
    ngOnInit() {
        this.counter = this.route.snapshot.data.counter;
        this.appState = this.appStateService.appState;
        // enable disable input boxed based on checkbox
        // TODO: this should become a component
        const positiveWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAround, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
        ]);
        const positiveWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.positiveWrapAroundActive, []);
        const negativeWrapAround = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.negativeWrapAround, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)
        ]);
        const negativeWrapAroundActive = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.negativeWrapAroundActive, []);
        this.counterSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.title, []),
            plusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.plusCount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)
            ]),
            minusCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-this.counter.minusCount, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)
            ]),
            positiveWrapAround,
            positiveWrapAroundActive,
            negativeWrapAround,
            negativeWrapAroundActive,
            vibrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.vibrate),
            locked: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.counter.locked),
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // only submit if valid
            if (!this.counterSettingsForm.valid) {
                return;
            }
            this.counterSettingsForm.value.minusCount = -this.counterSettingsForm.value.minusCount;
            this.counterSettingsForm.value.negativeWrapAround = -this.counterSettingsForm.value.negativeWrapAround;
            yield this.counterRepositoryService.save(Object.assign(this.counter, this.counterSettingsForm.value));
        });
    }
    hasUnsavedChanges() {
        return !this.counterSettingsForm.valid;
    }
    reset() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.counterService.reset(this.counter);
            this.router.navigate([
                '/counters',
            ]);
        });
    }
    check(formControlName) {
        this.counterSettingsForm.patchValue({
            [formControlName]: true,
        });
    }
    increment(formControlName) {
        let value = this.counterSettingsForm.get(formControlName).value;
        if (value === null) {
            value = -1;
        }
        this.counterSettingsForm.patchValue({
            [formControlName]: value + 1,
        });
    }
    clamp(formControlName, clampValue = 0, clampFunction = 'max') {
        const value = this.counterSettingsForm.get(formControlName).value;
        if (value !== null) {
            this.counterSettingsForm.patchValue({
                [formControlName]: Math[clampFunction](clampValue, value)
            });
        }
    }
    deleteCounter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // We want to make give the user the impression that this
            // operation is very quick, so we first navigate away.
            this.router.navigate([
                '/counters',
            ]);
            yield this.counterService.delete(this.counter);
        });
    }
};
CounterSettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] },
    { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"] },
    { type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let UnsavedChangesGuard = class UnsavedChangesGuard {
    constructor(alertController) {
        this.alertController = alertController;
    }
    canDeactivate(component, route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!component.hasUnsavedChanges()) {
                return true;
            }
            return yield this.canDiscard();
        });
    }
    /**
     * Ask the user if they want to discard unsaved changes
     */
    canDiscard() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Unsaved Changes',
                message: 'You are trying to leave a page which has unsaved changes',
                buttons: [
                    {
                        text: 'Leave',
                        handler: _ => resolve(true)
                    },
                    {
                        text: 'Stay',
                        handler: _ => resolve(false)
                    }
                ],
            });
            yield alert.present();
        }));
    }
};
UnsavedChangesGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
UnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], UnsavedChangesGuard);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/counter */ "./src/app/models/counter.ts");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _models_count_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/count-event */ "./src/app/models/count-event.ts");
/* harmony import */ var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/count-event-repository.service */ "./src/app/models/count-event-repository.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.service */ "./src/app/services/position.service.ts");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-state.service */ "./src/app/services/app-state.service.ts");

var CounterService_1;








let CounterService = CounterService_1 = class CounterService {
    constructor(counterRepositoryService, countEventRepositoryService, positionService, appStateService, vibration) {
        this.counterRepositoryService = counterRepositoryService;
        this.countEventRepositoryService = countEventRepositoryService;
        this.positionService = positionService;
        this.appStateService = appStateService;
        this.vibration = vibration;
    }
    get allSortBySortOrder() {
        return this.counterRepositoryService.allSortBySortOrder;
    }
    addCounter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"]();
            newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
            yield this.counterRepositoryService.save(newCounter);
        });
    }
    delete(counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // first delete the counter: this is so that the ui element disappers
            // quicker which should be create better user experience.
            yield this.counterRepositoryService.delete(counter);
            // then, delete all events of this counter
            yield Promise.all(this.countEventRepositoryService.getByCounter(counter).map((i) => this.countEventRepositoryService.delete(i)));
        });
    }
    count(counter, delta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            let position = null;
            try {
                position = yield this.positionService.getPosition();
            }
            catch (e) {
                // user does not allow posiiton recording or something unexpected happened
                yield this.appStateService.setRecordPosition(false);
            }
            yield Promise.all([
                this.counterRepositoryService.save(counter),
                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))
            ]);
        });
    }
    reset(counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            counter.count = 0;
            yield Promise.all([
                this.counterRepositoryService.save(counter),
                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset)),
            ]);
        });
    }
    setLocked(counter, setLocked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            counter.locked = setLocked;
            yield this.counterRepositoryService.save(counter);
        });
    }
    reorder(from, to) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const counters = this.counterRepositoryService.allSortBySortOrder;
            // move element in array
            counters.splice(to, 0, counters.splice(from, 1)[0]);
            // save in new order
            yield Promise.all(counters.map((counter, i) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                counter.sortOrder = i;
                yield this.counterRepositoryService.save(counter);
            })));
        });
    }
};
CounterService.VIBRATION_PATTERN_POSITIVE = [30];
CounterService.VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];
CounterService.ctorParameters = () => [
    { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] },
    { type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"] },
    { type: _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"] },
    { type: _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"] }
];
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



/***/ })

}]);
//# sourceMappingURL=counter-settings-counter-settings-module-es2015.js.map