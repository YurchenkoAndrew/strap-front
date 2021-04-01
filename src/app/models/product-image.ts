import {Common} from './common';

export class ProductImage extends Common {
  // tslint:disable-next-line:variable-name
  constructor(id: number, sort: number, product_id: number, name: string, image_horizontal: string, image_vertical: string) {
    super(id, sort);
    this.product_id = product_id;
    this.name = name;
    this.image_horizontal = image_horizontal;
    this.image_vertical = image_vertical;
  }
  // tslint:disable-next-line:variable-name
  product_id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  image_horizontal: string;
  // tslint:disable-next-line:variable-name
  image_vertical: string;
}
