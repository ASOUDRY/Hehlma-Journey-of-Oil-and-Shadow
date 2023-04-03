import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent {

  @Input() data: any  

  ngOnInit() {
    console.log(this.data);
  }

  posts : any;
  message = "";
  action: string = "What would you like to do?";
  notShopping: boolean = true;
  shopping : boolean = false;

  @Output() backToOption = new EventEmitter<void>();

  onAction(value: string) {
    this.notShopping = !this.notShopping;
    if (value === 'Shopping') {
      this.shopping = true;
    }
    else {
      this.shopping = false;
    }
  }
  
  reverse(value: boolean) {
  this.notShopping = value
  }
  onLeave() {
    this.backToOption.emit()
  }

}
