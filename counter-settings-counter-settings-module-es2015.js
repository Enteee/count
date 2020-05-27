(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-settings-counter-settings-module"],{

/***/ "./src/app/counter-detail/counter-settings/counter-settings.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/counter-detail/counter-settings/counter-settings.module.ts ***!
  \****************************************************************************/
/*! exports provided: CounterSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterSettingsPageModule", function() { return CounterSettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/unsaved-changes/unsaved-changes.guard */ "./src/app/guards/unsaved-changes/unsaved-changes.guard.ts");
/* harmony import */ var _counter_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter-settings.page */ "./src/app/counter-detail/counter-settings/counter-settings.page.ts");










const routes = [
    {
        path: '',
        component: _counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"],
        canDeactivate: [
            _guards_unsaved_changes_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesGuard"],
        ],
    }
];
class CounterSettingsPageModule {
}
CounterSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CounterSettingsPageModule });
CounterSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CounterSettingsPageModule_Factory(t) { return new (t || CounterSettingsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterSettingsPageModule, { declarations: [_counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterSettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_5__["NotImplementedModule"],
                ],
                declarations: [_counter_settings_page__WEBPACK_IMPORTED_MODULE_7__["CounterSettingsPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-state.service */ "./src/app/services/app-state.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _not_implemented_not_implemented_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../not-implemented/not-implemented.directive */ "./src/app/not-implemented/not-implemented.directive.ts");















const _c0 = ["titleInput"];
class CounterSettingsPage {
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
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const focusTitle = this.route.snapshot.paramMap.get('focusTitle');
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
                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.titleElement.setFocus();
                    this.counterSettingsForm.patchValue({
                        title: '',
                    });
                }), 200);
            }
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // We want to make give the user the impression that this
            // operation is very quick, so we first navigate away.
            this.router.navigate([
                '/counters',
            ]);
            yield this.counterService.delete(this.counter);
        });
    }
}
CounterSettingsPage.ɵfac = function CounterSettingsPage_Factory(t) { return new (t || CounterSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"])); };
CounterSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CounterSettingsPage, selectors: [["app-counter-settings"]], viewQuery: function CounterSettingsPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
    } }, decls: 70, vars: 3, consts: [[3, "formGroup", "ngSubmit", "ionChange"], ["required", "", "formControlName", "title", "type", "text", "placeholder", "my Counter", 1, "title-input"], ["titleInput", ""], ["slot", "start", "name", "add", 3, "click"], ["required", "", "formControlName", "plusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "start", "name", "remove", 3, "click"], ["required", "", "formControlName", "minusCount", "type", "number", "placeholder", "0", 3, "ionChange"], ["required", "", "formControlName", "positiveWrapAround", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "end", "formControlName", "positiveWrapAroundActive"], ["required", "", "formControlName", "negativeWrapAround", "type", "number", "placeholder", "0", 3, "ionChange"], ["slot", "end", "formControlName", "negativeWrapAroundActive"], [1, "vibrate-checkbox", 3, "hidden"], ["slot", "start", "name", "pulse"], ["slot", "end", "formControlName", "vibrate"], ["slot", "start", 3, "name"], ["slot", "end", "formControlName", "locked"], ["slot", "start", "name", "trash"], ["slot", "end", "name", "arrow-back"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["size", "large", "expand", "full", "color", "medium", "appNotImplemented", "", "description", "Convert to binary counter", "issueId", "13", "on", "click"], ["name", "sync"], ["size", "large", "expand", "full", "appNotImplemented", "", "description", "Add counter widget to home screen", "issueId", "2", "on", "click"], ["name", "phone-portrait"], ["size", "large", "expand", "full", "color", "warning", 3, "click"], ["name", "refresh"]], template: function CounterSettingsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CounterSettingsPage_Template_form_ngSubmit_1_listener() { return ctx.submit(); })("ionChange", function CounterSettingsPage_Template_form_ionChange_1_listener() { return ctx.submit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_13_listener() { return ctx.increment("plusCount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_14_listener() { return ctx.clamp("plusCount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Minus Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_19_listener() { return ctx.increment("minusCount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_20_listener() { return ctx.clamp("minusCount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Positive Wraparound");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_25_listener() { return ctx.increment("positiveWrapAround"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_26_listener() { ctx.clamp("positiveWrapAround", 1); return ctx.check("positiveWrapAroundActive"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_icon_click_32_listener() { return ctx.increment("negativeWrapAround"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function CounterSettingsPage_Template_ion_input_ionChange_33_listener() { ctx.clamp("negativeWrapAround", 1); return ctx.check("negativeWrapAroundActive"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_item_option_click_52_listener() { return ctx.deleteCounter(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterSettingsPage_Template_ion_button_click_67_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.counterSettingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.appState.vibrate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx.counter.locked ? "lock-closed-outline" : "lock-open-outline");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _not_implemented_not_implemented_directive__WEBPACK_IMPORTED_MODULE_8__["NotImplementedDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItc2V0dGluZ3MvY291bnRlci1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CounterSettingsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-counter-settings',
                templateUrl: './counter-settings.page.html',
                styleUrls: ['./counter-settings.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] }, { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_5__["CounterService"] }, { type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"] }]; }, { titleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['titleInput', { static: true }]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





class UnsavedChangesGuard {
    constructor(alertController) {
        this.alertController = alertController;
    }
    canDeactivate(component, route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
UnsavedChangesGuard.ɵfac = function UnsavedChangesGuard_Factory(t) { return new (t || UnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"])); };
UnsavedChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsavedChangesGuard, factory: UnsavedChangesGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnsavedChangesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/counter */ "./src/app/models/counter.ts");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _models_count_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/count-event */ "./src/app/models/count-event.ts");
/* harmony import */ var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/count-event-repository.service */ "./src/app/models/count-event-repository.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.service */ "./src/app/services/position.service.ts");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-state.service */ "./src/app/services/app-state.service.ts");















class CounterService {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"]();
            // add counter to bottom
            newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
            yield this.counterRepositoryService.save(newCounter);
            return newCounter;
        });
    }
    delete(counter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // first delete the counter: this is so that the ui element disappers
            // quicker which should be create better user experience.
            yield this.counterRepositoryService.delete(counter);
            // then, delete all events of this counter
            yield Promise.all(this.countEventRepositoryService.getByCounter(counter).map((i) => this.countEventRepositoryService.delete(i)));
        });
    }
    count(counter, delta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            counter.count += delta;
            // vibrate
            if (this.appStateService.appState.vibrate
                && counter.vibrate) {
                this.vibration.vibrate((delta > 0) ?
                    CounterService.VIBRATION_PATTERN_POSITIVE :
                    CounterService.VIBRATION_PATTERN_NEGATIVE);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            counter.count = 0;
            yield Promise.all([
                this.counterRepositoryService.save(counter),
                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset)),
            ]);
        });
    }
    setLocked(counter, setLocked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            counter.locked = setLocked;
            yield this.counterRepositoryService.save(counter);
        });
    }
    reorder(from, to) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const counters = this.counterRepositoryService.allSortBySortOrder;
            // move element in array
            counters.splice(to, 0, counters.splice(from, 1)[0]);
            // save in new order
            yield Promise.all(counters.map((counter, i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                counter.sortOrder = i;
                yield this.counterRepositoryService.save(counter);
            })));
        });
    }
    /**
     * For development purposes only
     */
    addRandomCountEvent(counter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const delta = Math.round(Math.random() * 10 % 10 - 5);
            counter.count += delta;
            function randomDate(start, end) {
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            }
            yield Promise.all([
                this.counterRepositoryService.save(counter),
                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))
            ]);
        });
    }
}
CounterService.VIBRATION_PATTERN_POSITIVE = [30];
CounterService.VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];
CounterService.ɵfac = function CounterService_Factory(t) { return new (t || CounterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"])); };
CounterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CounterService, factory: CounterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CounterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] }, { type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"] }, { type: _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"] }, { type: _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"] }, { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=counter-settings-counter-settings-module-es2015.js.map