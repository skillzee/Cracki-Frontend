import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = 'https://cracki-backend.onrender.com/users/login';
    return this.http.post(url, { email, password });
  }
  
  createPost(title: string, photo: File): Observable<any>{
    const url = 'http://localhost:3000/posts/new';
    return this.http.post(url, { title, photo });

  }
  register(name: string, username: string, email: string, password: string, avatar: File): Observable<any> {
    const url = 'https://cracki-backend.onrender.com/users/new';
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', avatar); 
    return this.http.post(url, formData);
  }

}

