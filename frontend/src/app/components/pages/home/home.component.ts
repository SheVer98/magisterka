import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  cars:Car[]=[];
  constructor(private carService:CarService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.cars=this.carService.getAllCarsBySearchTerm(params.searchTerm);
    });
    this.cars=carService.getAll();
  }

  ngOnInit(): void {

  }
}
