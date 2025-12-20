import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterDto} from "../../dtos/Account/register.dto";
import {AccountService} from "../../services/account.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-component',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
    model: RegisterDto = {
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        mobile: '',
    };

    constructor(
        private accountService: AccountService,
        private toster: ToastrService,
        private router: Router) {
    }

    onRegister() {
        this.accountService.register(this.model).subscribe((res)=>
        {
            console.log(res.isSucces);
            console.log(res);
            if(res.isSucces) {
             this.toster.success(res.message);
            setTimeout(()=>{
                this.router.navigate(['/login']);
            },2000)
            }
           else if(res.isSucces){
               this.toster.error(res.message);
            }
        });
    }
}
