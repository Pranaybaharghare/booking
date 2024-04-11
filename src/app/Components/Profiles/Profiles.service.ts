import { Injectable } from "@angular/core";
import { Profile } from "./Profile";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  email: string = '';
  profile: Profile = new Profile();
  constructor() { }

}