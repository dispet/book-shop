import { Category } from '../core/cosnstants/category';

export interface IBook {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
    id: number;
}
