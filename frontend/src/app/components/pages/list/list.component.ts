import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  cars: Car[] = [];
  fuelType: string = '';
  gearboxType: string = '';
  searchTerm: string = '';

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.searchTerm = params.searchTerm || '';
      this.updateCarsList();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchTerm && !changes.searchTerm.firstChange) {
      this.updateCarsList();
    }
  }



  updateCarsList(): void {
    if (this.fuelType && this.gearboxType) {
      this.cars = this.carService.getAllCarsBySearchTermAndFuelAndGearboxType(this.searchTerm, this.fuelType, this.gearboxType);
    } else if (this.fuelType) {
      this.cars = this.carService.getAllCarsBySearchTermAndFuelType(this.searchTerm, this.fuelType);
    } else if (this.gearboxType) {
      this.cars = this.carService.getAllCarsBySearchTermAndGearboxType(this.searchTerm, this.gearboxType);
    } else {
      this.cars = this.carService.getAllCarsBySearchTerm(this.searchTerm);
    }
  }
}
