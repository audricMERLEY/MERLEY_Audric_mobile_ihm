import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginService} from "../../services/login-service";
import {LoginChoicePage} from "../login-choice/login-choice";
import {MyApp} from "../../app/app.component";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LogOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html',
})
export class LogOutPage {

  constructor(public app: App,public loginService : LoginService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogOutPage');
  }

  logOut(){
    this.loginService.auth = false;
    this.app.getRootNav().setRoot(LoginChoicePage);
  }

}
