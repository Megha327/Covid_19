import { Component, OnInit, Input} from '@angular/core';
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
  @Input() countriesData:[];
  @Input() isMapRendered;
  ngOnInit(): void {
    // this.drawRegionsMap();
  }

  isCountriesData() {
    if (this.countriesData) {
      if (!this.isMapRendered) {
        this.isMapRendered=true;
        this.drawRegionsMap();
      }
      return true;
    } else {
      return false;
    }
  }

  private drawRegionsMap() {
    let mapData = [['Country', 'TotalConfirmed']];
    this.countriesData.forEach((country, index) => {
    mapData.push([country["CountryCode"], country["TotalConfirmed"]]);
    });

    this.data = google.visualization.arrayToDataTable(mapData);
    this.options = {colors: ['#FF0000']};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(this.data,this.options);
  }
}
