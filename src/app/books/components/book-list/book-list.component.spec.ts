import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BooksComponent', () => {
    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
