import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://api.covid19api.com/summary";
  // const timeInterval = interval

  getData(){
    return this.http.get(this.apiUrl)
    .pipe(map(responseData => {
      const arr = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key) ){
          arr.push({...responseData[key], id:key });
        }
      }
      return arr;
    }));
    // return timer(0, 10000)
    // .pipe(
    //    switchMap(_ => this.http.get(this.apiUrl)),
    //    catchError(error => of(`Bad request: ${error}`))
    // );
  }
}
