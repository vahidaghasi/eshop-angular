import { Component } from '@angular/core';
import {RegisterResponceDto} from "../../dtos/Account/register.dto";
import {LoginDto} from "../../dtos/Account/login.dto";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  model:LoginDto= {
    email: '',
    password: ''
  }
  constructor(private accountService: AccountService,
              private router: Router,
              private toastr: ToastrService,) {
  }
onLogin(){
    this.accountService.login(this.model).subscribe(
        response=>{
          if(response.isSucces)
          {
            this.toastr.success(response.message,'موفق');
            setTimeout(()=>{
              this.router.navigate(['/']);
            },2000)

          }
          else
          {
            this.toastr.error(response.message,'خطا');

          }
        }
    )
}
}
