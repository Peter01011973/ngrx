import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { Car } from '../car-model';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  public carsForm = this.fb.group({
    carName: ['', [Validators.required]],
    carModel: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    public datepipe: DatePipe, 
    private store: Store<AppState>, 
    private carsService: CarsService
  ) { }

  ngOnInit() {
  }

  public onAdd() {
    const car: Car = {
      name: this.carsForm.controls['carName'].value,
      model: this.carsForm.controls['carModel'].value,
      date: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
      isSold: false,
    }
    this.carsService.addCar(car);
  }

  public onLoad() {
    this.carsService.loadCars();
  }

}
