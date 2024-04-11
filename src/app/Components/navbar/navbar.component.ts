import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProfilesComponent } from '../Profiles/Profiles.component';
import { ProfilesService } from '../Profiles/Profiles.service';
import { Profile } from '../Profiles/Profile';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogRef } from '@angular/cdk/dialog';
import { SignoutComponent } from '../signout/signout.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-SideNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ProfilesComponent,
    MatDialogModule,
  ]
})
export class NavbarComponent implements OnInit {

  sideBarContent: string[] = [];
  email: string | undefined;
  profile: Profile = new Profile();
  userProfile: string[] = [];
  darkMode: boolean = false;
  colourMode: string = 'Dark Mode';
  searchContent: string = '';
  showCancelIcon: boolean = false;

  
  constructor(private _formBuilder: FormBuilder,
    private profileService: ProfilesService,
    private router: Router,
    private dialog: MatDialog
  ) { }



  ngOnInit() {
    this.router.navigateByUrl('/Dashboard')
    this.sideBarContent = ['Dashboard', 'Administration', 'Grounds', 'Support'];
    this.userProfile = ['Profile', 'MyBooking', 'Setting', 'Dark Mode', 'Signout']
  }

  isDropdownOpen: boolean = false;

  toggleDropdown(event: Event): void {
    // event.stopPropagation(); // Prevents the click event from propagating to the document
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.colourMode === 'Light Mode') {
      this.colourMode = 'Dark Mode';
    } else {
      this.colourMode = 'Light Mode';
    }

  }

  signout() {
    this.dialog.open(SignoutComponent)
  }

  resetInput() {
    this.searchContent = '';
    this.showCancelIcon = false;
  }
  toggleCancelIcon() {
    this.showCancelIcon = this.searchContent.length > 0;
  }
}
