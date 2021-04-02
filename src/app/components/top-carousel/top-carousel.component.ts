import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {TopCarouselService} from '../../data/services/top-carousel.service';
import {TopCarousel} from '../../models/top-carousel';
import {environment} from '../../../environments/environment';
import {Setting} from '../../models/setting';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit {

  @Input() setting!: Setting;

  topCarouselOptions: OwlOptions = {
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

  dataSlides!: TopCarousel[];
  basePath = environment.baseUrl;

  constructor(
    private service: TopCarouselService
  ) {
  }

  ngOnInit(): void {
    this.initCarouselData();
  }

  initCarouselData(): void {
    this.service.getAll().subscribe(response => {
      this.dataSlides = response;
    });
  }

}
