import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from "../app.config";
import { HttpClient } from '@angular/common/http';
const CURRENT_ACCOUNT = "auth:account:current";


@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    public showLoader: boolean = false;
    constructor(
        private httpClient : HttpClient,
        @Inject(APP_CONFIG) private config: AppConfig, ) {
    }

    login(userName: string, password: string) { 
        return this.httpClient.get<Boolean> (`${this.config.apiEndpoint}/api/Usuario/${userName}/${password}`)
    }
}

