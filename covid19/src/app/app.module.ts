import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
// import {} from '';

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
// import { HelpLinksComponent } from './help-links/help-links.component';
// import { FaqComponent } from './faq/faq.component';
import { ThousandSufixPipe } from './thousand-sufix.pipe';
import { FilterPipe } from './filter.pipe';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    // HelpLinksComponent,
    // FaqComponent,
    ThousandSufixPipe,
    FilterPipe,
    routingComponents
    // DashboardComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,

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
