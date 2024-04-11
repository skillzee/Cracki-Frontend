import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})


export class RegisterPageComponent {


  loading = false;

  username: string ="";
  email: string ="";
  password: string ="";
  avatar!: File;
  name: string= "";

  constructor(private authService: AuthService) { }
  onSubmit(): void{
    // const newUser = {
    //   username : this.username,
    //   email: this.email,
    //   password: this.password,
    //   profile_pic: this.profile_pic
    // };

    console.log("Names: "+this.name+this.username+this.password+this.email);
    this.loading = true
    

       
    this.authService.register(this.name, this.username, this.email, this.password, this.avatar).subscribe(
      (response) => {
        // Handle successful login
        console.log('Reistration successful', response);
        this.loading = false
      
      },
      (error) => {
        // Handle login error
        console.log("after+ ", this.avatar);
        console.error('Registration failed', error);
        console.log("Parth ",error.error.message);
        
      }
    );
    
  }

  onAvatarSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.avatar = inputElement.files[0];
    }
  }
  

}
