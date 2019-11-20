import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [AddComponent, EditComponent, DetailComponent, DeleteComponent],
  exports: [
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
