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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGltaXQtdG8tcGlwZS8iLCJzb3VyY2VzIjpbIm5neC1saW1pdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQTtBQUVuRDtJQUFBO0lBZ0JBLENBQUM7Ozs7Ozs7OztJQVpDLGtDQUFTOzs7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQUksRUFBRSxJQUFLLEVBQUUsSUFBSyxFQUFFLElBQUs7O1lBRTVDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs7WUFDM0IsUUFBUSxHQUFHLE9BQU8sSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztZQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFN0IsSUFBSSxRQUFRO1lBQ1YsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7O1lBRXZFLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQTtJQUN6QixDQUFDOztnQkFmRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQWNELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDaGFyYWN0ZXIgbGltaXQgcGlwZS5cbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQFBpcGUoe1xuICBuYW1lOiAnbGltaXRUbydcbn0pXG5leHBvcnQgY2xhc3MgTmd4TGltaXRUb1BpcGUge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnMSwgYXJnMj8sIGFyZzM/LCBhcmc0Pyk6IHN0cmluZyB7XG5cbiAgICBsZXQgbGltaXQgPSBhcmcxID8gcGFyc2VJbnQoYXJnMSwgMTApIDogMTBcbiAgICBsZXQgdHJhaWwgPSBhcmcyID8gYXJnMiA6ICcuLi4nXG4gICAgbGV0IGFjdGl2YXRlID0gdHlwZW9mIGFyZzMgPT0gJ2Jvb2xlYW4nID8gYXJnMyA6IHRydWVcbiAgICBsZXQgZW5kaW5nID0gYXJnNCA/IGFyZzQgOiAnJ1xuXG4gICAgaWYgKGFjdGl2YXRlKVxuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxpbWl0KSArIHRyYWlsIDogdmFsdWVcbiAgICBlbHNlXG4gICAgICByZXR1cm4gdmFsdWUgKyBlbmRpbmdcbiAgfVxufSJdfQ==