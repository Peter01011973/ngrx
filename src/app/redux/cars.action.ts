// import { Action, createAction } from '@ngrx/store';
// import { Car } from '../car-model';

// export namespace CAR_ACTION {
//     export const ADD_CAR = 'ADD_CAR';
//     export const DELETE_CAR = 'DELETE_CAR';
//     export const BUY_CAR = 'BUY_CAR';
//     export const LOAD_CARS = 'LOAD_CARS';
// }


// export class Addcar implements Action {
//     readonly type = CAR_ACTION.ADD_CAR;
//     constructor(public payload: Car) {}
// }

// export class DeleteCar implements Action {
//     readonly type = CAR_ACTION.DELETE_CAR;
//     constructor(public payload: Car) {}
// }

// export class BuyCar implements Action {
//     readonly type = CAR_ACTION.BUY_CAR;
//     constructor(public payload: Car) {}
// }

// export class LoadCars implements Action {
//     readonly type = CAR_ACTION.LOAD_CARS;
//     constructor(public payload: Car[]) {}
// }

// export type CarAction = Addcar | DeleteCar | BuyCar | LoadCars;

import { createAction } from '@ngrx/store';
import { Car } from '../car-model';

export const Addcar = createAction('ADD_CAR',(payload: Car) => ({payload}));
export const DeleteCar = createAction('DELETE_CAR',(payload: Car) => ({payload}));
export const BuyCar = createAction('BUY_CAR',(payload: Car) => ({payload}));
export const LoadCars = createAction('LOAD_CARS',(payload: Car[]) => ({payload}));
