import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';
import { RegisterService } from 'src/app/shared/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public RegisterUser: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
    private readonly nav: NavbarService
    ) {
      this.RegisterUser = this.formBuilder.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
      });
    }

  ngOnInit(): void {
    this.nav.hide();
  }

  register() {
    if(this.RegisterUser.valid) {
      this.registerService.register(this.RegisterUser.value)
    }
  }

}
