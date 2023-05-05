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

}
