import { ISite } from 'src/app/interfaces/ISite';
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
  private departSites = new BehaviorSubject([]);
  // private arrivalSites :ISite[] = [];
  private departMeetings= new BehaviorSubject([]);
  // private arrivalMeetings:any = [];

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


  setDepartSites(sites:any){
    this.departSites = sites;
  }

  getDepartSitesAsObs(){
    return this.departSites.asObservable();
  }

  getDepartMeetingsAsObs(){
    return this.departMeetings.asObservable();
  }

  updateDepartSitesState(val:any){
    this.departSites.next(val);
  }

  updateDepartMeetingsState(val:any){
    this.departMeetings.next(val);
  }
  // setArrivalSites(sites:any){
  //   this.arrivalSites = sites;
  // }
  setArrivalMeetings(meeting:any){
    this.departMeetings = meeting;
  }
  // setDepartMeetings(meeting:any){
  //   this.arrivalMeetings = meeting;
  // }

}
