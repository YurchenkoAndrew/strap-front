import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from './common.service';
import {Settings} from '../../models/settings';
import {HttpClient} from '@angular/common/http';
import {SettingsDao} from '../interfaces/settings-dao';

export const SETTINGS_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class SettingsService extends CommonService<Settings> implements SettingsDao {

  constructor(@Inject(SETTINGS_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
