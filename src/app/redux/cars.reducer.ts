// import { CAR_ACTION, CarAction } from './cars.action';

// const initialState = {cars: []}

// export function Carsreducer(state = initialState, action: CarAction) {
//     switch (action.type) {
//         case CAR_ACTION.ADD_CAR: return  {...state, cars: [...state.cars,action.payload]}  
//         case CAR_ACTION.DELETE_CAR: return {...state, cars: state.cars.filter(car => car !== action.payload)}    
//         case CAR_ACTION.BUY_CAR:
//             state.cars[state.cars.findIndex(car => car === action.payload)].isSold = true;
//             // return {...state, cars: state.cars }  
//             return state;  
//         case CAR_ACTION.LOAD_CARS: return {...state, cars: action.payload} 
//         default: return state;
//     }

// }

import { Addcar, DeleteCar, BuyCar, LoadCars } from './cars.action';
import { createReducer, on } from '@ngrx/store';

const initialState = {cars: []}

export const Carsreducer = createReducer(initialState,
    on(Addcar, (state, action) => ({...state, cars: [...state.cars,action.payload]})),
    on(DeleteCar, (state, action) => ({...state, cars: state.cars.filter(car => car !== action.payload)})),
    on(BuyCar, (state, action) => {
        // const index: number = state.cars.findIndex(car => car === action.payload);
        // state.cars[index].isSold = true;
        return state;
    }),
    on(LoadCars, (state, action) => ({...state, cars: action.payload})),
);

// const store = createStore(
//     Carsreducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
