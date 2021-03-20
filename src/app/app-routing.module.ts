import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { OrderComponent } from './orders/components/order/order.component';
import { AdminGuard } from './admin/guards/admin.guard';
import { BookDetailComponent } from './books/components/book-list/book/book-detail/book-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product-list', component: BookListComponent },
    { path: 'product/:productID', component: BookDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'order', component: OrderComponent },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AdminGuard],
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
