import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email!: string;
  password!: string;
  loading = false;
  authenticated= false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);
        this.authenticated= true
        this.router.navigate(["all"])
        console.log(response.message);
        // this.nav.isLoggedIn = true

        
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    ).add(()=>{
      this.loading= false;
    })
  }

  
}
