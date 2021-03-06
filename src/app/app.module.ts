import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { httpInterceptorProviders } from './core';
import { BooksService } from './books/services/books.service';
import { CartService } from './cart/services/cart.service';

@NgModule({
    declarations: [AppComponent, AboutComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        BooksModule,
        CartModule,
        SharedModule,
        OrdersModule,
        AppRoutingModule,
    ],
    providers: [httpInterceptorProviders, BooksService, CartService],
    bootstrap: [AppComponent],
})
export class AppModule {}
