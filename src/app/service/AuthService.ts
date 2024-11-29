import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendName, env } from '../enum';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }
    private backend: string = BackendName.Login;

    resetPassword(resetForm: any) {
        return this.http.post<any>(`${env.BaseUrl + this.backend}/resetpassword`, resetForm);
    }
}
