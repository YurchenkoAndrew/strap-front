import {Common} from './common';

export class Review extends Common {
  name: string;
  image: string;
  description: string;
  instagram: string;

  constructor(id: number, sort: number, name: string, image: string, description: string, instagram: string) {
    super(id, sort);
    this.name = name;
    this.image = image;
    this.description = description;
    this.instagram = instagram;
  }
}
