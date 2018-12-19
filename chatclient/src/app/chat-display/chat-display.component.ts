import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../classes/message';
import { User }from '../classes/user'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileDisplayComponent } from '../file-display/file-display.component'

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  @Input() messages: Message[];
  @Input() userlist: User[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(file) {
    const dialogRef = this.dialog.open(FileDisplayComponent, {
      data: file,
    });
  }
  
}
