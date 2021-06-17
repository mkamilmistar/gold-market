import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsFontDirective } from './bs-font/bs-font.directive';
import { BsNavbarDirective } from './bs-navbar/bs-navbar.directive';

const DIRECTIVES = [
  BsFontDirective,
  BsNavbarDirective
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
