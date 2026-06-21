import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {ProductModule} from "./modules/product/product.module";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './contact-us/email/email.component';
import { PhoneComponent } from './contact-us/phone/phone.component';
import { ScaffoldingComponent } from './scaffolding/scaffolding.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SideBarComponent,
    ContactUsComponent,
    LoginComponent,
    PrivacyPoliciesComponent,
    DashboardComponent,
    EmailComponent,
    PhoneComponent,
    ScaffoldingComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
