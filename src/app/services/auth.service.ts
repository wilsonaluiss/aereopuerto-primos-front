import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authUser: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const res = await this.authUser.signInWithEmailAndPassword(email, password);
      return res;

    } catch (error) {
      console.log(error);
    }

  }

  async register(email: string, password: string): Promise<any> { 

    try {
      const res = await this.authUser.createUserWithEmailAndPassword(email, password);
      return res;

    } catch (error) {
      console.log(error);
    }

  }


  async logout() {
    try {
      await this.authUser.signOut();
      this.router.navigate(['/login']);

    } catch (error) {
      console.log(error);
    }

  }

  /* async getCurrentUser() {

    return await firstValueFrom(this.authUser.authState);

  } */
}


