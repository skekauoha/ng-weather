import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "forecast-dashboard",
  template: `
    <div>Dashboard</div>
    <div *ngIf="!forecast.err; else error">
      <div>City: {{ forecast.name }}</div>
      <div *ngIf="forecast.main">Temp: {{ forecast.main.temp }}</div>
    </div>
    <ng-template #error>{{ forecast.err }}</ng-template>
    <unit-toggle></unit-toggle>
  `,
  styleUrls: ["./forecast-dashboard.component.scss"]
})
export class ForecastDashboardComponent implements OnInit {
  @Input() forecast;
  constructor() {}

  ngOnInit() {}
}
