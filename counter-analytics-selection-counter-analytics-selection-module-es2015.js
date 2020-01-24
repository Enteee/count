(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-analytics-selection-counter-analytics-selection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let analyticsItem of analyticsItems\"\n              [routerLink]=\"['/counter-analytics', analyticsItem.info.url, counter.id]\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"{{analyticsItem.info.icon}}\" size=\"large\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{analyticsItem.info.name}}</h2>\n        <p>{{analyticsItem.info.description}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CounterAnalyticsSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsSelectionPageModule", function() { return CounterAnalyticsSelectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter-analytics-selection.page */ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.ts");







const routes = [
    {
        path: '',
        component: _counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_6__["CounterAnalyticsSelectionPage"],
    }
];
let CounterAnalyticsSelectionPageModule = class CounterAnalyticsSelectionPageModule {
};
CounterAnalyticsSelectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_counter_analytics_selection_page__WEBPACK_IMPORTED_MODULE_6__["CounterAnalyticsSelectionPage"]]
    })
], CounterAnalyticsSelectionPageModule);



/***/ }),

/***/ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item p {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VudGUvd29ya3NwYWNlL2NvdW50L3NyYy9hcHAvY291bnRlci1kZXRhaWwvY291bnRlci1hbmFseXRpY3Mtc2VsZWN0aW9uL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi9jb3VudGVyLWFuYWx5dGljcy1zZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItYW5hbHl0aWNzLXNlbGVjdGlvbi9jb3VudGVyLWFuYWx5dGljcy1zZWxlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4iLCJpb24taXRlbSBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_analytics_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/analytics-item.service */ "./src/app/services/analytics-item.service.ts");




let CounterAnalyticsSelectionPage = class CounterAnalyticsSelectionPage {
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
};
CounterAnalyticsSelectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_analytics_item_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItemService"] }
];
CounterAnalyticsSelectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter-analytics-selection',
        template: __webpack_require__(/*! raw-loader!./counter-analytics-selection.page.html */ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.html"),
        styles: [__webpack_require__(/*! ./counter-analytics-selection.page.scss */ "./src/app/counter-detail/counter-analytics-selection/counter-analytics-selection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_analytics_item_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsItemService"]])
], CounterAnalyticsSelectionPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/analytics-item-repository.service */ "./src/app/models/analytics-item-repository.service.ts");



let AnalyticsItemService = class AnalyticsItemService {
    constructor(analyticsItemRepositoryService) {
        this.analyticsItemRepositoryService = analyticsItemRepositoryService;
    }
    get all() {
        return this.analyticsItemRepositoryService.all;
    }
};
AnalyticsItemService.ctorParameters = () => [
    { type: _models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsItemRepositoryService"] }
];
AnalyticsItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_analytics_item_repository_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsItemRepositoryService"]])
], AnalyticsItemService);



/***/ })

}]);
//# sourceMappingURL=counter-analytics-selection-counter-analytics-selection-module-es2015.js.map