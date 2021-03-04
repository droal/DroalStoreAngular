import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

  createUser(email: string, password: string): Promise<any>{
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any>{
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<any>{
    return this.af.signOut();
  }

  isUser(){
    return this.af.authState;
  }
}
