import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [CartComponent, CartItemComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [CartComponent],
})
export class CartModule {}
