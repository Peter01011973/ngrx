import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Carsreducer } from './redux/cars.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffect } from './redux/cars.effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({carpage: Carsreducer}),
    // StoreModule.forRoot({carpage: Carsreducer} {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }),
    EffectsModule.forRoot([CarsEffect]),
    HttpClientModule,
    RouterModule.forRoot([{path: '', component: AppComponent}]),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
