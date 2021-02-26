import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
    @Input() cartItem!: BookModel;
    @Output() removeCartItemEvent = new EventEmitter<number>();

    constructor() {}

    // tslint:disable-next-line:typedef
    onRemove(name) {
        this.removeCartItemEvent.emit(name);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
