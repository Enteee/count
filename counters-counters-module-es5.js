(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counters-counters-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counters/counters-settings/counters-settings.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counters/counters-settings/counters-settings.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n\n  <ion-item\n    button\n    (click)=\"toggleReorder()\"\n  >\n    <ion-icon\n      slot=\"start\"\n      name=\"swap\"\n      class=\"rotate-90\"\n    ></ion-icon>\n\n    <ng-template\n      *ngIf=\"this.reorderGroup.disabled; then thenBlock else elseBlock\"\n    ></ng-template>\n    <ng-template #thenBlock>Change Order</ng-template>\n    <ng-template #elseBlock>Keep Order</ng-template>\n\n  </ion-item>\n\n  <ion-item\n    button\n    (click)=\"addCounter()\"\n  >\n    <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n    Add New Counter\n  </ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/counters/counters.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counters/counters.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-icon src=\"assets/icon.svg\"></ion-icon>\n      Count\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-reorder-group\n      (ionItemReorder)=\"reorder($event)\"\n    >\n      <div *ngFor=\"let counter of counters\">\n        <app-plus-minus-counter [counter]=\"counter\"></app-plus-minus-counter>\n      </div>\n    </ion-reorder-group>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counters/counters-settings/counters-settings.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/counters/counters-settings/counters-settings.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rotate-90 {\n  display: inline-block;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvdW50L2NvdW50L3NyYy9hcHAvY291bnRlcnMvY291bnRlcnMtc2V0dGluZ3MvY291bnRlcnMtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvdW50ZXJzL2NvdW50ZXJzLXNldHRpbmdzL2NvdW50ZXJzLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3VudGVycy9jb3VudGVycy1zZXR0aW5ncy9jb3VudGVycy1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUtOTAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4iLCIucm90YXRlLTkwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/counters/counters-settings/counters-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/counters/counters-settings/counters-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: CountersSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersSettingsComponent", function() { return CountersSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");





var CountersSettingsComponent = /** @class */ (function () {
    function CountersSettingsComponent(counterService, router) {
        this.counterService = counterService;
        this.router = router;
    }
    CountersSettingsComponent.prototype.ngOnInit = function () { };
    CountersSettingsComponent.prototype.addCounter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newCounter;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.counterService.addCounter()];
                    case 1:
                        newCounter = _a.sent();
                        return [4 /*yield*/, Promise.all([
                                this.router.navigate([
                                    '/counter-detail',
                                    newCounter.id,
                                    'settings',
                                    {
                                        focusTitle: true,
                                    },
                                ]),
                                this.popoverController.dismiss()
                            ])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CountersSettingsComponent.prototype.toggleReorder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reorderGroup.disabled = !this.reorderGroup.disabled;
                        return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CountersSettingsComponent.ctorParameters = function () { return [
        { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"])
    ], CountersSettingsComponent.prototype, "popoverController", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"])
    ], CountersSettingsComponent.prototype, "reorderGroup", void 0);
    CountersSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counters-settings',
            template: __webpack_require__(/*! raw-loader!./counters-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/counters/counters-settings/counters-settings.component.html"),
            styles: [__webpack_require__(/*! ./counters-settings.component.scss */ "./src/app/counters/counters-settings/counters-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountersSettingsComponent);
    return CountersSettingsComponent;
}());



/***/ }),

/***/ "./src/app/counters/counters.module.ts":
/*!*********************************************!*\
  !*** ./src/app/counters/counters.module.ts ***!
  \*********************************************/
/*! exports provided: CountersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersPageModule", function() { return CountersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _counters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counters.page */ "./src/app/counters/counters.page.ts");
/* harmony import */ var _counters_settings_counters_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counters-settings/counters-settings.component */ "./src/app/counters/counters-settings/counters-settings.component.ts");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");










var CountersPageModule = /** @class */ (function () {
    function CountersPageModule() {
    }
    CountersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_8__["NotImplementedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _counters_page__WEBPACK_IMPORTED_MODULE_6__["CountersPage"]
                    }
                ])
            ],
            declarations: [
                _counters_page__WEBPACK_IMPORTED_MODULE_6__["CountersPage"],
                _counters_settings_counters_settings_component__WEBPACK_IMPORTED_MODULE_7__["CountersSettingsComponent"],
            ],
            providers: [],
            entryComponents: [
                _counters_settings_counters_settings_component__WEBPACK_IMPORTED_MODULE_7__["CountersSettingsComponent"]
            ]
        })
    ], CountersPageModule);
    return CountersPageModule;
}());



/***/ }),

/***/ "./src/app/counters/counters.page.scss":
/*!*********************************************!*\
  !*** ./src/app/counters/counters.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXJzL2NvdW50ZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/counters/counters.page.ts":
/*!*******************************************!*\
  !*** ./src/app/counters/counters.page.ts ***!
  \*******************************************/
/*! exports provided: CountersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersPage", function() { return CountersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _counters_settings_counters_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counters-settings/counters-settings.component */ "./src/app/counters/counters-settings/counters-settings.component.ts");





var CountersPage = /** @class */ (function () {
    function CountersPage(counterService, popoverController) {
        this.counterService = counterService;
        this.popoverController = popoverController;
    }
    CountersPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CountersPage.prototype, "counters", {
        get: function () {
            return this.counterService.allSortBySortOrder;
        },
        enumerable: true,
        configurable: true
    });
    CountersPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _counters_settings_counters_settings_component__WEBPACK_IMPORTED_MODULE_4__["CountersSettingsComponent"],
                            event: ev,
                            translucent: true,
                            componentProps: {
                                popoverController: this.popoverController,
                                reorderGroup: this.reorderGroup,
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CountersPage.prototype.reorder = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.counterService.reorder(ev.detail.from, ev.detail.to)];
                    case 1:
                        _a.sent();
                        ev.detail.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    CountersPage.ctorParameters = function () { return [
        { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"])
    ], CountersPage.prototype, "reorderGroup", void 0);
    CountersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counters',
            template: __webpack_require__(/*! raw-loader!./counters.page.html */ "./node_modules/raw-loader/index.js!./src/app/counters/counters.page.html"),
            styles: [__webpack_require__(/*! ./counters.page.scss */ "./src/app/counters/counters.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], CountersPage);
    return CountersPage;
}());



/***/ })

}]);
//# sourceMappingURL=counters-counters-module-es5.js.map