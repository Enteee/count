(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counter-settin~1b177bc7"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _models_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/counter */ "./src/app/models/counter.ts");
/* harmony import */ var _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/counter-repository.service */ "./src/app/models/counter-repository.service.ts");
/* harmony import */ var _models_count_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/count-event */ "./src/app/models/count-event.ts");
/* harmony import */ var _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/count-event-repository.service */ "./src/app/models/count-event-repository.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.service */ "./src/app/services/position.service.ts");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-state.service */ "./src/app/services/app-state.service.ts");









var CounterService = /** @class */ (function () {
    function CounterService(counterRepositoryService, countEventRepositoryService, positionService, appStateService, vibration) {
        this.counterRepositoryService = counterRepositoryService;
        this.countEventRepositoryService = countEventRepositoryService;
        this.positionService = positionService;
        this.appStateService = appStateService;
        this.vibration = vibration;
    }
    CounterService_1 = CounterService;
    Object.defineProperty(CounterService.prototype, "allSortBySortOrder", {
        get: function () {
            return this.counterRepositoryService.allSortBySortOrder;
        },
        enumerable: true,
        configurable: true
    });
    CounterService.prototype.addCounter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newCounter;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCounter = new _models_counter__WEBPACK_IMPORTED_MODULE_3__["Counter"]();
                        // add counter to bottom
                        newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
                        return [4 /*yield*/, this.counterRepositoryService.save(newCounter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, newCounter];
                }
            });
        });
    };
    CounterService.prototype.delete = function (counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // first delete the counter: this is so that the ui element disappers
                    // quicker which should be create better user experience.
                    return [4 /*yield*/, this.counterRepositoryService.delete(counter)];
                    case 1:
                        // first delete the counter: this is so that the ui element disappers
                        // quicker which should be create better user experience.
                        _a.sent();
                        // then, delete all events of this counter
                        return [4 /*yield*/, Promise.all(this.countEventRepositoryService.getByCounter(counter).map(function (i) { return _this.countEventRepositoryService.delete(i); }))];
                    case 2:
                        // then, delete all events of this counter
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.count = function (counter, delta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var position, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        position = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.positionService.getPosition()];
                    case 2:
                        position = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        // user does not allow posiiton recording or something unexpected happened
                        return [4 /*yield*/, this.appStateService.setRecordPosition(false)];
                    case 4:
                        // user does not allow posiiton recording or something unexpected happened
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, Promise.all([
                            this.counterRepositoryService.save(counter),
                            this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, position))
                        ])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.reset = function (counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter.count = 0;
                        return [4 /*yield*/, Promise.all([
                                this.counterRepositoryService.save(counter),
                                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, 0, {}, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Reset)),
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.setLocked = function (counter, setLocked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter.locked = setLocked;
                        return [4 /*yield*/, this.counterRepositoryService.save(counter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CounterService.prototype.reorder = function (from, to) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var counters;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counters = this.counterRepositoryService.allSortBySortOrder;
                        // move element in array
                        counters.splice(to, 0, counters.splice(from, 1)[0]);
                        // save in new order
                        return [4 /*yield*/, Promise.all(counters.map(function (counter, i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            counter.sortOrder = i;
                                            return [4 /*yield*/, this.counterRepositoryService.save(counter)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        // save in new order
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * For development purposes only
     */
    CounterService.prototype.addRandomCountEvent = function (counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            function randomDate(start, end) {
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            }
            var delta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delta = Math.round(Math.random() * 10 % 10 - 5);
                        counter.count += delta;
                        return [4 /*yield*/, Promise.all([
                                this.counterRepositoryService.save(counter),
                                this.countEventRepositoryService.save(new _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEvent"](counter.id, delta, null, _models_count_event__WEBPACK_IMPORTED_MODULE_5__["CountEventType"].Change, randomDate(new Date(2012, 0, 1), new Date())))
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var CounterService_1;
    CounterService.VIBRATION_PATTERN_POSITIVE = [30];
    CounterService.VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];
    CounterService.ctorParameters = function () { return [
        { type: _models_counter_repository_service__WEBPACK_IMPORTED_MODULE_4__["CounterRepositoryService"] },
        { type: _models_count_event_repository_service__WEBPACK_IMPORTED_MODULE_6__["CountEventRepositoryService"] },
        { type: _position_service__WEBPACK_IMPORTED_MODULE_7__["PositionService"] },
        { type: _app_state_service__WEBPACK_IMPORTED_MODULE_8__["AppStateService"] },
        { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"] }
    ]; };
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
    return CounterService;
}());



/***/ })

}]);
//# sourceMappingURL=default~counter-analytics-counter-analytics-module~counter-count-counter-count-module~counter-settin~1b177bc7-es5.js.map