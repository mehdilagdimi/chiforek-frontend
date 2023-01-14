import { ISite } from 'src/app/interfaces/ICity';
import { ReservationService } from './../../services/reservation/reservation.service';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/reservation/site.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm!:FormGroup;
  departMinDate!:any;
  departureSites:ISite[] = [];
  arrivalSites:ISite[] = [];
  departureHours:any[] = [];
  arrivalHours:any[] = [];
  departureMeetingPoints:any[] = [];
  arrivalMeetingPoints:any[] = [];
  selectedSite!:string;
  isLoading:boolean = false;
  isSuccess!:boolean;
  showDepartHour:boolean = false;
  showArriveHour:boolean = false;

  selectUndefinedOptionValue:any;

  constructor(private reservationService:ReservationService, private siteService:SiteService, private router:Router) {
    // get sites
    this.siteService.getSites().subscribe(
      response => {
                 this.departureSites = response.data.data;
                 this.arrivalSites = response.data.data;
      });


  }

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      departureSite : new FormControl(null, [
        Validators.required,
        ],
      ),
      departureMeetingPoint: new FormControl(null, [
        Validators.required
      ]
      ),
      arrivalMeetingPoint: new FormControl(null,[
        Validators.required,
        ],),
      arrivalSite: new FormControl(null,[
        Validators.required,
        ],),
      departureHour: new FormControl(null,[
        Validators.required
        ],),
      departureDate: new FormControl(null,[
        Validators.required
        ],),
      arrivalHour: new FormControl(null,[
        Validators.required
        ],),
      arrivalDate: new FormControl(null,[
        Validators.required
        ],),
      // departureFlightNumber: new FormControl(null,[
      //   Validators.required
      //   ],),
      // arrivalFlightNumber: new FormControl(null,[
      //   Validators.required
      //   ],),
    })

    this.departMinDate = new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
    console.log(" date ", this.departMinDate)

  }

  onDateOrSiteChange(){
    console.log(" form ", this.reservationForm)
    if(!this.departureSite?.value || !this.departureDate?.value){
       return;
    }
    this.showDepartHour = true;
    this.showArriveHour = true;
    let i = 0, start = 6;
    let intervals = [0, 15, 30, 45];
    let hour = start;
    while(hour <= 24){
      if(hour <= 9) this.departureHours.push( i == 0 ? `0${hour}:${intervals[i]}0` : `0${hour}:${intervals[i]}`);
      else this.departureHours.push( i == 0 ? `${hour}:${intervals[i]}0` : `${hour}:${intervals[i]}`);

      if(i == intervals.length - 1) {
          hour++;
          i = 0;
      } else i++;
    }
    this.arrivalHours = this.departureHours;

  }


  onSubmit(event:any) {
    console.log(" form ", this.reservationForm)

    this.isLoading = true;
    this.reservationService.saveReservation(this.reservationForm.value).subscribe(
      {
        next: (resp:any) => {
          console.log("data ", resp );
          if(resp.status == 201){
            this.onSuccess();
          }
        },
        error: err => {
          this.onError()
        }
      }).add(() => {
        this.isLoading = false;
      });
  }

  onSuccess(){
    this.isSuccess = true;
  }

  onError(){
    this.isSuccess = false;
  }



  get departureSite (){ return this.reservationForm.get('departureSite')};
  get arrivalSite (){ return this.reservationForm.get('arrivalSite')};
  get departureMeetingPoint (){ return this.reservationForm.get('departureMeetingPoint')};
  get arrivalMeetingPoint (){ return this.reservationForm.get('arrivalMeetingPoint')};
  get departureDate (){ return this.reservationForm.get('departureDate')};
  get departureHour (){ return this.reservationForm.get('departureHour')};
  get arrivalDate (){ return this.reservationForm.get('arrivalDate')};
  get arrivalHour (){ return this.reservationForm.get('arrivalHour')};
  get departureFlightNumber (){ return this.reservationForm.get('departureFlightNumber')};
  get arrivalFlightNumber (){ return this.reservationForm.get('arrivalFlightNumber')};
}