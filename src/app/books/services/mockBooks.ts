import { IBook } from '../../shared/models';
import { Category } from '../../core/cosnstants';

export const mockBooks: Array<IBook> = [
    {
        id: 1,
        name: 'The Hobbit#1',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23,
        category: Category.Fantasy,
        createDate: Date.now() - 100000000,
        isAvailable: true,
    },
    {
        id: 2,
        name: 'The Hobbit#2',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 24,
        category: Category.Fantasy,
        createDate: Date.now() - 200000000,
        isAvailable: false,
    },
    {
        id: 3,
        name: 'The Hobbit#3',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 25,
        category: Category.Fantasy,
        createDate: Date.now() - 300000000,
        isAvailable: true,
    },
];
