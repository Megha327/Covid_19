import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  apiUrl = "https://api.covid19api.com/summary";
  
  AllCurrentData = null;

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
  }
}
