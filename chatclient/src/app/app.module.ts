import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatService } from './chat.service';
import { SignupService } from './signup.service'
import { SigninService} from './signin.service'
import { LoginComponent } from './login/login.component';
import { GlobalchatComponent } from './globalchat/globalchat.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatDisplayComponent } from './chat-display/chat-display.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { MoodService } from './mood.service';
import { UserlistComponent } from './userlist/userlist.component';
import { RoomselectComponent } from './roomselect/roomselect.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';

import {Dialog} from './login-form/login-form.component';
import { FileDisplayComponent } from './file-display/file-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GlobalchatComponent,
    LoginFormComponent,
    ChatDisplayComponent,
    ChatFormComponent,
    UserlistComponent,
    RoomselectComponent,

    Dialog,

    FileDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [Title, ChatService, MoodService, SignupService, SigninService],
  bootstrap: [AppComponent],
  entryComponents: [Dialog, FileDisplayComponent]
})
export class AppModule { }
