import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../dtos/Account/login.dto";
import {RegisterDto, RegisterResponceDto} from "../dtos/Account/register.dto";
import {ApiAddress} from "../utillties/api-address";
import {ApiResponse} from "../dtos/Common/apiResponse.dto";

@Injectable({
    providedIn: 'root',
})
export class AccountService {

    constructor(private http: HttpClient) {
    }

    login(model: LoginDto) {
        return this.http.post<ApiResponse<string>>(ApiAddress.login, model)
    }

    register(model: RegisterDto) {
        return this.http.post<ApiResponse<RegisterResponceDto>>(ApiAddress.register, model)
    }
}
