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
  dateWiseData;
  newsData;
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
  count = 1;
  ngOnInit(): void {

    this.fetchData();
    setTimeout(()=> {
      this.count++;
      console.log("refreshinng >>> " + this.count);
      // this.fetchData();
    }, 15000);
  }


  private fetchData(){
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
      // this.selectChart(this.activeChart, this.activeIndex);
    })

    this.myService.getNews().subscribe((data:any) => {
      console.log("news data: ",data["articles"]);
      this.articles = data["articles"];
    })
  }

  private formatDate(date: string) {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let dateArr = date.split("/");
    return dateArr[1] + " " + months[parseInt(dateArr[0])-1];
  }
}
