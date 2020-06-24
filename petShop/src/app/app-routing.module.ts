import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';


const routes: Routes = [
	{
        path:"", component: HomeComponent
    },
    {
        path: 'artikels/:ID', component: ProductDetailsComponent
    },
    {
    	path: 'warenkorb', component: WarenkorbComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
