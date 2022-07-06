import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.valdators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  gender = [
    { name: 'Male', value: 'm' },
    { name: 'Female', value: 'f' },
  ];
  selectedGender: any;
  value: Date = new Date();
  registerForm: FormGroup = this._registerFormBuilder.group(
    {
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[\S][A-Za-z]{2,}$/)],
      ],
      date: [new Date(), [Validators.required]],
      gender: [{}, [Validators.required]],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[\S][A-Za-z]{2,}$/)],
      ],
      userName: [
        '',
        [Validators.required, Validators.pattern(/^[\S][A-Za-z0-9]{5,}$/)],
      ], //no spaces,2 char or more,no special character
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})./
          ),
        ],
      ],
      checkBox: [false, []],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: ConfirmPasswordValidator('password', 'confirmPassword'),
    }
  ); //Form group having all inputs with validators
  //create array of objects contain genders

  get controlValidation() {
    return this.registerForm.controls;
  }
  constructor(private _registerFormBuilder: FormBuilder) {}

  ngOnInit(): void {}
  submitReactiveForm(): any {
    return this.registerForm.controls;
  }
}
