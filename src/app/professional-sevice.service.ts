import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalSeviceService {

  constructor( private firestore: AngularFirestore) { }

  AddStudent(professional: any) {
    return this.firestore.collection('professional-info').add({
      companyName: professional.value['professionalArray'][0]['companyName'],
      position:professional.value['professionalArray'][0]['position'], 
      positionDescription: professional.value['professionalArray'][0]['positionDescription'],
levelOfpositon: professional.value['professionalArray'][0]['levelOfpositon'],
    })

}
}
