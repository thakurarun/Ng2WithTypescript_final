import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import * as model from './../models';
import { ProductService, AutheticationService } from './../services/index';

@Component({
    selector: 'app-list',
    templateUrl: 'src/app/List/list.html',
    styleUrls: ['src/app/List/list.style.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ProductService]
})

export class ListComponent {
    constructor(private productService: ProductService) {
    }

    list: model.IProduct[];
    ngOnInit(): void {
        this.list = this.productService.getData();
    }

    deleteProduct(productId: number) {
        this.productService.deleteSingle(productId);
    }

    get diagnostic() { return JSON.stringify(this.list); }
}