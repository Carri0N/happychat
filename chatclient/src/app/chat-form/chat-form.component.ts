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
  filename = "Enter Message";

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    if(this.messageText != "") {
      this.sendEvent.emit({text: this.messageText, file: this.file});
      this.messageText = "";
      console.log(this.file);
      this.file = null;
      this.filename = "Enter Message";
    }
  }

  onChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.filename = file.name;
      const reader = new FileReader();
      reader.onload = e => this.file = reader.result;
      reader.readAsDataURL(file);
    }
  }
}
