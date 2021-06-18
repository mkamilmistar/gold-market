import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTimePipe } from './pipes/nav-time.pipe';
import { NavbarService } from './services/navbar/navbar.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    // ...PIPES
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    NavbarService
  ]
})
export class SharedModule { }
