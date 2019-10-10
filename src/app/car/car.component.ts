import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car-model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() public car: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  public onDelete(car: Car): void {
    this.carsService.deleteCar(car);
  }

  public onBuy(car: Car): void {
    car.isSold = !car.isSold;
    this.carsService.buyCar(car);
  }

}
