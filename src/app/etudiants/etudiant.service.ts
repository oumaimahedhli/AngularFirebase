import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Etudiant} from './etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private  dbPath = '/etudiants';

  etudiantsRef: AngularFirestoreCollection<Etudiant> = null;

  constructor(private db: AngularFirestore) {
    this.etudiantsRef = db.collection(this.dbPath);
  }

  createEtudiant(etudiant: Etudiant): void {
    this.etudiantsRef.add({...etudiant});
  }

  deleteEtudiant(id: string): Promise<void> {
    return this.etudiantsRef.doc(id).delete();
  }

  getEtudiantsList(): AngularFirestoreCollection<Etudiant> {
    return this.etudiantsRef;
  }

  deleteAll() {
    this.etudiantsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

}
