import { Injectable } from '@angular/core';
import { IAccountModel } from '../model/account.model';

@Injectable()
export class AccountService {
  private modelMock: IAccountModel = {
    email: 'john-doe@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '7987654321',
    website: 'https://john-doe.com',
  };

  getAccount() {
    return this.modelMock;
  }

  changeAccount(model: IAccountModel) {
    this.modelMock = model;
  }
}
