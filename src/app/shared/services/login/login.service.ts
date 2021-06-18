import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  DataLogin: any;

  // Login
  login(data: any){
    this.DataLogin = data
    sessionStorage.setItem("data-login", JSON.stringify(this.DataLogin))
  }
}
