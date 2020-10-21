import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // --> Bob Paso 11
import { Observable } from 'rxjs'; // --> Bob Paso 14
import { Book } from './book'; // --> Bob Paso 14
import { environment } from '../../environments/environment'; // --> Bob Paso 14

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = environment.baseUrl + 'books'; // --> Bob Paso 14

  constructor(private http: HttpClient) { } //--> Bob Paso 11

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl); // --> Bob Paso 14
  }
}
