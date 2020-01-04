import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {Etudiant} from '../etudiant';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {


  etudiant: Etudiant = new Etudiant();
  submitted = false;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
  }

  newEtudiant(): void {
    this.submitted = false;
    this.etudiant = new Etudiant();
  }

  save() {
    this.etudiantService.createEtudiant(this.etudiant);
    this.etudiant = new Etudiant();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
