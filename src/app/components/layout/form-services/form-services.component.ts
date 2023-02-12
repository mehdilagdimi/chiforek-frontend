import { ReservationService } from 'src/app/services/reservation/reservation.service';
import { Component, OnInit } from '@angular/core';
import { ParkService } from 'src/app/interfaces/ParkService';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
  styleUrls: ['./form-services.component.css']
})
export class FormServicesComponent implements OnInit {
  parkServices:ParkService[] = []
  selectedParkServices:ParkService[] = []
  // selectedParkServices:Number[] = []
  constructor(private reservationService:ReservationService) {
    this.parkServices = [
      {id: 1, name:"Remplissage de lave glace", price: 5, image:"remplissage.png"},
      {id: 2, name:"Lavage extérieur", price: 20, image:"lavageexterne.png"},
      {id: 3, name:"Lavage complet", price: 35, image:"lavagecomplet.png"},
      {id: 4, name:"Recharge de véhicule électrique (sur demande)", price: undefined, image:"recharge.png"}
    ]
  }

  ngOnInit(): void {
  }

  onServiceAdd(service:ParkService){
    console.log(" id ", service.id)
    const selectedService:ParkService | undefined = this.parkServices.find(elm => elm == service);
    if(selectedService) {
      if(!selectedService!.selected){
        selectedService!.selected = true;
      }
      else selectedService!.selected = !selectedService!.selected;
    }

    this.selectedParkServices = this.parkServices.filter(elm => elm.selected === true);

    this.reservationService.selectedServicesSubj.next(this.selectedParkServices);
  }
}
