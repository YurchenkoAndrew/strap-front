import {Common} from './common';
import {ProductImage} from './product-image';

export class Product extends Common {
  // tslint:disable-next-line:variable-name
  block_type_id: number;
  name: string;
  description: string;
  price: string;

  // tslint:disable-next-line:variable-name
  constructor(id: number, sort: number, block_type_id: number, name: string, description: string, price: string, images: ProductImage[]) {
    super(id, sort);
    this.block_type_id = block_type_id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = images;
  }

  images: ProductImage[];

}
