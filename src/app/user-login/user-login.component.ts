import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn: boolean = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  jwt: string = '';
  userName: string = '';

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      alert(this.tokenStorage.getToken());
      console.log(this.tokenStorage.getToken());
      this.isLoggedIn = true;
    //  this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        this.reloadPage();
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        console.log(err);

        if (err.error.message === 'User email not found.') {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        } else {
          this.isLoggedIn = true; //login successfull
          this.isLoginFailed = false;

        //  this.userName = 'monalisa'
          this.jwt = err.error.text;  //storing token in jwt variable
          this.tokenStorage.saveToken(this.jwt);
          console.log('Here is the JWT:', this.jwt); //printing token in the console
          this.reloadPage();
        }
      }
    );
  }

  reloadPage() {
    window.location.reload();
   
  }
}