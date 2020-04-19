import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countriesData:[];
  searchText:string = '';
  resetInterval;
  constructor() { }

  ngOnInit(): void {
  }
}
