import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LanguageDropDownComponent } from './components/layout/language-drop-down/language-drop-down.component';
import { LanguageInterceptor } from './interceptors/language.interceptor';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ReservationQuoteComponent } from './components/reservation-quote/reservation-quote.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    GetInTouchComponent,
    LanguageDropDownComponent,
    ReservationQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr',
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
