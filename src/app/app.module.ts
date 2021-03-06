import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// !Firebase Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// !Components
import { LoginComponent } from './components/signUp/login/login.component';
import { RegisterComponent } from './components/signUp/register/register.component';
import { PersonalComponent } from './components/userDetails/personal/personal.component';
import { ProfessionalComponent } from './components/userDetails/professional/professional.component';
import { SkillsComponent } from './components/userDetails/skills/skills.component';
import { HobbiesComponent } from './components/userDetails/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
// !Extra Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
=======
import { FlexLayoutModule } from '@angular/flex-layout';
// !Angular Materials
import {MatCardModule} from '@angular/material/card';
import{ MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

>>>>>>> 8dbe11bb33f8b62bde6ee149686c2d638ff3488b
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
=======
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule
>>>>>>> 8dbe11bb33f8b62bde6ee149686c2d638ff3488b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
