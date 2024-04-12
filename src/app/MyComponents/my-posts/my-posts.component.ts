import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {

  user!: any

  posts: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUser();
    this.fetchPosts();
  }

  fetchUser(): void {
    this.http.get<any>('http://localhost:3000/users/myProfile', {withCredentials: true}).subscribe(
      (response) => {
        if(response.success){
        this.user = response.user
      };
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  fetchPosts(): void {
    this.http.get<any>('http://localhost:3000/posts/all', {withCredentials: true}).subscribe(
      (response) => {
        if(response.success){
        if(response.posts){
          this.posts = response.posts
        }
      };
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  like(userid: any){
    this.http.get<any>('http://localhost:3000/posts/'+userid, {withCredentials: true}).subscribe(
      (response) => {
        if(response.success){
          console.log(response.message);
        }
      },
      (error) => {
        console.error('Error liking post:', error);
      }
    )
  }





}
