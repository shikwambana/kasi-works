import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/signUp/login/login.component';
import { RegisterComponent } from './components/signUp/register/register.component';
import { PersonalComponent } from './components/userDetails/personal/personal.component';
import { ProfessionalComponent } from './components/userDetails/professional/professional.component';
import { HobbiesComponent } from './components/userDetails/hobbies/hobbies.component';
const routes: Routes = [
  {
    path: 'hobbies', component: HobbiesComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
  path: '', component: HomeComponent, children : [
    {
      path: 'personal-info', component: PersonalComponent
    },
    {
      path: 'professional-info', component: ProfessionalComponent
    },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
