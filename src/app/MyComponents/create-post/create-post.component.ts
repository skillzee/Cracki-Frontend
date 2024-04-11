import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

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


  constructor(private authService: AuthService){ }

  onSubmit(): void{
    this.authService.createPost(this.title, this.photo).subscribe(
      (response) => {
        // Handle successful login
        console.log('Post creation successful', response);
      },
      (error) => {
        // Handle login error
        console.log("after+ ", this.photo);
        console.error('Post creation failed', error);
      }
    )


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
