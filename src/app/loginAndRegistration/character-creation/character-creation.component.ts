import { Component } from '@angular/core';



@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent {
  hasNotDecided: boolean = true;
  login: boolean = true;

  value="";
  clearValue() {
    this.value="";
  }

  access(value: string) {
    if (value === 'login') {
      this.login = true;
    }
    else {
      this.login = false;
    }
    this.hasNotDecided = !this.hasNotDecided;
  }
}
