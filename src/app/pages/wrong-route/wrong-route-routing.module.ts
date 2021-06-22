import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WrongRouteComponent } from "./wrong-route.component";

const routes: Routes = [
    {
        path: '',
        component: WrongRouteComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class WrongRouteRoutingModule {}