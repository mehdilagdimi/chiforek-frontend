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

  constructor(private reservService:ReservationService) {
    this.reservService.getPriceSubAsObs().subscribe(val => {
      this.price = val;
    });
  }

  ngOnInit(): void {
  }


  showDetailedForm(){
    this.showDetailedFormEmitter.emit(true);
  }

}
