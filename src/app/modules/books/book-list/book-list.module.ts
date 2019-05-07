import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { MultiTitleFilterComponent } from './filters/multi-title-filter/multi-title-filter.component';
import { RunningTitleFilterComponent } from './filters/running-title-filter/running-title-filter.component';
import { SimpleTitleFilterComponent } from './filters/simple-title-filter/simple-title-filter.component';
import { BookItemComponent } from './book-item/book-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      BookListComponent,
      MultiTitleFilterComponent,
      RunningTitleFilterComponent,
      SimpleTitleFilterComponent,
      BookItemComponent
],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class BookListModule { }
