import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor() { }
  count = 1;
  ngOnInit(): void {
    setTimeout(()=> {
      this.count++;
      console.log("refreshinng >>> " + this.count);
      // window.location.reload();
    },60000);
  }

}
