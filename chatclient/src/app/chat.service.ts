import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  public sendMessage(message: string, file) {
    
    if (!file) {
      this.socket.emit('message', { message: message, isFile: false });
    } else {
      this.socket.emit('message', {
        message: message,
        isFile: true,
        data: file,
        fileSize: file.size
      })
    }
  }

  /**
   * requests list of all user from server
   */
  public getList() {
    this.socket.emit('listmsg');
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
        if (message.code == 1) {
          this.userlist.push(new User(message.username, null));
        }
        observer.next(message);
      });
    });
  }

  public getMessageFile(){
    return Observable.create((observer) => {
      this.socket.on('messageFile', (data) => {
        observer.next(data);
      })
    })
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
