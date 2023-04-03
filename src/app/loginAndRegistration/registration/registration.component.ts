import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { RegistrationPayload } from '../../interfaces/registration-payload';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
posts : any;
acceptedstatus: boolean = false
constructor(private httpService: ServiceService) {}

username: string = "";
password: string = "";
email: string = "";
character: string = "";
class: string = "";
condition: boolean = true;
dataSubmission: boolean = false;

classChoice (value: string) {
this.class = value;
this.ELEMENT_DATA[4].name = value;
}

generateTicket() {
  this.condition = false;
  this.ELEMENT_DATA[0].name = this.username;
  this.ELEMENT_DATA[1].name = this.password;
  this.ELEMENT_DATA[2].name = this.email;
  this.ELEMENT_DATA[3].name = this.character;
  this.ELEMENT_DATA[4].name = this.class;
}

payload: RegistrationPayload = {
  "username": this.username,
  "password": this.password,
  "email": this.email,
  "character": this.character,
  "characterclass": this.class,
}

async registration() {
this.dataSubmission = true;
this.loadPayload();
try {
  const response = await firstValueFrom (this.httpService.registration(this.payload));
  this.posts = response; 
  this.acceptedstatus = this.posts.isAvailable
  sessionStorage.setItem("LoginCredentials", JSON.stringify(this.posts));
}
  catch (error) { 
    console.log(error); 
  }; 
}
loadPayload() {
  this.payload.username = this.username;
  this.payload.password = this.password;
  this.payload.email = this.email;
  this.payload.character = this.character;
  this.payload.characterclass = this.class;
}

ELEMENT_DATA: any = [
  {position: 'usermame', name: ""},
  {position: 'password', name: "" },
  {position: 'email', name: ""},
  {position: 'character', name: ""},
  {position: 'class', name: ""},
];

displayedColumns: string[] = ['position', 'name'];
dataSource = this.ELEMENT_DATA;
}
