import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';
import { WhyIamderComponent } from './why-iamder/why-iamder.component';
import { VerifiedUserComponent } from './verified-user/verified-user.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { WeWorkWithComponent } from './we-work-with/we-work-with.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { PrivacyModalComponent } from './privacy-modal/privacy-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    OurJourneyComponent,
    WhyIamderComponent,
    VerifiedUserComponent,
    UserReviewComponent,
    WeWorkWithComponent,
    FooterComponent,
    AboutusPageComponent,
    ContactUsPageComponent,
    PrivacyModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
