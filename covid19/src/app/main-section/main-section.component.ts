import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
 
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor( private myService:ApiService, private router:Router, private SpinnerService: NgxSpinnerService) { }
  countriesData:[];
  countriesMapData;
  recoveredData;
  isMapRendered = false;
  spreadTrendData;
  imagePath = "../../../assets/images/statistics/";
  stats = [
    {title:'Total Cases', count:0, src:`${this.imagePath}Graph.svg`, cases:false},
    {title:"Recovered", count:0, src:`${this.imagePath}Graph2.svg`, cases:true},
    {title:"Active Cases", count:0, src:`${this.imagePath}Graph3.svg`, cases:false},
    {title:"Total Deaths", count:0, src:`${this.imagePath}Graph4.svg`, cases:false}
  ];
  articles;
  ngOnInit(): void {
      this.fetchData();
    setInterval(()=>{
      window.location.reload();
      // this.fetchData();
    },60000)
  
  }


  private fetchData(){
    this.SpinnerService.show();
    this.myService.getData().subscribe((data:any) =>{
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
      this.SpinnerService.hide();
    });
    
    this.myService.getDateWiseData().subscribe((data) =>{
      let datesData = Object.keys(data['cases']);
      let dates = [];
      datesData.forEach((date) => {
        dates.push(this.formatDate(date));
      });
      let totalCase = Object.values(data['cases']);
      let totalRecoverd = Object.values(data['recovered']);
      let totalDeaths = Object.values(data['deaths']);
      this.spreadTrendData = {
        "dates": dates,
        "totalCase": totalCase,
        "totalRecoverd": totalRecoverd,
        "totalDeaths": totalDeaths
      }
    })

    this.myService.getNews().subscribe((data:any) => {
      this.articles = data["articles"];
    })
  }

  private formatDate(date: string) {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let dateArr = date.split("/");
    return dateArr[1] + " " + months[parseInt(dateArr[0])-1];
  }
}
