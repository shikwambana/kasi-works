import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginUserDetails: any[]= []

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  newUserInputs() {
    console.log("form values", [this.registerForm.value]);
    this.loginUserDetails = [this.registerForm.value]
    console.log("user details", this.loginUserDetails);
    sessionStorage.setItem("login data", JSON.stringify([this.loginUserDetails]));
  }

  constructor() {}

  ngOnInit(): void {}
}
