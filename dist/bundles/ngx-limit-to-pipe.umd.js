(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-limit-to-pipe', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-limit-to-pipe'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLimitToPipe = /** @class */ (function () {
        function NgxLimitToPipe() {
        }
        /**
         * @param {?} value
         * @param {?} arg1
         * @param {?=} arg2
         * @param {?=} arg3
         * @param {?=} arg4
         * @return {?}
         */
        NgxLimitToPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} arg1
         * @param {?=} arg2
         * @param {?=} arg3
         * @param {?=} arg4
         * @return {?}
         */
            function (value, arg1, arg2, arg3, arg4) {
                /** @type {?} */
                var limit = arg1 ? parseInt(arg1, 10) : 10;
                /** @type {?} */
                var trail = arg2 ? arg2 : '...';
                /** @type {?} */
                var activate = typeof arg3 == 'boolean' ? arg3 : true;
                /** @type {?} */
                var ending = arg4 ? arg4 : '';
                if (activate)
                    return value.length > limit ? value.substring(0, limit) + trail : value;
                else
                    return value + ending;
            };
        NgxLimitToPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'limitTo'
                    },] }
        ];
        return NgxLimitToPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLimitToPipeModule = /** @class */ (function () {
        function NgxLimitToPipeModule() {
        }
        NgxLimitToPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NgxLimitToPipe],
                        exports: [NgxLimitToPipe]
                    },] }
        ];
        return NgxLimitToPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxLimitToPipeModule = NgxLimitToPipeModule;
    exports.ɵa = NgxLimitToPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-limit-to-pipe.umd.js.map