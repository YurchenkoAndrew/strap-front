import {Common} from './common';

export class TopCarousel extends Common {
  title: string;
  description: string;
  image: string;
  price: string;

  constructor(id: number, sort: number, title: string, description: string, image: string, price: string) {
    super(id, sort);
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
