import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent, pathMatch: 'full' },
    { path: 'product/add', component: AddProductComponent, pathMatch: 'full' },
    {
        path: 'product/edit/:productID',
        component: EditProductComponent,
        pathMatch: 'full',
    },
    { path: 'orders', component: OrdersComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AdminPageComponent,
        ProductsComponent,
        OrdersComponent,
        EditProductComponent,
        AddProductComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
