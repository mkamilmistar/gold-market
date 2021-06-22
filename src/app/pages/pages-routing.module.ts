import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module')
            .then((m) => m.HomeModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/register/register.module')
            .then((m) => m.RegisterModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module')
            .then((m) => m.LoginModule)
    },
    {
        path: 'gold',
        loadChildren: () => import('./gold/gold.module')
        .then((m) => m.GoldModule)
    },
    {
        path: 'platinum',
        loadChildren: () => import('./platinum/platinum.module')
        .then((m) => m.PlatinumModule)
    },
    {
        path: 'silver',
        loadChildren: () => import('./silver/silver.module')
        .then((m) => m.SilverModule)
    },
    {
        path: 'event',
        loadChildren: () => import('./event/event.module')
        .then((m) => m.EventModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module')
        .then((m) => m.AboutModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module')
        .then((m) => m.ContactModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule {}