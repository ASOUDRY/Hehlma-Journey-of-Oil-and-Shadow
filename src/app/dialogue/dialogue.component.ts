import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent {
leave: string = "Nothing";
dialogue : string = "Howdy do travelor my name is Lexie. You looking alright to me. What can I do you for?";

@Output() backToOption = new EventEmitter<boolean>();

onLeave() {
  this.backToOption.emit(true)
}
}