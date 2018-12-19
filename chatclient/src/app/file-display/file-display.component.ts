import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare var download: any;
@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.css']
})
export class FileDisplayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FileDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    
  }

  save() {
    download(this.data,"content", this.data.split(',')[0].split(':')[1])
  }

}
