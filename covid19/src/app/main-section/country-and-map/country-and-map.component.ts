import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-and-map',
  templateUrl: './country-and-map.component.html',
  styleUrls: ['./country-and-map.component.css']
})
export class CountryAndMapComponent implements OnInit {

  @Input() countriesData:[];
  @Input() isMapRendered;
  constructor() { }

  ngOnInit(): void {
  }

}
