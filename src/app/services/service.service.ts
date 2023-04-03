import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchPlayerPayload } from '../interfaces/fetch-player-payload';
import { RegistrationPayload } from '../interfaces/registration-payload';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // add cors
 
  private url = 'http://localhost:5001/api/Monster';

  private url2 =  'https://hehl-api.azurewebsites.net/';

 // private url = 'https://testapp-as.azurewebsites.net/WeatherForecast';
//  private locationurl = 'http://localhost:5001/Location/Royal%20City

// private quest1 = { quest: "A kid was lost at the stirring sea. Can you go fetch him for me.", rescue, lowgrade }

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  getQuest(key1: string, key2: string) {
    return this.http.get(`http://localhost:5001/api/Quest/${key1}/${key2}`)
  }

  getLocation(key: string) {
    // `Hello, ${name}`
  
  // return this.http.get(`${this.url2}${key}`)
  return this.http.get(`https://hehl-api.azurewebsites.net/Location/${key}`);
  //  return this.http.get(`http://localhost:5001/Location/${key}`)
  }

  getAdventure(key: string) {
    return this.http.get(`http://localhost:5001/api/Adventure/${key}`)
    //return this.http.get(`http://localhost:5001/Location/${key}`)
  }

  getPlayer(key: FetchPlayerPayload) {
    return this.http.post(`${this.url2}/Player`, key)
   // return this.http.post(`http://localhost:5001/Player`, key)
    //return this.http.get(`http://localhost:5001/Location/${key}`)
  }


  registration(payload: RegistrationPayload) {
    return this.http.post(`http://localhost:5001/api/Registration`, payload)
  }

  login(payload: any) {
    return this.http.post(`${this.url2}/Login`, payload)
    return this.http.post(`http://localhost:5001/Login`, payload)
  }

  private playerData: any;

  updatePlayer(data: any) {
    console.log("Look Here");
    console.log(data);
    console.log("Look Here");
    this.playerData = data;
    console.log(this.playerData);
  }

  retreivePlayer() {
    console.log(this.playerData);
    return of(this.playerData);
  }
}