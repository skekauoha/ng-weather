import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ForecastService } from "../forecast.service";
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: "search-forecast",
  template: `
    <mat-form-field>
      <input matInput placeholder="Search by city" type="text" #searchInput />
    </mat-form-field>
  `,
  styleUrls: ["./search-forecast.component.scss"]
})
export class SearchForecastComponent implements OnInit {
  @ViewChild("searchInput", { static: true }) location: ElementRef;
  location$: Observable<KeyboardEvent>;

  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    this.location$ = fromEvent(this.location.nativeElement, "keyup");
    this.onSearch(this.location$);
  }

  onSearch(location$: Observable<KeyboardEvent>) {
    this.forecastService.searchByLocation(location$);
  }
}
