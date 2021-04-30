import { Component, OnInit } from '@angular/core';
import {catalog,dispositivo} from '../services/catalog.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  Dispositivo = {} as dispositivo;
  dimmer: any = {
    id:1,
    value:0,
    min: 0,
    max:255,
    step:1,
    answer:'answer',
    precisionMin:0,
    precisionMax:255
  }
  constructor(private catalog : catalog,) { }

  ngOnInit() {
    this.cargardatos();
    
  
  }

  cargardatos(){
    this.catalog.getDatosDispositivo(1).subscribe(dispositivo =>{
      console.log(dispositivo);
      this.Dispositivo = dispositivo;
      
      
    });
  }
  estadocambiofoco(){
    this.catalog.cambioestadofoco(1,this.dimmer.value).subscribe(d=>{
      console.log(d);
      this.cargardatos();
    });
    
    
  }
  Encenderapagarfoco(){
    if( this.Dispositivo.estadoFoco > 0){
      this.dimmer.value = 0;
      
    }
    else{
      this.dimmer.value = 255;
      
   
   
    }
    this.estadocambiofoco();
    
    
  }
  
  estadocambioenchufe(){
    this.catalog.cambioestadoenchufe(1).subscribe(d=>{
      console.log(d);
      this.cargardatos();
    });
  }
  

}
