import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  data: Array<Object> = [
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha1"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha2"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha3"
    },
    {
      name: "bla bla",
      description: "tza tza",
      profile: "k3a k3a",
      taha: "taha4"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
