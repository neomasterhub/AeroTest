import { Component, OnDestroy } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { IAccountModel } from './model/account.model';
import { AccountService } from './services/account.service';
import { OutputAccountService } from './services/output-account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnDestroy {
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

  account: IAccountModel;

  private unsubscribeAccount = new Subject<void>();

  constructor(
    private readonly router: Router,
    accountService: AccountService,
    outputAccountService: OutputAccountService,
  ) {
    this.account = accountService.getAccount();

    outputAccountService.getSubscription()
      .pipe(
        takeUntil(this.unsubscribeAccount),
        tap((account) => this.account = account),
      )
      .subscribe();
  }

  logout() {
    alert('Logout!');
  }

  navToProfile() {
    this.router.navigate(['profile']);
  }

  ngOnDestroy() {
    this.unsubscribeAccount.next();
    this.unsubscribeAccount.complete();
  }
}
