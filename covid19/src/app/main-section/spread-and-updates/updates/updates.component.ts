import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';

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
  }
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
