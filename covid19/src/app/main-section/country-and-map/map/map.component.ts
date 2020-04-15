import { Component, OnInit ,Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApiService } from 'src/app/api-service/api.service';
// import { NguiMapModule} from '@ngui/map';
import { google } from '@google/maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //  goggle;
  constructor(private myService:ApiService, private render2:Renderer2,
    @Inject(DOCUMENT) private _documnet
    ) { }

   countriesData = [];
   mapData = [['Country', 'TotalConfirmed']];

  ngOnInit(): void {
    //this.addScript();
    this.fetchData();

  }

  // private addScript(){
  //   const script = this.render2.createComment('script');
  //   script.onload = this.loadNextScript.bind(this);
  //   script.type = 'text/javascript';
  //   script.text = `
  //           {
  //             google.charts.load('current', {
  //               'packages':['geochart'],
  //               // Note: you will need to get a mapsApiKey for your project.
  //               // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  //               'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  //             });
  //             google.charts.setOnLoadCallback(drawRegionsMap);
  //           }
  //       `;
  //   // script.src = 'https://www.gstatic.com/charts/loader.js';
  //   script.text = ``;
  //   this.render2.appendChild(this._documnet.body, script);
  // }

//   loadNextScript() {
//     const s = this.render2.createElement('script');
//     s.text = `
//     // This would error, if previous script has not yet been loaded
//      someGlobalObject.doSomething();
//  `
//     this.render2.appendChild(this._documnet.body, s);
//  }


  private fetchData(){
    this.myService.getData('Countries').subscribe((data:any) =>{
      console.log(data);
      this.countriesData = data;
      // console.log(this.fetchCountry[0]["Country"]);
    });
  }


//  drawRegionsMap() {
//   // google.charts.setOnLoadCallback(drawRegionsMap);
//       this.countriesData.forEach (function (country, index) {
//         console.log(country);
//         this.mapData.push([country["CountryCode"], country["TotalConfirmed"]])
//       });
//         console.log(this.mapData);
//         var data = google.visualization.arrayToDataTable(this.mapData);

//         var options = {colors: ['#FF0000']};

//         var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

//         chart.draw(data, options);
//   }

}
