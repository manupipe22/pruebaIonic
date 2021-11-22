import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  valueForm = new FormGroup({
    email: this.fb.control(localStorage.getItem('email')??'',[Validators.email,Validators.required]),
    pass: this.fb.control(localStorage.getItem('pass')?atob(localStorage.getItem('pass')):'',[Validators.required,Validators.minLength(5)]),
    rm:this.fb.control(localStorage.getItem('rm')=='true'?true:false)
  });
  data:{};

  constructor(private fb:FormBuilder,
    public loginService:LoginService,
    public alertController:AlertController) {
  }

  sendData=async()=>{
    try {
      let res= await this.loginService.logServe().toPromise();
      let log:boolean=false;
      for await (const iterator of res) {
        const valueEmail = iterator.email;
        const valuePass = iterator.pass;
        if(valueEmail===this.valueForm.get("email").value && valuePass=== this.valueForm.get("pass").value){
          console.log("BIENVENIDO, LOGRASTE ACCEDER");
          this.alertLogin()
          log=true;
          break;
        }
      }
      this.notLogin(log);

    } catch (error) {
      console.log("Ocurrio un inconveniente:",error);
      this.alertApiserverBad();
    }
  }

  validForm=()=>{
    if (this.valueForm.valid) {
      this.rememberData();
      this.sendData();
    }else{
      this.alertDataEmpty
    }
  }

  rememberData=()=>{
    if (this.valueForm.get('rm').value===true){
      this.data={'email':this.valueForm.get('email').value,'pass':this.valueForm.get('pass').value}
      localStorage.setItem('email',this.valueForm.get('email').value);
      localStorage.setItem('pass',btoa(this.valueForm.get('pass').value));
      localStorage.setItem('rm',this.valueForm.get('rm').value)
    }else{
      localStorage.removeItem('email');
      localStorage.removeItem('pass');
      localStorage.removeItem('rm');
    }
  }

  notLogin=(opt:boolean)=>{
    if(opt===false){
      this.alertLogBad();
    }
  }

  alertLogBad=async()=>{
    const alertElement = await this.alertController.create({
      header:'Ha habido un error',
      message:'Credenciales invalidas, por favor intente nuevamente',
      buttons:[{
        text:'Reintentar',
        handler:()=>{
          this.valueForm.get('email').setValue('');
          this.valueForm.get('pass').setValue('');
        }
      }]
    });
    await alertElement.present();
  }

  alertApiserverBad=async()=>{
    const alertElement = await this.alertController.create({
      header:'Ha habido un error',
      message:'El servidor de momento no esta disponible, por favor intente más tarde',
      buttons:[{
        text:'Reintentar',
        handler:()=>{
          this.valueForm.get('email').setValue('');
          this.valueForm.get('pass').setValue('');
        }
      }]
    });
    await alertElement.present();
  }

  alertDataEmpty=async()=>{
    const alertElement = await this.alertController.create({
      header:'Ha habido un error',
      message:'Por favor diligencie los campos',
      buttons:[{
        text:'Reintentar',
        handler:()=>{
          this.valueForm.get('email').setValue('');
          this.valueForm.get('pass').setValue('');
        }
      }]
    });
    await alertElement.present();
  }

  alertLogin=async()=>{
    const alertElement = await this.alertController.create({
      header:'Bienvenido',
      message:'Ha ingresado con exíto',
      buttons:[{
        text:'OK',
        role:'cancel'
      }]
    });
    await alertElement.present();
  }
}
