import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { NavTimePipe } from '../pipes/nav-time.pipe';
import { DirectivesModule } from '../directives/directives.module';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent,
  ButtonComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
   ...COMPONENTS,
  ]
})
export class ComponentModule { }
