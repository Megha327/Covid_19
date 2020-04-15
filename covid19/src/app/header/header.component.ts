import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   menus = [
     {title:'HOME', link:'/dashboard' },
     {title:'FAQ', link:'/faq'},
     {title:'HELPFUL LINKS', link:'/helplink'}
   ];
  selectedIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

  select(index: number) {
    console.log(index);
      this.selectedIndex = index;
      console.log("selected Index: "+this.selectedIndex);
      console.log(this.menus);
  }

}
