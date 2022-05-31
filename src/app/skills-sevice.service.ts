import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import{doc,setDoc} from 'firebase/firestore'
import { AngularFirestore } from '@angular/fire/compat//firestore';

@Injectable({
  providedIn: 'root'
})
export class SkillsSeviceService {
  skillsRef: AngularFireList<any>;
  //const dbs=getStorage();
  // skillsRef: AngularFireObject<any>;
  constructor( private firestore: AngularFirestore) { }

  AddStudent(skills: any) {
    return this.firestore.collection('skills').add({
      levelOfSkill: skills.value['skillsArray'][0]['levelOfSkill'],
skillName:skills.value['skillsArray'][0]['skillName'], 
skillsDescription: skills.value['skillsArray'][0]['skillsDescription'],
type: skills.value['skillsArray'][0]['type'],
    })

}
}
