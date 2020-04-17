import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from 'src/app/api-service/api.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  fetchCountry = [];
  searchText:string = '';
  resetInterval;
  constructor(private myService:ApiService) { }

  ngOnInit(): void {
    this.fetchData();
    this.resetInterval  = setInterval(() => {
      this.fetchData();
    },15000);
  }


  private fetchData(){
    this.myService.getData('Countries').subscribe((data:any) =>{
      this.fetchCountry = data;
    });
  }

  ngOnDestroy(){
    clearInterval(this.resetInterval);
  }



}
