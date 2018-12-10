import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { GlobalchatComponent } from './globalchat/globalchat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'chat', component: GlobalchatComponent },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
