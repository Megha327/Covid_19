import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  imagePath = "../../../assets/images/statistics/"
  fetchStats = [{title:'Total Cases', count:0, src:`${this.imagePath}Graph.svg`, cases:false},
  {title:"Recovered", count:0, src:`${this.imagePath}Graph2.svg`, cases:true},
  {title:"Active Cases", count:0, src:`${this.imagePath}Graph3.svg`, cases:false},
  {title:"Total Deaths", count:0, src:`${this.imagePath}Graph4.svg`, cases:false}];

  resetInterval;
  constructor(private myService:ApiService) {
   }

  ngOnInit(){
    this.fetchData();
   
  }

  private fetchData(){
    this.myService.getData('Global').subscribe((data:any) =>{
      // console.log(data);
      this.fetchStats[0]["count"] = data["TotalConfirmed"];
      this.fetchStats[1]["count"] = data["TotalRecovered"];
      this.fetchStats[2]["count"] = data["TotalConfirmed"] - data["TotalRecovered"] - data["TotalDeaths"];
      this.fetchStats[3]["count"] = data["TotalDeaths"]; 
      // console.log(this.fetchStats);
    });
  }




}
