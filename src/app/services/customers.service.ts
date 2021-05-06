import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customers } from '../models/customers';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiUrl="http://localhost:58316/api/customers/getall"

  constructor(private httpClient:HttpClient) { }
  getClients():Observable<ListResponseModel<customers>>{
  return this.httpClient.get<ListResponseModel<customers>>(this.apiUrl)
  }
}
