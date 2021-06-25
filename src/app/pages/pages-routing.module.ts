import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../shared/guards/route.guard';
import { PagesComponent } from './pages.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [RouteGuard],
        canActivateChild: [RouteGuard],
        children: [
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
                path: 'profile',
                loadChildren: () => import('./profile/profile.module')
                    .then((m) => m.ProfileModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./product/product.module')
                    .then((m) => m.ProductModule)
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
        ]

    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule {}