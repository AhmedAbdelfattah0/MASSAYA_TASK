import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { VideoCallComponent } from './video-call/video-call.component';

const routes: Routes = [
  {path:"",component:VideoCallComponent},
  {path:"video-call",component:VideoCallComponent},
  {path:"products",component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
