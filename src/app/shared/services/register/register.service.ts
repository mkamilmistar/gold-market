import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  DataRegister: any;

  // register
  register(data: any){
    this.DataRegister = data
    sessionStorage.setItem("data-register", JSON.stringify(this.DataRegister))
  }
}
