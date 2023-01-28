import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Logindata } from '../models/Logindata.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // https://www.youtube.com/watch?v=8vv_-c5Y59o&list=PL0zysOflRCel5kT-AiGyy5oMabnlilkIS&index=18
  public loginStatusSubject=new Subject<boolean>();

  public loginStatus:boolean | undefined;

  constructor(private client:HttpClient) { }


  getCurrentUser(){
    return this.client.get<any>(`http://localhost:5555/current-user`);
  }

  generateToken(loginData:Logindata):Observable<any>{

    return this.client.post("http://localhost:5555/generate-token", loginData);
  }

  // save token in local storage
  saveToken(token:string){
    localStorage.setItem("token", token);
  }
  getToken(){
    return localStorage.getItem("token");
  }

  isLogin(){
    let token=localStorage.getItem("token");
    if(token==undefined||token==""||token==null){
      return false;
    }else{
      return true;
    }
  }

  //remove token from local storage
  logOut(){
  localStorage.clear();
    // this.loginStatus=false;
  }

  setUser(user:Logindata){
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUserRole(){
    let userStr=localStorage.getItem("user");
    let user;
    if(userStr!=null){
      user=JSON.parse(userStr);
    }
    return user.authorities[0].authority;
    

  }

  getUser(){
    let userStr=localStorage.getItem("user");
    let user;
    if(userStr!=null){
      user=JSON.parse(userStr);
      console.log(user);
      return user;
    }
    this.logOut();
    return null;
  }



}
