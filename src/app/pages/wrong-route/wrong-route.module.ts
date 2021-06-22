import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrongRouteRoutingModule } from './wrong-route-routing.module';
import { WrongRouteComponent } from './wrong-route.component';



@NgModule({
  declarations: [WrongRouteComponent],
  imports: [
    CommonModule,
    WrongRouteRoutingModule
  ], 
  exports: [WrongRouteComponent]
})
export class WrongRouteModule { }
