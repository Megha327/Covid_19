import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor( private myService:ApiService) { }
  summaryApiGlobalData;
  countriesData:[];
  countriesMapData;
  recoveredData;
  isMapRendered = false;
  imagePath = "../../../assets/images/statistics/";
  stats = [
    {title:'Total Cases', count:0, src:`${this.imagePath}Graph.svg`, cases:false},
    {title:"Recovered", count:0, src:`${this.imagePath}Graph2.svg`, cases:true},
    {title:"Active Cases", count:0, src:`${this.imagePath}Graph3.svg`, cases:false},
    {title:"Total Deaths", count:0, src:`${this.imagePath}Graph4.svg`, cases:false}
  ];
  count = 1;
  ngOnInit(): void {

    this.fetchData();
    // setTimeout(()=> {
    //   this.count++;
    //   console.log("refreshinng >>> " + this.count);
    //   // window.location.reload();
    //   // this.fetchData();
    // },60000);
  }


  private fetchData(){
    this.summaryApiGlobalData = this.myService.getData();
    
    this.summaryApiGlobalData.subscribe((data:any) =>{
      console.log("data", data)
      this.stats[0]["count"] = data["Global"]["TotalConfirmed"];
      this.stats[1]["count"] = data["Global"]["TotalRecovered"];
      this.stats[2]["count"] = data["Global"]["TotalConfirmed"] - data["Global"]["TotalRecovered"] - data["Global"]["TotalDeaths"];
      this.stats[3]["count"] = data["Global"]["TotalDeaths"];
      this.countriesData = data["Countries"];
      this.recoveredData = {
        "confirmed": this.stats[0]["count"], 
        "recovered": this.stats[1]["count"],
        "recoveredRatio": (this.stats[1]["count"] * 100)/ this.stats[0]["count"]
      }
      this.isMapRendered = false;
    });
    // this.myService.dateWiseData()
  }
}
