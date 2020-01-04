import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEtudiantComponent} from './etudiants/list-etudiant/list-etudiant.component';
import {CreateEtudiantComponent} from './etudiants/create-etudiant/create-etudiant.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuardService} from './services/auth-guard.service';



const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: '', redirectTo: 'etudiants', pathMatch: 'full' },
  { path: 'etudiants', canActivate: [AuthGuardService], component: ListEtudiantComponent },
  { path: 'add', canActivate: [AuthGuardService] , component: CreateEtudiantComponent },
  { path: '**', redirectTo: 'etudiants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
