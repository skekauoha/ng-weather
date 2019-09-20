import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ForecastService } from "../forecast.service";
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: "search-forecast",
  template: `
    <input placeholder="Search by city" type="text" #searchInput />
  `,
  styleUrls: ["./search-forecast.component.scss"]
})
export class SearchForecastComponent implements OnInit {
  @ViewChild("searchInput") location: ElementRef;
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
