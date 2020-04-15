import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  // cases = {confirmed:0, recovered:0,};
  recovered;
  recover:number = 24;
  constructor(private myServivce:ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(){
    this.myServivce.getData('Global').subscribe((data:any) =>{
      // console.log(data);
      // this.cases.confirmed = data["TotalConfirmed"];
      // this.cases.recovered = data["TotalRecovered"];
      this.recovered = (data["TotalRecovered"] * 100)/ data["TotalConfirmed"];
      console.log("type of recovered: "+ typeof this.recovered);
    });
  }


}
