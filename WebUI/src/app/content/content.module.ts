import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ContentRoutingModule } from './content-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CheckoutComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    ContentRoutingModule,

    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
  ]
})
export class ContentModule { }
