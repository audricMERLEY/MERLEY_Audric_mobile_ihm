import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import { AlertController } from 'ionic-angular';
import {LoginService} from "../../services/login-service";
import {Utils} from "../../services/utils";
import {TabsPage} from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  cred : any;
  constructor(private loginService:LoginService,public utils:Utils, public navCtrl: NavController,public alertCtrl : AlertController) {
    this.cred = loginService.default_credentials;
  }

  ionViewDidLoad() {
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Email error',
      subTitle: "Your email isn't correct",
      buttons: ['OK']
    });
    alert.present();
  }

  onSubmit(form : NgForm){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (form.value['email'].match(validRegex)) {
      this.loginService.logIn(form.value['email'],form.value['password']).subscribe(
        (data : any)=>{
          this.loginService.auth = true;
          this.navCtrl.setRoot(TabsPage);
          this.utils.showToastValidate("Connected with token "+data.token);
        },
        error => {
          this.utils.showToastError("Incorrect credential couldn't connect, please retry",3000);
        }
      )
    }else{
      this.showAlert();
    }
  }
}
