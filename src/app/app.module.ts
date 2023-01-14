import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurServicesComponent } from './components/sections/our-services/our-services.component';
import { AboutComponent } from './components/sections/about/about.component';
import { FooterUpperSectionComponent } from './components/layout/footer-upper-section/footer-upper-section.component';
import { NewLetterComponent } from './components/layout/new-letter/new-letter.component';
import { ReviewsHomeComponent } from './components/layout/reviews-home/reviews-home.component';
import { GetInTouchComponent } from './components/layout/get-in-touch/get-in-touch.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    ReservationFormComponent,
    ReservationSummaryComponent,
    OurServicesComponent,
    AboutComponent,
    FooterUpperSectionComponent,
    NewLetterComponent,
    ReviewsHomeComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
