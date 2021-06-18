import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public LoginUser: FormGroup;

  constructor( 
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    private readonly nav: NavbarService, 
    ) { 
      this.LoginUser = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required],
      });
    }

  ngOnInit(): void {
    this.nav.hide();
  }

  login(){
    if(this.LoginUser.valid) {
      console.log("TES");

      this.loginService.login(this.LoginUser.value)
    }
    
  }

}
