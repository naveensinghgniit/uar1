import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AgGridAppComponent } from './ag-grid-app/ag-grid-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridAppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([AgGridAppComponent]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
