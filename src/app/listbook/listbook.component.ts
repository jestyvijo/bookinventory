import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
da:any[]
response:any
  constructor(public book:BookserviceService,private router: Router) { }

  ngOnInit(){
    this.da=this.book.getBook()
    console.log(this.da);
  }
  deleteData(item){
    this.response=this.book.deleteBook(item)
    console.log(this.response);
      if(this.response!==""){
        this.router.navigate(["user"]);
      }
  }

}
