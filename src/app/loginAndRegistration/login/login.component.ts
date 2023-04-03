import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { LoginPayload } from '../../interfaces/login-payload';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { FetchPlayerPayload } from '../../interfaces/fetch-player-payload';

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

onLoad() {
  this.payload.username = this.username,
  this.payload.password = this.password
}

async submit() {
     this.onLoad();
      try {
        const response = await firstValueFrom(this.passService.login(this.payload));
        this.posts = response;
      } catch (error) {
        console.log(error);
      }
      let objectToken: FetchPlayerPayload = {
        "username": this.posts.username,
        "cClass": this.posts.characterClass
      }
    
sessionStorage.setItem("LoginCredentials", JSON.stringify(objectToken));
    this.router.navigateByUrl('/hehl')
}

}