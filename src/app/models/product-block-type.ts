import {Common} from './common';

export class ProductBlockType extends Common {
  name: string;

  constructor(id: number, sort: number, name: string) {
    super(id, sort);
    this.name = name;
  }
}
