import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginPageComponent, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  

  isLoggedIn = false;

  constructor(private http: HttpClient){}
  logOut(){
    this.http.post<any>("http://localhost:3000/users/logout", {withCredentials: true}).subscribe((response)=>{
      console.log(response.message);
      
      console.log("Logged Out suuceesFully");
      
    },
  (error)=>{
    console.log("Error While Logging Out");
    
  })
    
  }
}
