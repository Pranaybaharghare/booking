import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignupComponent } from './Components/Signup/Signup.component';
import { AuthenticationService } from './Components/Signup/AuthService.service';
import { LoginComponent } from './Components/Login/Login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,HomeComponent,NavbarComponent,SignupComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  constructor(private router:Router, public authService:AuthenticationService){}
  ngOnInit(): void {
    this.router.navigateByUrl('/signup');
  }
 

 
}
