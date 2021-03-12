import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { OrdersModule } from '../orders/orders.module';
import { ActiveItemDirective } from './directives/active-item.directive';
import { ZoomFontDirective } from './directives/zoom-font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        ActiveItemDirective,
        ZoomFontDirective,
        OrderByPipe,
        NotFoundComponent,
        HeaderComponent,
        HomeComponent,
    ],
    imports: [CommonModule, AngularMaterialModule],
    exports: [
        AngularMaterialModule,
        CommonModule,
        OrdersModule,
        ActiveItemDirective,
        ZoomFontDirective,
        OrderByPipe,
        HeaderComponent,
        HomeComponent,
    ],
})
export class SharedModule {}
