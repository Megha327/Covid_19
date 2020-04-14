import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
// import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  fetchStats = [{title:'Total Cases', count:0},
  {title:"Recovered", count:0},
  {title:"Active Cases", count:0},
  {title:"Total Deaths", count:0}];
  
  constructor(private myService:ApiService) { }

  ngOnInit(){
    this.myService.getData().subscribe((data:any) =>{
      console.log(data);
      this.fetchStats[0]["count"] = data[0]["TotalConfirmed"];
      this.fetchStats[1]["count"] = data[0]["NewRecovered"];
      this.fetchStats[2]["count"] = data[0]["TotalConfirmed"] - data[0]["NewRecovered"] - data[0]["TotalDeaths"];
      this.fetchStats[3]["count"] = data[0]["TotalDeaths"]; 
      console.log(this.fetchStats[0].count);
    });
  }

}
