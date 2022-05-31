import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  categoriesOfHobbies:any[] =["general",
  "sports_and_outdoors",
  "education",
  "collection",
  "competition",
  "observation"]
  // hobbiesArray:any=[]
  // discripOfHobbie:FormControl;
  // categoriesOfHobbie:FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}
  hobbiesForm=new FormGroup({
    hobbies:new FormArray([
      this.fb.group({
        category:new FormControl(null,[Validators.required]),
        discripOfHobbie:new FormControl(null,[Validators.required])
        // new FormControl(null,Validators.required)
  }),]),});
 onSubmit(value:any){

      console.log('value:',value.value);
    }
    addHobbies(){
      const control = <FormArray>this.hobbiesForm.controls.hobbies;
      control.push(this.fb.group({
      categoriesOfHobbies:new FormControl(null,[Validators.required]),
      discripOfHobbie:new FormControl(null,[Validators.required])
})) 
      
    }
    removeHobbies(i:any){
      const control = <FormArray>this.hobbiesForm.controls.hobbies;
    control.removeAt(i)
    }
}
