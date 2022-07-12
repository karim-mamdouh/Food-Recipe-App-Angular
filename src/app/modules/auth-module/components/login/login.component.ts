import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showErrors: boolean = false; //Flag to show form errors
  loginForm: FormGroup = this._loginFormBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      ],
    ],
    password: ['', [Validators.required]],
  }); //Form group having all inputs with validators

  get controlValidation() {
    return this.loginForm.controls;
  }

  constructor(
    private _loginFormBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  loginFormSubmit(): void {
    //check login form status => if validators not valid return false
    if (this.loginForm.status === 'INVALID') {
      this.showErrors = true;
    } else {
      // get user info from local storage
      let user = localStorage.getItem('users');
      if (user) {
        //three cases=> null:if local storage has no users key
        let userValidate = JSON.parse(user as string); // convert user array to object
        //check if user input (email & password) are in the users array in the local storage //
        let check = userValidate.some(
          // true or false
          (e: any) =>
            e.email === this.loginForm.value.email &&
            e.password === this.loginForm.value.password
        );
        if (check) {
          alert('Welcome back');
          //Set token in local storage to true
          localStorage.setItem('token', JSON.stringify('true'));
          this._router.navigate(['/']);
        } else {
          alert('Please sign up');
        }
      } else {
        alert('Please sign up');
      }
    }
  }
}
