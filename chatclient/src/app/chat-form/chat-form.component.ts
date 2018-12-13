import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  @Output() public sendEvent = new EventEmitter();

  messageText = "";
  file = null;

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    if(this.messageText != "") {
      this.sendEvent.emit({text: this.messageText, file: this.file});
      this.messageText = "";
      this.file = null;
    }
  }

  onChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.file = reader.result;
      reader.readAsDataURL(file);
      //this.signup.validateImage(file);
    }
  }
}
