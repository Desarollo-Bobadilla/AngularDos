import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListarComponent } from './book-listar/book-listar.component'; // --> Bob Paso 6

@NgModule({
  imports: [
    CommonModule
  ],

  // --> Bob Paso 4 (Borrar lo que hay en declarations y no existe exports)
  declarations: [BookListarComponent], // --> Bob Paso 6
  exports: [BookListarComponent], // --> Bob Paso 6
})
export class BookModule { }
