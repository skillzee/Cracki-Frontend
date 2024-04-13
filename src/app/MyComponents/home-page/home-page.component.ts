import { Component } from '@angular/core';

import { LoginPageComponent } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit(){
    this.http.post<any>("https://cracki-backend.onrender.com/users/logout",{}, {withCredentials: true}).subscribe((response)=>{
      console.log(response.message);
      
      console.log("Logged Out suuceesFully");
      
    },
  (error)=>{
    console.log("Error While Logging Out");
    
  })
  }

  login(){
    this.router.navigate(['login']);
  }
}
