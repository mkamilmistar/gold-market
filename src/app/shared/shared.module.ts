import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BsFontDirective } from './directives/bs-font/bs-font.directive';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';
import { CapitalizePipe } from './pipes/capitilize/capitalize.pipe';
import { NavTimePipe } from './pipes/nav-time/nav-time.pipe';

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
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ]
})
export class SharedModule { }
