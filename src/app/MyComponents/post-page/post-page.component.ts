import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {

  post!:any
  postid!: any
  count=0
  comment!:string
  activatedRoute = inject(ActivatedRoute)
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router){ }

  ngOnInit(){
    this.postid = this.activatedRoute.snapshot.params['id'];
    this.getParticularPost(this.postid);
    // console.log(this.postid);
    
  }  
  

  getParticularPost(id:any){
    this.http.get<any>("http://localhost:3000/posts/post/"+id, {withCredentials: true}).subscribe(
    (respose)=>{
      this.post = respose.post
    },
    (error)=>{
      console.log("Error in getting post");
      
    }
    )
  } 

  like(userid: any) {
    // Get the like icon element by ID
    const likeIcon = document.getElementById('like-icon-' + userid);
  
    // Trigger animation by adding a CSS class ('clicked') to the like icon
    if (likeIcon) {
      likeIcon.classList.add('clicked'); // Add 'clicked' class to trigger animation
  
      // Make the HTTP GET request to like the post
      this.http.get<any>('http://localhost:3000/posts/' + userid, { withCredentials: true }).subscribe(
        (response) => {
          if (response.success) {
            console.log(response.message); // Log the success message to the console
            this.getParticularPost(this.postid)
          }
  
          // Remove the 'clicked' class after a short delay to allow animation to complete
          setTimeout(() => {
            likeIcon.classList.remove('clicked'); // Remove 'clicked' class to reset animation state
          }, 400); // Adjust this timeout to match the animation duration in milliseconds
        },
        (error) => {
          console.error('Error liking post:', error); // Log any error that occurs during the HTTP request
        }
      );
    }
  }

  sendComment(){

    this.http.put<any>('http://localhost:3000/posts/'+this.postid+ '/comment',{comment:this.comment}, {withCredentials:true}).subscribe(
      (response)=>{
        console.log(response);
        this.getParticularPost(this.postid)
        this.comment=""
        
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }

  getUserProfile(id:any){
    this.router.navigateByUrl('user/'+id)
  }

  onSubmit(){
    
  }
  






}
