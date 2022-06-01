import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/signUp/login/login.component';
import { RegisterComponent } from './components/signUp/register/register.component';
import { PersonalComponent } from './components/userDetails/personal/personal.component';
import { ProfessionalComponent } from './components/userDetails/professional/professional.component';
<<<<<<< HEAD
import { SkillsComponent } from './components/userDetails/skills/skills.component';
=======
import { HobbiesComponent } from './components/userDetails/hobbies/hobbies.component';
import { SkillsComponent } from './components/userDetails/skills/skills.component';

>>>>>>> 8dbe11bb33f8b62bde6ee149686c2d638ff3488b

const routes: Routes = [
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'register', component: RegisterComponent
  // },
  {
  path: '', component: HomeComponent, children : [
    {
      path: 'personal-info', component: PersonalComponent
    },
    {
      path: 'professional-info', component: ProfessionalComponent
    },
    {
<<<<<<< HEAD
      path: 'skills', component:SkillsComponent
    },
=======
      path: 'hobbies-info', component: HobbiesComponent
    },
    {
      path: 'skills-info', component: SkillsComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'login', component: LoginComponent
    }
>>>>>>> 8dbe11bb33f8b62bde6ee149686c2d638ff3488b
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
