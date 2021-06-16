import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent,
  ButtonComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
   ...COMPONENTS,
  ]
})
export class ComponentModule { }
