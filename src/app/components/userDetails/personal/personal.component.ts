import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
 // personalForm = new FormControl('');
 personalDetails:any=[];
  constructor( private fb:FormBuilder) { }

  personalInfoForm = this.fb.group({
    firstName:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    idNumber:new FormControl('', Validators.compose([Validators.required,Validators.maxLength(13), Validators.minLength(13)])),
    dateOfBirth:new FormControl('', Validators.required),
    gender:new FormControl('', Validators.required),
    nationality:new FormControl('', Validators.required),

    contactDetails:this.fb.group({
      email:new FormControl('', [Validators.required, Validators.email]),
      phoneNumber:new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
    }),

    address: this.fb.group({
      address:new FormControl('', Validators.required),
      city:new FormControl('', Validators.required),
      state:new FormControl('', Validators.required),
      postalCode:new FormControl('',[ Validators.required, Validators.minLength(4), Validators.maxLength(5)]),

    }),

  });

  get function() {
    return this.personalInfoForm.controls;
  }
  contact(){
    this.personalInfoForm.get('contactDetails.phoneNumber')?.hasError
    this.personalInfoForm.get('contactDetails.email')?.hasError
  }
  addresses(){
    this.personalInfoForm.get('address.address')?.hasError
    this.personalInfoForm.get('address.city')?.hasError
    this.personalInfoForm.get('address.state')?.hasError
    this.personalInfoForm.get('postalCode.state')?.hasError


  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.personalInfoForm);
    this.personalDetails.push(this.personalInfoForm.value);

  }
}
