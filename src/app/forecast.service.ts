import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import {
  tap,
  map,
  distinctUntilChanged,
  debounce,
  debounceTime,
  throttleTime,
  switchMap
} from "rxjs/operators";
import { API_KEYS } from "./forecast.config";
import { convertLocationName } from "./utils/utils";
import { Location } from "./models/location.model";

@Injectable({
  providedIn: "root"
})
export class ForecastService {
  forecastSubject = new BehaviorSubject([]);
  forecast$: Observable<any> = this.forecastSubject.asObservable();

  constructor(private http: HttpClient) {}

  retrieveForecast(location: string): Observable<any> {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEYS.SECRET_KEY}&units=imperial`;
    const forecastRequest$ = this.http.get(requestUrl);

    forecastRequest$
      .pipe(tap(console.log))
      .subscribe(forecast => this.forecastSubject.next(forecast));

    return this.forecast$;
  }

  selectCurrentForecast(location: Location): Observable<any> {
    const locationToSearch = convertLocationName(location);

    return this.retrieveForecast(locationToSearch);
  }

  searchByLocation(location$: Observable<any>): void {
    location$
      .pipe(
        map(event => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(location => this.retrieveForecast(location))
      )
      .subscribe();
  }
}
