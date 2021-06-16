import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';

const DIRECTIVES = [
  BsNavbarDirective,
]

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class SharedModule { }
