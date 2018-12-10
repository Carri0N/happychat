import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { TestService } from './test.service'
import { User } from './classes/user';

@Injectable()
export class ChatService {

  private socket;
  private userlist = [];
  private delivery;

  constructor(private ts: TestService) {
    this.socket = this.ts.getSocket();
  }

  /**
   * adds user to chat
   * @param room(chat,user)
   */
  public join(room) {
    this.socket.emit('join', room);
  }

  /**
   * emits message in specific chatroom
   * @param chatroom 
   * @param message 
   */
  public sendMessage(message) {
    this.socket.emit('message', message);
  }

  /**
   * requests list of all user from server
   */
  public getList() {
    this.socket.emit('listmsg');
  }

  /**
   * emits message to one specific user
   * @param user1 
   * @param message1 
   */
  public whisper(user1, message1) {
    this.socket.emit('whisper', {user: user1, msg:message1});
  }

  public sendFile(chatroom, message) {

  }

  /**
   * lets everybody know that you left
   */
  public logout() {
    this.socket.emit('leave');
  }

  /**
   * recives the messages
   */
  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
        if(message.code == 1) {
          this.userlist.push(new User(message.username, null));
        } else if(message.code == 2) {
          
        }
        observer.next(message);
      });
    });
  }

  public getAllUsers() {
    return Observable.create((observer) => {
      this.socket.on('list', (list) => {
        observer.next(list);
      });
    });
  }

  public getUserPic(user) {
    this.socket.emit('getuserpic', user);
  }

  public getUserPics() {
    return Observable.create((observer) => {
      this.socket.on('userpic', (info) => {
        observer.next(info);
      });
    });
  }
}
