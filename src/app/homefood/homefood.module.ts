import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomefoodRoutingModule } from './homefood-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomefoodRoutingModule,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    RouterOutlet
  ]
})
export class HomefoodModule { }
