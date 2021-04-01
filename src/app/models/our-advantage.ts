import {Common} from './common';

export class OurAdvantage extends Common {
  image: string;
  name: string;
  description: string;

  constructor(id: number, sort: number, image: string, name: string, description: string) {
    super(id, sort);
    this.image = image;
    this.name = name;
    this.description = description;
  }
}
