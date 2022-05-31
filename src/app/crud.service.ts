import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }
  AddPersonalInfo(record:any) {
  
    return this.firestore.collection('personal-Info').add({
      firstName:record.value.firstName,
      lastName:record.value.lastName,
      idNumber:record.value.idNumber,
      dateOfBirth:record.value.dateOfBirth,
      gender:record.value.gender,
      nationality:record.value.nationality,
      contactDetails:record.value.contactDetails,
      address:record.value.address,

    })
}
}

