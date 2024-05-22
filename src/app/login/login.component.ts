import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) { }

  login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  }
}
