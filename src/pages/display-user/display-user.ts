import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {UserService} from "../../services/user-service";
import {ModifyUserPage} from "../modify-user/modify-user";

/**
 * Generated class for the DisplayUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-user',
  templateUrl: 'display-user.html',
})
export class DisplayUserPage {
  user : any;
  constructor(private userService : UserService, public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayUserPage');
  }

  removeUser(){
    this.userService.removeUser(this.user.id,this.user.first_name,this.user.last_name);
  }

  modify(){
    let modl = this.modalCtrl.create(ModifyUserPage,{"user":this.user});
    modl.present();
  }

}
