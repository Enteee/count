(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fullscreen-counter-fullscreen-counter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fullscreen-counter/fullscreen-counter.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fullscreen-counter/fullscreen-counter.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<ion-button\n  class=\"full-screen\"\n  color=\"{{color}}\"\n  (click)=\"count()\"\n>\n  <ion-label class=\"ion-text-center\">\n\n    <div [ngSwitch]=\"type\">\n      <h1\n        *ngIf=\"type == 'plus'\"\n      >\n        +{{counter.plusCount}}\n      </h1>\n\n      <h1\n        *ngIf=\"type == 'minus'\"\n      >\n        {{counter.minusCount}}\n      </h1>\n    </div>\n\n    <h1>{{counter.title}}</h1>\n    <h1>{{counter.count}}</h1>\n\n  </ion-label>\n\n</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fullscreen-counter/fullscreen-counter.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fullscreen-counter/fullscreen-counter.module.ts ***!
  \*****************************************************************/
/*! exports provided: FullscreenCounterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenCounterPageModule", function() { return FullscreenCounterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreen-counter.page */ "./src/app/fullscreen-counter/fullscreen-counter.page.ts");







var routes = [
    {
        path: '',
        component: _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__["FullscreenCounterPage"]
    }
];
var FullscreenCounterPageModule = /** @class */ (function () {
    function FullscreenCounterPageModule() {
    }
    FullscreenCounterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__["FullscreenCounterPage"]]
        })
    ], FullscreenCounterPageModule);
    return FullscreenCounterPageModule;
}());



/***/ }),

/***/ "./src/app/fullscreen-counter/fullscreen-counter.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/fullscreen-counter/fullscreen-counter.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-screen {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvdW50L2NvdW50L3NyYy9hcHAvZnVsbHNjcmVlbi1jb3VudGVyL2Z1bGxzY3JlZW4tY291bnRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2Z1bGxzY3JlZW4tY291bnRlci9mdWxsc2NyZWVuLWNvdW50ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mdWxsc2NyZWVuLWNvdW50ZXIvZnVsbHNjcmVlbi1jb3VudGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXNjcmVlbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbiIsIi5mdWxsLXNjcmVlbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fullscreen-counter/fullscreen-counter.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/fullscreen-counter/fullscreen-counter.page.ts ***!
  \***************************************************************/
/*! exports provided: FullScreenCounterType, FullscreenCounterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenCounterType", function() { return FullScreenCounterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenCounterPage", function() { return FullscreenCounterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/counter.service */ "./src/app/services/counter.service.ts");





var FullScreenCounterType;
(function (FullScreenCounterType) {
    FullScreenCounterType["plus"] = "plus";
    FullScreenCounterType["minus"] = "minus";
})(FullScreenCounterType || (FullScreenCounterType = {}));
var FullscreenCounterPage = /** @class */ (function () {
    function FullscreenCounterPage(router, route, counterService) {
        this.router = router;
        this.route = route;
        this.counterService = counterService;
        this.CLOSE_DELAY = 700;
    }
    FullscreenCounterPage.prototype.ngOnInit = function () {
        this.type = FullScreenCounterType[this.route.snapshot.paramMap.get('type')];
        this.counter = this.route.snapshot.data.counter;
        switch (this.type) {
            case FullScreenCounterType.plus:
                this.color = 'success';
                break;
            case FullScreenCounterType.minus:
                this.color = 'danger';
                break;
        }
    };
    FullscreenCounterPage.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate([
                    '/counters'
                ]);
                return [2 /*return*/];
            });
        });
    };
    FullscreenCounterPage.prototype.count = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.counterService.count(this.counter, this.type === FullScreenCounterType.plus ?
                            this.counter.plusCount
                            : this.counter.minusCount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FullscreenCounterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"] }
    ]; };
    FullscreenCounterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullscreen-counter',
            template: __webpack_require__(/*! raw-loader!./fullscreen-counter.page.html */ "./node_modules/raw-loader/index.js!./src/app/fullscreen-counter/fullscreen-counter.page.html"),
            styles: [__webpack_require__(/*! ./fullscreen-counter.page.scss */ "./src/app/fullscreen-counter/fullscreen-counter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"]])
    ], FullscreenCounterPage);
    return FullscreenCounterPage;
}());



/***/ })

}]);
//# sourceMappingURL=fullscreen-counter-fullscreen-counter-module-es5.js.map