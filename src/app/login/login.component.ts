import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { LoginPayload } from '../interfaces/login-payload';
import { Router } from '@angular/router';
import { interval, take, firstValueFrom } from 'rxjs';
import { FetchPlayerPayload } from '../interfaces/fetch-player-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  posts: any

constructor(private passService : ServiceService, private router: Router) {}
username: string = "SuperKamiGuru";
password: string = "Nail!";

payload: LoginPayload = {
  "username": this.username,
  "password": this.password
}

// objectToken: FetchPlayerPayload = {
//   "username": "",
//   "cClass": ""
// }

onLoad() {
  this.payload.username = this.username,
  this.payload.password = this.password
  // this.objectToken.username = this.username 
}

async submit() {
     this.onLoad();
      try {
        const response = await firstValueFrom(this.passService.login(this.payload));
        console.log(response);
        this.posts = response;
      //  console.log(this.)
      } catch (error) {
        console.log(error);
      }
      let objectToken: FetchPlayerPayload = {
        "username": this.posts.username,
        "cClass": this.posts.characterClass
      }
    
console.log(objectToken)
sessionStorage.setItem("LoginCredentials", JSON.stringify(objectToken));

    // this.passService.setLogin(this.username, this.posts)
    this.router.navigateByUrl('/hehl')
}

}