import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})


export class CreatePostComponent {
  photo!: File
  title!: string
  loading = false


  constructor(private authService: AuthService, private http: HttpClient, private router: Router){ }

  onSubmit(): void{
    this.loading= true;
    // this.authService.createPost(this.title, this.photo).subscribe(
    //   (response) => {
    //     // Handle successful login
    //     console.log('Post creation successful', response);
    //   },
    //   (error) => {
    //     // Handle login error
    //     console.log("after+ ", this.photo);
    //     console.error('Post creation failed', error);
    //   }
    // )
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('photo', this.photo);

    this.http.post('https://cracki-backend.onrender.com/posts/new', formData, {withCredentials: true}).subscribe(()=>{
      console.log("Post created successfully");
      this.router.navigate(["me"])
    }).add(()=>{
      this.loading = false;
    })
    


    // onAvatarSelected(event: Event): void {
    //   const inputElement = event.target as HTMLInputElement;
    //   if (inputElement.files && inputElement.files.length > 0) {
    //     this.avatar = inputElement.files[0];
    //   }
    // }
  }


  onPhotoSubmit(event: Event): void{
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
    }
  }



}
