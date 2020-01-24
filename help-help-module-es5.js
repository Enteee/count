(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/help/help.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/help.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n      Help\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n      <ion-label>\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n        Help\n      </ion-label>\n    </ion-list-header>\n\n    <ion-button size=\"large\" expand=\"full\" (click)=\"openGithubHelp()\">\n      Open Online Help\n    </ion-button>\n\n\n    <ion-list-header>\n      <ion-label>\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        About\n      </ion-label>\n    </ion-list-header>\n\n    <ion-item\n      *ngIf=\"!(deployConfiguration | async)?.disabled\"\n    >\n      <ion-label>Version</ion-label>\n      <ion-badge slot=\"end\">\n        {{ (deployConfiguration | async)?.binaryVersionName }}\n        -\n        {{ (deployConfiguration | async)?.currentBuildId }}\n      </ion-badge>\n    </ion-item>\n\n    <ion-list-header>\n      <ion-label>\n        <ion-icon name=\"heart\"></ion-icon>\n        Contributors\n      </ion-label>\n    </ion-list-header>\n\n    <ion-item\n      *ngFor=\"let contributor of contributors\"\n      (click)=\"openBrowser(contributor.webUrl)\"\n      button\n    >\n      <ion-avatar slot=\"start\">\n        <img src=\"{{contributor.avatar}}\">\n      </ion-avatar>\n      <ion-label position=\"fixed\">\n        <h3>{{contributor.name}}</h3>\n        <p>{{contributor.description}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cordova-plugin-ionic/dist/ngx */ "./node_modules/cordova-plugin-ionic/dist/ngx/index.js");
/* harmony import */ var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");









var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_8__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _help_page__WEBPACK_IMPORTED_MODULE_8__["HelpPage"]
            ],
            providers: [
                cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_6__["Deploy"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            ]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cordova-plugin-ionic/dist/ngx */ "./node_modules/cordova-plugin-ionic/dist/ngx/index.js");
/* harmony import */ var cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_contributor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contributor.service */ "./src/app/services/contributor.service.ts");





var HelpPage = /** @class */ (function () {
    function HelpPage(deploy, iab, contributorService) {
        this.deploy = deploy;
        this.iab = iab;
        this.contributorService = contributorService;
    }
    HelpPage_1 = HelpPage;
    HelpPage.prototype.ngOnInit = function () {
        this.deployConfiguration = this.deploy.getConfiguration();
        this.contributors = this.contributorService.all;
    };
    HelpPage.prototype.openGithubHelp = function () {
        this.iab.create(HelpPage_1.GITHUB_URL + "/" + HelpPage_1.PROJECT_NAME + "/wiki");
    };
    HelpPage.prototype.openBrowser = function (url) {
        if (url === void 0) { url = HelpPage_1.GITHUB_URL + "/" + HelpPage_1.PROJECT_NAME + "/contributors"; }
        this.iab.create(url);
    };
    var HelpPage_1;
    HelpPage.GITHUB_URL = 'https://github.com';
    HelpPage.PROJECT_NAME = 'Enteee/count';
    HelpPage.ctorParameters = function () { return [
        { type: cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__["Deploy"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _services_contributor_service__WEBPACK_IMPORTED_MODULE_4__["ContributorService"] }
    ]; };
    HelpPage = HelpPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [cordova_plugin_ionic_dist_ngx__WEBPACK_IMPORTED_MODULE_2__["Deploy"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _services_contributor_service__WEBPACK_IMPORTED_MODULE_4__["ContributorService"]])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module-es5.js.map