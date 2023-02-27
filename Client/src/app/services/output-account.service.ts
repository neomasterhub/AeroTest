import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAccountModel } from '../model/account.model';

@Injectable()
export class OutputAccountService {
  private accountSubject = new Subject<IAccountModel>();

  private account$ = this.accountSubject.asObservable();

  getSubscription() {
    return this.account$;
  }

  emit(account: IAccountModel) {
    this.accountSubject.next(account);
  }
}
