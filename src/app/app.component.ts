import { Component } from '@angular/core';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './MyComponents/register-page/register-page.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterPageComponent, LoginPageComponent, NavBarComponent, RouterModule, FormsModule, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cracki';
}
