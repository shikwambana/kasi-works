import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  personalInfoForm: FormGroup;;

  constructor(private formBuilder: FormBuilder) {
    this.personalInfoForm = this.formBuilder.group({
      firstName:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(form, "Form");
  }
}
