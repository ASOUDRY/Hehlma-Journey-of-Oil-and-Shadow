import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Messages } from '../interfaces/messages';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent {
  posts : any;
  constructor(private httpService: ServiceService) { }
  
  ngOnInit() {
    // this.httpService.getPosts().subscribe(
    // (response) => { this.posts = response; },
    // (error) => { console.log(error); });
    this.httpService.getLocation().subscribe(
      (response) => { this.posts = response; 
        console.log(response);
      },
      (error) => { console.log(error); });
      
  }

m1 : Messages = {
  first : "Shop",
  second : "Adventure",
  third :  "Chat with Locals"
  
}
  message = "";
  undecided = true;
 
  onEditClick(value: string) {
    this.undecided = !this.undecided;
    if (value = this.m1.first) {
this.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    else if (value = this.m1.second) {
      this.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
     else {
      this.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
  }

onLeave() {
  this.undecided = !this.undecided;
}
}
