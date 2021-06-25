import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule), 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/wrong-route/wrong-route.module')
    .then((m) => m.WrongRouteModule)
} ,
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
