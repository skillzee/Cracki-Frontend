import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, username: string,email: string, password: string, avatar: File): Observable<any>{
    const fd = new FormData();
    fd.append('name', name);
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('avatar', avatar);
    return this.http.post('https://cracki-backend.onrender.com/users/new', fd);
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post('https://cracki-backend.onrender.com/users/login', {email, password});
  }

  createPost(title: string, avatar: File): Observable<any>{
    return this.http.post('https://cracki-backend.onrender.com/posts/new', {title, avatar});
  }
  }

