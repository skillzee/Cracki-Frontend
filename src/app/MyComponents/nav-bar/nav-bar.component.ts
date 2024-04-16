import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginPageComponent, RouterModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  

  isNavbarCollapsed = true;
  username!: string


  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // authservice!:AuthService
  constructor(private http: HttpClient, private route: Router,public authservice: AuthService){}
  logOut(){
    this.authservice.resetAuthentication()
    
    this.route.navigate(["login"])
    this.http.post<any>("https://cracki-backend.onrender.com/users/logout",{}, {withCredentials: true}).subscribe((response)=>{
      console.log(response.message);
      console.log("Login?: ",this.authservice.isAuthenticated());
      console.log("Logged Out suuceesFully");
      
    },
  (error)=>{
    console.log("Error While Logging Out");
    
  })
    
  }

  search(){
    this.http.post<any>("https://cracki-backend.onrender.com/users/search", {username: this.username}, {withCredentials: true}).subscribe(
      (response)=>{
        console.log(response);
        this.route.navigate(["user/"+response.user._id])
      },
      (error)=>{
        console.log(error);
        alert("User Not Found")
      })
    }

    
  




  
}
