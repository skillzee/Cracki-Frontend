import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {

  user!: any
  postid!:any
  count=0

  posts: any[] = [];


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchUser();
    this.fetchPosts();
  }

  fetchUser(): void {
    this.http.get<any>('https://cracki-backend.onrender.com/users/myProfile', {withCredentials: true}).subscribe(
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
    this.http.get<any>('https://cracki-backend.onrender.com/posts/all', {withCredentials: true}).subscribe(
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
    this.http.get<any>('https://cracki-backend.onrender.com/posts/'+userid, {withCredentials: true}).subscribe(
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

  postClicked(id:any):void{
   
    this.router.navigateByUrl('post/'+id)
    
    console.log("all Post Componet",id);
    
    
  }





}
