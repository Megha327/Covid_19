import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {
  @Input() spreadTrendData;
  activeChart:string ='Confirmed';
  activeChartLegendData = ['Confirmed'];
  chart;
  activeIndex:number = 0;
  navpills = ["Confirmed","Recovered","Deceased"];
  isRenderedDefault = false;
  constructor(private myService:ApiService) { }

  ngOnInit(): void {
  }

  isRenderDefault() {
    if (this.spreadTrendData) {
      if (!this.isRenderedDefault) {
        this.isRenderedDefault = true;
        this.selectChart(this.activeChart, this.activeIndex);
      }
      return true;
    } else {
      return false;
    }
  }

  selectChart(value: string, index:number){
    this.activeIndex = index;
    this.activeChart = value;
    switch(value) {
      case 'Confirmed':
        this.callChart(this.spreadTrendData.totalCase);
        break;
      case 'Recovered':
        this.callChart(this.spreadTrendData.totalRecoverd);
        break;
      case 'Deceased':
        this.callChart(this.spreadTrendData.totalDeaths);
        break;
    }
  }
  
  private callChart(seriesData: any){
      this.activeChartLegendData = [this.activeChart, this.spreadTrendData.dates[this.spreadTrendData.dates.length - 1], seriesData[seriesData.length - 1]];
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
          categories:this.spreadTrendData.dates
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
