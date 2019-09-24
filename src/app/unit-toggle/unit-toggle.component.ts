import { Component, OnInit } from "@angular/core";
import { ForecastService } from "../forecast.service";
import { Forecast } from "../models/forecast.model";

@Component({
  selector: "unit-toggle",
  template: `
    <mat-slide-toggle (change)="onToggleMetric($event)"
      >Metric Units</mat-slide-toggle
    >
  `,
  styleUrls: ["./unit-toggle.component.scss"]
})
export class UnitToggleComponent implements OnInit {
  constructor(private forecastService: ForecastService) {}

  ngOnInit() {}

  onToggleMetric(isMetric): void {
    const currentForecast: any = this.forecastService.forecastSubject.getValue();
    const { name } = currentForecast;

    this.forecastService.retrieveForecast(name, isMetric.checked);
  }
}
