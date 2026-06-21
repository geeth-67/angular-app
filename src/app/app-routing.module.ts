import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PrivacyPoliciesComponent} from "./privacy-policies/privacy-policies.component";
import {EmailComponent} from "./contact-us/email/email.component";
import {PhoneComponent} from "./contact-us/phone/phone.component";
import {LoginComponent} from "./login/login.component";
import {ScaffoldingComponent} from "./scaffolding/scaffolding.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '' , component: LandingPageComponent},
  {path: 'app' , component: ScaffoldingComponent , children: [
      {path: '' , component: DashboardComponent},
      {path: 'products' , loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
    ]},
  {path: 'contact-us' , component: ContactUsComponent , children: [
        {path: 'email' , component: EmailComponent},
        {path: 'phone' , component: PhoneComponent},
    ]},
  {path: 'login' , component: LoginComponent},
  {path: 'privacy-policies' , component: PrivacyPoliciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
