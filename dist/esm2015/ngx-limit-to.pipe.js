/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Character limit pipe.
 */
import { Pipe } from '@angular/core';
export class NgxLimitToPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGltaXQtdG8tcGlwZS8iLCJzb3VyY2VzIjpbIm5neC1saW1pdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQTtBQUtuRCxNQUFNOzs7Ozs7Ozs7SUFDSixTQUFTLENBQUMsS0FBYSxFQUFFLElBQUksRUFBRSxJQUFLLEVBQUUsSUFBSyxFQUFFLElBQUs7O1lBRTVDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs7WUFDM0IsUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztZQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFN0IsSUFBSSxRQUFRO1lBQ1YsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7O1lBRXZFLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQTtJQUN6QixDQUFDOzs7WUFmRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIENoYXJhY3RlciBsaW1pdCBwaXBlLlxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsaW1pdFRvJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hMaW1pdFRvUGlwZSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmcxLCBhcmcyPywgYXJnMz8sIGFyZzQ/KTogc3RyaW5nIHtcblxuICAgIGxldCBsaW1pdCA9IGFyZzEgPyBwYXJzZUludChhcmcxLCAxMCkgOiAxMFxuICAgIGxldCB0cmFpbCA9IGFyZzIgPyBhcmcyIDogJy4uLidcbiAgICBsZXQgYWN0aXZhdGUgPSB0eXBlb2YgYXJnMyA9PSAnYm9vbGVhbicgPyBhcmczIDogdHJ1ZVxuICAgIGxldCBlbmRpbmcgPSBhcmc0ID8gYXJnNCA6ICcnXG5cbiAgICBpZiAoYWN0aXZhdGUpXG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gbGltaXQgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgbGltaXQpICsgdHJhaWwgOiB2YWx1ZVxuICAgIGVsc2VcbiAgICAgIHJldHVybiB2YWx1ZSArIGVuZGluZ1xuICB9XG59Il19