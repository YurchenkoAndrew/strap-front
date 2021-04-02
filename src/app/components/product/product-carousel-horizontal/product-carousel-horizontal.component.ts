import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {environment} from '../../../../environments/environment';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel-horizontal.component.html',
  styleUrls: ['./product-carousel-horizontal.component.scss']
})
export class ProductCarouselHorizontalComponent implements OnInit {

  @Input() product!: Product;
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

  activeSlides!: SlidesOutputData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
