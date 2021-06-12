import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentModule } from './shared/components/component.module';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GoldComponent } from './pages/gold/gold.component';
import { SilverComponent } from './pages/silver/silver.component';
import { PlatinumModule } from './pages/platinum/platinum.module';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { WrongRouteComponent } from './pages/wrong-route/wrong-route.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventComponent } from './pages/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    SilverComponent,
    RegisterComponent,
    LoginComponent,
    WrongRouteComponent,
    EventComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    PlatinumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
