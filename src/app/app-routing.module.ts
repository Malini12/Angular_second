import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolderComponent } from './holder/holder.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductComponent }from './product/product.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:"holder",
    component:HolderComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:"productlist",
        component:ProjectlistComponent

      },
      {
        path:"create",
        component:CreateComponent
      },
      {
        path:"edit",
        component:EditComponent
      },
      {
        path:"product/:id",
        component:ProductviewComponent
      },
      {
        path :"product",
        component:ProductComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
