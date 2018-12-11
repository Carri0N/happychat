import { Component, OnInit} from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { Message } from '../classes/message';
import { MoodService } from '../mood.service';
import { User } from '../classes/user'

@Component({
  selector: 'app-globalchat',
  templateUrl: './globalchat.component.html',
  styleUrls: ['./globalchat.component.css']
})
export class GlobalchatComponent implements OnInit {
  
  
  public userlist: User[] = [];
  public displayMessages: Message[] = [];

  //moodservice: MoodService;

  chat: string= 'global';

  constructor(private router: Router, private chatservice: ChatService) {
    //this.moodservice = new MoodService();
  }

  /**
   * checks valid session and joins user to global chat
   * subscribes to chat service to get updates on messages
   */
  ngOnInit() {
    this.chatservice.join(this.chat);
    this.chatservice.getMessages().subscribe((message) => {
      var m = new Message(message.user, message.timestamp, message.message, message.code);
      var found = false;
      var i = 0;
      while(i < this.userlist.length && !found) {
        if(this.userlist[i].name == message.user.split(' > ')[0]) {
          m.img = this.userlist[i].image;
          found = true;
        }
        i++;
      }
      this.displayMessages.push(m);
    });
  }

  sendMessage($event) {
    var input = $event;
    this.chatservice.sendMessage(input);
  }
 

  /**
   * Handles file inputs TODO
   */
  onChange(event) {
    var filename = event.target.value.split('\\')[event.target.value.split('\\').length - 1];
  }

}
