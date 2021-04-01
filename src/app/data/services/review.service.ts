import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Review} from '../../models/review';
import {ReviewDao} from '../interfaces/review-dao';

export const REVIEW_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ReviewService extends CommonService<Review> implements ReviewDao {

  constructor(@Inject(REVIEW_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
