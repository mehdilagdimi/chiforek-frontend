import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() data: Array<Object> = []

  readyData:Array<Array<string>> = []
  keys:Array<string> = []

  constructor() { }

  ngOnInit(): void {
    this.setupKeys()
    this.setupValues()
    console.log(this.readyData)
  }

  setupKeys(): void{
    this.keys = Object.keys(this.data[0])
  }

  setupValues(): void{
    this.data.forEach((object) => {
      let values = Object.values(object)
      this.readyData.push(values)
    })
  }
}
