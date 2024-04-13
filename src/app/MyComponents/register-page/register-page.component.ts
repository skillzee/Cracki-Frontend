import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})


export class RegisterPageComponent {



  username: string ="";
  email: string ="";
  password: string ="";
  avatar!: File;
  name: string= "";
  loading = false
  
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit(): void{
    this.loading = true
    // const newUser = {
    //   username : this.username,
    //   email: this.email,
    //   password: this.password,
    //   profile_pic: this.profile_pic
    // };
    
    console.log("Names: "+this.name+this.username+this.password+this.email);
    

       
    this.authService.register(this.name, this.username, this.email, this.password, this.avatar).subscribe(
      (response) => {
        // Handle successful login
        console.log('Reistration successful', response);
        this.router.navigate(["login"])
        alert("Registration Successful")
      
      },
      (error) => {
        // Handle login error
        console.log("after+ ", this.avatar);
        console.error('Registration failed', error);
        console.log("Parth ",error.error.message);
        if (error.error && error.error.message) {
          console.log("Error message from server:", error.error.message);
          alert(error.error.message);
      }
        
      }
    ).add(() => {
      this.loading = false
    })
    
  }

  onAvatarSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.avatar = inputElement.files[0];
    }
  }
  

}
