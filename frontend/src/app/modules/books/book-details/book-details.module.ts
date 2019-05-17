import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details.component';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class BookDetailsModule { }
