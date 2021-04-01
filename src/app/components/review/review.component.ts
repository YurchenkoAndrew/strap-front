import {Component, OnInit} from '@angular/core';
import {Review} from '../../models/review';
import {ReviewService} from '../../data/services/review.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews!: Review[];
  bseUrl = environment.baseUrl;

  reviewsOptions: OwlOptions = {
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

  constructor(private service: ReviewService) {
  }

  ngOnInit(): void {
    this.initReviews();
  }

  initReviews(): void {
    this.service.getAll().subscribe(response => {
      this.reviews = response;
    });
  }

}
