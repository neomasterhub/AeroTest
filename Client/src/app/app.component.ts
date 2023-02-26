import { Component } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Client';

  navLinks = [
    { location: '/inventory', label: 'Inventory' },
    { location: '/reports', label: 'Reports' },
    { location: '/billing', label: 'Billing' },
  ];

  // A new Material bug that represented as console error...
  // ! ERROR Error: A mat-tab-nav-panel must be specified via [tabPanel].
  tabPanelMock: MatTabNavPanel = {
    id: '1',
  };
}
