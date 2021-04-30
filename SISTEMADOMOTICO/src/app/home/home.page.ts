import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService} from '../services/auth.services';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  form: FormGroup;   
  public errorlogin: boolean = false;
  constructor(private formBuilder: FormBuilder,public authService: AuthService,private router: Router,public alertController: AlertController) {

    this.form = formBuilder.group({
      userName: [0, Validators.compose([Validators.required])],
      password: [0, Validators.compose([Validators.required])],
    });
  }
  login(){
    let user = this.form.value.userName;
    let contra = this.form.value.password;
    
    this.authService.login(user,contra).subscribe((account) => {
      // console.log(account)
      if(account == true){
        this.router.navigate(['/inicio']);

      }
      else{
        this.presentAlert();
      }
       
      }, error => {
        this.errorlogin = true;
        console.table(error);        
      }
    );
    // console.log("usuario", user,"contra",contra )
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario o contraseña incorrecto.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
