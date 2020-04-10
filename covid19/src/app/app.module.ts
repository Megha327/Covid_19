import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { StatisticsComponent } from './main-section/statistics/statistics.component';
import { StatsComponent } from './main-section/statistics/stats/stats.component';
import { CountryAndMapComponent } from './main-section/country-and-map/country-and-map.component';
import { CountriesComponent } from './main-section/country-and-map/countries/countries.component';
import { MapComponent } from './main-section/country-and-map/map/map.component';
import { SpreadAndUpdatesComponent } from './main-section/spread-and-updates/spread-and-updates.component';
import { SpreadComponent } from './main-section/spread-and-updates/spread/spread.component';
import { UpdatesComponent } from './main-section/spread-and-updates/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    StatisticsComponent,
    StatsComponent,
    CountryAndMapComponent,
    CountriesComponent,
    MapComponent,
    SpreadAndUpdatesComponent,
    SpreadComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
