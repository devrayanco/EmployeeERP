import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Observable, from, switchMap, tap } from 'rxjs';
import { environment } from '../../environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiKey}api/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: Auth
  ) {}

  login(email: string, senha: string) {
    return from(signInWithEmailAndPassword(this.auth, email, senha)).pipe(
      switchMap(userCredential => {
        return from(userCredential.user.getIdToken()).pipe(
          tap(token => {
            const uid = userCredential.user.uid;
            localStorage.setItem('token', token);
            localStorage.setItem('uid', uid);
          }),
          switchMap(token => {
            const uid = userCredential.user.uid;
            return this.http.post<{ token: string; uid: string; nome: string }>(`${this.baseUrl}/login`, { 
              email,
              uid
            });
          }),
          tap(res => {
            console.log('🔐 Resposta do login:', res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('uid', res.uid);
            localStorage.setItem('userName', res.nome);
          })
        );
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('userName');
    location.href = '/login';
  }

  get token() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  register(nome: string, email: string, senha: string): Observable<any> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, senha).then((userCredential) => {
        if (userCredential.user) {
          return updateProfile(userCredential.user, {
            displayName: nome,
          });
        }
        return null;
      })
    );
  }
}
