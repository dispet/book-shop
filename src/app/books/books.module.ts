import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book-list/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-list/book/book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [BookComponent, BookListComponent, BookDetailComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [BookListComponent],
})
export class BooksModule {}
