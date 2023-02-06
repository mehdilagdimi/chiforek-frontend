import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/interfaces/reservation';
import { Response } from 'src/app/interfaces/response';
import { API_URL } from 'src/config/api.constants';
import { reservationRequest } from 'src/app/interfaces/reservationRequest';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private parkPrice = new BehaviorSubject(29);
  private headers!:HttpHeaders;

  reservFormSub = new BehaviorSubject({});


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


  getPriceSubAsObs(){
    return this.parkPrice.asObservable();
  }

  getReservFormSubAsObs(){
    return this.reservFormSub.asObservable();
  }

}
