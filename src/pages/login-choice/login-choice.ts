import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the LoginChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-choice',
  templateUrl: 'login-choice.html',
})
export class LoginChoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginChoicePage');
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
