import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';        // لازم يكون موجود

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Screenshots } from './components/screenshots/screenshots';
import { Pricing } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';

@NgModule({
  declarations: [
    App,
        Navbar,
        Hero,
        Features,
        HowItWorks,
        Testimonials,
        Contact,
        Footer,
        Screenshots,
        Pricing,
        Faq

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
  exports: [
        Navbar,
        Hero,
        Features,
        HowItWorks,
        Testimonials,
        Contact,
        Footer,
        Screenshots,
        Pricing,
        Faq

  ]
})
export class AppModule { }
