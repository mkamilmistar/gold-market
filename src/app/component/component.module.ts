import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CarouselComponent
  ]
})
export class ComponentModule { }
