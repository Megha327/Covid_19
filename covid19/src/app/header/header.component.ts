import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) {}

  ngOnInit(): void {
    let url=window.location.pathname;
    switch(url) {
      case '/dashboard':
      case '/':
        this.select(0);
        break;
      case '/faq':
        this.select(1);
        break;
      case '/helplink':
        this.select(2);
        break; 
    }

  }

   select(index: number) {
      this.selectedIndex = index;
  }

}
