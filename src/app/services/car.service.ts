import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carResponsiveModel } from '../models/carResponsiveModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="https://localhost:44358/api/cars/getall"

  constructor(private httpClient:HttpClient) { }

  getCar():Observable<carResponsiveModel>{
    return this.httpClient.get<carResponsiveModel>(this.apiUrl);

  }
  getCar_Brand(brandId:number):Observable<carResponsiveModel>{
    return this.httpClient.get<carResponsiveModel>(this.apiUrl);

  }
  getCar_Color(colorId:number):Observable<carResponsiveModel>{
    return this.httpClient.get<carResponsiveModel>(this.apiUrl);

  }

}
