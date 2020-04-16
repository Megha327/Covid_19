import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://api.covid19api.com/summary";
  newsApi = "http://newsapi.org/v2/everything?q=Covid&from=2020-04-16&sortBy=popularity&apiKey=c0a9c005b1604269877e6f7e81c31d98";
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


}
