import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://api.covid19api.com/summary";
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  date = this.year+"-"+this.month+"-"+this.day; 
  newsApi = `http://newsapi.org/v2/everything?q=Covid&from=${this.date}&sortBy=popularity&apiKey=c0a9c005b1604269877e6f7e81c31d98`;
  dateWiseData = "https://corona.lmao.ninja/v2/historical/all?lastdays=30";
  // const timeInterval = interval

  getData(key:string){
    return this.http.get(this.apiUrl)
    .pipe(map(responseData => {
      // console.log(responseData);
      return responseData[key];
    }));
  }

    public getNews(){
      return this.http.get(this.newsApi);
    }

    getDateWiseData(){
      return this.http.get(this.dateWiseData);
      // .pipe(map(responseData => {
      //   console.log(responseData);
      //   return responseData[key];
      // }));
    }
}
