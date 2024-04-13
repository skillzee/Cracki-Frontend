import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  user!: any
  postid!:any
  userid!:any
  count=0
  activatedRoute = inject(ActivatedRoute)

  posts: any[] = [];


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.userid = this.activatedRoute.snapshot.params['id'];
    this.fetchUser(this.userid);
    this.fetchPosts();
    // console.log(this.postid);
    
  }

  fetchUser(id:any): void {
    this.http.get<any>('http://localhost:3000/users/'+id, {withCredentials: true}).subscribe(
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

  postClicked(id:any):void{
   
    this.router.navigateByUrl('post/'+id)
    
    console.log("all Post Componet",id);
    
    
  }





}
