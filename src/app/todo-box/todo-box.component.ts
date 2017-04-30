import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css']
})
export class TodoBoxComponent implements OnInit {

  isLoggedin: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  //Authentication Functions
  userLogin() {
    this.authService.loginWithGoogle().then( (data) => {
      this.isLoggedin = true;
    });
  }
  userLogout() {
    this.authService.logout().then( (data) => {
      this.isLoggedin = false;
    });
  }

}
