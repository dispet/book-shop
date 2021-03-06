import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';

@NgModule({
    declarations: [OrderComponent],
    imports: [CommonModule],
    exports: [OrderComponent],
})
export class OrdersModule {}
