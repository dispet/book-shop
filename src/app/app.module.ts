import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/books/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { AboutComponent } from './layout/components/about/about.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        CartComponent,
        CartItemComponent,
        AboutComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
