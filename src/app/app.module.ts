import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddToDoComponent } from './Components/add-to-do/add-to-do.component';
import { ViewToDoComponent } from './Components/view-to-do/view-to-do.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './Components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewToDoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
