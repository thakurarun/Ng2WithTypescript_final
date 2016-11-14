import { Component, ViewEncapsulation } from '@angular/core';

import { ListComponent } from './list/list.component'

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    styleUrls: ['src/app/app.style.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    constructor() {
    }
}