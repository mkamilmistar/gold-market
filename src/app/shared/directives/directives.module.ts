import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsFontDirective } from './bs-font/bs-font.directive';

const DIRECTIVES = [
  BsFontDirective,

]

@NgModule({
  declarations: [
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class DirectivesModule { }
