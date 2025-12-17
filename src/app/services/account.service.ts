import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../dtos/Account/login.dto";
import {RegisterDto} from "../dtos/Account/register.dto";

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(model:LoginDto) {

  }
  register(model:RegisterDto) {

  }
}
