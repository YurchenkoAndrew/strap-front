import {Common} from './common';

export class Info extends Common {
  info: string;

  constructor(id: number, sort: number, info: string) {
    super(id, sort);
    this.info = info;
  }
}
