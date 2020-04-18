import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {
  totalCase = [];
  totalRecoverd = [];
  totalDeaths = [];
  dates = [];
  activeChart:string ='Confirmed';
  chart;
  activeIndex:number = 0;
  navpills = ["Confirmed","Recovered","Deceased"];
  constructor(private myService:ApiService) { }

  ngOnInit(): void {
    this.dateWiseData();
  }

  private dateWiseData(){
      this.myService.getDateWiseData().subscribe((data) =>{
        console.log(data);
        this.dates = Object.keys(data['cases']);
        console.log("dates: "+this.dates);
        this.totalCase = Object.values(data['cases']);
        console.log("cases: "+this.totalCase);
        this.totalRecoverd = Object.values(data['recovered']);
        console.log("recovered: "+this.totalRecoverd);
        this.totalDeaths = Object.values(data['deaths']);
        console.log("deaths: "+this.totalDeaths);

        this.selectChart(this.activeChart, this.activeIndex);
      })
  }

   selectChart(value: string, index:number){
    console.log("selectChart >>>>>>>>>>>>>>>>>>>>>>>>>" + value + " - " + this.activeChart);
    this.activeIndex = index;
    this.activeChart = value;
    switch(value) {
      case 'Confirmed':
        this.callChart(this.totalCase);
        break;
      case 'Recovered':
        this.callChart(this.totalRecoverd);
        break;
      case 'Deceased':
        this.callChart(this.totalDeaths);
        break;
    }
  }
  
  private callChart(seriesData: any){
      this.chart = new Chart( { 
        chart: { 
          type: 'line' 
        }, 
        title: { 
          text: '' 
        }, 
        exporting: { 
          enabled: false 
        }, 
        xAxis: { 
          categories:this.dates
        }, 
        yAxis: { 
          min: 0, 
          title: 
          { 
            text: '' 
          }, 
          stackLabels: 
          { 
            enabled: true, 
            style: 
            { 
              fontWeight: 'bold' 
            } 
          },
          opposite: true,
          gridLineColor: "#ffffff",
          lineWidth:1
        },
        legend: 
        { align: 'left', 
          x: 45, 
          verticalAlign: 'top', 
          backgroundColor: 'white', 
          borderColor: '#CCC', 
          borderWidth: 1, 
          shadow: false 
        },
        tooltip: 
        { 
          // headerFormat: '<b>{point.x}</b><br/>',
          pointFormat:'{series.name}: {point.y}' 
        },
        series: 
        [{
          type: 'line', 
          name: this.activeChart, 
          lineWidth: 0,
          data: seriesData, 
          color: 'red',
          marker: {
            enabled: true,
            radius: 2
          },
          // showInLegend: false
        }] 
    });
  }

}
