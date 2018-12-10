import { TestService } from './test.service';
import * as up from 'socketio-file-upload';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService{

    private socket;
    private uploader;

    constructor(private ts: TestService) {
        this.socket = this.ts.getSocket();
        this.uploader = new up(this.socket);
        this.uploader.addEventListener('complete', (result) => {
            this.socket.emit('fileValidationResult');
        });
    }

    register(username: string, password: string, mood: boolean) {
        this.socket.emit('signup', {user: username, pass: password, mood: mood});
    }

    registerFeedback() {
        return Observable.create((observer) => {
            this.socket.on('signupresult', (result) => {
                observer.next(result);
            })
        })
    }

    validateImage(file) {
        this.uploader.submitFiles([file]);
    }

    fileUploadProgress() {
        return Observable.create((observer) => {
            this.uploader.addEventListener('progress', (result) => {
                observer.next(result);
            });
        });
    }

    fileValidationResult() {
        return Observable.create((observer) => {
            this.socket.on('fileValidation', (result) => {
                observer.next(result);
            });
        });
    }
}