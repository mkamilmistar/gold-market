import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { SharedModule } from "../shared/shared.module";
import { TemplateModule } from "../template/template.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

const COMPONENTS = [
    PagesComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule, 
    PagesRoutingModule,
    TemplateModule,
  ], 
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }