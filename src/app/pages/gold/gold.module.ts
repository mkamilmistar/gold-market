import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldRoutingModule } from './gold-routing.module';
import { GoldComponent } from './gold.component';



@NgModule({
  declarations: [GoldComponent],
  imports: [
    CommonModule,
    GoldRoutingModule
  ],
  exports: [
    GoldComponent
  ]
})
export class GoldModule { }
