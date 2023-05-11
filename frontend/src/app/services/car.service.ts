import { Injectable } from '@angular/core';
import { Car } from '../shared/models/Car';
import { cars } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

getAll():Car[]{
return cars;
}

getAllCarsBySearchTerm(searchTerm:string){
  return this.getAll().filter(car=>car.model.toLowerCase().includes(searchTerm.toLowerCase()));
}

getAllCarsByFuelType(fuelType:string){
  return this.getAll().filter(car=>car.paliwo===fuelType);
}

getAllCarsByGearboxType(gearboxType:string){
  return this.getAll().filter(car=>car.skrzynia===gearboxType);
}

getAllCarsByFuelAndGearboxType(fuelType: string, gearboxType: string) {
  return this.getAll()
    .filter(car => car.paliwo === fuelType)
    .filter(car => gearboxType === 'wszystkie' || car.skrzynia === gearboxType);
}


getAllCarsBySearchTermAndFuelAndGearboxType(searchTerm: string, fuelType: string, gearboxType: string): Car[] {
  return this.getAll().filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()) && car.paliwo === fuelType && car.skrzynia === gearboxType);
}

getAllCarsBySearchTermAndFuelType(searchTerm: string, fuelType: string): Car[] {
  return this.getAll().filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()) && car.paliwo === fuelType);
}

getAllCarsBySearchTermAndGearboxType(searchTerm: string, gearboxType: string): Car[] {
  return this.getAll().filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()) && car.skrzynia === gearboxType);
}



}

