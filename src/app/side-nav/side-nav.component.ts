import { Component, OnInit } from '@angular/core';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { UserService } from '../services/user-service/user.service';
import { user } from '../interface/data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{

  settingIcon = faGear;
  logoutIcon = faRightFromBracket;
  userData: user | undefined;
  userSignIn: boolean = false;
  userRole: 'ADMIN' | 'USER' | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.checkUserRole();
    this.getSignInUser();
    // console.log(this.signIn);
    
  }

  getSignInUser() {
    const user = localStorage.getItem("user");

    if (user !== null) {
      const LocalUser = JSON.parse(user);
      const userId = LocalUser.id;

      this.userService.getUserById(userId).subscribe((result) => {
        if (result) {
          
          this.userData = result;
          this.userSignIn = true;
        }
        
      })
    }
  }

  signOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.userSignIn = false;
    this.router.navigate(['/auth/sign-in']);
  }


  checkUserRole() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem("user");

    if (user !== null) {
      const LocalUser = JSON.parse(user);
      const role = LocalUser.role;

      if (role === 'ADMIN' && token) {
        this.userRole = 'ADMIN';
  
      } else if (role === 'USER' && token) {
        this.userRole = 'USER';
  
      } else {
        this.userRole = undefined;
      }
    }
    
  }



}














  // isAuthenticated(): boolean {
  //   // Check if the "user" item exists in local storage
  //   return localStorage.getItem("user") !== null;
  // }