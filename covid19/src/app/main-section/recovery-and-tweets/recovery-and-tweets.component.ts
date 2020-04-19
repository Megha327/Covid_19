import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recovery-and-tweets',
  templateUrl: './recovery-and-tweets.component.html',
  styleUrls: ['./recovery-and-tweets.component.css']
})
export class RecoveryAndTweetsComponent implements OnInit {

  @Input() recoveredData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
