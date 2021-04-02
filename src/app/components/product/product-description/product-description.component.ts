import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {Setting} from '../../../models/setting';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() product!: Product;
  @Input() setting!: Setting;

  constructor() {
  }

  ngOnInit(): void {
  }
}
