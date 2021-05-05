import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { ColorsComponent } from './components/brand/colors/colors/colors.component';
import { CustomersComponent } from './components/brand/customers/customers.component';
import { CarsComponent } from './components/brand/Cars/cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorsComponent,
    CustomersComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
