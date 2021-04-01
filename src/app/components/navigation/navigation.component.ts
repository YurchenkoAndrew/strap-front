import {Component, OnInit} from '@angular/core';
import {Setting} from '../../models/setting';
import {SettingsService} from '../../data/services/settings.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  setting!: Setting;
  baseUrl = environment.baseUrl;

  constructor(
    private service: SettingsService
  ) { }

  ngOnInit(): void {
    this.initSetting();
  }

  initSetting(): void {
    this.service.get(1).subscribe(response => {
      this.setting = response;
    });
  }

}
