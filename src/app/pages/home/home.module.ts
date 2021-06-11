import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    ProductComponent
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
