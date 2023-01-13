import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/interfaces/reservation';
import { reservationRequest } from 'src/app/interfaces/reservationRequest';
import { Response } from 'src/app/interfaces/response';
import { API_URL } from 'src/config/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private headers!:HttpHeaders;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

  saveReservation(reservation: reservationRequest) : Observable<Response<Reservation>>{
    console.log(" inside ", reservation)
    return this.http
    .post<Response<Reservation>>(
            `${API_URL}/reservations/add`, reservation, {headers : this.headers}
            );
  }


}
