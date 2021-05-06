import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand/brand.component';

const routes: Routes = [
  {path:"brands",component:BrandComponent},
  {path:"brands/cars/:name",component:BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
