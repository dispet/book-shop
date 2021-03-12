import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '', component: AdminPageComponent },
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
