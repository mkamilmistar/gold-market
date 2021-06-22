import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductComponent } from './components/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [ 
  HomeComponent,
  ProductComponent,
  CarouselComponent,
  BenefitsComponent,
]

@NgModule({
  declarations: [
   ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
