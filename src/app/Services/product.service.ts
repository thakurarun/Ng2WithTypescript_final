import { Injectable } from '@angular/core';
import * as model from './../models'

const Categories: model.ICategory[] = [
    { category: "TV" },
    { category: "Radio" },
    { category: "Mobile" },
    { category: "Washing Machine" }
];

const Products: model.IProduct[] = [
    { name: 'Product A', price: 10, category: Categories[0], id: 0 }
];

class IdCounter {
    private static counter: number = 1;
    public get next(): number {
        console.log(IdCounter.counter);
        return IdCounter.counter++;
    }
}

@Injectable()
export class ProductService {
    constructor() {
    }

    private idCounter = new IdCounter();
    private products = _(Products);
    private categories = _(Categories);
    getCategories(): model.ICategory[] {
        return this.categories.value();
    }

    getData(): model.IProduct[] {
        return this.products.value();
    }

    getSingle(productId: number): model.IProduct {
        return this.products.find(item => item.id === productId);
    }

    saveSingle(product: model.IProduct): boolean {
        product.id = this.idCounter.next;
        this.products.push(product).commit();
        return true;
    }

    updateSingle(updatedProduct: model.IProduct): boolean {
        let index = this.products.indexOf(this.products.find({ id: updatedProduct.id }));
        this.products = this.products.splice(index, 1, updatedProduct).commit();
        return true;
    }

    deleteSingle(productId: number) {
        this.products.remove(this.products.find({ id: productId })).commit();
    }
}