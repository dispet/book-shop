import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrdersModule } from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';
import { ZoomFontDirective } from './directives/zoom-font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        ActiveItemDirective,
        ZoomFontDirective,
        OrderByPipe,
        NotFoundComponent,
    ],
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
