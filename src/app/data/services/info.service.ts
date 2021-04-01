import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Info} from '../../models/info';
import {InfoDao} from '../interfaces/info-dao';

export const INFO_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class InfoService extends CommonService<Info> implements InfoDao{

  constructor(@Inject(INFO_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
