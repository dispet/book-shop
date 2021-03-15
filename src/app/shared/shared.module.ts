import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrdersModule } from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';
import { ZoomFontDirective } from './directives/zoom-font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
    declarations: [ActiveItemDirective, ZoomFontDirective, OrderByPipe],
    imports: [CommonModule],
    exports: [
        AngularMaterialModule,
        CommonModule,
        OrdersModule,
        ActiveItemDirective,
        ZoomFontDirective,
        OrderByPipe,
    ],
})
export class SharedModule {}
