import { ReservationService } from './../../services/reservation/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { reservationRequest } from 'src/app/interfaces/reservationRequest';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.css']
})
export class ReservationSummaryComponent implements OnInit {
  reservationForm!:reservationRequest;
  departDate:any = "Date";
  arrivalDate:any = "Date";
  departMeetingPoint:any = "Meeting Point";
  arrivalMeetingPoint:any = "Meeting Point";
  departSite:any = "Site";
  arrivalSite:any = "Site";
  price:any = "...";

  constructor(private reservService:ReservationService) {
    this.reservService.getReservFormSubAsObs().subscribe(val => {
      if(val){
        this.reservationForm = val as reservationRequest;
        // const {departureDate, ...rest} = this.reservationForm.value;
        // console.log("date of depart " + this.reservationForm.departureDate)
        this.departDate = this.reservationForm.departureDate || "Date" ;
        this.arrivalDate = this.reservationForm.arrivalDate || "Date";
        this.departMeetingPoint = this.reservationForm.departureMeetingPoint || "Meeting Point";
        this.arrivalMeetingPoint = this.reservationForm.arrivalMeetingPoint || "Meeting Point";
        this.departSite = this.reservationForm.departureSite || "Site";
        this.arrivalSite = this.reservationForm.arrivalSite || "Site";
      }
    })

    this.reservService.getPriceSubAsObs().subscribe(val => {
      this.price = val;
    })

   }

  ngOnInit(): void {


  }


}
