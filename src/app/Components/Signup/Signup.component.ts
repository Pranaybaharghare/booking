import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './AuthService.service';

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css'],
  standalone: true,
  imports:[FormsModule,
           RouterOutlet,
           RouterLink,]
})
export class SignupComponent implements OnInit {


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }


  togglePassword(): void {
    if (this.showPassword === false) {
      this.showPassword = true;
    }
    else {
      this.showPassword = false;
    }
  }

  signUp() {
    if (this.firstName === 'admin' && this.lastName === 'admin' && this.email === 'admin@example.com' && this.password === 'admin') {
      this.authService.signup();
      // Redirect to dashboard if user input is valid
    } else {
      // If user input does not match, display an error or handle as needed
      console.log('Invalid credentials');
    }
  }

  login() {
    this.authService.loginMethod();
    }
}
