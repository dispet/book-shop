import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { BooksModule } from './books/books.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GeneratorService } from './core/services/generator.service';
import { GeneratorFactory } from './core/services/generator.service.provider';
import { ConfigOptionsService } from './core/services/config-options.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { APP_CONFIG, ConstantService } from './core/services/constant.service';

@NgModule({
    declarations: [AppComponent, AboutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BooksModule,
        CartModule,
        SharedModule,
        CoreModule,
    ],
    providers: [
        ConfigOptionsService,
        { provide: LocalStorageService, useClass: LocalStorageService },
        { provide: APP_CONFIG, useValue: ConstantService },
        { provide: GeneratorService, useFactory: GeneratorFactory },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
