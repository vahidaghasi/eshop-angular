import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterDto} from "../../dtos/Account/register.dto";
import {AccountService} from "../../services/account.service";

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
        mobilePhone: '',
    };

    constructor(private accountService: AccountService) {
    }

    onRegister() {
        this.accountService.register(this.model);
    }
}
