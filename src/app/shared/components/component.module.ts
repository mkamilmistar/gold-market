import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ButtonComponent
  ]
})
export class ComponentModule { }
