import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from 'src/app/api-service/api.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  fetchCountry = [{countryName:'',
  countryCode:'',
  slug:'',
  newConfirmed:0,
  affacted:0,
  newDeaths:0,
  totalDeaths:0,
  newRecovered:0,
  recovered:0,
  date:''}];
  resetInterval;
  constructor(private myService:ApiService) { }

  ngOnInit(): void {
    this.fetchData();
    this.resetInterval  = setInterval(() => {
      this.fetchData();
    },15000);
  }


  private fetchData(){
    this.myService.getData().subscribe((data:any) =>{
      console.log(data[1]);
      this.fetchCountry = data[1];
      console.log(this.fetchCountry[0].countryName);
      console.log(data[1][0])
    });
  }

  ngOnDestroy(){
    clearInterval(this.resetInterval);
  }



}
