import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() fetchStats:[];
  constructor(private myService:ApiService) {
  }

  ngOnInit(){
  }
}
