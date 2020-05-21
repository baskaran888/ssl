import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APP_MATERIAL } from './app.material';
import { AppServices } from '../services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_MATERIAL,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppServices,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
