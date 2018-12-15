/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Character limit pipe.
 */
import { Pipe } from '@angular/core';
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
        { type: Pipe, args: [{
                    name: 'limitTo'
                },] }
    ];
    return NgxLimitToPipe;
}());
export { NgxLimitToPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibmd4LWxpbWl0LXRvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFBO0FBRW5EO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7Ozs7O0lBWkMsa0NBQVM7Ozs7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsSUFBSSxFQUFFLElBQUssRUFBRSxJQUFLLEVBQUUsSUFBSzs7WUFFNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLOztZQUMzQixRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUU3QixJQUFJLFFBQVE7WUFDVixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTs7WUFFdkUsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFBO0lBQ3pCLENBQUM7O2dCQWZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBY0QscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIENoYXJhY3RlciBsaW1pdCBwaXBlLlxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsaW1pdFRvJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hMaW1pdFRvUGlwZSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmcxLCBhcmcyPywgYXJnMz8sIGFyZzQ/KTogc3RyaW5nIHtcblxuICAgIGxldCBsaW1pdCA9IGFyZzEgPyBwYXJzZUludChhcmcxLCAxMCkgOiAxMFxuICAgIGxldCB0cmFpbCA9IGFyZzIgPyBhcmcyIDogJy4uLidcbiAgICBsZXQgYWN0aXZhdGUgPSB0eXBlb2YgYXJnMyA9PSAnYm9vbGVhbicgPyBhcmczIDogdHJ1ZVxuICAgIGxldCBlbmRpbmcgPSBhcmc0ID8gYXJnNCA6ICcnXG5cbiAgICBpZiAoYWN0aXZhdGUpXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gbGltaXQgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgbGltaXQpICsgdHJhaWwgOiB2YWx1ZVxuICAgIGVsc2VcbiAgICAgIHJldHVybiB2YWx1ZSArIGVuZGluZ1xuICB9XG59Il19