import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [
    HomeComponent
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
