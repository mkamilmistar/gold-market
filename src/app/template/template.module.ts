import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './template.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';

const COMPONENETS = [
  FooterComponent, 
  NavbarComponent, 
  TemplateComponent
]

@NgModule({
  declarations: [
    ...COMPONENETS
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
