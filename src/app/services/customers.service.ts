import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponsiveModel } from '../models/customerResponsiveModel';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiUrl="https://localhost:44358/api/customers/getall"

  constructor(private httpClient:HttpClient) { }
  getClients():Observable<customerResponsiveModel>{
  return this.httpClient.get<customerResponsiveModel>(this.apiUrl)
  }
}
