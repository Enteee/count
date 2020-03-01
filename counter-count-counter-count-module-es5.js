(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-count-counter-count-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-count/counter-count.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/counter-detail/counter-count/counter-count.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-button\n      size=\"large\"\n      expand=\"full\"\n      color=\"dark\"\n      (click)=\"addRandomCountEvent()\"\n    >\n      <ion-icon name=\"shuffle\"></ion-icon>\n      Random Count Event\n    </ion-button>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/counter-detail/counter-count/counter-count.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/counter-detail/counter-count/counter-count.module.ts ***!
  \**********************************************************************/
/*! exports provided: CounterCountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterCountPageModule", function() { return CounterCountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _counter_count_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter-count.page */ "./src/app/counter-detail/counter-count/counter-count.page.ts");








var routes = [
    {
        path: '',
        component: _counter_count_page__WEBPACK_IMPORTED_MODULE_7__["CounterCountPage"],
    }
];
var CounterCountPageModule = /** @class */ (function () {
    function CounterCountPageModule() {
    }
    CounterCountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModule"],
            ],
            declarations: [_counter_count_page__WEBPACK_IMPORTED_MODULE_7__["CounterCountPage"]]
        })
    ], CounterCountPageModule);
    return CounterCountPageModule;
}());



/***/ }),

/***/ "./src/app/counter-detail/counter-count/counter-count.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/counter-detail/counter-count/counter-count.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXItZGV0YWlsL2NvdW50ZXItY291bnQvY291bnRlci1jb3VudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/counter-detail/counter-count/counter-count.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/counter-detail/counter-count/counter-count.page.ts ***!
  \********************************************************************/
/*! exports provided: CounterCountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterCountPage", function() { return CounterCountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");




var CounterCountPage = /** @class */ (function () {
    function CounterCountPage(router, route, counterService) {
        this.router = router;
        this.route = route;
        this.counterService = counterService;
    }
    CounterCountPage.prototype.ngOnInit = function () {
        this.counter = this.route.snapshot.data.counter;
    };
    CounterCountPage.prototype.addRandomCountEvent = function () {
        this.counterService.addRandomCountEvent(this.counter);
    };
    CounterCountPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"] }
    ]; };
    CounterCountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter-count',
            template: __webpack_require__(/*! raw-loader!./counter-count.page.html */ "./node_modules/raw-loader/index.js!./src/app/counter-detail/counter-count/counter-count.page.html"),
            styles: [__webpack_require__(/*! ./counter-count.page.scss */ "./src/app/counter-detail/counter-count/counter-count.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"]])
    ], CounterCountPage);
    return CounterCountPage;
}());



/***/ })

}]);
//# sourceMappingURL=counter-count-counter-count-module-es5.js.map