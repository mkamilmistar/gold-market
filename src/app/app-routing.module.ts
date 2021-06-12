import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatinumComponent } from './pages/platinum/platinum.component';
import { GoldComponent } from './pages/gold/gold.component';
import { SilverComponent } from './pages/silver/silver.component';

const routes: Routes = [
  {
    path: "home",    
    component: HomeComponent
  },
  {
    path: "platinum",    
    component: PlatinumComponent
  },
  {
    path: "gold",    
    component: GoldComponent
  },
  {
    path: "silver",    
    component: SilverComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
