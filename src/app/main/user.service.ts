import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// const baseUrl = 'https://api.drdfrm.xyz/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  postUser(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/saveuser`, data);
  
  }
}