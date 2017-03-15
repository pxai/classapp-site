import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ClassApp} from '../../models/ClassApp';
import { LearnDetailPage } from './detail/learn-detail';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  classApps: ClassApp[];
  constructor(public navCtrl: NavController) {
  this.classApps = [
    {"_id": "1", "name": "Learn ClassApp!","description":"First course to understand ClassApp","note":"Check this out","image": "image1", "tags":["ClassApp","basic"],
                        "tips":[  {  "_id" : "11",
                                    "title": "title1",
                                    "content": "content1",
                                    "url": "string",
                                    "type": "string"},
                                    {  "_id" : "12",
                                      "title": "title2",
                                      "content": "content2",
                                      "url": "/images/screenshot.png",
                                      "type": "string"},
                                  {  "_id" : "13",
                                    "title": "title3",
                                    "content": "content3",
                                    "url": "string",
                                    "type": "string"},
                                ]},
    {"_id": "2", "name": "Teaching with ClassApp","description":"Become a ClassApp teacher","note":"Check this out if you are a teacher","image": "image2","tags":["ClassApp","basic"],
      "tips":[]}
  ];
  }

  addClassApp(classApp: ClassApp) {
    this.classApps.push(classApp);
  }

  /**
   * Delete an item from the list of items.
   */
  deleteClassApp(classApp: ClassApp) {
    for (let i = 0;i < this.classApps.length; i++) {
      if (this.classApps[i]._id === classApp._id) {
        this.classApps = this.classApps.slice(i,1);
        break;
      }
    }
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(classApp: ClassApp) {
    this.navCtrl.push(LearnDetailPage, {
      classApp: classApp
    });
  }
}
