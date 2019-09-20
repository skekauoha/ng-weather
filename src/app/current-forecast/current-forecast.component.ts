import { Component, OnInit } from "@angular/core";
import { ForecastService } from "../forecast.service";
import { Observable } from "rxjs";
import { Location } from "../models/location.model";
import { Forecast } from "../models/forecast.model";

@Component({
  selector: "app-current-forecast",
  template: `
    <div *ngIf="forecast$ | async as forecast; else noForecast">
      {{ forecast.name }}
    </div>
    <ng-template #noForecast>Forecast not available</ng-template>

    <search-forecast></search-forecast>
    <forecast-dashboard [forecast]="forecast$ | async"></forecast-dashboard>
  `,
  styleUrls: ["./current-forecast.component.scss"]
})
export class CurrentForecastComponent implements OnInit {
  constructor(private forecastService: ForecastService) {}

  forecast$: Observable<Forecast>;
  defaultLocation: Location = {
    city: "Salt Lake City",
    country: "USA"
  };

  ngOnInit() {
    this.forecast$ = this.forecastService.selectCurrentForecast(
      this.defaultLocation
    );
  }
}
