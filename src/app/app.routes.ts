import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { RegisterPageComponent } from './MyComponents/register-page/register-page.component';
import { CreatePostComponent } from './MyComponents/create-post/create-post.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { AllPostsComponent } from './MyComponents/all-posts/all-posts.component';
import { MyPostsComponent } from './MyComponents/my-posts/my-posts.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'create-post', component: CreatePostComponent},
    { path: 'all', component: AllPostsComponent},
    { path: 'me', component: MyPostsComponent },
    { path: '', component: HomePageComponent },
    // { path: '/', component:HomePageComponent}
];
