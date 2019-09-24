import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatButtonToggleModule,
  MatSlideToggleModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { CurrentForecastComponent } from "./current-forecast/current-forecast.component";
import { SearchForecastComponent } from "./search-forecast/search-forecast.component";
import { ForecastDashboardComponent } from "./forecast-dashboard/forecast-dashboard.component";
import { UnitToggleComponent } from "./unit-toggle/unit-toggle.component";

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatButtonToggleModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentForecastComponent,
    SearchForecastComponent,
    ForecastDashboardComponent,
    UnitToggleComponent
  ],
  imports: [
    ...modules,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
