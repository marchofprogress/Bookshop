import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './modules/books/book-list/book-list.component';
import { BookDetailsComponent } from './modules/books/book-details/book-details.component';

const routes: Routes = [
  { path: "", component: BookListComponent },
  { path: "details/:id", component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
