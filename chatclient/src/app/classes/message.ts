export class Message {
  user: string;
  timestamp: string;
  msg: string;
  mood: string;
  code: number;
  public img = null;

  constructor(user: string, timestamp: string, msg: string, code: number) {
    this.user = user;
    this.timestamp = timestamp;
    this.msg = msg;
    this.code = code;
  }
}
