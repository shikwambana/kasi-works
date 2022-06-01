import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // TODO make form invalid
passwordsMatch: boolean = true;
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
  }
  );


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
  checkPasswords() {
    if(this.password !== this.confirmPassword){
      this.confirmPassword?.setErrors([this.passwordsMatch = false]);
    }
  }

  
  registerNewUser() {
    console.log("form values", [this.registerForm.value]);
    this.newUserDetails = this.registerForm.value
    console.log("user details", this.newUserDetails);
    sessionStorage.setItem("register data", JSON.stringify([this.newUserDetails]));
  }
  constructor() {}

  ngOnInit(): void {}
}
