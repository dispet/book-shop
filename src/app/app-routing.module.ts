import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';
import { CartComponent } from './cart/components/cart/cart.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    {
        path: 'books',
        loadChildren: () =>
            import('./books/books.module').then((m) => m.BooksModule),
    },
    { path: 'cart', component: CartComponent, pathMatch: 'full' },
    { path: 'order', component: CartComponent, pathMatch: 'full' },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard],
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
