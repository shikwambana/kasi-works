import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = ['Medicine', 'Science', 'sport', 'IT', 'Artistry', 'design'];
  levels: any = [1, 2, 3, 4, 5];
  skillsFormArr: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  skillsForm = new FormGroup({
    skillsArray: new FormArray([
      this.fb.group({
        type: new FormControl('', Validators.required),
        skillName: new FormControl('', Validators.required),
        levelOfSkill: new FormControl('', Validators.required),
        skillsDescription: new FormControl('', Validators.required),
      }),
    ]),
  });

  addSkills() {
    const control = <FormArray>this.skillsForm.controls.skillsArray;
    control.push(
      this.fb.group({
        type: new FormControl('', Validators.required),
        skillName: new FormControl('', Validators.required),
        skillsDescription: new FormControl('', Validators.required),
        levelOfSkill: new FormControl('', Validators.required),
      })
    );
  }

  removeSkills(index: number) {
    const control = <FormArray>this.skillsForm.controls.skillsArray;
    control.removeAt(index);
  }

  onSubmit(details) {
    console.log(details);
  }
  get func() {
    return this.skillsForm.controls;
  }
}
