import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reservation-quote',
  templateUrl: './reservation-quote.component.html',
  styleUrls: ['./reservation-quote.component.css']
})
export class ReservationQuoteComponent implements OnInit {
  @Output() public showDetailedFormEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  showDetailedForm(){
    this.showDetailedFormEmitter.emit(true);
  }

}
