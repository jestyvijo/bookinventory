import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {BookserviceService} from '../bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
formdata:any;
data:any;
msg;
  constructor(public book:BookserviceService) { }

  ngOnInit(){
    this.formdata =new FormGroup({
      title:new FormControl('',Validators.compose([Validators.required])),
      author:new FormControl('',Validators.compose([Validators.required])),
      generation:new FormControl('',Validators.compose([Validators.required])),
      year:new FormControl('',Validators.compose([Validators.required])),
      qty:new FormControl('',Validators.compose([Validators.required]))
    })
  }

  subData(data:any){
    this.book.addBook(data).subscribe(response => {
      if(response!==""){
      this.msg="Book added"
      }
  });

  }
}
