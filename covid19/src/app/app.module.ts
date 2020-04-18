import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartModule } from 'angular-highcharts';

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
import { RecoveryAndTweetsComponent } from './main-section/recovery-and-tweets/recovery-and-tweets.component';
import { RecoveryComponent } from './main-section/recovery-and-tweets/recovery/recovery.component';
import { TweetsComponent } from './main-section/recovery-and-tweets/tweets/tweets.component';
import { ThousandSufixPipe } from './thousand-sufix.pipe';
import { FilterPipe } from './filter.pipe';
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
    UpdatesComponent,
    RecoveryAndTweetsComponent,
    RecoveryComponent,
    TweetsComponent,
    ThousandSufixPipe,
    FilterPipe,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    ChartModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
