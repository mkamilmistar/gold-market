import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SilverComponent } from "./silver.component";


const routes: Routes = [
    {
        path: '',
        component: SilverComponent
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

export class SilverRoutingModule {}