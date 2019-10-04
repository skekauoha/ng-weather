import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of, throwError } from "rxjs";
import {
  tap,
  map,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  catchError
} from "rxjs/operators";
import { API_KEYS } from "./forecast.config";
import { convertLocationName } from "./utils/utils";
import { Location } from "./models/location.model";

@Injectable({
  providedIn: "root"
})
export class ForecastService {
  forecast$ = new BehaviorSubject([]);
  getForecast$: Observable<any> = this.forecast$.asObservable();
  forecastError$: Observable<any>;
  isMetric = false;

  constructor(private http: HttpClient) {}

  retrieveForecast(
    location: string,
    isMetric: boolean = false
  ): Observable<any> {
    this.isMetric = isMetric;
    const unitOfMeasurement = isMetric ? "metric" : "imperial";
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEYS.SECRET_KEY}&units=${unitOfMeasurement}`;
    const forecastRequest$ = this.http.get(requestUrl);

    forecastRequest$
      .pipe(catchError(err => throwError({ err: err.error.message })))
      .subscribe(
        (forecast: any) => this.forecast$.next(forecast),
        err => this.forecast$.next(err)
      );

    return this.getForecast$;
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
