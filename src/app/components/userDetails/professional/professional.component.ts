import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ProfessionalSeviceService } from 'src/app/professional-sevice.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  levels: any = [1, 2, 3, 4, 5];
  constructor(private fb: FormBuilder, private professionalSevice:ProfessionalSeviceService ) { }

  ngOnInit(): void {
  }
  professionalForm = new FormGroup({
    professionalArray: new FormArray([
      this.fb.group({
        companyName: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required),
        levelOfpositon: new FormControl('', Validators.required),
        positionDescription: new FormControl('', Validators.required),
      }),
    ]),
  });

  addSkills() {
    const control = <FormArray>this.professionalForm.controls.professionalArray;
    control.push(
      this.fb.group({
        companyName: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required),
        positionDescription: new FormControl('', Validators.required),
        levelOfpositon: new FormControl('', Validators.required),
      })
    );
  }

  removeSkills(index: number) {
   
    if(index>0){
      const control = <FormArray>this.professionalForm.controls.professionalArray;
      control.removeAt(index);
    }
    
  }

  onSubmit(details:any):any {
    console.log("this",details.value);
  
    this.professionalSevice.AddStudent(details);
    
  }
  get validation() {
    return this.professionalForm.controls;
  }
}
