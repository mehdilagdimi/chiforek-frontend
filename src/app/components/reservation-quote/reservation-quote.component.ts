import { FormGroup } from '@angular/forms';
import { reservationRequest } from 'src/app/interfaces/reservationRequest';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-quote',
  templateUrl: './reservation-quote.component.html',
  styleUrls: ['./reservation-quote.component.css']
})
export class ReservationQuoteComponent implements OnInit {
  @Output() public showDetailedFormEmitter = new EventEmitter();
  price!:Number;
  private reservForm!:reservationRequest;
  reserDates:string[] = []

  constructor(private reservService:ReservationService) {
    this.reservService.getPriceSubAsObs().subscribe(val => {
      this.price = val;
    });
  }

  ngOnInit(): void {
    this.reservService.getReservFormSubAsObs().subscribe(val => {
      console.log(" form state isnide first ", val)
      if(val instanceof FormGroup){
        console.log(" inside form gorup")
        var frmGrp = val as FormGroup;
        this.reservForm = frmGrp.value;
      } else {
        console.log(" inside reserv req")
        this.reservForm = val as reservationRequest
      }
      console.log(" form state isnide quote ", this.reservForm)
      this.reserDates = [this.reservForm.arrivalDate!, this.reservForm.departureDate!];

    })
  }


  showDetailedForm(){
    this.showDetailedFormEmitter.emit(true);
  }

}
