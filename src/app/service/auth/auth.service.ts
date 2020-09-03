import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { trace } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: Observable<firebase.User>
  constructor(private auth: AngularFireAuth) {
    this.authUser = this.auth.authState.pipe(trace('authState'));
   }

  login(email: string,password: string) {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  signUp(email: string,password: string, name: string) {
    return this.auth.createUserWithEmailAndPassword(email,password)
      .then((res) => {
        const user = firebase.auth().currentUser;
        if(user) {
          user.updateProfile({
            displayName: name
          });
        }
        console.log(user);
      });
  }

  logout() {
    return this.auth.signOut();
  }
}
