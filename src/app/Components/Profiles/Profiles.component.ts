import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './Profiles.service';
import { Profile } from './Profile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Profiles',
  templateUrl: './Profiles.component.html',
  styleUrls: ['./Profiles.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class ProfilesComponent implements OnInit {
  name: string | undefined;
  role: string | undefined;
  email: string | undefined;
  emailVerification: string | undefined;
  contact: string | undefined;
  mobileVerification: string | undefined;
  status: string | undefined;
  readOnly: boolean = true;
  profile: Profile = new Profile();
  enableSaveAndCancelButton: boolean = false;
  constructor(private profileService: ProfilesService) { this.profileService.profile.email = 'lorem@gmail.com' }
  ngOnInit(): void {
    this.name='john Doe';
    this.role = 'User';
    this.email = 'johndoe@gmail.com';
    this.emailVerification = 'Verified';
    this.contact = '+91 3453534445456';
    this.mobileVerification = 'Verified';
    this.status = 'Active';
  }
  selectedImage: any;
  isImageSelected: boolean = false;

  onEdit() {
    this.readOnly = false;
    this.enableSaveAndCancelButton = true;
  }
  onsave() {
    this.name=this.name;
    this.role = this.role;
    this.email = this.email;
    this.emailVerification = this.emailVerification;
    this.contact = this.contact;
    this.mobileVerification = this.mobileVerification;
    this.status = this.status;
    this.readOnly = true
  }
  onCancel() {
    this.readOnly = true;
  }

}
