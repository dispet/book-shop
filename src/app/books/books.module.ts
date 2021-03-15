import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book-list/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [BookComponent, BookListComponent],
    imports: [CommonModule, SharedModule],
    exports: [BookListComponent],
})
export class BooksModule {}
