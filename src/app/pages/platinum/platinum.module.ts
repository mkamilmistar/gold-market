import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatinumComponent } from './platinum.component';
import { SilverRoutingModule } from '../silver/silver-routing.module';
import { PlatinumRoutingModule } from './platinum-routing.module';



@NgModule({
  declarations: [PlatinumComponent],
  imports: [
    CommonModule,
    PlatinumRoutingModule
  ],
  exports: [
    PlatinumComponent
  ]
})
export class PlatinumModule { }
