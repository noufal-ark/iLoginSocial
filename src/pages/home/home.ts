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
  gp_login_status = false;
  gh_login_status = false;
  fb_data_array: any;
  gp_data_array: any;
  gh_data_array: any;
  constructor(public navCtrl: NavController, public firebaseAuth: AngularFireAuth) {
    firebase.auth().getRedirectResult().then(res => {
      this.gh_login_status = true;
      this.gh_data_array = res;
      console.log(res);
    });
  }

  fb_login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res => {
        this.fb_login_status = true;
        this.fb_data_array = res;
        console.log(res);
      }
    )
  }

  gp_login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        this.gp_login_status = true;
        this.gp_data_array = res;
        console.log(res);
      }
    )
  }

  gh_login() {
    this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider()).then(
      // res => {
      //   this.gh_login_status = true;
      //   this.gh_data_array = res;
      //   console.log(res);
      // }
    )
  }

  fb_logout() {

  }

}
