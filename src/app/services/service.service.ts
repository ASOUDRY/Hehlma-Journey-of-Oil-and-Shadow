import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // add cors
 
  private url = 'http://localhost:5001/api/Monster';

 // private url = 'https://testapp-as.azurewebsites.net/WeatherForecast';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  getLocation() {
    return this.http.get('http://localhost:5001/api/Monster')
  }
}
