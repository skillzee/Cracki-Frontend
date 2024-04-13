import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuthenticated:boolean = false
  constructor(private http: HttpClient) { }

  register(name: string, username: string,email: string, password: string, avatar: File): Observable<any>{
    const fd = new FormData();
    fd.append('name', name);
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('avatar', avatar);
    return this.http.post('http://localhost:3000/users/new', fd);
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post('http://localhost:3000/users/login', {email, password}, {withCredentials: true});
  }

  createPost(title: string, avatar: File): Observable<any>{
    return this.http.post('https://cracki-backend.onrender.com/posts/new', {title, avatar});
  }

  setUid(auth:boolean){
    this.isAuthenticated=auth;

  }

  getUid(){
    return this.isAuthenticated
  }
  }

  

