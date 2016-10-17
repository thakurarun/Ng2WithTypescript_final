import { Component, OnInit } from '@angular/core'

import { Router, ActivatedRoute, Params } from '@angular/router'
import { ProductService } from './../app.service'

import * as model from './../models';

@Component({
    selector: 'app-detail',
    templateUrl: 'src/app/detail/detail.html',
    providers: [ProductService]
})

export class DetailComponent {
    product: model.IProduct;
    constructor(private productService: ProductService, private router: Router, private activeRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.activeRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this.product = this.productService.getSingle(id);
        })
    }
}