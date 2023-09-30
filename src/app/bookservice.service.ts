import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
data:any
  constructor() { }
  addBook(d:any){
    this.data=localStorage.setItem('data',JSON.stringify(d));
    return this.data;
  }
  getBook(){
    this.data=JSON.parse(localStorage.getItem('data'));
    return this.data;
  }
  deleteBook(item){
   return localStorage.removeItem('data');
  }
}
