import { Component, ViewEncapsulation } from '@angular/core';

import { ListComponent } from './List/list.component'

@Component({
    selector: 'my-app',
    //template: '<app-list [list]="products"></app-list>',
    templateUrl: 'src/app/app.html',
    styleUrls: ['src/app/app.style.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    constructor() {
    }
}