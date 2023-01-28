import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  constructor(private builder:FormBuilder, private userService:UserService, private snack:MatSnackBar) {
    this.form=builder.group(
      {
        userName:["", Validators.required],
        password:["", Validators.required],
        firstName:["", Validators.required],
        lastName:["",Validators.required],
        email:["", Validators.required, Validators.email],
        phone:["", Validators.required]
      }
    )
   }

  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.form.value)
    let user=new User();
    user.userName=this.form.value["userName"];
    user.password=this.form.value["password"];
    user.firstName=this.form.value["firstName"];
    user.lastName=this.form.value["lastName"];
    user.email=this.form.value["email"];
    user.phone=this.form.value["phone"];

    if(this.validationOfUser(user)){
      this.userService.addUser(user).subscribe(
        data=>{
          console.log(data);
          Swal.fire(
            'Good job!',
            'You Registered successfully!',
            'success'
          )
        },
        error=>{
          console.log("error ",error);
        }
      )
    }
    
  }





  validationOfUser(user:User):boolean{
    if(user.userName==null || user.userName==""){
      this.snack.open("Username is requried !!", "",{
        duration:3000
       
    })
    return false;
  }

  if(user.password==null || user.password==""){
    this.snack.open("Password is requried !!", "",{
      duration:3000
     
  })
  return false;
}


  if(user.firstName==null || user.firstName==""){
    this.snack.open("First name is requried !!", "",{
      duration:3000
     
  })
  return false;
}
if(user.lastName==null || user.lastName==""){
  this.snack.open("Last name is requried !!", "",{
    duration:3000
   
})
return false;
}
if(user.email==null || user.email==""){
  this.snack.open("Email is requried !!", "",{
    duration:3000
   
})
return false;
}
if(user.phone==null || user.phone==""){
  this.snack.open("Phone is requried !!", "",{
    duration:3000
   
})
return false;
}

return true;
}






  clearForm(){
    this.form=this.builder.group(
      {
        userName:["", Validators.required],
        password:["", Validators.required],
        firstName:["", Validators.required],
        lastName:["",Validators.required],
        email:["", Validators.required, Validators.email],
        phone:["", Validators.required]
      }
    )
  }





}
