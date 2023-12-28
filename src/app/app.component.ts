import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Library management system';
  [x: string]: any;
  // Define isLoggedIn property
  isLoggedIn: boolean = false;
  showAdmin = false;
  showBook = false;
  showBookList=false;
  showLibrarian = false;
  showLibrarianList=false;
  showStudent = false;
  showStudentList=false;
  showTransaction = false;
  showTransactionList=false;
  showAuthor = false;
  showAuthorList=false;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
    //  const user = this.tokenStorageService.getUser();
      //this.roles = user.roles;
     //this.role="admin";
     this.showAdmin=true;
      this.showLibrarian= true;
      this.showLibrarianList=true;
      this.showBook= true;
      this.showBookList=true;
      this.showStudentList=true;
      this.showTransaction=true;
      this.showTransactionList=true;
      this.showStudent=true;
      this.showAuthor=true;
      this.showAuthorList=true;
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    //  this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}


