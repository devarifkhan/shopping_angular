import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signOut, User } from 'firebase/auth';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: User | null = null;  // Initialize user as null

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user = user as User;  // Cast user to the correct type
      if (user) {
        console.log('User is logged in', user);
      } else {
        console.log('User is logged out');
      }
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('User signed out successfully');
      this.user = null;  // Clear user data on logout
    }).catch(error => {
      console.error('Error signing out: ', error);
    });
  }
}
