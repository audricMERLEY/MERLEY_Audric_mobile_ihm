import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user-service";
import {ModalController, NavController} from "ionic-angular";
import {DisplayUserPage} from "../../pages/display-user/display-user";

import {ModifyUserPage} from "../../pages/modify-user/modify-user";

/**
 * Generated class for the UserDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsComponent {
  @Input()
  first_name : string;
  @Input()
  last_name : string;
  @Input()
  email : string;
  @Input()
  indice : number;
  @Input()
  avatar : string;
  constructor(private userService : UserService,public navCtrl : NavController,public modalCtrl : ModalController) {

  }

  removeUser(){
    this.userService.removeUser(this.indice,this.first_name,this.last_name);
  }
  getDetails(){
    this.navCtrl.push(DisplayUserPage, {"user":{"first_name":this.first_name,"last_name":this.last_name,"id":this.indice,"email":this.email,"avatar":this.avatar}});
  }
  modify(){
    let modl = this.modalCtrl.create(ModifyUserPage,{"user":{"first_name":this.first_name,"last_name":this.last_name,"id":this.indice,"email":this.email}});
    modl.present();
  }

}
