import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../data/services/product.service';
import {environment} from '../../../environments/environment';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Setting} from '../../models/setting';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() setting!: Setting;
  products!: Product[];
  baseUrl = environment.baseUrl;

  bFoolCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(): void {
    this.service.getAll().subscribe(response => {
      this.products = response;
    });
  }
}
