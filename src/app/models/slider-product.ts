import {Common} from './common';

export class SliderProduct extends Common {
  name: string;
  image: string;

  constructor(id: number, sort: number, name: string, image: string) {
    super(id, sort);
    this.name = name;
    this.image = image;
  }
}
