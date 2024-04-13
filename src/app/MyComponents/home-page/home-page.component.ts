import { Component } from '@angular/core';

import { LoginPageComponent } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(){
    console.log("Logged in?:",this.authService.getUid())
      
  }



  login(){
    this.router.navigate(['login']);
  }
}
