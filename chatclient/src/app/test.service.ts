import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private socket;

  constructor() {
    this.socket = io();
  }

  public getSocket() {
    return this.socket;
  }
}
