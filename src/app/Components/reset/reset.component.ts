import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {
  resetform! : FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
    this.resetform=this.formBuilder.group(
       {
        password:['',[Validators.required]],
        cpassword:['',[Validators.required]]
      }
    )
    }
    ResetSubmit(){
      let Data={
        password:this.resetform.value.password,
        cpassword:this.resetform.value.cpassword
      }
      this.userService.LogIn(Data).subscribe((res:any)=>{
        console.log(res.message);
      });
    }
}
