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
  activeChartLegendData = ['Confirmed'];
  chart;
  activeIndex:number = 0;
  navpills = ["Confirmed","Recovered","Deceased"];
  constructor(private myService:ApiService) { }

  ngOnInit(): void {
    this.dateWiseData();
  }

  private dateWiseData(){
      this.myService.getDateWiseData().subscribe((data) =>{
        // console.log(data);
        let datesData = Object.keys(data['cases']);
        datesData.forEach((date) => {
          this.dates.push(this.formatDate(date));
        });
        // console.log("dates: "+this.dates);
        this.totalCase = Object.values(data['cases']);
        // console.log("cases: "+this.totalCase);
        this.totalRecoverd = Object.values(data['recovered']);
        // console.log("recovered: "+this.totalRecoverd);
        this.totalDeaths = Object.values(data['deaths']);
        // console.log("deaths: "+this.totalDeaths);

        this.selectChart(this.activeChart, this.activeIndex);
      })
  }

  private formatDate(date: string) {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let dateArr = date.split("/");
    return dateArr[1] + " " + months[parseInt(dateArr[0])-1];
  }

   selectChart(value: string, index:number){
    // console.log("selectChart >>>>>>>>>>>>>>>>>>>>>>>>>" + value + " - " + this.activeChart);
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
      this.activeChartLegendData = [this.activeChart, this.dates[this.dates.length - 1], seriesData[seriesData.length - 1]];
      this.chart = new Chart( { 
        chart: {
          height:180, 
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
          // height:10,
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
        // legend: { 
        //   align: 'left', 
        //   x: 45, 
        //   verticalAlign: 'top', 
        //   backgroundColor: 'white', 
        //   borderColor: '#CCC', 
        //   borderWidth: 1, 
        //   shadow: false,
        //   labelFormat: legendData
        // },
        tooltip: 
        { 
          borderColor:'white',
          backgroundColor:'white',
          headerFormat: '<span style="color:red">{point.x}</span><br/>',
          pointFormat:'<span style="color:red">{point.y}</span>' 
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
          colorKey:'red',
          showInLegend: false
        }] 
    });
  }

}
