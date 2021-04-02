import {Common} from './common';

export class Delivery extends Common {
  image: string;
  text: string;

  constructor(id: number, sort: number, image: string, text: string) {
    super(id, sort);
    this.image = image;
    this.text = text;
  }
}
