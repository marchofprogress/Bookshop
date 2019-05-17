import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatBadgeModule,
  MatTooltipModule,
  MatIconModule,
} from "@angular/material";

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule

  ]
})
export class AngularMaterialModule { }
