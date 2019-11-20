import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {DetailComponent} from './detail/detail.component';
import {DeleteComponent} from './delete/delete.component';


const routes: Routes = [
  {
    path: 'products', component: ProductsComponent, children: [
      {path: 'list', redirectTo: '/products', pathMatch: 'full'},
      {path: 'add', component: AddComponent},
      {path: ':id/edit', component: EditComponent},
      {path: ':id/detail', component: DetailComponent},
      {path: ':id/delete', component: DeleteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
