import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brands } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="http://localhost:58316/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brands>>{
    let newPath = this.apiUrl+"brands/getall";
    return this.httpClient.get< ListResponseModel<Brands>>(newPath);
  }
  getBrandsByName(brand:string):Observable<ListResponseModel<Brands>>{
    let newPath=this.apiUrl+"brands/getbyname?name"
    return this.httpClient.get< ListResponseModel<Brands>>(this.apiUrl);
  }
}
