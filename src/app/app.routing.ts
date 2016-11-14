<<<<<<< Updated upstream
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: ListComponent },
            { path: 'create', component: CreateComponent },
            { path: 'detail/:id', component: DetailComponent },
            { path: 'edit/:id', component: EditComponent }
        ])
        //, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: '', component: ListComponent, },
            { path: 'Create', component: CreateComponent },
            { path: 'Detail/:id', component: DetailComponent },
            { path: 'edit/:id', component: EditComponent }
        ], { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
>>>>>>> Stashed changes
