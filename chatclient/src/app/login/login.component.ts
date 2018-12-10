import { Component, OnInit, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public buttonName = 'Submit';
  public username: string;
  public inputWarning = "";

  constructor(private router:Router, private zone:NgZone) {  }
   
  ngOnInit() {
    
  }

  redirect() {
    this.router.navigate(['/chat'])
  }
}
