import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrdersModule } from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';
import { ZoomFontDirective } from './directives/zoom-font.directive';

@NgModule({
    declarations: [ActiveItemDirective, ZoomFontDirective],
    imports: [CommonModule],
    exports: [
        AngularMaterialModule,
        CommonModule,
        OrdersModule,
        ActiveItemDirective,
        ZoomFontDirective,
    ],
})
export class SharedModule {}
