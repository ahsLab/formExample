import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormItem } from '../htmlModels/formItem';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) { }

  getForm() {
    return this.firestore. collection('forms').snapshotChanges();
}
createForm(form: FormItem){
  return this.firestore.collection('forms').add(form);
}
updateForm(form: FormItem){
   
  this.firestore.doc('policies/' + form.Id).update(form);
}
deleteForm(formId: string){
  this.firestore.doc('policies/' + formId).delete();
}
deleteFormItem(formId: string){
  this.firestore.doc('policies/' + formId).collection("").doc(formId).delete();
}
}
