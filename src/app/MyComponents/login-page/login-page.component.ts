import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



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

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);
        console.log(response.message);
        
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
