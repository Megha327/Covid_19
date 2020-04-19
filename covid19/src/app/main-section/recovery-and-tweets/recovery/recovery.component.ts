import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() recoveredData = {confirmed:0, recovered:0, recoveredRatio: 0};
  constructor() { }
  ngOnInit(): void {
  }
}
