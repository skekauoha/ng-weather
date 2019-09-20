import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentForecastComponent } from './current-forecast/current-forecast.component';
import { SearchForecastComponent } from './search-forecast/search-forecast.component';
import { ForecastDashboardComponent } from './forecast-dashboard/forecast-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentForecastComponent,
    SearchForecastComponent,
    ForecastDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
