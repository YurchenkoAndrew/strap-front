import {Component, OnInit} from '@angular/core';
import {SliderProductService} from '../../data/services/slider-product.service';
import {SliderProduct} from '../../models/slider-product';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-slider-products',
  templateUrl: './slider-products.component.html',
  styleUrls: ['./slider-products.component.scss']
})
export class SliderProductsComponent implements OnInit {

  slides!: SliderProduct[];
  basePath = environment.baseUrl;

  sliderProductsOptions: OwlOptions = {
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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoWidth: true,
    autoHeight: true,
  };
  constructor(private service: SliderProductService) {
  }

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider(): void {
    this.service.getAll().subscribe(response => {
      this.slides = response;
    });
  }

}
