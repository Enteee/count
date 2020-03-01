(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-detail-counter-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-detail.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter-detail/counter-detail.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        icon=\"close\"\n        defaultHref=\"/counters\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{counter.title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button tab=\"count\">\n        <ion-icon name=\"infinite\"></ion-icon>\n        <ion-label>Count</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"settings\">\n        <ion-icon name=\"build\"></ion-icon>\n        <ion-label>Settings</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"analytics\">\n        <ion-icon name=\"analytics\"></ion-icon>\n        <ion-label>Analytics</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"edit\"\n        appNotImplemented description=\"Edit count events\" issueId=\"8\"\n      >\n        <ion-icon name=\"create\"></ion-icon>\n        <ion-label>Edit</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counter-detail/counter-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/counter-detail/counter-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: CounterDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDetailPageModule", function() { return CounterDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _counter_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter-detail.page */ "./src/app/counter-detail/counter-detail.page.ts");








const routes = [
    {
        path: '',
        component: _counter_detail_page__WEBPACK_IMPORTED_MODULE_7__["CounterDetailPage"],
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'settings', pathMatch: 'full', },
                    {
                        path: 'count',
                        loadChildren: './counter-count/counter-count.module#CounterCountPageModule',
                    },
                    {
                        path: 'settings',
                        loadChildren: './counter-settings/counter-settings.module#CounterSettingsPageModule',
                    },
                    {
                        path: 'analytics',
                        loadChildren: './counter-analytics-selection/counter-analytics-selection.module#CounterAnalyticsSelectionPageModule'
                    },
                ],
            }
        ],
    }
];
let CounterDetailPageModule = class CounterDetailPageModule {
};
CounterDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModule"],
        ],
        declarations: [_counter_detail_page__WEBPACK_IMPORTED_MODULE_7__["CounterDetailPage"]]
    })
], CounterDetailPageModule);



/***/ }),

/***/ "./src/app/counter-detail/counter-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/counter-detail/counter-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/counter-detail/counter-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/counter-detail/counter-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: CounterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDetailPage", function() { return CounterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CounterDetailPage = class CounterDetailPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.counter = this.route.snapshot.data.counter;
    }
};
CounterDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CounterDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter-detail',
        template: __webpack_require__(/*! raw-loader!./counter-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-detail.page.html"),
        styles: [__webpack_require__(/*! ./counter-detail.page.scss */ "./src/app/counter-detail/counter-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CounterDetailPage);



/***/ })

}]);
//# sourceMappingURL=counter-detail-counter-detail-module-es2015.js.map