import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin=false;
  userName=null;


  constructor(public loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginService.loginStatusSubject.asObservable().subscribe(
      data=>{
        this.userName=this.loginService.getUser()["userName"];
        // this.isLogin=this.loginService.isLogin();
        console.log("data in nav ", data);
        this.isLogin=data
      }
    )

    // console.log("this islogin ", this.isLogin)
  }

  logOut(){
    this.loginService.logOut();
    window.location.reload();
  }

  
}
