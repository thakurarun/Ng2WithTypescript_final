import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing';

import { ListComponent } from './app/list/list.component';
import { CreateComponent } from './app/create/create.component';
import { DetailComponent } from './app/detail/detail.component';
import { EditComponent } from './app/edit/edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, ListComponent, CreateComponent, DetailComponent, EditComponent],
  bootstrap: [AppComponent],
  providers :[]
})
export class AppModule { }
