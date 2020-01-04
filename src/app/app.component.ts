import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularFirebase';
  isAuth: boolean;

  constructor(private authService: AuthService) {

   const config = {
      apiKey: 'AIzaSyD-95q6HveVXMzT73JJyTQ59q9ENPuSL7E',
        authDomain: 'apptest-6abf2.firebaseapp.com',
        databaseURL: 'https://apptest-6abf2.firebaseio.com',
        projectId: 'apptest-6abf2',
        storageBucket: 'apptest-6abf2.appspot.com',
        messagingSenderId: '422286732095',
        appId: '1:422286732095:web:eb584218e8ab27ec42018a',
        measurementId: 'G-Q058VCKX9H'
    };
   firebase.initializeApp(config);
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
