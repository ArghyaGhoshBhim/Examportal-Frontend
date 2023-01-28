import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLogin=false;
  constructor(private loginService:LoginService, private router:Router) { 
  }

  ngOnInit(): void {
    // this.loginService.loginStatusSubject.asObservable().subscribe(
    //   data=>{
    //     this.isLogin=this.loginService.isLogin();
    //   }
    // )
    // console.log("this islogin22 ", this.isLogin, this.loginService.isLogin())
    // if(this.isLogin==false){
    //   localStorage.clear()
    // }
    this.loginService.loginStatusSubject.next(true);



  }

}
