import { Observable } from 'rxjs';
import { TestService } from './test.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SigninService {

    private socket;

    constructor(private ts: TestService) {
        this.socket = this.ts.getSocket();
    }

    login(username: string, password: string) {
        this.socket.emit('signin', {user: username, pass: password});
    }

    loginFeedback() {
        return Observable.create((observer) => {
            this.socket.on('signinresult', (result) => {
              observer.next(result);
            });
        });
    }
}