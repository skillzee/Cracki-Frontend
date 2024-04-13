import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginPageComponent, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  

  // authservice!:AuthService
  constructor(private http: HttpClient, private route: Router,public authservice: AuthService){}
  logOut(){
    this.authservice.resetAuthentication()
    
    this.route.navigate(["login"])
    this.http.post<any>("http://localhost:3000/users/logout",{}, {withCredentials: true}).subscribe((response)=>{
      console.log(response.message);
      console.log("Login?: ",this.authservice.isAuthenticated());
      console.log("Logged Out suuceesFully");
      
    },
  (error)=>{
    console.log("Error While Logging Out");
    
  })
    
  }




  
}
