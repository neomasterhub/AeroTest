import { Component } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { IAccountModel } from './model/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Client';

  navLinks = [
    { location: '/home', label: 'Home' },
    { location: '/inventory', label: 'Inventory' },
    { location: '/reports', label: 'Reports' },
    { location: '/billing', label: 'Billing' },
    { location: '/profile', label: 'Profile' },
  ];

  // A new Material bug that represented as console error...
  // ! ERROR Error: A mat-tab-nav-panel must be specified via [tabPanel].
  tabPanelMock: MatTabNavPanel = {
    id: '1',
  };

  account: IAccountModel = {
    firstName: 'John',
    lastName: 'Doe',
  };

  constructor(private readonly router: Router) {
  }

  logout() {
    alert('Logout!');
  }

  navToProfile() {
    this.router.navigate(['profile']);
  }
}
