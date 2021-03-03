import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [AngularMaterialModule, CommonModule, OrdersModule],
})
export class SharedModule {}
