import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatinumComponent } from './pages/platinum/platinum.component';
import { GoldComponent } from './pages/gold/gold.component';
import { SilverComponent } from './pages/silver/silver.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { WrongRouteComponent } from './pages/wrong-route/wrong-route.component';

const routes: Routes = [
  {
    path: "login",    
    component: LoginComponent
  },
  {
    path: "register",    
    component: RegisterComponent
  },
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
  // { 
  //   path: "**", 
  //   pathMatch: '', 
  //   component: WrongRouteComponent
  // },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  }
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
