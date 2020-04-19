import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  @Input() articles;
  
  constructor(private newsservice:ApiService) {
   }

  ngOnInit(): void {
    // this.getNewsData();
  }

  // private getNewsData(){
  //   this.newsservice.getNews().subscribe((data) => {
  //     data["articles"].forEach((data, index) => { 
  //         this.selectedIndex.push(index);
  //     })
  //     this.articles = data["articles"];
      
  //   })
  // }


  getIndex(index:number){
    let fetchArticleIndex = [0,1,2];
    for(let i =0; i<= fetchArticleIndex.length; i++){
      if(fetchArticleIndex[i]==index){
        return "active";
      }
      else{
        return "none";
      }
    }
  }

}
