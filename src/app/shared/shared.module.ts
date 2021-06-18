import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BsFontDirective } from './directives/bs-font/bs-font.directive';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';
import { CapitalizePipe } from './pipes/capitilize/capitalize.pipe';
import { NavTimePipe } from './pipes/nav-time/nav-time.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './services/login/login.service';

const COMPONENTS: any = [
  ButtonComponent,
  FooterComponent,
  NavbarComponent
  
]

const DIRECTIVES: any = [
  BsFontDirective,
  BsNavbarDirective
]

const PIPES = [
  CapitalizePipe,
  NavTimePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    LoginService
  ]
})
export class SharedModule { }
