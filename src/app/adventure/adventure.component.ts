import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {
  posts : any;
  constructor(private httpService: ServiceService, private route: ActivatedRoute) {}
  name: string = String(this.route.snapshot.paramMap.get('name'));

  ngOnInit() {
  
    this.httpService.getAdventure(this.name).subscribe(
      (response) => { this.posts = response; 
         console.log(response);
      },
      (error) => { console.log(error); }); 
  }
}
