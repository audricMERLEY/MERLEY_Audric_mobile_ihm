import { Component } from '@angular/core';

import {UserListPage} from "../user-list/user-list";
import {LogOutPage} from "../log-out/log-out";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserListPage;
  tab2Root = LogOutPage;
  constructor() {

  }
}
