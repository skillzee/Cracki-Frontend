import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  imports:[CommonModule],
  standalone:true,
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<any>('http://localhost:3000/posts/all', {withCredentials: true}).subscribe(
      (response) => {
        if(response.success){
        this.posts = response.posts
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
