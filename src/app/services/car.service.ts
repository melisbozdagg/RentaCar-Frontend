import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="http://localhost:58316/api/cars/getallDto"

  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<car>>{
    return this.httpClient.get<ListResponseModel<car>>(this.apiUrl);

  }
  getCar_Brand(brandId:number):Observable<ListResponseModel<car>>{
    return this.httpClient.get<ListResponseModel<car>>(this.apiUrl);

  }
  getCar_Color(colorId:number):Observable<ListResponseModel<car>>{
    return this.httpClient.get<ListResponseModel<car>>(this.apiUrl);

  }

}
