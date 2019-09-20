import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "forecast-dashboard",
  template: `
    <div>Dashboard: {{ forecast.name }}</div>
    <div>Temp: {{ forecast.main.temp }}</div>
  `,
  styleUrls: ["./forecast-dashboard.component.scss"]
})
export class ForecastDashboardComponent implements OnInit {
  @Input() forecast;
  constructor() {}

  ngOnInit() {}
}
