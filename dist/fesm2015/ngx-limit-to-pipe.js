import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLimitToPipe {
    /**
     * @param {?} value
     * @param {?} arg1
     * @param {?=} arg2
     * @param {?=} arg3
     * @param {?=} arg4
     * @return {?}
     */
    transform(value, arg1, arg2, arg3, arg4) {
        /** @type {?} */
        let limit = arg1 ? parseInt(arg1, 10) : 10;
        /** @type {?} */
        let trail = arg2 ? arg2 : '...';
        /** @type {?} */
        let activate = typeof arg3 == 'boolean' ? arg3 : true;
        /** @type {?} */
        let ending = arg4 ? arg4 : '';
        if (activate)
            return value.length > limit ? value.substring(0, limit) + trail : value;
        else
            return value + ending;
    }
}
NgxLimitToPipe.decorators = [
    { type: Pipe, args: [{
                name: 'limitTo'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLimitToPipeModule {
}
NgxLimitToPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxLimitToPipe],
                exports: [NgxLimitToPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxLimitToPipeModule, NgxLimitToPipe as ɵa };

//# sourceMappingURL=ngx-limit-to-pipe.js.map