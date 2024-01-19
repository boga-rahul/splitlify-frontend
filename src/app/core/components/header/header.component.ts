import { Component } from '@angular/core';

type Tab = {
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  tabs: Tab[] = [
    {
      name: 'Home',
      icon: 'fi-rr-home'
    },
    {
      name: 'Groups',
      icon: 'fi-rr-users-alt'
    },
    {
      name: 'Friends',
      icon: 'fi-rr-following'
    },
    {
      name: 'Settings',
      icon: 'fi-rr-settings'
    },
    {
      name: 'Invite',
      icon: 'fi-rr-invite'
    },
    {
      name: 'Logout',
      icon: 'fi-rr-sign-out-alt'
    }
]

}
