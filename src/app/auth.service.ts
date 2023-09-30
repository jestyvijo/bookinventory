import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

  constructor(private router: Router) { }

  signinUser(username: string, password: string) {
    if(username == 'admin' && password == 'password123') {
      this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
    }
}
