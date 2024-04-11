import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

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
    const url = 'https://cracki-backend.onrender.com/posts/new';
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', photo);
    
    return this.http.post(url, formData).pipe(
      catchError((error) => {
        console.error('Error creating post:', error);
        throw error;
      })
    );
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

