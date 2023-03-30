import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnifeComponent } from './knife/knife.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    AppComponent,
    KnifeComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
