import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details';
import {IonicModule} from "ionic-angular/module";
@NgModule({
	declarations: [UserDetailsComponent],
  imports: [
    IonicModule
  ],
	exports: [UserDetailsComponent,
    ],
})
export class ComponentsModule {}
