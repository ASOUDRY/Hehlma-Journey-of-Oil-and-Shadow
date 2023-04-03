import { NgSwitchDefault } from '@angular/common';
import { Component,  Output, EventEmitter } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  isChecked: any
  leave: string = "Nothing";
  price: number = 0;
  isSilvered: boolean = false;
  change: number = 0

  // value: string[] = ["Steel Sword: 50 copper", "Steel Axe", "40 copper", "Steel arrow", "10 copper per quiver-full", "Steel War Hammer(Poor)", "80 copper", "Steel War Hammer(Prestine)", "20 silver", "Iron Greatsword", "60 copper", "Iron War Axe", "70 copper", "Iron Armor (Full set)", "100 silver", "Boots", "20 silver",  "grieves", "20 silver",  "helms",  "20 silver", "Chest armor", "40 Silver)", "Steel Armor (Full set)", "80 copper", "Helms", "20 silver", "chest armor", "20 silver", "Grieves","boots",  "20 Silver";]
  
items: Array<{name: string, price: number, coinage: string}> = [{name: 'Steel Sword', price: 50, coinage: "Copper"}, {name: 'Steel Axe', price: 40, coinage: "Copper"}, {name: "Steel War Hammer(Prestine)", price: 20, coinage: "silver"}];
  
  @Output() backToOption = new EventEmitter<boolean>();

onLeave() {
  this.backToOption.emit(true)
}
handleClick(item: Array<{name: string, price: number, coinage: string}>) {
checkbox: HTMLInputElement.prototype = <HTMLInputElement>document.getElementById("inventory");
}
onCheckboxChange(event: Event, value: number, coin: string) {
  if(event.target){

     if (this.isSilvered) {
     this.price = this.price * 10;
     this.isSilvered = false;
     }

    if (coin === "silver") {
      value = value * 10;
      
    }
    if ((event.target as HTMLInputElement).checked) {
       this.price += value;
    }
    else {
      this.price -= value;
    }
if (this.price > 100) {
  this.price = this.price/10
  this.isSilvered = true;
} 


  } else {
    console.log("event.target is null");
  }
}

}