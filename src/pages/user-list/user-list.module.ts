import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list';
import {UserService} from "../../services/user-service";
import {UserDetailsComponent} from "../../components/user-details/user-details";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    UserListPage
  ],
  imports: [
    IonicPageModule.forChild(UserListPage),
    ComponentsModule,

  ]
})
export class UserListPageModule {}
