import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorResponsiveModel } from '../models/colorResponsiveModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44358/api/colors/getall"
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<colorResponsiveModel>{
   return this.httpClient.get< colorResponsiveModel >(this.apiUrl);
  }
}
