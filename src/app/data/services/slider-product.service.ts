import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {SliderProduct} from '../../models/slider-product';
import {SliderProductDao} from '../interfaces/slider-product-dao';

export const SLIDER_PRODUCT_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SliderProductService extends CommonService<SliderProduct> implements SliderProductDao {

  constructor(@Inject(SLIDER_PRODUCT_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
