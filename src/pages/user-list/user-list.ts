import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserService} from "../../services/user-service";
import {CreateUserPage} from "../create-user/create-user";
/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage implements OnInit{
  userList : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService : UserService, public toasCtrl : ToastController) {

  }
  ngOnInit(){
    this.refreshToaster();
  }

  private refreshToaster(){
    let refreshToast = this.toasCtrl.create({
      message: 'Refreshing....',
      position: 'top',
      cssClass: 'toast-validate'
    });
    refreshToast.present();
    this.userService.retrivesUsers().subscribe(
      users => {
        this.userList = [];
        users.data.forEach((user) =>{
          this.userList.push({'id' : user.id, 'first_name':user.first_name,'last_name':user.last_name,'email':user.email,'avatar':user.avatar});
        });
        refreshToast.dismiss();
      }
    );
  }

  createUser(){
    this.navCtrl.push(CreateUserPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  doRefresh(refresher){
    this.userService.retrivesUsers().subscribe(
      users => {
        this.userList = [];
        users.data.forEach((user) =>{
          this.userList.push({'id' : user.id, 'first_name':user.first_name,'last_name':user.last_name,'email':user.email,'avatar':user.avatar});
        }
        );
        refresher.complete()
      }
    )
  }

}
