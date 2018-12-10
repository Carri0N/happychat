import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  @Output() public sendEvent = new EventEmitter();

  messageText = "";

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    if(this.messageText != "") {
      this.sendEvent.emit(this.messageText);
      this.messageText = "";
    }
  }

  onChange(event) {

  }
}
