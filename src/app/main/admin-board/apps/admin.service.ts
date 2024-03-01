import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getAllUser() {
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}/getUser`).subscribe((response: any) => {
        resolve(response);
      }, reject)
    })
  }


  getUserPreviousIll(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}/getuprevill/${id}`).subscribe((response: any) => {
        resolve(response);
      }, reject)
    })
  }

  getSymptom(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}/getsymptom/${id}`).subscribe((response: any) => {
        resolve(response);
      }, reject)
    })
  }

  // get char info

  getCharInfo() {
    return new Promise((resolve, reject) => {
      this.http.get(`${baseUrl}/chartinfo`).subscribe((response: any) => {
        resolve(response);
      }, reject)
    })
  }

}
