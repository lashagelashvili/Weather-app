import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  private url = 'http://api.weatherapi.com/v1/current.json?key=bb559d3852304c81af7180800212011&q=';
  weatherData: Weather;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData(city: string): Observable<Weather> {
    return this.http.get<Weather>(this.url + city);
  }

  onClick(city: string) {
    this.getData(city).subscribe((data: Weather) => {
      this.weatherData = data;
    })
  }
}
