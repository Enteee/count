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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreen-counter.page */ "./src/app/fullscreen-counter/fullscreen-counter.page.ts");







const routes = [
    {
        path: '',
        component: _fullscreen_counter_page__WEBPACK_IMPORTED_MODULE_6__["FullscreenCounterPage"]
    }
];
let FullscreenCounterPageModule = class FullscreenCounterPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/counter.service */ "./src/app/services/counter.service.ts");





var FullScreenCounterType;
(function (FullScreenCounterType) {
    FullScreenCounterType["plus"] = "plus";
    FullScreenCounterType["minus"] = "minus";
})(FullScreenCounterType || (FullScreenCounterType = {}));
let FullscreenCounterPage = class FullscreenCounterPage {
    constructor(router, route, counterService) {
        this.router = router;
        this.route = route;
        this.counterService = counterService;
        this.CLOSE_DELAY = 700;
    }
    ngOnInit() {
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
    }
    close() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate([
                '/counters'
            ]);
        });
    }
    count() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.counterService.count(this.counter, this.type === FullScreenCounterType.plus ?
                this.counter.plusCount
                : this.counter.minusCount);
        });
    }
};
FullscreenCounterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"] }
];
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
            // add counter to bottom
            newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
            yield this.counterRepositoryService.save(newCounter);
            return newCounter;
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
    /**
     * For development purposes only
     */
    addRandomCountEvent(counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
//# sourceMappingURL=fullscreen-counter-fullscreen-counter-module-es2015.js.map