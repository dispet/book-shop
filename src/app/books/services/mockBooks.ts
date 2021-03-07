import { IBook } from '../../shared/models/book.model';
import { Category } from '../../core/cosnstants';

export const mockBooks: Array<IBook> = [
    {
        id: 1,
        name: 'The Hobbit#1',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: true,
    },
    {
        id: 2,
        name: 'The Hobbit#2',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: false,
    },
    {
        id: 3,
        name: 'The Hobbit#3',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: true,
    },
];
