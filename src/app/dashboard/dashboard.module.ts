import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { RequestsComponent } from './requests/requests.component';
import { DashboardComponent } from './dashboard.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [ProfileComponent, ChatComponent, RequestsComponent, DashboardComponent, MessageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
