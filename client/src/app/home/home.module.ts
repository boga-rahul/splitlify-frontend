import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FriendsHomeComponent } from './friends-home/friends-home.component';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { InviteComponent } from './invite/invite.component';

const routes: Route[] = [
  {
    path: 'friends',
    component: FriendsHomeComponent,
  },
  {
    path: 'groups',
    component: GroupsHomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'invite',
    component: InviteComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    FriendsHomeComponent,
    GroupsHomeComponent,
    AccountComponent,
    SettingsComponent,
    InviteComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
})
export class HomeModule {}
