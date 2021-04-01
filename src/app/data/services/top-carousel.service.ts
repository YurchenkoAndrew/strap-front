import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from './common.service';
import {TopCarousel} from '../../models/top-carousel';
import {TopCarouselDao} from '../interfaces/top-carousel-dao';
import {HttpClient} from '@angular/common/http';

export const TOP_CAROUSEL_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TopCarouselService extends CommonService<TopCarousel> implements TopCarouselDao {

  constructor(@Inject(TOP_CAROUSEL_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
