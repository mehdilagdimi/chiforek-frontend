import { ISite } from 'src/app/interfaces/ISite';
import { ReservationService } from './../../services/reservation/reservation.service';
import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/reservation/site.service';
import { reservationRequest } from 'src/app/interfaces/reservationRequest';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ParkService } from 'src/app/interfaces/ParkService';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm!:FormGroup;
  completedReservation!: {
    form:reservationRequest,
    services: ParkService[]
  };

  departMinDate!:any;
  departureSites:ISite[] = [];
  arrivalSites:ISite[] = [];
  departureHours:any[] = [];
  arrivalHours:any[] = [];
  departureMeetingPoints:any[] = [];
  arrivalMeetingPoints:any[] = [];
  selectedSite!:string;
  selectedServices:ParkService[] = [];
  isAuthenticated:boolean = false;
  isLoading:boolean = false;
  isSuccess!:boolean;
  showDepartHour:boolean = false;
  showArriveHour:boolean = false;
  showQuote:boolean = false;
  showDetailedForm:boolean = false;
  @Output() public showHourEvent = new EventEmitter();
  @Output() public toggleShowDetailedForm = new EventEmitter();


  selectUndefinedOptionValue:any;

  constructor(private reservationService:ReservationService, private authService:AuthService, private siteService:SiteService, private router:Router) {

    this.authService.getAuthState().subscribe((newState) => {
      this.isAuthenticated = newState
    })

    // get sites
    this.siteService.getSites().subscribe(
      response => {
                 this.departureSites = response.data.data;
                 this.reservationService.updateDepartSitesState(this.departureSites);
                 this.arrivalSites = response.data.data;
      });

      this.reservationForm = new FormGroup({
        departureSite : new FormControl(null, [
          Validators.required,
          ],
        ),
        departureMeetingPoint: new FormControl(null, [
          // Validators.required
        ]
        ),
        arrivalMeetingPoint: new FormControl(null,[
          // Validators.required,
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
        departureFlightNumber: new FormControl(null,[
          ],),
        arrivalFlightNumber: new FormControl(null,[
          ],),
      })

      this.departMinDate = new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
      // console.log(" date ", this.departMinDate)
  }

  ngOnInit(): void {
    this.reservationForm.valueChanges.subscribe(newFormState => {
      console.log(" form state ", newFormState)
      this.reservationService.reservFormSub.next(newFormState);
    })

    this.reservationService.getSelectedServicesSubjAsObs().subscribe((val) => {
        this.selectedServices = val as ParkService[];
    })
  }

  onShowDetailedForm(event:any){
    this.showQuote = false;
    this.showDetailedForm = true;
    this.toggleShowDetailedForm.emit(event)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onDateOrSiteChange(){
    // console.log(" form ", this.reservationForm)
    if(!this.departureSite?.value || !this.departureDate?.value){
       return;
    }
    this.showDepartHour = true;
    this.showArriveHour = true;
    this.showHourEvent.emit(true);

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


  onFormSubmit(event:any){
    //echo values of reserv
    // this.reservationService.reservFormSub.next(this.reservationForm);
    if(this.showDetailedForm){
      this.onSubmit(event);
      // console.log(" after submission ", event)
    } else {
      this.showQuote = true;
    }
  }

  onSubmit(event:any) {
    // console.log(" form ", this.reservationForm)
    this.completedReservation = {
       form: this.reservationForm.value,
       services: this.selectedServices
    }

    this.isLoading = true;
    this.reservationService.saveReservation(this.completedReservation).subscribe(
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
    this.router.navigateByUrl('/home').then(() => {
      window.location.reload();
    })
  }

  onError(){
    this.isSuccess = false;
    alert("Mercie de sélectionner un point de ")
  }


  scrollToElement($element:any){
    $element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
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
