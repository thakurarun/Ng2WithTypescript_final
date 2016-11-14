import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService, AutheticationService } from './../services/index';
import * as model from './../models';
@Component({
    selector: 'app-edit',
    templateUrl: 'src/app/edit/edit.html',
    providers: [ProductService]
})

export class EditComponent {
    productId: number;

    product: model.IProduct;

    categories: model.ICategory[];

    constructor(private productService: ProductService, private router: Router, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.categories = this.productService.getCategories();
        this.activeRoute.params.forEach((params: Params) => {
            this.productId = +params['id'];
            this.product = _.cloneDeep(this.productService.getSingle(this.productId));
        })
    }

    onSubmit() {
        let isSuccess = this.productService.updateSingle(this.product);
        if (isSuccess)
            this.router.navigate(['']);
    }

}