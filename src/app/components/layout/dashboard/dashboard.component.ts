import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() data: Array<Object> = []
  @Input() elementPerPage: number = 2
  currentPage: number = 1
  totalOfPages: number = 1


  readyData:Array<Array<string>> = []
  keys:Array<string> = []

  constructor() { }

  ngOnInit(): void {
    this.setupKeys()
    this.setupValues()
    this.totalOfPages = this.readyData.length / this.elementPerPage
    console.log(this.readyData, this.totalOfPages)
  }

  private setupKeys(): void{
    this.keys = Object.keys(this.data[0])
  }

  private setupValues(): void{
    this.data.forEach((object) => {
      let values = Object.values(object)
      this.readyData.push(values)
    })
  }

  getPage(pageNumber: number): Array<Array<string>>{
    let offset = (pageNumber-1) * this.elementPerPage
    let max = offset + this.elementPerPage
    return this.readyData.slice(offset, max)
  }

  setCurrentPage(number: number): void {
    this.currentPage = number
  }

}
