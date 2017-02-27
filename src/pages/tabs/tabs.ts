import {Component, Injector} from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LearnPage } from '../learn/learn';
import { TeachPage } from '../teach/teach';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = LearnPage;
  tab5Root: any = TeachPage;

  constructor(public navCtrl: NavController) {

  }

}
