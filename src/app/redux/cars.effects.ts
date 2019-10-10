import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Addcar } from './cars.action';
import { Observable } from 'rxjs';
import { Car } from '../car-model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsEffect {
    constructor(private action$: Actions, private carsService: CarsService) {}

    @Effect() loadCars = this.action$
    .pipe(ofType('ADD_CAR'), 
    switchMap((action)=>{console.log('I am here'); return this.carsService.preloadCars()}),
    mergeMap((cars: Car[]) => { return [{ type: 'LOAD_CARS', payload: cars }]}))
    
    
}
