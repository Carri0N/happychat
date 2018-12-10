import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../classes/message';
import { User }from '../classes/user'

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  @Input() messages: Message[];
  @Input() userlist: User[];

  constructor() {
  }

  ngOnInit() {
  }

}
