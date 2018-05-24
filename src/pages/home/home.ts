import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fb_login_status = false;
  fb_data_array: any;
  constructor(public navCtrl: NavController, public firebaseAuth: AngularFireAuth) { }

  fb_login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res => {
        this.fb_login_status = true;
        this.fb_data_array = res;
        console.log(res);
      }
    )
  }

  fb_logout() {

  }

}
