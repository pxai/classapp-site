import {Tip} from "./Tip";
/**
 * represents a ClassApp, everything is about this.
 */
export class ClassApp {
  _id : string;
  name: string;
  description: string;
  note: string;
  image: string;
  tags: string[];
  tips: Tip[];


  constructor() {
  }

}
