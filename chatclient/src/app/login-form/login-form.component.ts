import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupService } from '../signup.service';
import { SigninService } from '../signin.service';
import {MatSnackBar} from '@angular/material';

export interface iDialog {
  name:string;
  pass:string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() public redirectEvent = new EventEmitter();

  username: string = "";
  password: string = "";

  userFeedback: string;
  passFeedback: string;

  reg = false;
  constructor(private router: Router, public dialog: MatDialog, private signin: SigninService) { }

  ngOnInit() {
    this.signin.loginFeedback().subscribe((result) => {
      this.feedback(result);
    });
  }

  /**
   * Calls server on form submission.
   */
  onSubmit() {
    this.signin.login(this.username, this.password);
  }

  /**
   * Evaluates the response of the server after an login-form submission.
   * @param result 
   */
  feedback(result) {
    var code = result.code;
    var msg = result.message;
    switch (code) {
      case 0:
      break;
    case 1:
      this.redirectEvent.emit();
      break;
    case 2:
      this.openDialog();
      break;
    case 3:
      this.passFeedback = msg;
      this.userFeedback = "";
      break;
    case 4:
      this.userFeedback = msg;
      this.passFeedback = "";
      break;
    case 5:
      this.userFeedback = "Invalid Username";
      this.passFeedback = "Invalid Password";
      break;
    case 6:
      this.userFeedback = "Username Taken";
      break;
    default:
      break;
    }
  }

  /**
   * Opens the signup dialog.
   */
  openDialog() {
    const dialogRef = this.dialog.open(Dialog, {
      data: {name: this.username, pass: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reg = result;
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class Dialog implements OnInit{

  hide:boolean = false;

  image: any;
  mood: boolean = false; 
  imageWarning: boolean;
  
  uploadProgress: number;

  validateImage: boolean = false;
  validImage: boolean;

  gender;
  age;

  constructor(
    private signup: SignupService,
    public sb: MatSnackBar,
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: iDialog) {}

  ngOnInit() {
    this.signup.fileUploadProgress().subscribe((result) => {
      this.uploadProgress = (result.bytesLoaded/result.file.size) * 100;
    });
    this.signup.fileValidationResult().subscribe((result) => {
      this.validateImage = false;
      this.validImage = result.result;
      if(result.feedback.images[0].faces[0] != undefined) {
        this.gender = result.feedback.images[0].faces[0].gender.gender;
        this.age = result.feedback.images[0].faces[0].age.min + " - " + result.feedback.images[0].faces[0].age.max;
      } else {
        this.gender = "";
        this.age = "";
      }
    })
    this.signup.registerFeedback().subscribe((result) => {
      if(result.code = 1) {
        this.dialogRef.close(true);
      } else {
        this.hide = !this.hide;
      }
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if((this.image && this.validImage) || !this.image) {
      this.signup.register(this.data.name, this.data.pass, this.mood);
      this.hide = true;
    } else {
      this.sb.open("Choose Valid Picture", "Close", {
        duration: 10000,
      });
    }
  }

  onChange(event: any) :void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.image = reader.result;
      reader.readAsDataURL(file);
      this.validateImage = true;
      this.signup.validateImage(file);
    }
  }
}
