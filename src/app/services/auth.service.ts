import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private uid!:any
  // uiid!:any
  constructor(private http: HttpClient, private router: Router) {   }

  register(name: string, username: string,email: string, password: string, avatar: File): Observable<any>{
    const fd = new FormData();
    fd.append('name', name);
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('avatar', avatar);
    return this.http.post('https://cracki-backend.onrender.com/users/new', fd);
  }

  login(email: string, password: string){
    this.http.post<any>('https://cracki-backend.onrender.com/users/login', {email, password}, {withCredentials: true}).subscribe((response)=>{
      console.log('Login successful', response);
      this.router.navigate(["all"])
      // this.uid = response
      localStorage.setItem('uid', response._id);

    },
  (error)=>{
    console.log("Error While Logging In");
  });
  }

  createPost(title: string, avatar: File): Observable<any>{
    return this.http.post('https://cracki-backend.onrender.com/posts/new', {title, avatar});
  }



  isAuthenticated(): boolean{
    return !!localStorage.getItem('uid');
  }

  resetAuthentication(){
    localStorage.removeItem('uid');
  }
  }

  

