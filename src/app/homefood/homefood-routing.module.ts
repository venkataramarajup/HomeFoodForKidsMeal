import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefoodComponent } from './homefood.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [

   
   {
    path: 'catalog', component: CatalogComponent
   },
   {
    path: '', component: HomefoodComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomefoodRoutingModule { }
