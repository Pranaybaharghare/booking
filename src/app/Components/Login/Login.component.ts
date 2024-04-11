import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../Signup/AuthService.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  standalone:true,
  imports:[FormsModule,FontAwesomeModule]
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  faCoffee = faCoffee;
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

  login() {
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      this.authService.loginCheck();
      // Redirect to dashboard if user input is valid
    } else {
      // If user input does not match, display an error or handle as needed
      console.log('Invalid credentials');
    }
  }
}
