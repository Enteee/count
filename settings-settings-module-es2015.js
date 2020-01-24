(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-icon name=\"settings\"></ion-icon>\n      Settings\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form\n    [formGroup]=\"settingsForm\"\n  >\n    <ion-list>\n      <app-not-implemented\n        description=\"Select language\"\n        issueId=\"12\"\n      >\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"text\"></ion-icon>\n          <ion-label>Language</ion-label>\n          <ion-select slot=\"end\" placeholder=\"Select One\">\n            <ion-select-option value=\"english\">English</ion-select-option>\n            <ion-select-option value=\"german\">German</ion-select-option>\n            <ion-select-option value=\"french\">French</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </app-not-implemented>\n\n      <app-not-implemented\n        description=\"Toggle dark mode\"\n        issueId=\"10\"\n      >\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <ion-label>Dark Mode</ion-label>\n          <ion-checkbox slot=\"end\">\n          </ion-checkbox>\n        </ion-item>\n      </app-not-implemented>\n\n      <app-not-implemented\n        description=\"Switch to left-handed mode\"\n        issueId=\"14\"\n      >\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"hand\"></ion-icon>\n          <ion-label>Left-handed mode</ion-label>\n          <ion-checkbox slot=\"end\">\n          </ion-checkbox>\n        </ion-item>\n      </app-not-implemented>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"pulse\"></ion-icon>\n        <ion-label>Vibrate</ion-label>\n        <ion-checkbox\n          required\n          slot=\"end\"\n          formControlName=\"vibrate\"\n          [checked]=\"appState.vibrate\"\n          (ionChange)=\"changeVibrate()\"\n        >\n        </ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n        <ion-label>Record position</ion-label>\n        <ion-checkbox\n          required\n          slot=\"end\"\n          formControlName=\"recordPosition\"\n          [checked]=\"appState.recordPosition\"\n          (ionChange)=\"changeRecordPosition()\"\n        >\n        </ion-checkbox>\n      </ion-item>\n\n      <app-not-implemented\n        description=\"Enable Advertisements / Disable Fuel\"\n        issueId=\"11\"\n      >\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"cash\"></ion-icon>\n          <ion-label>Enable Advertisements</ion-label>\n          <ion-checkbox\n            slot=\"end\"\n          >\n          </ion-checkbox>\n        </ion-item>\n      </app-not-implemented>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"construct\"></ion-icon>\n        <ion-label>Disable not implemented</ion-label>\n\n        <!--\n          Exception: we use [checked] here, because\n          the status of this checkbox might be changed by a\n          not-implemented modal, from a not-implemented control\n          on this page.\n        -->\n        <ion-checkbox\n          required\n          slot=\"end\"\n          formControlName=\"disableNotImplemented\"\n          [checked]=\"appState.disableNotImplemented\"\n          (ionChange)=\"changeDisableNotImplemented()\"\n        >\n        </ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"cloud-download\"></ion-icon>\n        <ion-label>Update</ion-label>\n        <ion-select\n          formControlName=\"updateChannel\"\n          slot=\"end\"\n          placeholder=\"Select One\"\n          (ionChange)=\"changeUpdateChannel()\"\n        >\n          <ion-select-option\n            *ngFor=\"let updateChannel of updateChannels\"\n            [value]=\"updateChannel\"\n          >\n            {{updateChannel}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <app-not-implemented\n        description=\"Save and load backup\"\n        issueId=\"15\"\n      >\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\n          <ion-label>Backup</ion-label>\n          <ion-button\n            expand=\"full\"\n            color=\"success\"\n          >\n            Save\n          </ion-button>\n\n          <ion-button\n            expand=\"full\"\n            color=\"danger\"\n          >\n            Restore\n          </ion-button>\n        </ion-item>\n      </app-not-implemented>\n\n      <app-not-implemented\n        description=\"Trigger a factory reset\"\n        issueId=\"16\"\n      >\n        <ion-item-sliding>\n\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n            <ion-label>Factory reset</ion-label>\n            <ion-icon slot=\"end\" name=\"arrow-back\"></ion-icon>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n\n        </ion-item-sliding>\n      </app-not-implemented>\n\n    </ion-list>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../not-implemented/not-implemented.module */ "./src/app/not-implemented/not-implemented.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _not_implemented_not_implemented_module__WEBPACK_IMPORTED_MODULE_6__["NotImplementedModule"],
        ],
        providers: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        ],
        declarations: [
            _settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
        ],
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/app-state */ "./src/app/models/app-state.ts");
/* harmony import */ var _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app-state.service */ "./src/app/services/app-state.service.ts");







let SettingsPage = class SettingsPage {
    constructor(route, appStateService, alertController) {
        this.route = route;
        this.appStateService = appStateService;
        this.alertController = alertController;
        this.updateChannels = Object.keys(_models_app_state__WEBPACK_IMPORTED_MODULE_5__["UpdateChannel"]);
    }
    ngOnInit() {
        this.appState = this.route.snapshot.data.appState;
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            vibrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.appState.vibrate, []),
            recordPosition: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.appState.recordPosition, []),
            disableNotImplemented: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.appState.disableNotImplemented, []),
            updateChannel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.appState.updateChannel, []),
        });
    }
    changeVibrate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.appStateService.setVibrate(this.settingsForm.value.vibrate);
        });
    }
    changeRecordPosition() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.appStateService.setRecordPosition(this.settingsForm.value.recordPosition);
            }
            catch (e) {
                const alert = yield this.alertController.create({
                    header: 'Failed to enable position recording',
                    message: e.message,
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
    changeDisableNotImplemented() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appStateService.setDisableNotImplemented(this.settingsForm.value.disableNotImplemented);
        });
    }
    changeUpdateChannel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.appStateService.setUpdateChannel(this.settingsForm.value.updateChannel);
            yield this.appStateService.update('auto');
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_app_state_service__WEBPACK_IMPORTED_MODULE_6__["AppStateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map