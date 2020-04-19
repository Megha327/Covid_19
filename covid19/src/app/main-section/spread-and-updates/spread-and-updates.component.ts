import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spread-and-updates',
  templateUrl: './spread-and-updates.component.html',
  styleUrls: ['./spread-and-updates.component.css']
})
export class SpreadAndUpdatesComponent implements OnInit {

  @Input() articles;
  @Input() spreadTrendData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
