import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colors } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="http://localhost:58316/api/colors/getall"
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<colors>>{
   return this.httpClient.get<ListResponseModel<colors>>(this.apiUrl);
  }
}
