import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showErrors: boolean = false; //Flag to show form errors
  loginForm: FormGroup = this._loginFormBuilder.group({
    email: ['', [Validators.required, Validators.pattern('')]],
    password: ['', [Validators.required]],
  }); //Form group having all inputs with validators

  get controlValidation() {
    return this.loginForm.controls;
  }

  constructor(private _loginFormBuilder: FormBuilder) {}

  ngOnInit(): void {}

  loginFormSubmit(): void {
    if (!this.loginForm.errors) {
      this.showErrors = true;
    } else {
      console.log(this.loginForm.value);
    }
  }
}
