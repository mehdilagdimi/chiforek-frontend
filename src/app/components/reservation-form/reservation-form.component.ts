import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm!:FormGroup;
  departureSites:any[] = [];
  departureHours:any[] = [];
  arrivalSites:any[] = [];
  arrivalHours:any[] = [];
  departureMeetingPoints:any[] = [];
  arrivalMeetingPoints:any[] = [];

  selectedSite!:string;

  constructor() {
    // this.offerService.getAddOfferFields().subscribe(
    //   response => {
    //              this.offerTypes = response.data.offerType;
    //              this.educations = response.data.education;
    //              this.profiles = response.data.profile;
    //   });
    this.selectedSite = "hello";
    this.reservationForm = new FormGroup({
      departureSite : new FormControl('test',[
        Validators.required,
        ],
      ),
      departureMeetingPoint: new FormControl('', [
        Validators.required
      ]
      ),
      arrivalMeetingPoint: new FormControl("CDI",[
        Validators.required,
        ],),
      arrivalSite: new FormControl([
        Validators.required,
        ],),
      departureHour: new FormControl('HOUR',[
        Validators.required
        ],),
      departureDate: new FormControl('',[
        Validators.required
        ],),
      arrivalHour: new FormControl('HOUR',[
        Validators.required
        ],),
      arrivalDate: new FormControl('',[
        Validators.required
        ],),
      departureFlightNumber: new FormControl('',[
        Validators.required
        ],),
      arrivalFlightNumber: new FormControl('',[
        Validators.required
        ],),
    })

    // this.reservationForm.departureDate.setValue(formatDate(new Date(),'yyyy-MM-dd','en'));
  }

  ngOnInit(): void {


  }

  onSubmit(event:any) {

  //   this.offerService.saveOffer(this.addOfferForm.value).subscribe(
  //     {
  //       next: resp => {
  //         console.log("data ", resp );
  //         if(resp.status == 201){

  //         }
  //       },
  //       error: err => {
  //         this.isSuccess = false
  //         this.onError()
  //       }
  //     }).add(() => {
  //       this.displayCompletionAnimation();
  //     });
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
