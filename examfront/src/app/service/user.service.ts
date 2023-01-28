import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient) { }


  addUser(user:User){
    return this.client.post("http://localhost:5555/user/", user);
  }
}
