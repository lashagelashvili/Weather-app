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
  bgImage: string = 'bg-snow';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData(city: string): Observable<Weather> {
    return this.http.get<Weather>(this.url + city);
  }

  onClick(city: string) {
    this.getData(city).subscribe((data: Weather) => {
      this.weatherData = data;
      console.log(data.current.condition.code)


      // if (data.current.condition.code === 1009) {
      //   this.bgImage === 'bg-sun';
      // } else if (data.current.condition.code === (1000)) {
      //   this.bgImage === 'bg-sun';
      // } else if (data.current.condition.code === ) {
      //   this.bgImage === 'bg-snow';
      // } else {
      //   this.bgImage === 'bg-rain';
      // }
    })
  }
}

// code === 1003 || code === 1006 || code === 1009 || code === 1030

// (1066 || 1114 || 1117 || 1168 || 1171 || 1210 || 1213 || 1216 || 1219 || 1222 || 1225 || 1237)