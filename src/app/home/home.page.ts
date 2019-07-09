import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  form: FormGroup = this.fb.group({
    text: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(public fb: FormBuilder) {}

  onFormSubmit(evt: any) {
    this.form.reset({
      text: ''
    });
  }
}
