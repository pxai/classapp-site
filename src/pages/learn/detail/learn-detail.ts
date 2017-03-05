import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ClassApp} from "../../../models/ClassApp";


@Component({
  selector: 'page-item-detail',
  templateUrl: 'learn-detail.html'
})
export class LearnDetailPage {
  classApp: ClassApp;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.classApp = navParams.get('classApp'); // || items.defaultItem;
  }

}
