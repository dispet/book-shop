import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminPageComponent,
        ProductsComponent,
        OrdersComponent,
        EditProductComponent,
        AddProductComponent,
    ],
    imports: [CommonModule, RouterModule, AdminRoutingModule],
    providers: [],
})
export class AdminModule {}
