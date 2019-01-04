import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from './interfaces';
import { WeatherService } from '../weather/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  subscriptions : Subscription = new Subscription();
  constructor(private weatherService : WeatherService) {
    
  }

  ngOnInit() {
      this.subscriptions.add( this.weatherService.getCurrentWeather('Mahwah', 'US').subscribe(data =>{
        this.current = data;
      }))

  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
