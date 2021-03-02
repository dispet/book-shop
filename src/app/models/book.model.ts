export enum Category {
    Crime,
    Detective,
    Science,
    Fantasy,
}

export interface BookModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
    id: number;
}

export interface IbookToBuy {
    name: string;
    price: number;
    booksInCart: number;
    id: number;
}
