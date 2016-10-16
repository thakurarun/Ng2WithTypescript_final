export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: ICategory;
}

export class Product implements IProduct {
    id: number = 0;
    name: string = '';
    price: number = 0;
    category: ICategory;
}

export interface ICategory {
    category: string;
}