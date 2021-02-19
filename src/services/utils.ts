import {ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";
@Injectable()
export class Utils{
  constructor(public toastCtrl:ToastController) {
  }

  showToastError(message:string,duration:number=1500){
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: "top",
      cssClass:"toast-error"
    });
    toast.present();
  }

  showToastValidate(message:string,duration:number=1500){
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: "top",
      cssClass:"toast-validate"
    });
    toast.present();
  }

}
