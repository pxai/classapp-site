import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ClassApp} from '../../models/ClassApp';
import { LearnDetailPage } from './detail/learn-detail';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  currentItems: ClassApp[];
  constructor(public navCtrl: NavController) {
  this.currentItems = [
                        {"_id": "1", "name": "Learn ClassApp","description":"First course to understand ClassApp","note":"Check this out","image": ""},
    {"_id": "2", "name": "Teaching with ClassApp","description":"Become a ClassApp teacher","note":"Check this out if you are a teacher","image": ""}
  ];
  }

  addItem() {
    console.log('Item deleted...');
  }
  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    console.log('Item deleted...');
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: ClassApp) {
    this.navCtrl.push(LearnDetailPage, {
      item: item
    });
  }
}
