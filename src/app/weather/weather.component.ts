import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Api } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  private url = 'http://api.weatherapi.com/v1/current.json?key=bb559d3852304c81af7180800212011&q=';
  temperature: number = 0;
  city: string = '';
  date: string = '';
  cloud: number = 0;
  humidity: number = 0;
  wind: number = 0;
  weather: string = '';
  apiResult: any;
  iconUrl: string = '';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick(city: string) {
    this.http.get<Api>(this.url + city).subscribe(data => {
      this.apiResult = data;
      console.log(this.apiResult);

      this.temperature = this.apiResult.current.temp_c;
      this.city = this.apiResult.location.name;
      this.date = this.apiResult.location.localtime;

      this.humidity = this.apiResult.current.humidity;
      this.cloud = this.apiResult.current.cloud;
      this.wind = this.apiResult.current.wind_kph;

      this.weather = this.apiResult.current.condition.text;
      this.iconUrl = this.apiResult.current.condition.icon;
    });

  }
}
