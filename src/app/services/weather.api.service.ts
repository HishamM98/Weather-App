import { environment as env } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(env.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(env.XRapidAPIHostName, env.XRapidAPIHost)
        .set(env.XRapidAPIKeyName, env.XRapidAPIKey),
      params: new HttpParams().set('city', cityName),
    });
  }
}
