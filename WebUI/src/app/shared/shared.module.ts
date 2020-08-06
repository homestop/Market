import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    CardComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
