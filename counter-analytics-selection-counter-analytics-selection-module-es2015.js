(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-analytics-selection-counter-analytics-selection-module"],{

/***/ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CounterAnalyticsSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsSelectionPageModule", function() { return CounterAnalyticsSelectionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter-analytics-selection.page */ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.ts");








const routes = [
    {
        path: '',
        component: _counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_5__["CounterAnalyticsSelectionPage"],
    }
];
class CounterAnalyticsSelectionPageModule {
}
CounterAnalyticsSelectionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CounterAnalyticsSelectionPageModule });
CounterAnalyticsSelectionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CounterAnalyticsSelectionPageModule_Factory(t) { return new (t || CounterAnalyticsSelectionPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterAnalyticsSelectionPageModule, { declarations: [_counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_5__["CounterAnalyticsSelectionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsSelectionPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_5__["CounterAnalyticsSelectionPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.ts ***!
  \************************************************************************************************/
/*! exports provided: CounterAnalyticsSelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsSelectionPage", function() { return CounterAnalyticsSelectionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_analytics_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics-item.service */ "./src/app/services/analytics-item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a1, a2) { return ["/counter-analytics", a1, a2]; };
function CounterAnalyticsSelectionPage_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const analyticsItem_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, analyticsItem_r37.info.url, ctx_r36.counter.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", analyticsItem_r37.info.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](analyticsItem_r37.info.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](analyticsItem_r37.info.description);
} }
class CounterAnalyticsSelectionPage {
    constructor(route, analyticsItemService) {
        this.route = route;
        this.analyticsItemService = analyticsItemService;
    }
    ngOnInit() {
        this.counter = this.route.snapshot.data.counter;
    }
    get analyticsItems() {
        return this.analyticsItemService.all;
    }
}
CounterAnalyticsSelectionPage.ɵfac = function CounterAnalyticsSelectionPage_Factory(t) { return new (t || CounterAnalyticsSelectionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_analytics_item_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsItemService"])); };
CounterAnalyticsSelectionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterAnalyticsSelectionPage, selectors: [["app-counter-analytics-selection"]], decls: 3, vars: 1, consts: [[3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["slot", "start"], ["size", "large", 3, "name"]], template: function CounterAnalyticsSelectionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CounterAnalyticsSelectionPage_ion_item_2_Template, 8, 7, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.analyticsItems);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"]], styles: ["ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvdW50L2NvdW50L3NyYy9hcHAvY291bnRlci1kZXRhaWwvY291bnRlci1hbmFseXRpY3Mtc2VsZWN0aW9uL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi9jb3VudGVyLWFuYWx5dGljcy1zZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi9jb3VudGVyLWFuYWx5dGljcy1zZWxlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4iLCJpb24taXRlbSBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterAnalyticsSelectionPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-analytics-selection',
                templateUrl: './counter-analytics-selection.page.html',
                styleUrls: ['./counter-analytics-selection.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_analytics_item_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/analytics-item.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/analytics-item.service.ts ***!
  \****************************************************/
/*! exports provided: AnalyticsItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsItemService", function() { return AnalyticsItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/analytics-item-repository.service */ "./src/app/models/analytics-item-repository.service.ts");




class AnalyticsItemService {
    constructor(analyticsItemRepositoryService) {
        this.analyticsItemRepositoryService = analyticsItemRepositoryService;
    }
    get all() {
        return this.analyticsItemRepositoryService.all;
    }
}
AnalyticsItemService.ɵfac = function AnalyticsItemService_Factory(t) { return new (t || AnalyticsItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsItemRepositoryService"])); };
AnalyticsItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsItemService, factory: AnalyticsItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsItemRepositoryService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=counter-analytics-selection-counter-analytics-selection-module-es2015.js.map