import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG, AppConfig } from "../app.config";
import { AuthService } from "./auth.services";

@Injectable({
    providedIn: 'root'
  })
export class catalog {
    constructor(public http: HttpClient, public auth: AuthService,
        @Inject(APP_CONFIG) private config: AppConfig,
    ) {
    }
    
    getDatosDispositivo(id:number) {
        return this.http.get<dispositivo>(`${this.config.apiEndpoint}/api/Usuario/${id}` );
    }

    cambioestadofoco(id:number,dimmer:number){
        return this.http.post(`${this.config.apiEndpoint}/api/Usuario/${id}/${dimmer}`,'')
    }
    cambioestadoenchufe(id:number){
        return this.http.post(`${this.config.apiEndpoint}/api/Usuario/${id}`,'')
    }

    // changeenchufe(id:number) {    
    //     let head: HttpHeaders = new HttpHeaders();
    //     head = head.append('Content-Type', 'application/json');
    //     return this.http.post<string>(`${this.config.apiEndpoint}/api/Usuario/`,id, { headers: head }  );
    // } 
}

export interface dispositivo{
    idDispositivo: number,
    estadoFoco: number,
    estadoEnchufe: number,
    temperatura: number,
    humedad: number,
    usuario: number,
    usuarioNavigation: {
      idUsuario:number,
      nombre:string,
      contraseña:string,
      dispositivos: []
    }   
}