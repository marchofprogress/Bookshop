import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCartComponent } from './book-cart.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookCartComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    BookCartComponent
  ]
})
export class BookCartModule { }
