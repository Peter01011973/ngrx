import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Car } from './car-model';
import { LoadCars, Addcar, DeleteCar, BuyCar } from './redux/cars.action';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  static BASE_URL = `${environment.api}`;

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  public preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(CarsService.BASE_URL);
  }

  public loadCars(): void {
    this.preloadCars()
    .subscribe(cars => {this.store.dispatch(LoadCars(cars))});
  }

  public addCar(car: Car): void {
    this.http.post<Car>(CarsService.BASE_URL, car)
    .subscribe(car => this.store.dispatch(Addcar(car)));
  }

  public deleteCar(car: Car): void {   
    this.http.delete<Car>(CarsService.BASE_URL+'/'+`${car.id}`)
    .subscribe(()=>this.store.dispatch(DeleteCar(car)));
  }

  public buyCar(car: Car): void {   
    this.http.patch<Car>(CarsService.BASE_URL+'/'+`${car.id}`,car)
    .subscribe(()=>this.store.dispatch(BuyCar(car)));
  }
}
