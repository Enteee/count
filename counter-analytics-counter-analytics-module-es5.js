(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-analytics-counter-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counter-analytics/counter-analytics.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter-analytics/counter-analytics.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        icon=\"arrow-back\"\n        [defaultHref]=\"['/counter-detail', counter.id, 'analytics']\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{counter.title}} &#62; {{analyticsItem.info.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-template appCounterAnalytics></ng-template>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counter-analytics/counter-analytics.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/counter-analytics/counter-analytics.directive.ts ***!
  \******************************************************************/
/*! exports provided: CounterAnalyticsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsDirective", function() { return CounterAnalyticsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterAnalyticsDirective = /** @class */ (function () {
    function CounterAnalyticsDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    CounterAnalyticsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    CounterAnalyticsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCounterAnalytics]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], CounterAnalyticsDirective);
    return CounterAnalyticsDirective;
}());



/***/ }),

/***/ "./src/app/counter-analytics/counter-analytics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/counter-analytics/counter-analytics.module.ts ***!
  \***************************************************************/
/*! exports provided: CounterAnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsPageModule", function() { return CounterAnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _counter_analytics_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-analytics.page */ "./src/app/counter-analytics/counter-analytics.page.ts");
/* harmony import */ var _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter-analytics.directive */ "./src/app/counter-analytics/counter-analytics.directive.ts");










var routes = [
    {
        path: '',
        component: _counter_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CounterAnalyticsPage"],
    }
];
var CounterAnalyticsPageModule = /** @class */ (function () {
    function CounterAnalyticsPageModule() {
    }
    CounterAnalyticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ],
            declarations: [_counter_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CounterAnalyticsPage"], _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_9__["CounterAnalyticsDirective"]]
        })
    ], CounterAnalyticsPageModule);
    return CounterAnalyticsPageModule;
}());



/***/ }),

/***/ "./src/app/counter-analytics/counter-analytics.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/counter-analytics/counter-analytics.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItYW5hbHl0aWNzL2NvdW50ZXItYW5hbHl0aWNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/counter-analytics/counter-analytics.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/counter-analytics/counter-analytics.page.ts ***!
  \*************************************************************/
/*! exports provided: CounterAnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterAnalyticsPage", function() { return CounterAnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter-analytics.directive */ "./src/app/counter-analytics/counter-analytics.directive.ts");




var CounterAnalyticsPage = /** @class */ (function () {
    function CounterAnalyticsPage(router, route, componentFactoryResolver) {
        this.router = router;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    CounterAnalyticsPage.prototype.ngOnInit = function () {
        this.counter = this.route.snapshot.data.counter;
        this.analyticsItem = this.route.snapshot.data.analyticsItem;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.analyticsItem.component);
        var viewContainerRef = this.counterAnalyticsHost.viewContainerRef;
        var componentRef = viewContainerRef.createComponent(componentFactory);
        var analyticsComponent = componentRef.instance;
        analyticsComponent.counter = this.counter;
    };
    CounterAnalyticsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_counter_analytics_directive__WEBPACK_IMPORTED_MODULE_3__["CounterAnalyticsDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _counter_analytics_directive__WEBPACK_IMPORTED_MODULE_3__["CounterAnalyticsDirective"])
    ], CounterAnalyticsPage.prototype, "counterAnalyticsHost", void 0);
    CounterAnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter-analytics',
            template: __webpack_require__(/*! raw-loader!./counter-analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/counter-analytics/counter-analytics.page.html"),
            styles: [__webpack_require__(/*! ./counter-analytics.page.scss */ "./src/app/counter-analytics/counter-analytics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], CounterAnalyticsPage);
    return CounterAnalyticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=counter-analytics-counter-analytics-module-es5.js.map