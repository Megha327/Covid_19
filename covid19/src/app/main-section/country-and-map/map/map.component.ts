import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {  
  constructor(private myService:ApiService) { }
  data;
  options;
  countriesData = [];
  ngOnInit(): void {
    this.drawRegionsMap();
  }

  private drawRegionsMap() {
    this.myService.getData('Countries').subscribe((data:any) =>{
      this.countriesData = data;

      let mapData = [['Country', 'TotalConfirmed']];
      this.countriesData.forEach((country, index) => {
      console.log("Country: "+country);
      mapData.push([country["CountryCode"], country["TotalConfirmed"]]);
      });

      console.log("mapdata: "+mapData);

      this.data = google.visualization.arrayToDataTable(mapData);

      this.options = {colors: ['#FF0000']};

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(this.data,this.options);

    });
  }


}
