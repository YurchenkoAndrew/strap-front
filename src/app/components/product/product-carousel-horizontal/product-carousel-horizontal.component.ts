import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../../models/product';
import {environment} from '../../../../environments/environment';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel-horizontal.component.html',
  styleUrls: ['./product-carousel-horizontal.component.scss']
})
export class ProductCarouselHorizontalComponent implements OnInit, OnChanges {

  @Input() product!: Product;
  baseUrl = environment.baseUrl;
  @Input() slideEvent!: string;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.slideEvent);
  }
}
