import { WeatherApiService } from './services/weather.api.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cityName: string = 'Jeddah';
  weather?: WeatherData;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (result) => {
        this.weather = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  findCityWeather(cityForm: NgForm) {
    this.cityName = cityForm.value.city;

    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (result) => {
        this.weather = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
