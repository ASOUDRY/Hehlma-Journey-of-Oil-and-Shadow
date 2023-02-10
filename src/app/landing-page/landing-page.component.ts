import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  posts : any;
   Test : String = "Placeholder"
  constructor(private httpService: ServiceService) { }

//   ngOnInit() {
//     this.httpService.getPosts().subscribe(
//     (response) => { this.posts = response; 
//     console.log(response);
//     },
//     (error) => { console.log(error); });
// }

// EditTest() {
//   this.Test = this.posts[2].monsterName
// }
// message = "Here we ago. Super Mario"

// firstfunction() {
//   alert(this.message);
// }

}
