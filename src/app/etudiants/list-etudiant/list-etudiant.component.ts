import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {Etudiant} from '../etudiant';
import {EtudiantService} from '../etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
etudiants: any;
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.getEtudiantsList();
  }
  getEtudiantsList() {
    this.etudiantService.getEtudiantsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.etudiants = customers;
    });
  }

  deleteEtudiant() {
    const c = confirm('etes vous sure de supprimer tous');
    if (!c) {return; }
    this.etudiantService.deleteAll();
  }
}
