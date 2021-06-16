import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { ProductComponent } from './components/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

const COMPONENTS = [ 
  HomeComponent,
  ProductComponent,
  CarouselComponent,
  BenefitsComponent,
  CarouselComponent
]

@NgModule({
  declarations: [
   ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ComponentModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
