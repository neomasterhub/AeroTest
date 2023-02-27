import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent {
  readonly maxLength = 255;
  readonly email;

  constructor(private readonly accountService: AccountService) {
    const account = accountService.getAccount();

    this.email = account.email;

    this.profileForm.setValue({
      firstName: account.firstName,
      lastName: account.lastName,
      phoneNumber: account.phoneNumber,
      website: account.website,
    });
  }

  profileForm = new FormGroup({
    firstName: new FormControl(this.accountService.getAccount().firstName, [
      Validators.required,
      Validators.maxLength(this.maxLength),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxLength),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxLength),
      Validators.pattern('[0-9]{10,10}'),
    ]),
    website: new FormControl('', [
      Validators.maxLength(this.maxLength),
      Validators.pattern('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)'),
    ]),
  });
}
