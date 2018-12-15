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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxpbWl0LXRvLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibmd4LWxpbWl0LXRvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFBO0FBS25ELE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7SUFDekIsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSyxFQUFFLElBQUssRUFBRSxJQUFLOztZQUU1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1lBQzNCLFFBQVEsR0FBRyxPQUFPLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTs7WUFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBRTdCLElBQUksUUFBUTtZQUNWLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBOztZQUV2RSxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUE7SUFDekIsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDaGFyYWN0ZXIgbGltaXQgcGlwZS5cbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQFBpcGUoe1xuICBuYW1lOiAnbGltaXRUbydcbn0pXG5leHBvcnQgY2xhc3MgTmd4TGltaXRUb1BpcGUge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnMSwgYXJnMj8sIGFyZzM/LCBhcmc0Pyk6IHN0cmluZyB7XG5cbiAgICBsZXQgbGltaXQgPSBhcmcxID8gcGFyc2VJbnQoYXJnMSwgMTApIDogMTBcbiAgICBsZXQgdHJhaWwgPSBhcmcyID8gYXJnMiA6ICcuLi4nXG4gICAgbGV0IGFjdGl2YXRlID0gdHlwZW9mIGFyZzMgPT0gJ2Jvb2xlYW4nID8gYXJnMyA6IHRydWVcbiAgICBsZXQgZW5kaW5nID0gYXJnNCA/IGFyZzQgOiAnJ1xuXG4gICAgaWYgKGFjdGl2YXRlKVxuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxpbWl0KSArIHRyYWlsIDogdmFsdWVcbiAgICBlbHNlXG4gICAgICByZXR1cm4gdmFsdWUgKyBlbmRpbmdcbiAgfVxufSJdfQ==