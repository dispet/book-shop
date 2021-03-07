import { Category } from '../core/cosnstants';

export interface IBook {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
    id: number;
}
