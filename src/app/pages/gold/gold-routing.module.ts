import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoldComponent } from "./gold.component";

const routes: Routes = [
    {
        path: '',
        component: GoldComponent
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

export class GoldRoutingModule {} 