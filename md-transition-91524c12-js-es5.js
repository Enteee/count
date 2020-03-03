(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-transition-91524c12-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/md.transition-91524c12.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/md.transition-91524c12.js ***!
    \*********************************************************************/

  /*! exports provided: mdTransitionAnimation */

  /***/
  function node_modulesIonicCoreDistEsmMdTransition91524c12Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function () {
      return mdTransitionAnimation;
    });
    /* harmony import */


    var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-0a8d4d2e.js */
    "./node_modules/@ionic/core/dist/esm/core-0a8d4d2e.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-56279521.js */
    "./node_modules/@ionic/core/dist/esm/animation-56279521.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
    /* harmony import */


    var _index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-4e2fa3c6.js */
    "./node_modules/@ionic/core/dist/esm/index-4e2fa3c6.js");

    var mdTransitionAnimation = function mdTransitionAnimation(_, opts) {
      var OFF_BOTTOM = '40px';
      var CENTER = '0px';
      var backDirection = opts.direction === 'back';
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      var ionPageElement = Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(enteringEl);
      var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
      var rootTransition = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible'); // animate the component itself

      if (backDirection) {
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
      } else {
        rootTransition.duration(opts.duration || 280).easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('transform', "translateY(".concat(OFF_BOTTOM, ")"), "translateY(".concat(CENTER, ")")).fromTo('opacity', 0.01, 1);
      } // Animate toolbar if it's there


      if (enteringToolbarEle) {
        var enteringToolBar = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
      } // setup leaving view


      if (leavingEl && backDirection) {
        // leaving content
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        leavingPage.addElement(Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl)).afterStyles({
          'display': 'none'
        }).fromTo('transform', "translateY(".concat(CENTER, ")"), "translateY(".concat(OFF_BOTTOM, ")")).fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
      }

      return rootTransition;
    };
    /***/

  }
}]);
//# sourceMappingURL=md-transition-91524c12-js-es5.js.map