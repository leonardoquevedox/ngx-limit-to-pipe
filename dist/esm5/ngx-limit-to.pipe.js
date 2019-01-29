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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGltaXQtdG8tcGlwZS8iLCJzb3VyY2VzIjpbIm5neC1saW1pdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQTtBQUVuRDtJQUFBO0lBZ0JBLENBQUM7Ozs7Ozs7OztJQVpDLGtDQUFTOzs7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQUksRUFBRSxJQUFLLEVBQUUsSUFBSyxFQUFFLElBQUs7O1lBRTVDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs7WUFDM0IsUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztZQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN6RSxJQUFJO1lBQ0YsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7SUFDekIsQ0FBQzs7Z0JBZkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFjRCxxQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQ2hhcmFjdGVyIGxpbWl0IHBpcGUuXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xpbWl0VG8nXG59KVxuZXhwb3J0IGNsYXNzIE5neExpbWl0VG9QaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZzEsIGFyZzI/LCBhcmczPywgYXJnND8pOiBzdHJpbmcge1xuXG4gICAgbGV0IGxpbWl0ID0gYXJnMSA/IHBhcnNlSW50KGFyZzEsIDEwKSA6IDEwXG4gICAgbGV0IHRyYWlsID0gYXJnMiA/IGFyZzIgOiAnLi4uJ1xuICAgIGxldCBhY3RpdmF0ZSA9IHR5cGVvZiBhcmczID09ICdib29sZWFuJyA/IGFyZzMgOiB0cnVlXG4gICAgbGV0IGVuZGluZyA9IGFyZzQgPyBhcmc0IDogJydcblxuICAgIGlmIChhY3RpdmF0ZSlcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCkgKyB0cmFpbCA6IHZhbHVlXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHZhbHVlICsgZW5kaW5nXG4gIH1cbn0iXX0=