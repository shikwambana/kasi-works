import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LoginComponent } from './components/signUp/login/login.component';
import { RegisterComponent } from './components/signUp/register/register.component';
import { PersonalComponent } from './components/userDetails/personal/personal.component';
import { ProfessionalComponent } from './components/userDetails/professional/professional.component';
import { SkillsComponent } from './components/userDetails/skills/skills.component';
import { HobbiesComponent } from './components/userDetails/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKG04nI00jpfPih5dlIQs2tJ5G2eHkrpA",
  authDomain: "kasi-works.firebaseapp.com",
  projectId: "kasi-works",
  storageBucket: "kasi-works.appspot.com",
  messagingSenderId: "223010154281",
  appId: "1:223010154281:web:43c96ce3b2e5f17d137938",
  measurementId: "G-THVRSY7ELW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PersonalComponent,
    ProfessionalComponent,
    SkillsComponent,
    HobbiesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
