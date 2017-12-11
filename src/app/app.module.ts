import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RiggingComponent } from './rigging/rigging.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { TermsComponent } from './terms/terms.component';
import { FooterComponent } from './footer/footer.component';
import { CanopyComponent } from './canopy/canopy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RiggingComponent,
    HeaderComponent,
    ContactComponent,
    ExploreComponent,
    TermsComponent,
    FooterComponent,
    CanopyComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
