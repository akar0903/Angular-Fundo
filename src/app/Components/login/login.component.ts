import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginform! : FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private route:Router){}
  ngOnInit(): void {
    this.loginform=this.formBuilder.group(
       {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
      }
    )
    }
    LoginSubmit(){
      this.submitted=true;
      if(this.loginform.valid){
        let Data={
          email:this.loginform.value.email,
          password:this.loginform.value.password
        }
        this.userService.LogIn(Data).subscribe((res:any)=>{
          console.log(res.message);
        });
        this.userService.LogIn(Data).subscribe((res:any)=>{
          console.log(res);
          localStorage.setItem("token",res.data);
          this.route.navigateByUrl("sidenav/regDemo");
        })}
      else{console.log("Invalid Input")};
    
  }}
