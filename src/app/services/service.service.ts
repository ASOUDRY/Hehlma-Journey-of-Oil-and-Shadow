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

  constructor(private http: HttpClient) { }

  // getPosts() {
  //   return this.http.get(this.url);
  // }

  getQuest(key1: string, key2: string) {
    return this.http.get(`http://localhost:5001/api/Quest/${key1}/${key2}`)
  }

  getLocation(key: string) { 
    return this.http.get(`http://localhost:5001/Location/${key}`)
  }

  getAdventure(key: string) {
    return this.http.get(`http://localhost:5001/api/Adventure/${key}`)
  }

  getQuestEncounter(key: string) {
    return this.http.get(`http://localhost:5001/Encounter/${key}`)
  }

  getPlayer(key: FetchPlayerPayload) {
    return this.http.post(`${this.url2}/Player`, key)
  }

  registration(payload: RegistrationPayload) {
    return this.http.post(`http://localhost:5001/api/Registration`, payload)
  }

  login(payload: any) {
    return this.http.post(`${this.url2}/Login`, payload)
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

  
packageParser(data: any, typeOFData: number ) {

    if (typeOFData == 0) {
     return [
      {
        locationName: data.locationName,
        locationDescription: data.locationDescription,
        adventureOption1: data.adventureOption1,
        adventureOption2: data.adventureOption2,
        exploration1: data.exploration1,
        exploration2: data.exploration2,
        exploration3: data.exploration3,
        enviormentalDescription: data.enviormentalDescription,
        nextLocation: data.nextLocation,
        questName: data.questName
      },
      {
        fightDescription1: data.fightDescription1,
        fightDescription2: data.fightDescription2,
        fightDescription3: data.fightDescription3,
      },
      {
        questButton1: data.questButton1,
        questButton2: data.questButton2,
        questdialogue1: data.questdialogue1,
        questdialogue2: data.questdialogue2,
        questdialogue3: data.questdialogue3,
      }, 
      {
        questCombatDescription1: data.questCombatDescription1,
        questCombatDescription2: data.questCombatDescription2,
        questCombatDescription3: data.questCombatDescription3,
      }, 
      {
        stealth1: data.stealth1,
        stealth2: data.stealth2
      }
      // monsterAttack: data.monsterAttack1
    ]
     }
     else if (typeOFData == 1) {
      return {
        // attack: data.attack,
        // defense: data.defense,
        // dodgeAttack: data.dodgeAttack,
        // enviormentDescription: data.enviormentDescription,
        // fightEnviormentDescription1: data.fightEnviormentDescription1,
        // fightEnviormentDescription2: data.fightEnviormentDescription2,
        // hitpoints: data.hitpoints,
        // locationDescription: data.locationDescription,
        // monsterAttack1: data.mon,
        // monsterAttack2: '',
        // monsterFlee: '',
        // monsterName: '',
        // uniqueAttackDescription: '',
        // questCombat1: '',
        // questCombat2: '',
        // questCombat3: '',
        
      }
     }
     else {
      return {}
     }
} 




}