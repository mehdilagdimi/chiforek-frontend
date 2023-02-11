import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showForm:Boolean = true;
  showTransition:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleShowForm(){
     this.showForm = !this.showForm;
  }
}
