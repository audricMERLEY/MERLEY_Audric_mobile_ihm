import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Utils} from "../../services/utils";
import {UserService} from "../../services/user-service";

/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  constructor(private userService: UserService, public utils: Utils, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }

  onSubmit(form: NgForm) {
    this.userService.createUser(form.value['name'], form.value['job']).subscribe(
      (data:any) => {
        this.utils.showToastValidate("User created with indice "+data.id, 3000);
        this.navCtrl.pop();
      },
      error => {
        this.utils.showToastError("User couldn't be created | " + error.error.error, 3000);
      }
    )
  }

}
