import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  articles;
  selectedIndex = [];
  constructor(private newsservice:ApiService) {
   }

  ngOnInit(): void {
    this.getNewsData();
  }

  private getNewsData(){
    this.newsservice.getNews().subscribe((data) => {
      // console.log(data["articles"]);
      data["articles"].forEach((data, index) => { 
          // console.log(index);
          
          this.selectedIndex.push(index);
      })
      this.articles = data["articles"];
      
    })
  }


   getIndex(index:number){
    for(let i =0; i<= this.selectedIndex.length; i++){
      if(this.selectedIndex.indexOf(this.selectedIndex[i])==index){
        // console.log(true);
        return "active";
      }
      else
      {
        // console.log(false);
        return "none";
      }
    }

  }

}
