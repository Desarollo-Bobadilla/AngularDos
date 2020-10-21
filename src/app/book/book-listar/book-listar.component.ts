import { Component, OnInit } from '@angular/core';

import { Book } from '../book'; // --> Bob Paso 10
import { BookService } from '../book.service'; // -- Bob Paso 16

@Component({
  selector: 'app-book-listar',    // --> Importante Bob Paso 7
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {

  constructor(private bookService: BookService) { } // --> Bob Paso 16

  books: Array<Book>;  // --> Bob Paso 16

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }                             // --> Bob 16

  ngOnInit() {
    this.getBooks(); // --> Bob Paso 16
  }

}

