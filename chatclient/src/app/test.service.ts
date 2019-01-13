import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private socket;

  constructor(private titleService: Title) {
    this.socket = io();
    this.socket.on('id', (result) => {
      console.log(result)
      this.titleService.setTitle(result);
    });
  }

  public getSocket() {
    return this.socket;
  }
}
