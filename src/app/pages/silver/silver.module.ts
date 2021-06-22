import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilverRoutingModule } from './silver-routing.module';
import { SilverComponent } from './silver.component';



@NgModule({
  declarations: [SilverComponent],
  imports: [
    CommonModule,
    SilverRoutingModule
  ],
  exports: [
    SilverComponent
  ]
})
export class SilverModule { }
