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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGltaXQtdG8tcGlwZS8iLCJzb3VyY2VzIjpbIm5neC1saW1pdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQTtBQUtuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBQ3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBSSxFQUFFLElBQUssRUFBRSxJQUFLLEVBQUUsSUFBSzs7WUFFNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLOztZQUMzQixRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUU3QixJQUFJLFFBQVE7WUFDVixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTs7WUFFdkUsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFBO0lBQ3pCLENBQUM7OztZQWZGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQ2hhcmFjdGVyIGxpbWl0IHBpcGUuXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xpbWl0VG8nXG59KVxuZXhwb3J0IGNsYXNzIE5neExpbWl0VG9QaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZzEsIGFyZzI/LCBhcmczPywgYXJnND8pOiBzdHJpbmcge1xuXG4gICAgbGV0IGxpbWl0ID0gYXJnMSA/IHBhcnNlSW50KGFyZzEsIDEwKSA6IDEwXG4gICAgbGV0IHRyYWlsID0gYXJnMiA/IGFyZzIgOiAnLi4uJ1xuICAgIGxldCBhY3RpdmF0ZSA9IHR5cGVvZiBhcmczID09ICdib29sZWFuJyA/IGFyZzMgOiB0cnVlXG4gICAgbGV0IGVuZGluZyA9IGFyZzQgPyBhcmc0IDogJydcblxuICAgIGlmIChhY3RpdmF0ZSlcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCkgKyB0cmFpbCA6IHZhbHVlXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHZhbHVlICsgZW5kaW5nXG4gIH1cbn0iXX0=