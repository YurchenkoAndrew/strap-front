import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../data/services/product.service';
import {environment} from '../../../environments/environment';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products!: Product[];
  baseUrl = environment.baseUrl;
  slideEvent!: string;

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

  setSlideEvent(event: string): void {
    this.slideEvent = event;
  }

}
