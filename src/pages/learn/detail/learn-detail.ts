import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'learn-detail.html'
})
export class LearnDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item'); // || items.defaultItem;
  }

}
