import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {  
  constructor(private myService:ApiService) { }
  private intervalHandle: any;
  public chartConfig = {
    title: 'Changing Chart',
    type: 'GeoChart',
    data: [],
    columns: ['Countries', 'COVID-19 cases'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      },
      colorAxis: { colors: ['#FFC4C6', '#FF979D', '#FF6F7D', '#FF0019'] },
      backgroundColor: '#f5f5f5',
      datalessRegionColor: '#f8f9fa',
      defaultColor: '#6c757d'
    }
  };

  loadingData: boolean = false;
  errMessage: string = ''

  ngOnInit(): void {
    this.fetchData();

  }
   private fetchData(){
    this.myService.getData('Countries').subscribe((data:any) =>{
      console.log(data);
      this.chartConfig.data = data;
    });
  }


  refreshData() {
    if(this.chartConfig.data.length === 0)
      this.loadingData = true;
    this.myService.getData('Countries')
      .subscribe(this.updateChartData.bind(this), this.handlerErrorResponse.bind(this));
  }

  updateChartData(data): void {
    this.loadingData = false;
    this.chartConfig.data = data;
  }

  handlerErrorResponse(err: ErrorEvent) {
    if (this.chartConfig.data.length === 0)
      this.errMessage = 'error occurred, try refreshing page';
    clearInterval(this.intervalHandle);
  }

  chartReady() {
    this.refreshData();
    this.intervalHandle = setInterval(this.refreshData.bind(this), 100000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHandle);
  }


}
