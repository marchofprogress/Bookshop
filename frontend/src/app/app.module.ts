import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { BookCartModule } from './modules/books/book-cart/book-cart.module';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { ErrorComponent } from './core/error/error.component';
import { BookDetailsModule } from './modules/books/book-details/book-details.module';
import { BookListModule } from './modules/books/book-list/book-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BookCartModule,
    NavbarModule,
    BookDetailsModule,
    BookListModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
