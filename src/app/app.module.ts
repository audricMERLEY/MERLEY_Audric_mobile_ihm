import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ComponentsModule} from "../components/components.module";
import {UserListPageModule} from "../pages/user-list/user-list.module";
import {HttpClientModule} from "@angular/common/http";
import {CreateUserPageModule} from "../pages/create-user/create-user.module";
import {LoginChoicePageModule} from "../pages/login-choice/login-choice.module";
import {LoginService} from "../services/login-service";
import {Utils} from "../services/utils";
import {UserService} from "../services/user-service";
import {DisplayUserPageModule} from "../pages/display-user/display-user.module";
import {ModifyUserPageModule} from "../pages/modify-user/modify-user.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {LogOutPageModule} from "../pages/log-out/log-out.module";
import {LoginPageModule} from "../pages/login/login.module";

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    LoginChoicePageModule,
    LoginPageModule,
    RegisterPageModule,
    UserListPageModule,
    CreateUserPageModule,
    DisplayUserPageModule,
    ModifyUserPageModule,
    LogOutPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    UserService,
    Utils,
  ]
})
export class AppModule {}
