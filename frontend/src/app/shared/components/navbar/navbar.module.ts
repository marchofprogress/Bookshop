import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BookCartModule } from 'src/app/modules/books/book-cart/book-cart.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BookCartModule,
    RouterModule

  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
