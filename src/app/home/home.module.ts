import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FriendsHomeComponent } from './friends-home/friends-home.component';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {
    path: 'friends',
    component: FriendsHomeComponent
  }, {
    path: 'groups',
    component: GroupsHomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    component: HomeComponent,

  },
]

@NgModule({
  declarations: [HomeComponent, FriendsHomeComponent, GroupsHomeComponent, AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class HomeModule { }
