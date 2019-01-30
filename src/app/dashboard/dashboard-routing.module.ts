import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { RequestsComponent } from './requests/requests.component';
import { DashboardComponent } from './dashboard.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'chats',
        component: ChatComponent,
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: '',
        redirectTo: '/dashboard/profile',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
