import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTimePipe } from './nav-time.pipe';

const PIPES = [
  NavTimePipe
]

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ]
})
export class PipesModule { }
