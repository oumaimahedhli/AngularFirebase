import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CreateEtudiantComponent } from './etudiants/create-etudiant/create-etudiant.component';
import { ListEtudiantComponent } from './etudiants/list-etudiant/list-etudiant.component';
import { DetailEtudiantComponent } from './etudiants/detail-etudiant/detail-etudiant.component';
import {AngularFirestore, FirestoreSettingsToken} from '@angular/fire/firestore';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {EtudiantService} from './etudiants/etudiant.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEtudiantComponent,
    ListEtudiantComponent,
    DetailEtudiantComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule // for database
  ],
  providers:  [[AngularFirestore], AuthService, EtudiantService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
