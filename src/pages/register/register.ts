import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../services/login-service";
import {Utils} from "../../services/utils";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  cred : any;
  constructor(private loginService : LoginService, public utils : Utils, public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController) {
    this.cred = this.loginService.default_credentials;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
      this.loginService.register(form.value['email'],form.value['password']).subscribe(
        (data : any)=>{
          this.loginService.auth = true;
          this.navCtrl.setRoot(TabsPage);
          this.utils.showToastValidate("Registration success with token "+data.token,3000);
        },
        error => {
          this.utils.showToastError("Couldn't register | "+error.error.error,3000);
        }
      )
    }else{
      this.showAlert();
    }
  }

}
