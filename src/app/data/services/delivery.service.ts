import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Delivery} from '../../models/delivery';
import {DeliveryDao} from '../interfaces/delivery-dao';

export const DELIVERY_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class DeliveryService extends CommonService<Delivery> implements DeliveryDao {

  constructor(@Inject(DELIVERY_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
