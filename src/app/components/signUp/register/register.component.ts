import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  newUserDetails: any[]= []
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });


get fullName() {
  return this.registerForm.get('fullName');
}
get email() {
    return this.registerForm.get('email');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  
  registerNewUser() {
    console.log(this.registerForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
