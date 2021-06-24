import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly nav: NavbarService, 
    private readonly router: Router
    ) { 
      this.LoginUser = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required],
      });
    }

  ngOnInit(): void {
    this.nav.hide();
  }

  login() {
    if(this.LoginUser.valid) {
      this.loginService.login(this.LoginUser.value)
      this.router.navigate(['users'])
    }
  }

}
