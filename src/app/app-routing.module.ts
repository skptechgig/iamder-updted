import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';

const routes: Routes = [
  { path:'', component: OurJourneyComponent },
  { path:'home', component: OurJourneyComponent },
  { path:"contact-us", component: ContactUsPageComponent },
  { path:"about-us", component: AboutusPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
