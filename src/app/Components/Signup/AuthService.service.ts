// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isLoggedIn: boolean = false;
    signUp: boolean = true;
    login: boolean = false;
    constructor() { }

    loginMethod() {
        this.login = true;
        this.signUp = false;
    }
    signup() {
        // Logic for signup
        this.signUp = false;
        this.isLoggedIn = true;
    }

    loginCheck() {
        this.signUp = false;
        this.login = false;
        this.isLoggedIn = true
    }

    logout() {
        // Logic for logout
        this.isLoggedIn = false;
    }
}
