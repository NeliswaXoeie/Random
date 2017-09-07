import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
       cars:string[];

  constructor() {
    this.cars=['Porsche','Nissan','BMW','Audi','Dodge','Lexus','Mitsubishi','Toyota'];
  }
  

  ngOnInit() {
  }

}
