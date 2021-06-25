import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GoldComponent } from './components/gold/gold.component';
import { PlatinumComponent } from './components/platinum/platinum.component';
import { SilverComponent } from './components/silver/silver.component';
import { ProductComponent } from './product.component';

const COMPONENTS = [
  GoldComponent, PlatinumComponent, SilverComponent, ProductComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
