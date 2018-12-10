import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  
  @Output() public sendEvent = new EventEmitter();

  list: User[] = [];
  
  constructor(private service: ChatService) {
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe((users) => {
      this.list = [];
      var userslist = users.split(';')
      userslist.pop();
      userslist.forEach(element => {
        this.list.push(new User(element, null))
        this.service.getUserPic(element);
      });
      this.sendEvent.emit(this.list)
    })
    this.service.getMessages().subscribe((message) => {
      if(message.code == 1) {
        this.list.push(new User(message.username, null));
        this.service.getUserPic(message.username);
      } else if(message.code == 2) {
        //todo remove
      }
      this.sendEvent.emit(this.list);
    })
    this.service.getUserPics().subscribe((info) => {
      this.list.forEach(element => {
        if(element.name == info.user) {
          element.image = info.img;
          this.sendEvent.emit(this.list);
        }
      });
    })
  }
}
