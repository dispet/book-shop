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
}
