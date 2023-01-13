import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/config/api.constants';
import { Response } from 'src/app/interfaces/response';
import { Observable } from 'rxjs/internal/Observable';
import { ISite } from 'src/app/interfaces/ICity';


@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private headers!:HttpHeaders;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getSites() : Observable<Response<ISite[]>>{
    return this.http
    .get<Response<ISite[]>>(
      `${API_URL}/sites`, {headers : this.headers}
      );
    }

  // saveSite(offer: siteRequest) : Observable<Response<Site>>{
  //   return this.http
  //   .post<Response<Site>>(
  //           `${API_URL}/offers/add`, offer, {headers : this.headers}
  //           );
  // }
}
