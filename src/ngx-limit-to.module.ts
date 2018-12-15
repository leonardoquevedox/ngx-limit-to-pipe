/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxLimitToPipe } from './ngx-limit-to.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxLimitToPipe],
    exports: [NgxLimitToPipe]
})
export class NgxLimitToPipeModule { }