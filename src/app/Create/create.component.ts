import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as model from './../models'
import { ProductService } from './../app.service'

@Component({
    selector: 'app-create',
    templateUrl: 'src/app/create/create.html',
    styleUrls: ['src/app/create/create.style.css'],
    providers: [ProductService]
})

export class CreateComponent {

    constructor(private productService: ProductService, private router: Router, private activeRoute: ActivatedRoute) {

    }

    product: model.IProduct;
    categories: model.ICategory[];

    ngOnInit() {
        this.product = new model.Product();
        this.categories = this.productService.getCategories();
        this.product.category = { category: '' };
    }

    onSave() {
        let isSuccess = this.productService.saveSingle(this.product);
        if (isSuccess)
            this.router.navigate(['']);
    }

}