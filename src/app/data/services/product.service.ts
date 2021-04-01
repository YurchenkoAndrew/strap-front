import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Product} from '../../models/product';
import {ProductDao} from '../interfaces/product-dao';

export const PRODUCT_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ProductService extends CommonService<Product> implements ProductDao {

  constructor(@Inject(PRODUCT_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
