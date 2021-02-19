import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user-service";
import {Utils} from "../../services/utils";

/**
 * Generated class for the ModifyUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-user',
  templateUrl: 'modify-user.html',
})
export class ModifyUserPage {
  user : any;
  constructor(private userService : UserService,public utils : Utils, public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyUserPage');
  }
  closeModal(){
    this.navCtrl.pop();
  }

  onSubmit(form:NgForm) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (form.value['email'].match(validRegex)) {
      this.userService.modifyUser(this.user.id, form.value['firstname'], form.value['job']).subscribe(
        (data: any) => {
          this.utils.showToastValidate("User " +data.name + " with job "+data.job+" modified at " + data.updatedAt,5000);
          this.closeModal();
        }, error => {
          this.utils.showToastError("Error while trying to modify user |" + error.error.error);
        });
    }
  }

}
