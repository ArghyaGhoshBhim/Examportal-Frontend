import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Logindata } from 'src/app/models/Logindata.model';
import { User } from 'src/app/models/User.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup;
  constructor(private builder:FormBuilder, private snack:MatSnackBar, private loginService:LoginService, private router:Router) {
    this.form=builder.group({
      username:["", Validators.required],
      password:["", Validators.required]
    }
    )

   }

  ngOnInit(): void {
  }

  formSubmit(){
    // console.log(this.form.value["username"])
    let username=this.form.value["username"];
    let password=this.form.value["password"];
    console.log(this.validation(username, password));
   if(this.validation(username, password)){
    let loginData=new Logindata();
    loginData.password=password;
    loginData.username=username;
    this.loginService.generateToken(loginData).subscribe(
      data=>{
        console.log("success");
        console.log(data);
        this.loginService.saveToken(data.token);
        this.loginService.getCurrentUser().subscribe(
          data=>{
            this.loginService.setUser(data);
            console.log(this.loginService.getUserRole());
           this.redirectDashboard(this.loginService.getUserRole());
           console.log("islogin ", this.loginService.isLogin())
           
          }
        )



      },
      error=>{
        console.log("error !!");
        console.log(error);
        this.clearForm();
      }
    )
   }

  }



redirectDashboard(role:string){
  console.log("this is redirectDasboars");
  if(role=="ADMIN"){
    console.log("redirectDasboars admin");
    this.router.navigate(["/admin"]);
  }
  else if(role=="NORMAL"){
    console.log("redirectDasboars normal");
    this.router.navigate(["/normal/load-quiz/0"]);
  }else{
     this.loginService.logOut();
  }
  this.loginService.loginStatusSubject.next(true);
}

  validation(username:string,password:string):boolean{

    if(username.trim()=="" || username==null){
      this.snack.open("Username is requried !!", "",{
        duration:3000
      })
      return false;
    }


    if(password.trim()=="" || password==null){
      this.snack.open("password is requried !!", "",{
        duration:3000
      })
      return false;
    }
    return true;

  }


  

clearForm(){
  this.form=this.builder.group({
    username:["", Validators.required],
    password:["", Validators.required]
  })
}



}
