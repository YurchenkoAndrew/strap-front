import {Common} from './common';

export class Setting extends Common {
  constructor(id: number, sort: number, logo: string, name: string, address: string, phone: string, whatsapp?: string, instagram?: string) {
    super(id, sort);
    this.logo = logo;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.whatsapp = whatsapp;
    this.instagram = instagram;
  }

  logo: string;
  name: string;
  address: string;
  phone: string;
  whatsapp?: string;
  instagram?: string;
}
