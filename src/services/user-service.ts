import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {AlertController, ToastController} from "ionic-angular";
import {Utils} from "./utils";
@Injectable()
export class UserService {
  constructor(public httpApi: HttpClient,public alertCtrl : AlertController,public utils : Utils) {
  }
  retrivesUsers(){
    return this.httpApi.get("https://reqres.in/api/users?delay=2").pipe(
      map((data : any)=> data)
    );
  }

  modifyUser(id:number,first_name:string,job:string){
    return this.httpApi.patch("https://reqres.in/api/users/"+id.toString(),{"name":first_name,"job":job}).pipe(
      map((data : any)=> data)
    );
  }
  private showRemoveAlert(first_name:string,last_name:string):Promise<boolean>{
    return new Promise((resolve, reject) =>{
      const alert = this.alertCtrl.create({
        title: 'Remove user!',
        subTitle: 'Do you really want to remove the user '+first_name+' '+last_name.toUpperCase()+" ?\nTo confirm, write Remove",
        inputs: [
          {
            name: 'confirmationMsg',
            placeholder: 'Remove'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              this.utils.showToastError("Cancel",400);
              resolve(false);
            }
          },
          {
            text: 'Remove',
            handler: data => {
              if(data.confirmationMsg ==="Remove"){
                resolve(true);
              }else{
                this.utils.showToastError("Not the good confirmation message, please retry by writing 'Remove'");
                return false;
              }
            }
          }
        ]
      }).present();
    });
  }

  removeUser(id:number,first_name:string,last_name:string){
    this.showRemoveAlert(first_name,last_name).then(
      (resolved)=>{
        if(resolved){
          this.httpApi.delete("https://reqres.in/api/users/"+id.toString()).subscribe(
            ()=>{
              this.utils.showToastValidate("User "+first_name+" "+last_name.toUpperCase()+" removed");
            },error => {
              this.utils.showToastError("Error while trying to remove user |"+error.error.error);
            });
        }
      }
    )
  }

  createUser(name:string,job:string){
    return this.httpApi.post("https://reqres.in/api/users",{"name":name,"job":job}).pipe(
      map((data : any)=> data)
    );
  }
}
