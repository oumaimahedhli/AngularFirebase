import {Component, Input, OnInit} from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {Etudiant} from '../etudiant';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  @Input() etudiant: Etudiant;
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
  }
  deleteEtud() {
    const c = confirm('etes vous sure de supprimer');
    if (!c) {return; }
    this.etudiantService
      .deleteEtudiant(this.etudiant.id)
      .catch(err => console.log(err));
  }
  deleteEtudiant() {
    const c = confirm('etes vous sure de supprimer ');
    if (!c) {return; }
    this.etudiantService.deleteAll();
  }


}
