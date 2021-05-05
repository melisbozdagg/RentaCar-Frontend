import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  car : car[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
this.getCar();
  }
  getCar(){
    this.carService.getCar().subscribe(response =>{
      this.car=response.data
    })
  }

}
