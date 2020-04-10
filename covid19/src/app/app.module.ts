import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { StatisticsComponent } from './main-section/statistics/statistics.component';
import { StatsComponent } from './main-section/statistics/stats/stats.component';
import { CountryAndMapComponent } from './main-section/country-and-map/country-and-map.component';
import { CountriesComponent } from './main-section/country-and-map/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    StatisticsComponent,
    StatsComponent,
    CountryAndMapComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
