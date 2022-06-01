import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsSeviceService } from 'src/app/skills-sevice.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = ['Medicine', 'Science', 'sport', 'IT', 'Artistry', 'design'];
  levels: any = [1, 2, 3, 4, 5];
  skillsFormArr: FormGroup;
  storeArray: any = [];
  constructor(
    private fb: FormBuilder,
    private service: SkillsSeviceService,
    private router: Router
  ) {}

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
    if (index > 0) {
      const control = <FormArray>this.skillsForm.controls.skillsArray;
      control.removeAt(index);
    }
  }

  onSubmit(details: any): any {
    console.log('this', details.value);
    this.service.AddStudent(details);
    this.router.navigate(['/hobbies-info']);
  }
  get validation() {
    return this.skillsForm.controls;
  }
}
