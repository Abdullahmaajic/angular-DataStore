import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path:'add',
    component:AddproductComponent
  },
  {
    path:'delete',
    component:DeleteproductComponent
  },
  {
    path:'update',
    component:UpdateproductComponent
  },
  {
    path:'get',
    component:GetproductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
