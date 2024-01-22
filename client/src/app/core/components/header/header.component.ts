import { Component } from '@angular/core';

type Tab = {
  name: string;
  icon?: string;
  path?: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  tabs: Tab[] = [
    {
      name: 'Home',
      icon: 'fi-rr-home',
      path: '/',
    },
    {
      name: 'Groups',
      icon: 'fi-rr-users-alt',
      path: '/groups',
    },
    {
      name: 'Friends',
      icon: 'fi-rr-following',
      path: '/friends',
    },
    {
      name: 'Settings',
      icon: 'fi-rr-settings',
      path: '/settings',
    },
    {
      name: 'Invite',
      icon: 'fi-rr-invite',
      path: '/invite',
    },
    {
      name: 'Logout',
      icon: 'fi-rr-sign-out-alt',
      path: '/logout',
    },
  ];
}
