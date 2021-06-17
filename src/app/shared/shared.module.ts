import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTimePipe } from './pipes/nav-time.pipe';
import { BsFontDirective } from './directives/bs-font/bs-font.directive';

const COMPONENTS: any = [

]

const DIRECTIVES: any = [
  
]

const PIPES = [
  NavTimePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    // ...PIPES
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // ...PIPES
  ]
})
export class SharedModule { }
