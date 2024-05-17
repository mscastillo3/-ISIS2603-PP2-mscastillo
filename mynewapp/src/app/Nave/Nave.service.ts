import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Naves } from './Nave';
@Injectable({
  providedIn: 'root'
})
export class NaveService {

constructor(private http: HttpClient) { }
private apiUrl = environment.baseUrl + 'naves';
getNaves() {
  return this.http.get<Naves[]>(this.apiUrl);
}

}
