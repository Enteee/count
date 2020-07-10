(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-img.entry.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");



const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

/**
 * @part image - The inner `img` element.
 */
class Img {
    constructor(hostRef) {
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.ionImgWillLoad = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionImgDidLoad", 7);
        this.ionError = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionError", 7);
    }
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if (typeof window !== 'undefined' &&
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'isIntersecting' in window.IntersectionObserverEntry.prototype) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError, part: "image" })));
    }
    get el() { return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "src": ["srcChanged"]
    }; }
}
Img.style = imgCss;




/***/ })

}]);
//# sourceMappingURL=25-es2015.js.map