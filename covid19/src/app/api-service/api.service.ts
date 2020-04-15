import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://api.covid19api.com/summary";
  // const timeInterval = interval

  getData(key:string){
    return this.http.get(this.apiUrl)
    .pipe(map(responseData => {
      // console.log(responseData);
      return responseData[key];
    }));
  }
}
