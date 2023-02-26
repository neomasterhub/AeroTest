import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent {
  readonly maxLength = 255;

  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxLength),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxLength),
    ]),
    webSite: new FormControl('', [
      Validators.maxLength(this.maxLength),
    ]),
  });
}
