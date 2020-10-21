import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookModule } from './book/book.module'; // --> Bob Paso 5
import { EditorialModule } from './editorial/editorial.module'; // --> Bob Paso 9.5
import { HttpClientModule } from '@angular/common/http'; // --> Bob Paso 12

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule,          // --> Bob Paso 5
    EditorialModule,     // --> Bob Paso 9.5
    HttpClientModule    // --> Bob Paso 12
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
