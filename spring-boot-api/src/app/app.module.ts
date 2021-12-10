import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import '@angular/compiler';
import { AppComponent } from './app.component';
import { SpringApiComponent } from './spring-api/spring-api.component';
import {   HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpringApiComponent
  ],

  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  
  providers: [],
  bootstrap: [SpringApiComponent]
})
export class AppModule { }
