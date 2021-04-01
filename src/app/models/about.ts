import {Common} from './common';

export class About extends Common {
  constructor(
    id: number,
    sort: number,
    text_one: string,
    image_one: string,
    text_two: string,
    image_two: string,
    text_third: string,
    image_third: string,
    image_four: string
  ) {
    super(id, sort);
    this.text_one = text_one;
    this.image_one = image_one;
    this.text_two = text_two;
    this.image_two = image_two;
    this.text_third = text_third;
    this.image_third = image_third;
    this.image_four = image_four;
  }

  text_one: string;
  image_one: string;
  text_two: string;
  image_two: string;
  text_third: string;
  image_third: string;
  image_four: string;
}
