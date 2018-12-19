export class Message {
  user: string;
  timestamp: string;
  msg: string;
  mood: string;
  code: number;
  public img = null;
  public file = null;
  isFile: boolean;
  id: number;

  constructor(id: number, isFile: boolean, user: string, timestamp: string, msg: string, code: number) {
    this.user = user;
    this.timestamp = timestamp;
    this.msg = msg;
    this.code = code;
    this.isFile = isFile;
    this.id = id;
  }
}
