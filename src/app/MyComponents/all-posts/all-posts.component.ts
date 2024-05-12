import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostPageComponent } from '../post-page/post-page.component';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  imports:[CommonModule, PostPageComponent],
  standalone:true,
  styleUrls: ['./all-posts.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AllPostsComponent implements OnInit {
  posts: any[] = [];
  postid!:any
  private refreshPosts$ = new BehaviorSubject<boolean>(true);

  // @Output() post = new EventEmitter<any>();





  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { 
    console.log(authService.isAuthenticated());
    
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<any>('https://cracki-backend.onrender.com/posts/all', {withCredentials: true}).subscribe(
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

  
  like(userid: any) {

    const likeIcon = document.getElementById('like-icon-' + userid);
    // this.fetchPosts()
  
    
    if (likeIcon) {
      likeIcon.classList.add('clicked'); 
  

      this.http.get<any>('https://cracki-backend.onrender.com/posts/' + userid, { withCredentials: true }).subscribe(
        (response) => {
          if (response.success) {
            console.log(response.message);
            // this.router.navigate(["me"])
            // this.refreshPosts$.next(true);
            this.fetchPosts()
            // this.router.navigate(["all"]) // Log the success message to the console
          }
  
       
          setTimeout(() => {
            likeIcon.classList.remove('clicked'); 
          }, 400); 
        },
        (error) => {
          console.error('Error liking post:', error); 
        }
      );
    }
  }
  
  postClicked(id:any):void{
   
    this.router.navigateByUrl('post/'+id)
    
    console.log("all Post Componet",id);
    
    
  }
  
    shareData(){
      return this.postid
    }
  

    getUserProfile(id:any){
      this.router.navigateByUrl('user/'+id)
    }



    


}